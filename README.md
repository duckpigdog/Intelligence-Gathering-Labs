语言: 中文 | English: README-en.md

# IG-LABS：情报搜集训练场

一个“酷炫”的赛博朋克风信息收集 CTF 实验场，面向初学者与红队。
支持离线运行、轻量且开源。

![IG-LABS Style](https://img.shields.io/badge/Style-Cyberpunk-00ff41)
![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-blue)

## 🎯 特性
- **视觉**：矩阵/黑客风界面与自定义动画。
- **零框架**：纯 HTML/CSS/JS（以及用于后端逻辑的 PHP）。
- **结构**：CTF 式关卡推进。

## 🚀 如何运行

部分挑战（如 HTTP Headers）需要服务端处理，因此需要 PHP 运行环境。

### 方案一：PHP 内置服务器（推荐）
1. 确保已安装 [PHP](https://www.php.net/downloads) 并已添加到 `PATH`。
2. 在项目根目录打开终端。
3. 执行以下命令：
   ```bash
   php -S localhost:8000
   ```
4. 打开浏览器访问：`http://localhost:8000`

### 方案二：XAMPP / WAMP / MAMP
1. 将 `Intelligence-Gathering-Labs` 文件夹移动到你的 `htdocs` 或 `www` 目录。
2. 通过控制面板启动 Apache。
3. 访问 `http://localhost/Intelligence-Gathering-Labs`

## 🕹️ 关卡
- **Level 01**：源码分析（前端注释）
- **Level 02**：Robots 协议（查找隐藏目录）
- **Level 03**：HTTP 头（检查服务端响应）
- **Level 04+**：敬请期待（Git 泄露、备份文件等）

## 🛠️ 技术栈
- **前端**：HTML5、CSS3（变量、动画）、原生 JS（Canvas）
- **后端**：PHP（用于头信息/路由的简单逻辑）

## 🤝 贡献
欢迎在 `challenges/` 下创建新关卡，并在 `index.html` 中进行注册。

---
*仅用于教育目的。*
