<p align="center">
  <a href="https://chuckcopeland.com" target="_blank">
    <img src="public/assets/img/logo.png" alt="Project Logo" width="128">
  </a>
</p>

# 2026 Portfolio

This repository contains the source code for the personal portfolio website built with Astro.

## About The Project

The purpose of this project is to create a portfolio website to display samples of my work for potential clients and the general public.



### Key Features

*   **Astro-powered:** Built with the [Astro](https://astro.build/) web framework for a fast, content-focused experience.
*   **Image & Video Galleries:** Separate, organized galleries for photos and videos.
*   **Dynamic Video Pages:** Individual pages are generated for each video.
*   **Responsive Design:** Styled with CSS for a consistent experience across devices.
*   **Component-Based:** Uses Astro components for reusable UI elements like the Navbar and Footer.

## Technologies Used

*   [Astro](https://astro.build/): The web framework for building the site.
*   [Node.js](https://nodejs.org/): The runtime environment for the project.
*   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): For custom styling.
*   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): For interactive elements.
*   **Fonts**:
    *   `@fontsource/inter`
    *   `@fontsource/oswald`
    *   `@fontsource/roboto`

## Project Structure

```
k:/Web Design/CC.com-2026/2026-portfolio/
├── public/                     # Static assets (images, CSS, JS, fonts)
│   ├── assets/
│   └── favicon.svg
├── src/
│   ├── components/             # Reusable Astro components (Navbar.astro, Footer.astro)
│   ├── data/                   # JSON data for galleries (photos.json, videos.json)
│   ├── layouts/                # Main site layout (Layout.astro)
│   ├── pages/                  # Site pages and routes (*.astro)
│   │   ├── video/[id].astro    # Dynamic route for video details
│   └── styles/                 # Global styles (global.css)
├── astro.config.mjs            # Astro configuration file
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/NCHurricane/2026-portfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd 2026-portfolio
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Project

Use the following scripts to run the project locally:

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Starts the local development server on `http://localhost:4321`. |
| `npm run build` | Builds the static site for production to the `./dist/` folder. |
| `npm run preview`| Serves the production build locally for preview. |

## Deployment

This Astro project can be deployed to any static site hosting service. Refer to the [Astro documentation on deploying](https://docs.astro.build/en/guides/deploy/) for guides on deploying to services like Netlify, Vercel, GitHub Pages, etc.

---

_This README was generated based on the project structure._
