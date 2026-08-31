# Adhil Ahammed K — Portfolio

🌐 **Live Site**: [adhilahammed.github.io/portfolio](https://adhilahammed.github.io/portfolio/)

A modern, professional software developer portfolio built with **React + Vite + TypeScript**.

## 🚀 Tech Stack

- **Framework**: React 19 + Vite + TypeScript
- **Icons**: lucide-react + custom SVG brand icons
- **Styling**: Vanilla CSS (no frameworks)
- **Fonts**: Inter + JetBrains Mono (Google Fonts)
- **Deployment**: Static — GitHub Pages compatible

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← Add your resume PDF here!
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── BrandIcons.tsx
│   ├── data/
│   │   ├── personalInfo.ts   ← Your name, email, links
│   │   ├── skills.ts         ← Skills list
│   │   ├── experience.ts     ← Work experience
│   │   └── projects.ts       ← Projects
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
└── vite.config.ts
```

---

## ✏️ How to Customise

### 1. Personal Info, Email & Links
Edit `src/data/personalInfo.ts`:
```ts
export const personalInfo = {
  name: "Adhil Ahammed K",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeFile: "/resume.pdf",
  ...
};
```

### 2. Add Your Resume
Place your resume PDF in the `public/` folder:
```
public/resume.pdf
```
The Resume section will automatically detect and display it.

### 3. Experience
Edit `src/data/experience.ts` — update company names, dates, responsibilities, achievements.

### 4. Projects
Edit `src/data/projects.ts` — add `githubUrl` and `liveUrl` when available.

### 5. Skills
Edit `src/data/skills.ts` — add/remove skills and categories.

---

## 🏃 Development

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

---

## 🌐 GitHub Pages Deployment

1. Build the project: `npm run build`
2. The `dist/` folder contains the static site
3. Push `dist/` to the `gh-pages` branch, or use the `gh-pages` npm package:

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then run: `npm run deploy`

> **Note**: If your GitHub Pages URL is `https://username.github.io/portfolio/`, update `vite.config.ts`:
> ```ts
> base: '/portfolio/'
> ```

---

## 🎨 Design System

Colors are defined as CSS variables in `src/index.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg` | `#0F172A` | Page background |
| `--color-bg-card` | `#1E293B` | Cards |
| `--color-accent` | `#38BDF8` | Accent / links |
| `--color-text-primary` | `#F8FAFC` | Main text |
| `--color-text-secondary` | `#94A3B8` | Body text |
