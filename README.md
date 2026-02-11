# VitalsPath Landing Page

This is the official landing page for **VitalsPath**, a family health management app for iOS.
Built with **Astro**, **React**, and **Tailwind CSS v4**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Building for Production

```bash
npm run build
```

This will create a `dist/` directory ready for deployment.

## 🌍 Deployment (GitHub Pages)

This project includes a **GitHub Actions workflow** (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages on every push to `main`.

1.  Push your code to GitHub.
2.  Go to **Settings > Pages**.
3.  Set **Source** to **GitHub Actions**.

## 🎨 Asset Replacement Guide

The site currently uses high-quality stock placeholders. To personalize it for your app launch, please replace the following files in `public/assets/images/`:

| Component | Description | Recommended Filename | Dimensions (approx) |
| :--- | :--- | :--- | :--- |
| **Hero** | Main app dashboard inside 3D phone | `hero-dashboard.png` | 1170x2532 (iPhone Screenshot) |
| **Smart Scheduler** | Conflict resolution graphic | `smart-scheduler.png` | 800x600 |
| **Widgets** | Home Screen Widgets | `widgets-showcase.png` | Various |
| **Gallery** | App screenshots | `screen-1.png`, `screen-2.png`, etc. | iPhone Screenshots |
| **OG Image** | Social sharing preview | `og-image.jpg` | 1200x630 |
| **Logo** | Project Logo | `public/favicon.svg` | SVG |

## 🛠 Configuration

-   **Tailwind Theme**: `src/styles/global.css` (Colors, Fonts, Glassmorphism).
-   **SEO**: `src/layouts/Layout.astro` (Meta tags).
-   **Forms**: `src/components/landing/CTA.astro` (Update `YOUR_FORM_ID` for Formspree).
