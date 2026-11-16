# MyPortfolio

[![Deploy Portfolio](https://github.com/see-why/MyPortfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/see-why/MyPortfolio/actions/workflows/deploy.yml)
[![Linters](https://github.com/see-why/MyPortfolio/actions/workflows/linters.yml/badge.svg)](https://github.com/see-why/MyPortfolio/actions/workflows/linters.yml)

The personal portfolio of Osita Cyril Iyadi, a senior software engineer. It covers background, skills, experience, featured projects and a contact form, in a responsive single page with a light and dark theme.

**[See it live →](https://see-why.github.io/MyPortfolio/)**

![Screenshot of the portfolio homepage](docs/screenshot.png)

## Features

- Responsive layout that works from phone to desktop
- Light and dark theme toggle
- Featured projects rendered from a single data file, with aligned cards and live links
- Contact form that sends email through EmailJS
- Favicon, Apple touch icon and web manifest
- Linted in CI (Stylelint, Webhint, Lighthouse) and deployed automatically on every merge to `main`

## Built With

- HTML, JavaScript and [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- [Font Awesome](https://fontawesome.com/) for icons
- [EmailJS](https://www.emailjs.com/) for the contact form
- Node.js build script (`build.js`) and Bash (`scripts/`)
- GitHub Actions and GitHub Pages for CI and hosting

## Project structure

```text
index.html          page markup
js/data.js          skills, experience and project content
js/main.js          renders the cards and handles the contact form
js/spa.js           in-page navigation for the privacy and terms views
assets/             project and profile images
favicon/            generated icon set (see scripts/convert_favicon.sh)
docs/               README screenshot
build.js            copies the site into dist/ and injects environment variables
```

To change what the site says (projects, skills, experience), edit `js/data.js`.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer, with npm
- Optional: [ImageMagick](https://imagemagick.org/) 7, only if you regenerate the favicons

### Setup

```bash
git clone https://github.com/see-why/MyPortfolio.git
cd MyPortfolio
npm install
```

The contact form needs EmailJS credentials. Create `.env.local` in the project root:

```bash
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
```

Without them the site still builds, but the contact form will not send.

### Usage

Build the site and serve it locally with live reload:

```bash
npm run dev
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the site into `dist/` |
| `npm run deploy` | Publishes `dist/` to the `gh-pages` branch |
| `npm start` | Serves the project root with live reload, without building |

### Linting

```bash
npx stylelint --allow-empty-input "**/*.{css,scss}"
npx hint --telemetry=off .
```

Lighthouse and Webhint also run in CI on every pull request.

### Regenerating the favicons

The icon set is generated from `favicon.svg`:

```bash
bash scripts/convert_favicon.sh
```

## Deployment

Merging to `main` runs the **Deploy Portfolio** workflow. It builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves at <https://see-why.github.io/MyPortfolio/>.

The workflow reads `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID` and `EMAILJS_TEMPLATE_ID` from the repository secrets.

## Author

👤 **Osita Cyril Iyadi**

- GitHub: [@see-why](https://github.com/see-why)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## License

Released under the [MIT License](LICENSE).

## Acknowledgments

- My dog Perry, for the comforting lick here and there
