"""Собирает сайт GT Dental в один файл dist/index.html (CSS, JS и SVG встроены)."""
import base64, io, os, re, sys

src = sys.argv[1]
out_dir = os.path.join(src, "dist")
os.makedirs(out_dir, exist_ok=True)

def read(name):
    return io.open(os.path.join(src, name), encoding="utf-8").read()

def svg_data_uri(name):
    data = read(name).encode("utf-8")
    return "data:image/svg+xml;base64," + base64.b64encode(data).decode("ascii")

html = read("index.html")
css = read("styles.css")
js = read("script.js")

# Стили и скрипт — внутрь страницы
html, n1 = re.subn(r'<link rel="stylesheet" href="styles\.css">', lambda m: "<style>\n" + css + "\n</style>", html)
html, n2 = re.subn(r'<script src="script\.js"></script>', lambda m: "<script>\n" + js.replace("</script", "<\\/script") + "\n</script>", html)

# Локальные SVG (favicon, картинки) — как data URI
def repl(m):
    attr, name = m.group(1), m.group(2)
    return '%s="%s"' % (attr, svg_data_uri(name))
html, n3 = re.subn(r'(src|href)="([A-Za-z0-9_\-]+\.svg)"', repl, html)

# Комментарии-заметки для разработчика заказчику не нужны
html = re.sub(r"\s*<!--.*?-->", "", html, flags=re.S)

assert n1 == 1 and n2 == 1, (n1, n2)
left = re.findall(r'(?:src|href)="(?!https?:|tel:|#|data:)[^"]+"', html)
assert not left, left

path = os.path.join(out_dir, "index.html")
io.open(path, "w", encoding="utf-8", newline="\n").write(html)
print(path, len(html.encode("utf-8")), "bytes; inlined svg:", n3)
