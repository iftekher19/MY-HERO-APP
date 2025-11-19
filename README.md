# App Name : HERO.IO

#Description
HERO.IO is a responsive web app built with React and React Router that functions as a sleek mini App Store.  
Users can browse trending applications, view detailed analytics and ratings with dynamic charts, install/uninstall apps using LocalStorage, and explore all installed apps in an interactive dashboard.

The project was developed as part of a React assignment focusing on advanced component structure, routing, data visualization, and state management.
<hr>

<h2>🖼️ Screenshot</h2>

<p align="center">
  <img src="https://github.com/iftekher19/Emergency_Hotline/blob/main/Screenshot%202025-11-19%20140926.png" alt="Emergency Service Directory Screenshot" width="800">
</p>

<hr>
---

###  Technologies Used

1.Frontend Framework: React 
2.Routing: React Router DOM v6.14+
3.Data Visualization: Recharts
4.UI Framework: Tailwind CSS + DaisyUI
5.Notifications: React Toastify
6.Client‑Side Storage: Browser LocalStorage
7.Deployment: GitHub Pages / Netlify

---

### 💡 Key Features
1.  Fully Responsive UI for all device sizes  
2.  Multi‑Page Navigation using React Router (Layout + Nested Routes)  
3.  Interactive Ratings Chart with Recharts  
4.  App Installation / Uninstallation persisted via LocalStorage  
5.  Live Search with loading skeleton animation  
6.  Page and Search loading handled by DaisyUI Skeleton Loader  
7.  Error Handling (404 and App Not Found Screens)  
8.  Clean and consistent design matching Figma reference

## 💻 How to Run HERO.IO Locally

Follow these steps to set up and preview HERO.IO on your local machine.

> Prerequisites: [Node.js (v16+)](https://nodejs.org) and npm installed.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/HERO.IO.git
cd HERO.IO

2️⃣ Install Project Dependencies
npm install
This installs all required npm packages defined in package.json.
3️⃣ Start the Development Server
npm run dev
If you’re using Vite, you’ll see output similar to:
VITE v5.x.x  ready in 300ms
➜  Local: http://localhost:5173/
4️⃣ Explore and Test
Once the project opens in your browser:

Browse the featured apps on the Home page.
Click into an app for detail view with chart analytics.
“Install” / “Uninstall” apps – actions persist across reloads.
Try the live search bar and observe smooth skeleton loading.

