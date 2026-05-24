# Aetheris D2C Premium Website

## Overview

This repository hosts the **Aetheris D2C Premium Website** – a modern, high‑performance landing page for the Aetheris red‑light therapy product line. The site showcases:

- A sleek, glass‑morphism UI with vibrant gradients and smooth micro‑animations.
- Interactive product explorer, cellular simulator, and AI‑driven treatment planner.
- Full e‑commerce flow (shopping cart, dynamic subtotal, checkout placeholder).
- All prices displayed in **Indian Rupees (INR)** using the conversion rate `1 USD = 110 INR`.
- Optimized SEO meta tags, Open Graph data, and accessibility considerations.

> **Note:** The UI is built with vanilla HTML, CSS, and JavaScript – no frameworks are required.

### Recent Updates
- Deleted `mobile` branch; master restored to commit `23b7dd8`.
- Fixed merge conflict in `app.js` and added responsive hamburger menu.
- Reverted repository to the stable version with proper logo spacing and subtitle alignment.
- Live development server can be started with `python -m http.server 8000`.


---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Structure** | HTML5 |
| **Styling** | Vanilla CSS (custom properties, glass‑morphism, responsive grid) |
| **Logic** | Pure JavaScript (ES6) |
| **Assets** | PNG images, generated hero‑device mockups |
| **Server** | Simple static server (`python -m http.server 8000`) for local testing |

---

## Features

- **Dynamic Pricing** – Prices are stored in `data-price` attributes and displayed with the `₹` symbol.
- **Cart Drawer** – Slide‑out drawer that updates subtotal in real time.
- **Cellular Simulator** – Animated ATP particles visualizing mitochondrial activity.
- **Treatment Planner Quiz** – AI‑generated protocol based on user inputs.
- **Responsive Design** – Mobile‑first layout with a mobile menu toggle.
- **SEO Optimisation** – Title, description, keywords, and Open Graph tags.
- **Accessibility** – ARIA labels, focus management for interactive elements.

---

## Getting Started (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/vibhutajane/Premium-D2C-Website.git
   cd Premium-D2C-Website
   ```

2. **Run a local static server** (any web server works; the simplest is Python’s built‑in server):
   ```bash
   python -m http.server 8000
   ```
   Open your browser at `http://localhost:8000` to view the site.

3. **Edit files** – The source files are:
   - `index.html` – Markup and product cards.
   - `styles.css` – All styling, gradients, and animations.
   - `app.js` – Cart logic, quiz flow, and UI updates.
   - `assets/` – Images used throughout the site.

4. **Make changes** and refresh the browser to see updates instantly.

---

## Deploying

Because the site is a static HTML/CSS/JS bundle, it can be deployed to any static‑hosting platform:

- **GitHub Pages** – Enable the repository’s *GitHub Pages* source on the `master` (or `main`) branch.
- **Netlify / Vercel** – Connect the repo; the platform will automatically detect the static site and publish it.
- **Other CDNs** – Upload the `public` folder to a CDN (e.g., Cloudflare Pages, AWS S3 + CloudFront).

No build step is required; the files can be served directly.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make your changes, ensuring the existing design language (gradient palette, glass‑morphism, micro‑animations) is respected.
4. Run the local server to verify UI and functionality.
5. Commit with a clear message and push to your fork.
6. Open a Pull Request against `master`.

---

## License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

## Contact

For questions, bug reports, or design discussions, please open an issue on GitHub or contact the repository owner.

---

**Enjoy customizing the Aetheris D2C Premium Website!**
