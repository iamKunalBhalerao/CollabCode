# CollabCode

> A collaborative coding platform for seamless real-time development

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)]()

## 🚀 Overview

**CollabCode** is a powerful collaborative coding environment that enables developers to write, share, and review code together in real-time.

## ✨ Features

- 🔄 **Real-time Collaboration** - Code together with your team simultaneously
- 🎨 **Syntax Highlighting** - Support for 5+ programming languages
- 📁 **Project Management** - Organize files and folders effortlessly
- 🔒 **Secure Sharing** - Control access with permission levels
- 📜 **Version History** - Track changes and revert when needed

## 🔧 Tech Stack

<p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white" alt="ws"/>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
    <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis"/>
    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
</p>

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Client Layer                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │   React UI  │  │   Monaco    │  │   WebSocket │      │
│  │             │  │   Editor    │  │   Streams   │      │
│  └─────────────┘  └─────────────┘  └─────────────┘      │
└────────────────────────┬────────────────────────────────┘
                                                 │ WebSocket / REST
┌────────────────────────▼────────────────────────────────┐
│                     Server Layer                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │  Express.js │  │  WebSocket  │  │    Auth     │      │
│  │     API     │  │   Server    │  │  Middleware │      │
│  └─────────────┘  └─────────────┘  └─────────────┘      │
└────────────────────────┬────────────────────────────────┘
                                                 │
┌────────────────────────▼────────────────────────────────┐
│                      Data Layer                         │
│              ┌─────────────────────┐                    │
│              │    PostgreSQL       │                    │
│              │       (Data)        │                    │
│              └─────────────────────┘                    │
└─────────────────────────────────────────────────────────┘
```

## ⚡ Quick Start for Contributors

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/CollabCode.git
```

### BackEnd

```bash
#- Navigate to the BackEnd directory
cd CollabCode

#- Navigate to the BackEnd directory
cd core

#- Install dependencies
bun install

#- Start the application
bun run dev
```

### FrontEnd

```bash
#- Navigate to the FrontEnd directory
cd surface

#- Navigate to the FrontEnd directory
cd core

#- Install dependencies
bun install

#- Start the application
bun run dev
```

### 🛠️ Usage

```bash
# Development mode
bun run dev

# Production build
bun run build
```

## 📋 Requirements

- Bun >= 1.0.0

## 📊 Project Status

| Feature        | Status         |
| -------------- | -------------- |
| Real-time Sync | ✅ Complete    |
| Chat System    | ✅ Complete    |
| Voice Calls    | 🚧 In Progress |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Author:** Kunal Bhalerao
- **Email:** kunalbhaleraowork@gmail.com
- **Project Link:** [https://github.com/iamKunalBhalerao/CollabCode](https://github.com/iamKunalBhalerao/CollabCode)

<p align="center">Made with ❤️ by the CollabCode Team</p>

<p align="center">
    <img src="https://img.shields.io/badge/⭐_Star_this_repo-If_you_found_it_helpful!-yellow?style=for-the-badge" alt="Star"/>
</p>

<p align="center">
    <b>Happy Coding! 🎉</b><br>
    <i>Built with passion for developers, by developers</i>
</p>

<p align="center">
    <a href="https://github.com/iamKunalBhalerao">
        <img src="https://img.shields.io/badge/Follow-@iamkunalbhalerao-181717?style=social&logo=github" alt="GitHub"/>
    </a>
</p>
