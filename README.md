# 📄 Resume Analyser Full Stack Project

A full-stack Resume Analyser web application developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. The application allows users to upload resumes, analyze technical skills, generate resume scores, and store details in a MySQL database.

---

# 🚀 Features

✅ Resume Upload System  
✅ Skill Detection from Resume  
✅ Resume Score Generation  
✅ MySQL Database Storage  
✅ Fetch Uploaded Resume Details  
✅ Responsive UI Design  
✅ Full Stack CRUD Architecture  

---

# 🛠 Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Packages Used
- Express
- Multer
- MySQL2
- Body Parser
- CORS

---

# 📁 Project Structure

```bash
resume-analyser/
│
├── server.js
├── package.json
├── database.sql
├── uploads/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── db/
    └── connection.js
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/resume-analyser.git
```

---

## 2️⃣ Open Project Folder

```bash
cd resume-analyser
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Create MySQL Database

Open MySQL and execute:

```sql
CREATE DATABASE resume_analyser;
```

Import the `database.sql` file.

---

## 5️⃣ Configure Database

Open:

```bash
db/connection.js
```

Update your MySQL credentials:

```javascript
host: 'localhost',
user: 'root',
password: '',
database: 'resume_analyser'
```

---

## 6️⃣ Run Server

```bash
node server.js
```

---

## 7️⃣ Open Application

```bash
http://localhost:5000
```

---

# 📊 Resume Analysis

The system checks uploaded resumes for skills like:

- HTML
- CSS
- JavaScript
- React
- Node.js
- MySQL
- Java
- Python

Each detected skill increases the resume score.

---

# 🗄 Database Table

## resumes

| Column | Type |
|--------|------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| skills | TEXT |
| score | INT |
| filename | VARCHAR |

---

# 📌 API Endpoints

## Upload Resume

```http
POST /upload
```

## Fetch Resumes

```http
GET /resumes
```

---

# 🔮 Future Enhancements

- AI Resume Analysis
- PDF Resume Parsing
- ATS Score Checker
- Admin Dashboard
- Authentication System
- Resume Recommendation Engine

---

# 👨‍💻 Author

Rohith S

---

# 📄 License

This project is developed for educational and academic purposes.
