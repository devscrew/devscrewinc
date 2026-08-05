# DevsCrew Inc. Website

This is the official website for DevsCrew Inc., a company specializing in NetSuite and SuiteCommerce implementation, customization, and integration services.

## Project Structure

```
src/
├── assets/
│   └── scss/
│       ├── index.scss          # Main SCSS entry point
│       └── variables.scss      # Sass variables
├── components/
│   ├── Header.jsx              # Header component with styling
│   ├── Header.scss             # Header styles
│   ├── Footer.jsx              # Footer component with styling
│   └── Footer.scss             # Footer styles
├── pages/
│   ├── Home.jsx                # Home page component
│   ├── Home.scss               # Home page styles
│   ├── AboutUs.jsx             # About Us page component
│   ├── AboutUs.scss            # About Us page styles
│   ├── Contact.jsx             # Contact page component
│   ├── Contact.scss            # Contact page styles
│   ├── Services.jsx            # Services page component
│   └── Services.scss           # Services page styles
└── main.jsx                    # Main entry point
```

## Features

- Responsive design using Sass variables and CSS custom properties
- Modern React components with proper styling imports
- Clean, maintainable SCSS structure with reusable components
- Mobile-friendly navigation and layout
- Consistent color scheme and typography
- Fixed header dropdown menu functionality for both mobile and desktop

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Header Menu Notes

The header dropdown menus have been fixed to work properly on both mobile and desktop:
- Mobile users can toggle nested dropdowns with clicks
- Desktop users get hover-based dropdown functionality  
- All menu items maintain consistent styling across devices

### Dependencies

This project uses:
- React 18+
- Vite for bundling
- Sass for styling
- React Router for navigation

## Styling Approach

All styles are organized in a modular way:
- Global styles in `index.scss`
- Component-specific styles in individual `.scss` files
- Variables defined in `variables.scss` for consistent theming
- Responsive design using CSS media queries