Language: English | 中文版: README.md

# IG-LABS: Intelligence Gathering Training Ground

A "cool", cyberpunk-themed Information Gathering CTF lab designed for beginners and red teamers.
Offline-ready, lightweight, and open-source.

![IG-LABS Style](https://img.shields.io/badge/Style-Cyberpunk-00ff41)
![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-blue)

## 🎯 Features
- **Visuals**: Matrix/Hacker style interface with custom animations.
- **No Frameworks**: Pure HTML/CSS/JS (and PHP for backend logic).
- **Structure**: CTF-style level progression.

## 🚀 How to Run

Since some challenges (like HTTP Headers) require server-side processing, you need a PHP environment.

### Option 1: PHP Built-in Server (Recommended)
1. Ensure you have [PHP](https://www.php.net/downloads) installed and in your PATH.
2. Open a terminal in this project's root directory.
3. Run the following command:
   ```bash
   php -S localhost:8000
   ```
4. Open your browser and visit: `http://localhost:8000`

### Option 2: XAMPP / WAMP / MAMP
1. Move the `Intelligence-Gathering-Labs` folder to your `htdocs` or `www` directory.
2. Start Apache via the control panel.
3. Visit `http://localhost/Intelligence-Gathering-Labs`

## 🕹️ Challenges
- **Level 01**: Source Code Analysis (Frontend comments)
- **Level 02**: Robots Protocol (Finding hidden directories)
- **Level 03**: HTTP Headers (Inspecting server responses)
- **Level 04+**: Coming Soon (Git leaks, Backups, etc.)

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Variables, Animations), Vanilla JS (Canvas)
- **Backend**: PHP (Simple logic for headers/routing)

## 🤝 Contributing
Feel free to add new levels by creating a new folder in `challenges/` and adding it to `index.html`.

---
*Designed for Educational Purposes Only.*

