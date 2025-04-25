# Wooclap – Exercise 1: Presentation Configuration Screen

## 👤 Author

Clara Chaouat

## 📘 Overview

This project is a frontend implementation of Wooclap’s **presentation configuration screen**, developed as part of a technical assessment.

It replicates the user interface and component layout as seen in Wooclap’s original application.
The goal is to display a slide viewer, allow note-taking, and manage navigation between slides in an intuitive and accessible layout.

## 🛠 Tech Stack

- **React** (Create React App)
- **Tailwind CSS**

## 🧩 Features

- 📄 Slide preview using a mocked dataset
- ⬅️➡️ Navigation between slides with previous/next buttons
- 📝 Speaker notes editable per slide and saved to `localStorage`
- 🧭 Sidebar with tabs: “Insert questions” and “Updated presentation”
- 📚 Scrollable slide list
- 💾 Footer with "Save" and "Discard" buttons

## 📁 Project Structure

```txt
src/
├── App.js
├── index.js
├── index.css
├── reportWebVitals.js
├── setupTests.js
│
├── data/
│   └── slides.js
│
├── hooks/
│   ├── useSlideController.js
│   └── useSlideController.test.jsx
│
├── components/
│   ├── layout/
│   │   └── Footer.jsx
│   │
│   ├── sidebar/
│   │   ├── SidebarTabs.jsx
│   │   └── SidebarTabs.test.jsx
│   │
│   └── slide/
│       ├── SlideViewer.jsx
│       ├── SlideViewer.test.jsx
│       ├── SlideList.jsx
│       ├── SlideList.test.jsx
│       └── SpeakerNotes.jsx
```

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/wooclap-presentation-exercise.git

cd wooclap-1

### 2. Install dependencies

`npm install`

### 3. Start the application

`npm start`

Open http://localhost:3000 to view it in the browser.

Happy reviewing!
