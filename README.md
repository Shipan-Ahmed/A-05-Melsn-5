# 🐛 GitHub Issues Tracker

A responsive web application that allows users to browse, filter, and search issues using a real API. Inspired by GitHub's issue tracking system.

---

## 🚀 Live Demo

🔗 https://your-live-site-link.com

---

## 🔑 Demo Credentials

- Username: `admin`
- Password: `admin123`

---

## 🚀 Features

- 🔐 Simple login system (demo credentials)
- 📋 View all issues from API
- 🟢 Filter issues (All, Open, Closed)
- 🔍 Search issues by keyword
- 📦 Issue cards with detailed info
- 🪟 Modal view for full issue details
- 🎨 Conditional UI (Open = Green, Closed = Purple)
- ⏳ Loading spinner while fetching data
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- **Frontend:** HTML, JavaScript (ES6)
- **Styling:** Tailwind CSS + DaisyUI
- **API:** REST API (External)

---

## 🌐 API Endpoints

- All Issues  
  https://phi-lab-server.vercel.app/api/v1/lab/issues  

- Single Issue  
  https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}  

- Search Issue  
  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}  

---

## 🧠 Key Concepts Used

- Fetch API & async/await  
- DOM manipulation  
- Event handling  
- Conditional rendering  
- Responsive design  
- Modal implementation  

---

## 📸 UI Preview

### 🔐 Login Page
![Login](./screenshots/login.png)

### 📋 Issues Dashboard
![Dashboard](./screenshots/dashboard.png)

### 🪟 Issue Modal
![Modal](./screenshots/modal.png)

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/issues-tracker.git

# Open project folder
cd issues-tracker

# Run with Live Server or open index.html
