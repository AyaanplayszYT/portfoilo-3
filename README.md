
# Midnight Canvas Portfolio

A modern, responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. Showcase your projects, skills, and contact information with a beautiful UI.

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view in your browser.

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```


## Project Structure & Editing Guide

```
src/
	components/
		Hero.tsx        # Hero section (landing)
		About.tsx       # About section
		Projects.tsx    # Projects showcase
		Skills.tsx      # Skills display
		Contact.tsx     # Contact form
		Footer.tsx      # Footer content
		Navigation.tsx  # Navigation bar
		NavLink.tsx     # Navigation link item
		ui/             # Reusable UI elements (buttons, cards, dialogs, etc.)
	hooks/
		use-mobile.tsx  # Mobile detection hook
		use-toast.ts    # Toast notification hook
	lib/
		utils.ts        # Utility functions
	pages/
		Index.tsx       # Main page
		NotFound.tsx    # 404 page
	App.tsx           # Main app component (layout, routing)
	main.tsx          # Entry point
	App.css           # Global styles
	index.css         # Tailwind base styles
```

### Where to Edit Content
- **Hero, About, Projects, Skills, Contact, Footer**: Edit content in `src/components/` files named above.
- **Navigation**: Edit navigation links in `Navigation.tsx` and `NavLink.tsx`.
- **UI Elements**: Customize or add reusable UI in `src/components/ui/`.
- **Pages**: Add or edit pages in `src/pages/`.
- **Styles**: Change global styles in `src/App.css` and `src/index.css`.
- **Hooks & Utils**: Add custom logic in `src/hooks/` and helper functions in `src/lib/`.

### Remove Unwanted Sections
- Delete or comment out any component file in `src/components/` to remove a section from the site.
- Remove unused UI elements from `src/components/ui/`.
- Delete unused pages from `src/pages/`.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
