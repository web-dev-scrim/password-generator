# Password Generator

A simple, secure password generator built with HTML, CSS, and JavaScript. Powered by Vite for development and build tooling.

## Features

- Generate random passwords with customizable length (1-20 characters)
- Include/exclude numbers and symbols via checkboxes
- Click to copy generated passwords to clipboard
- Clean, modern UI with responsive design
- Built with vanilla JavaScript - no frameworks needed

## Development

This project uses Vite for fast development and optimized builds.

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to Netlify via GitHub Actions. On every push to the main branch:

1. The project is built using `npm run build`
2. The `dist` folder is deployed to Netlify
3. Your changes go live automatically

### Setup Deployment

1. Create a Netlify account and new site
2. Add these secrets to your GitHub repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

## Project Structure

```
password-generator/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styles
├── package.json        # npm dependencies and scripts
├── vite.config.js      # Vite configuration
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
└── dist/               # Built files (generated)
```

## Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and responsive design  
- **JavaScript** - Password generation logic
- **Vite** - Build tool and dev server
- **GitHub Actions** - CI/CD pipeline
- **Netlify** - Hosting platform

## License

This project is open source and available under the [MIT License](LICENSE).
