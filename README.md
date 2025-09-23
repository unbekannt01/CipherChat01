🔐 CipherChat – Secure Private Chat

A real-time private chat app with password-protected rooms, secure invites, and modern security.

🌟 Features
🔒 Security

Passwords hashed with bcrypt

JWT authentication with auto-expiry

Rate limiting to prevent spam

Input sanitization to block XSS

Secure invite links (no password sharing)

💬 Chat Experience

Real-time messaging with WebSocket (Socket.io)

Create & join password-protected rooms

Mobile-friendly glassmorphism UI

Automatic reconnection & message queuing

Typing indicators & temporary chat history

⚡ Extra

User activity tracking

Message filtering & validation

4-hour session timeout

No permanent storage (memory only)

🚀 Live Demo

Frontend: CipherChat Demo

Backend: Hosted on Railway/Render (WebSocket server)
(Free servers may take a few seconds to wake up)

🛠️ Tech Stack

Frontend: HTML5, CSS3, Vanilla JS

Backend: NestJS + Socket.io

Security: bcrypt, JWT, rate limiting

📱 Usage
Create a Room

Click Create Room

Enter room name (3–30 chars)

Set strong password (8+ chars, mix case & numbers)

Share invite link

Join a Room

Enter Room ID + password, or

Just use the invite link

🔧 Local Setup

Clone repo:

git clone https://github.com/unbekannt01/CipherChat01.git
cd CipherChat01


Run locally:

# Option 1: Python
python -m http.server 8000  

# Option 2: Node.js
npx serve .


Open index.html in your browser

🌐 Browser Support

✅ Chrome / Edge / Firefox / Safari
✅ Mobile browsers

🚨 Limitations

Messages cleared on server restart

Max 50 users per room

No file sharing (text only)

👨‍💻 Author

Prashant Kargathara

GitHub: @unbekannt01

Email: pkargathara7401@gmail.com

LinkedIn: prashant-kargathara

📝 License

MIT License – free to use & modify

⚡ Status: Active Development | 🔒 Security First | 📱 Mobile Ready
