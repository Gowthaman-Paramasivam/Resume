# Modern React Resume & Portfolio

A modern, fast, and responsive Resume & Portfolio website built with **React**, **Vite**, and **Tailwind CSS**, pre-configured for automated hosting on **GitHub Pages**.

---

## 🚀 Quick Start (Local Development)

To run the application locally on your machine:

```bash
# 1. Open the project folder in terminal
cd C:\Users\gowthaman.paramasiva\Desktop\POC

# 2. Start the Vite development server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`) in your browser.

---

## 📝 Customizing Your Resume Content

All resume information is stored in a clean, structured data file:
👉 **[`src/data/resumeData.js`](./src/data/resumeData.js)**

You can easily edit:
- **Personal Information**: Name, title, tagline, email, phone, location, social links
- **About Bio**: Summary of your experience and engineering focus
- **Work Experience**: Roles, companies, dates, bullet-point achievements, tech stacks
- **Skills**: Categorized skills (Frontend, Backend, Cloud & DevOps, Databases)
- **Projects**: Descriptions, live links, GitHub repos, and metric highlights
- **Education & Certifications**: Degrees, schools, and credentials

---

## 🌐 Hosting on GitHub Pages

You have two simple ways to host this on GitHub Pages:

### Method 1: Automated GitHub Actions (Recommended)

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `resume` or `poc`).
2. Link your local project and push your code:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub, go to your repository **Settings** → **Pages** (under Code and automation).
4. Under **Build and deployment** → **Source**, select **GitHub Actions**.
5. That's it! The included [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) workflow will automatically build and publish your site whenever you push changes to `main`. Your site will be live at:
   `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

### Method 2: One-Command Deploy via `npm run deploy`

If you prefer deploying via the `gh-pages` branch:

1. In `package.json`, add your homepage URL:
   ```json
   "homepage": "https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>"
   ```
2. Run:
   ```bash
   npm run deploy
   ```
3. In GitHub repo **Settings** → **Pages**, set **Source** to **Deploy from a branch** and select the `gh-pages` branch.

---

## ✨ Features

- ⚡ **Lightning Fast**: Powered by Vite and React.
- 🎨 **Tailwind CSS**: Modern clean design with dark/light mode toggle.
- 🖨️ **Print & PDF Ready**: Click the **Save PDF** button or press `Ctrl + P` to generate a clean, print-optimized resume PDF.
- 📱 **Fully Responsive**: Adapts seamlessly from mobile screens to 4K monitors.
- 🔗 **Direct Email & Copy Utility**: One-click email copying with toast notification and pre-filled message support.
