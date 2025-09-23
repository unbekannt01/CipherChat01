# CipherChat

**Secure private chat (real-time) with password-protected rooms, invite links, and modern security defaults.**

---

## 🚀 Quick summary

CipherChat is a minimal, secure, real-time chat app built with a lightweight frontend (`index.html`) and a WebSocket backend. Rooms can be password-protected or accessed via secure invite links. The app focuses on privacy, input sanitization, and simple developer-friendly setup.

* **Frontend Repo (this project):** `index.html`
* **Backend Repo:** [CipherChat WebSocket Backend](https://github.com/unbekannt01/websocket.git)

---

## 🌟 Key features (simple)

* Password-protected rooms (bcrypt hashing)
* Invite links (token-based access without exposing passwords)
* Real-time messaging via WebSocket (socket.io)
* Automatic reconnection and basic message queuing
* Typing indicators and room user lists
* Rate limiting for key actions (create-room, send-message)
* Input sanitization and XSS prevention
* JWT session tokens with expiration

---

## 🔐 Security highlights

* **Password hashing:** bcrypt with salt rounds
* **Rate limiting:** per-action limits to reduce spam
* **Input sanitization:** remove dangerous characters and escape HTML
* **Content validation:** limits on username, room name, and message length
* **Transport security:** WSS/HTTPS assumed in production

---

## 📋 Validation rules (simple)

* **Room name:** 3–30 characters, letters, numbers, spaces, `-`, `_`
* **Password:** 8–50 characters, must include upper, lower, and number
* **Username:** 1–20 characters (auto-sanitized)
* **Message:** 1–1000 characters

---

## 🧩 Tech stack

* Frontend: Vanilla JavaScript, HTML5, CSS3 (glassmorphism UI)
* Real-time: Socket.IO (WebSocket)
* Backend: Node.js + NestJS (socket gateway)
* Auth & crypto: bcrypt, JWT

---

## ⚙️ Quick setup (local)

### Frontend

1. Clone repo:

```bash
git clone https://github.com/unbekannt01/CipherChat01.git
cd CipherChat01
```

2. Serve frontend locally (any static server). Example:

```bash
# Python
python -m http.server 8000
# or
npx serve .
```

3. (Optional) Update WebSocket URL in `main.js` or `index.js`:

```js
const wsUrl = 'https://your-websocket-server.com';
```

4. Open `http://localhost:8000` in your browser.

### Backend

Clone and set up backend separately:

```bash
git clone https://github.com/unbekannt01/websocket.git
cd websocket
npm install
npm run start:dev
```

---

## 🧪 Basic usage

* **Create Room:** Enter a name + strong password, click Create. Share the invite link if you want others to join without entering the password.
* **Join Room:** Use Room ID + password or the invite link.
* **Messaging:** Send text messages only (no file uploads).

---

## ⚠️ Known limitations

* Messages are stored in memory (lost on server restart)
* Max users per room: \~50
* No file sharing (text-only)
* Session timeout: 4 hours of inactivity

---

## 🔧 Development notes

* WebSocket server implemented with `socket.io` and a NestJS gateway.
* Passwords must be hashed with bcrypt on the server.
* Use an environment variable for JWT secret and server URL.
* Keep CORS and origin checks strict in production.

---

## 📱 Demo

* Frontend: [https://unbekannt01.github.io/CipherChat01/](https://unbekannt01.github.io/CipherChat01/)
* Backend: [https://github.com/unbekannt01/websocket.git](https://github.com/unbekannt01/websocket.git)

---

## 👤 Author

Prashant Kargathara

* GitHub: [@unbekannt01](https://github.com/unbekannt01)
* Email: [pkargathara7401@gmail.com](mailto:pkargathara7401@gmail.com)

Tell me which section to expand or shrink (e.g., a one-file quickstart, Docker instructions, or sample env file).
