# Save This Tab

Save This Tab is a simple Chrome extension that lets you quickly save the current tab URL or custom notes with one click.

It is designed for fast, lightweight saving without opening bookmarks or external tools.

---

## ✨ Features

- Save the current active tab URL
- Save custom text or notes manually
- Persistent storage using browser localStorage
- Clickable saved links (open in a new tab)
- Delete all saved entries with a single click
- Clean and minimal popup UI

---

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extensions API (`tabs`)
- Browser `localStorage`

---

## 📦 Project Structure

save-this-tab/
├── index.html # Popup UI
├── styles.css # Styling
├── script.js # Logic and Chrome API usage
├── manifest.json # Chrome extension configuration
└── icon.png # Extension icon


---

## 🚀 Installation (Manual)

This extension can be installed manually in Chrome:

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked**
5. Select the project folder (`save-this-tab`)
6. Pin the extension to the toolbar (optional)

---

## 🧠 How It Works

- The extension popup is built using HTML and CSS
- JavaScript handles user interactions and rendering
- The Chrome `tabs` API is used to get the current tab URL
- Saved data is stored using `localStorage`, so it persists across sessions

---

## 📌 Notes

- This extension does **not** access or modify website content
- No user data is tracked or shared
- All data is stored locally in the browser

---

## 📈 Future Improvements

- Sync data using Chrome storage
- Export saved URLs
- Add categories or tags
- Confirmation dialog before deleting all entries

---

## 🧑‍💻 Author

Built by **Siri Chandana** as a learning project while exploring JavaScript and Chrome extensions.
