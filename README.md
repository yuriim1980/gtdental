# GT Dental — сайт-визитка

Статический сайт стоматологической клиники GT Dental (Кишинёв).
Языки: **RO** (по умолчанию), RU, EN. Дизайн в стиле apple.com.

## Файлы

| Файл | Назначение |
|---|---|
| `index.html` | Разметка (текст по умолчанию — на румынском) |
| `styles.css` | Стили, светлая и тёмная тема |
| `script.js` | Переводы RO/RU/EN и переключатель языка |
| `favicon.svg` | Иконка сайта |

Ссылка на нужный язык: `?lang=ru` или `?lang=en`. Выбранный язык запоминается в браузере.

## ⚠ Заменить перед публикацией

Адрес, телефон, часы работы и точку на карте не удалось получить автоматически
(страница Facebook закрыта для чтения без входа). Сейчас там заглушки:

1. `index.html` — блок `#contact`, места с пометкой `TODO`:
   - адрес карты в `iframe` (`q=...`).
2. `script.js` — ключи `contact.addressValue` и `contact.hoursValue` во всех трёх языках.

## Публикация на GitHub Pages (бесплатно)

1. Войдите на https://github.com → **New repository** → имя, например `gtdental`,
   тип **Public**, без README → **Create repository**.
2. В этой папке выполните:
   ```bash
   git remote add origin https://github.com/<ваш-логин>/gtdental.git
   git push -u origin main
   ```
   (при первом push Git откроет окно входа в GitHub).
3. В репозитории: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   ветка **main**, папка **/ (root)** → **Save**.
4. Через 1–2 минуты сайт будет доступен по адресу
   `https://<ваш-логин>.github.io/gtdental/`.

Обновление сайта: внесите правки, затем
```bash
git add -A
git commit -m "Update"
git push
```
