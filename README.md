# 👟 Lakshmi Footwears (ಶ್ರೀ ಲಕ್ಷ್ಮಿ ಫುಟ್‌ವೇರ್ಸ್)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WhatsApp](https://img.shields.io/badge/WhatsApp_Ordering-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/919620288249)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **A professional, mobile-first website for Lakshmi Footwears located in Baraguru, Sira Taluk, Tumakuru District, Karnataka.**  
> Featuring ladies' footwear, gents' footwear, and school uniform shoes with transparent pricing (₹), live search, WhatsApp ordering, and Google Maps integration.

---

## 📍 Store Information

* **Store Name:** Lakshmi Footwears (ಶ್ರೀ ಲಕ್ಷ್ಮಿ ಫುಟ್‌ವೇರ್ಸ್)
* **Address:** Main Road, Near Bus Stand, Baraguru, Sira Taluk, Tumakuru District, Karnataka - 572113
* **Primary Phone / WhatsApp:** [+91 96202 88249](tel:+919620288249)
* **Store Timings:** Monday to Sunday: 9:00 AM – 9:30 PM *(Open All 7 Days)*
* **Taluk Coverage:** Baraguru, Sira Town, Badavanahalli, Pattanayakanahalli, Kallambella, Amarapura, and surrounding areas.

---

## 📑 Table of Contents
1. [Overview & Features](#-overview--features)
2. [Project Structure](#-project-structure)
3. [Product Catalog Highlights](#-product-catalog-highlights)
4. [How to Run / Preview Locally](#-how-to-run--preview-locally)
5. [How to Upload to GitHub](#-how-to-upload-to-github)
6. [Free Deployment via GitHub Pages](#-free-deployment-via-github-pages)
7. [Security & Privacy Audit](#-security--privacy-audit)
8. [License](#-license)

---

## 🌟 Overview & Features

### 🛍️ Footwear Departments
* **Ladies' Footwear (`ladies.html`):** Traditional handcrafted Rajasthani Mojari Juttis, Walkaroo orthopedic soft daily chappals, 2-inch party block heels, floral wedges, slip-on comfort bellies, and active walking shoes. Includes ladies' foot measurement chart (`IND 4` – `IND 8`).
* **Gents' Footwear (`gents.html`):** Polished Derby formal leather shoes, Campus air-capsule running shoes, Sparx casual street sneakers, Paragon PU backstrap floaters, Relaxo Bahamas waterproof flip-flops, Peshawari kurta sandals, and rugged mud boots for agriculture. Includes men's size chart (`IND 6` – `IND 10`).
* **School Uniform Shoes (`school-shoes.html`):** Action Milano black Oxford shoes (laces), Girls Mary Jane uniform shoes (single velcro), Sparx double-strap kids shoes, white canvas PT drill shoes, uniform combed cotton socks, and Kiwi shoe shine kits. Compliant with school uniform codes across Sira Taluk. Includes age/grade size guide (`Kids 9` to `IND 7`).

### 📱 Mobile-First Experience
* **Responsive Layout:** Tailored for 320px (compact mobile phones) up to ultra-wide desktop monitors.
* **Mobile Bottom Sticky Bar:** Thumb-friendly bottom navigation (Home, Products, Ladies, Gents, School, Contact).
* **Off-Canvas Drawer Menu:** Smooth animated drawer menu with quick links and store contacts.
* **2-Column Mobile Product Grid:** High density, e-commerce style shopping grid.

### 💬 WhatsApp Order & Inquiry Engine
* **Floating WhatsApp Button:** Fixed pulsing button on every page.
* **Product-Specific Inquiries:** Clicking *"Inquire"* on any card or inside the modal automatically creates a pre-formatted WhatsApp message containing the exact product name, brand, current price, MRP, color, and selected size.
* **Contact Form WhatsApp Submission:** Contact form inputs automatically format and launch a WhatsApp chat.

### 🗺️ Google Maps Location & Directions
* Interactive embedded Google Maps widget pinpointing **Baraguru, Sira Taluk, Tumakuru, Karnataka - 572113**.
* One-tap *"Get GPS Directions"* link for turn-by-turn navigation.

---

## 📁 Project Structure

```
lakshmi-footwears/
├── index.html              # Homepage (Hero showcase, categories, featured picks, guarantee)
├── products.html           # Full Catalog (Search bar, live category filter, 24+ footwear items)
├── ladies.html             # Ladies' Collection (Juttis, ortho chappals, heels, size chart)
├── gents.html              # Gents' Collection (Formals, Campus sneakers, sandals, boots)
├── school-shoes.html       # School Shoes (Oxford laces, Mary Jane velcro, PT canvas, socks)
├── about.html              # About Store (Heritage, town commitment, brand guarantee)
├── contact.html            # Contact & Location (Google Maps embed, directions, inquiry form)
├── css/
│   └── style.css           # Responsive design system, variables, mobile bottom navigation
├── js/
│   ├── products-data.js    # Product database (24 items with prices, sizes, images & metadata)
│   └── main.js             # Live search, modal dialog, size picker, WhatsApp link generator
├── images/
│   ├── favicon.svg         # SVG vector favicon
│   ├── logo.svg            # SVG vector store logo badge
│   └── shoe-placeholder.svg# Offline fallback vector graphic
├── server.js               # Zero-dependency local Node.js preview server
├── preview-site.bat        # Double-click Windows launcher for local preview
├── .gitignore              # Git ignore rules for logs, OS files, and temp files
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 👟 Product Catalog Highlights

| Category | Sample Products | Brands | Sizes Available | Price Range |
| :--- | :--- | :--- | :--- | :--- |
| **Ladies** | Mojari Juttis, Ortho Chappals, Block Heels, Wedges | Walkaroo, Paragon Solea, VKC, Lakshmi Ethnic | IND 4 – IND 8 | ₹199 – ₹899 |
| **Gents** | Derby Formals, Air Sneakers, PU Floaters, Bahamas Slippers | Campus, Sparx, Paragon, Relaxo, Bata | IND 6 – IND 10 | ₹249 – ₹1,299 |
| **School** | Action Oxford, Mary Jane Velcro, White Canvas PT, Socks | Action Shoes, Paragon, Sparx Kids, Kiwi | Kids 9 – IND 7 | ₹99 – ₹549 |

---

## 🛠️ How to Run / Preview Locally

The website runs entirely client-side without any complex build tools.

### Option 1: Double-Click the Launcher (Windows)
Double-click `preview-site.bat` in the project folder. It will launch the local preview server and open your default browser to `http://localhost:8000`.

### Option 2: Using Node.js
```powershell
cd "C:\Users\Lenovo\.gemini\antigravity\scratch\lakshmi-footwears"
node server.js
```
Then visit `http://localhost:8000` in Chrome, Edge, Firefox, or Safari.

### Option 3: Direct File Opening
Double-click `index.html` to open directly in any browser.

---

## 🚀 How to Upload to GitHub

When you are ready to upload this project to your GitHub account:

### Step 1: Create a New Repository on GitHub
1. Log in to [GitHub](https://github.com).
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `lakshmi-footwears`).
4. Keep it **Public** (or **Private**).
5. **Do not** check "Initialize with README", ".gitignore", or "license" (these are already created).
6. Click **Create repository**.

### Step 2: Initialize & Push from Your Machine
Open PowerShell or Command Prompt, navigate to the folder, and run:

```powershell
cd "C:\Users\Lenovo\.gemini\antigravity\scratch\lakshmi-footwears"

# 1. Initialize local Git repository
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Lakshmi Footwears website for Baraguru, Sira Taluk"

# 4. Set default branch to main
git branch -M main

# 5. Link your GitHub remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/lakshmi-footwears.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 Free Deployment via GitHub Pages

You can host this website on the internet for **100% free** using GitHub Pages:

1. Go to your repository on GitHub.
2. Click **Settings** (top tab) ➔ **Pages** (left sidebar).
3. Under **Build and deployment** ➔ **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`.
5. Click **Save**.
6. Within 1–2 minutes, your website will be live at:  
   `https://YOUR-USERNAME.github.io/lakshmi-footwears/`

---

## 🔒 Security & Privacy Audit

* ✅ **0 Secret Keys or Passwords**: The codebase contains no private keys, AWS credentials, auth tokens, database strings, or personal passwords.
* ✅ **Safe for Public Repositories**: All code is pure standard HTML, CSS, and client-side JavaScript.
* ✅ **Public Business Data Only**: The only contact information included is the public store phone number (`+91 96202 88249`) and the store address in Baraguru.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE` file for details.
