# 🎓 CG Master – E-Learning Platform

> Sri Lanka's premier **Sinhala-medium** online learning platform — making quality tech education accessible to everyone.

🌐 **Live Site:** [www.cgmaster.lk](https://www.cgmaster.lk)

---

## 📌 About

**CG Master** is a Sri Lankan e-learning startup dedicated to delivering high-quality technology education in the **Sinhala language**. Our mission is to break the language barrier in tech education and empower Sri Lankan learners to build real-world skills in their mother tongue.

---

## 🚀 Features

- 🎥 Video-based course platform (Sinhala medium)
- 🔐 Secure user authentication & role-based access
- 📅 Live session scheduling with Zoom integration
- 📁 Course content & media management
- 👨‍🏫 Instructor & student dashboards
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Part | Technology |
|---|---|
| Frontend + Backend | **Next.js 14** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Database | **PostgreSQL** |
| ORM | **Prisma** |
| Auth | **NextAuth.js** |
| File Upload | **Cloudinary** |
| Live Classes | **Zoom OAuth API** |

---

## 📁 Project Structure

```
cgmaster-web-platform/
├── app/                  # Next.js App Router pages & layouts
│   ├── (auth)/           # Auth routes (login, register)
│   ├── (dashboard)/      # Student & instructor dashboards
│   ├── api/              # API route handlers
│   └── ...
├── components/           # Reusable UI components
├── lib/                  # Utility functions & config
├── prisma/               # Prisma schema & migrations
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- PostgreSQL database
- Cloudinary account
- Zoom OAuth app credentials

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/cgmasterlk/cgmaster-web-platform.git
cd cgmaster-web-platform

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your credentials in .env

# 4. Set up the database
npx prisma migrate dev

# 5. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following:

```env
# Database
DATABASE_URL=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Zoom
ZOOM_CLIENT_ID=
ZOOM_CLIENT_SECRET=
```

---

## 🤝 Contributing

This project is currently developed by the **CG Master internal team**.

1. Never push directly to `main`
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a **Pull Request** and request a review from your supervisor

### Branch Naming Convention

| Type | Format | Example |
|---|---|---|
| New feature | `feature/name` | `feature/course-upload` |
| Bug fix | `fix/name` | `fix/login-redirect` |
| UI work | `ui/name` | `ui/dashboard-redesign` |

---

## 📄 License

This is a **private repository**. All rights reserved © 2025 CG Master (Pvt) Ltd, Sri Lanka.

---
