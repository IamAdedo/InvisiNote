
### 🔐 "InvisiNote" – Encrypted Markdown Note App (Web-based)

A minimal web app that lets users write notes in Markdown and encrypt them locally in the browser using a password. Notes can be saved as .md.enc files and decrypted later.


---

🌟 Features

✍️ Markdown Editor (with live preview)

🔐 AES encryption using a password

💾 Download/Upload encrypted note files (.md.enc)

🧪 No account or backend—completely client-side

📱 Responsive design for mobile



---

🛠 Tech Stack

React + Tailwind CSS

marked or react-markdown for Markdown rendering

crypto-js or native Web Crypto API for encryption/decryption



---

⚡ Folder Structure

invisinote/

├── public/ 

│   └── index.html

├── src/

│   ├── components/ 

│   │   ├── Editor.jsx

│   │   ├── Previewer.jsx

│   └── utils/

│       └── crypto.js

│   └── App.jsx

│   └── index.js

├── .gitignore

├── package.json

├── README.md

└── LICENSE


---

🔓 How It Works

User writes a note.

Types in a password and hits "Encrypt + Save".

File downloads as my-note.md.enc.

Later, user uploads file + enters password to decrypt and read.



---

📸 Optional UI Touches

Dark mode toggle

Emoji support in markdown

LocalStorage auto-save drafts (non-encrypted)



---
