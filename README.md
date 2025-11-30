# 🌟 AI Story Generator (Vite + React)

A clean and responsive **AI-powered content generator** built using **Vite + React** with backend API integration for secure and fast storytelling based on user prompts.

---

## 🚀 Features

* AI-based text/story generation
* Smooth UI with loading & error states
* Copy-to-clipboard functionality
* Fully responsive modern design
* Backend-protected API key
* Works with any text-generation API

---

## 🛠 Tech Stack

### **Frontend**

* React.js (Vite)
* JavaScript (ES6+)
* CSS (Responsive UI)
* Axios (API calls)

### **Backend**

* Node.js
* Express.js
* dotenv (for secure API key)
* CORS

---

## 📁 Project Structure

```
ai-story-generator-vite-react/
 ├── backend/
 │    ├── server.js
 │    ├── package.json
 │    ├── .env
 │
 └── frontend/
      ├── src/
      │     ├── App.jsx
      │     ├── App.css
      │     └── main.jsx
      ├── vite.config.js
      ├── index.html
      └── package.json
```

---

## ▶️ Running the Project

### **Start Backend**

cd backend
npm install
npm start

### **Start Frontend**

cd frontend
npm install
npm run dev

* Frontend → **[http://localhost:5173](http://localhost:5173)**
* Backend → **[http://localhost:5000](http://localhost:5000)**

---

## 🔑 Environment Setup

In `backend/.env`:

```
API_KEY=your_api_key_here
```

---

## 🔌 API Endpoint Used

**POST /generate**

Request:

```json
{
  "prompt": "Your story prompt here"
}
```

Response:

```json
{
  "text": "Generated AI story..."
}
```

---

## 📸 Screenshots (Add your images)

* Home Screen
  <img width="1366" height="725" alt="image" src="https://github.com/user-attachments/assets/a59cc1e6-8870-4bda-904d-67a35536effc" />

* Prompt Input UI
  <img width="1366" height="727" alt="image" src="https://github.com/user-attachments/assets/99bbcea3-a1c2-49fd-a6cc-98b3be819040" />

* Generated Story Output
  <img width="1366" height="728" alt="image" src="https://github.com/user-attachments/assets/0d5fbbab-10b8-483d-9e5f-cd140327bd67" />

* Loading State
  <img width="526" height="331" alt="image" src="https://github.com/user-attachments/assets/960d3222-7f25-43e7-9c17-6ec5262980fb" />
