# Responsive Dashboard Template

A modern, responsive dashboard template with a collapsible sidebar navigation.

## Features

- **Collapsible Sidebar**: Expand/collapse functionality for better space management
- **Responsive Design**: Works seamlessly on all screen sizes
- **Tooltip Support**: Tooltips appear when sidebar is collapsed
- **Active Link Highlighting**: Visual feedback for current page
- **Search Functionality**: Integrated search with auto-expand on focus
- **Profile Section**: User profile with avatar and email
- **Integrations Section**: Quick access to integrated services

## Required Assets

To make this dashboard fully functional, you need to add the following assets to the `assets/` folder:

1. **logo.svg** - Company logo (SVG format)
2. **expand-btn.svg** - Expand button icon (hamburger menu)
3. **expand-btn-closed.svg** - Collapse button icon (close/X icon)
4. **wix-studio.png** - Integration icon example
5. **natalia.jpg** - User avatar image

### SVG Icons Needed in HTML

You'll also need to add SVG icons for the navigation items. Replace the `<!-- svg item -->` comments with actual SVG icons for:
- Dashboard
- Analytics
- Reports
- Calendar
- Messages
- Logout

## Usage

1. Open `index.html` in your browser
2. Click the expand/collapse button to toggle sidebar width
3. Click on navigation links to see active state
4. Click search input to auto-expand sidebar (if collapsed)

## Color Scheme

The template uses CSS custom properties (variables) for easy theming:
- Primary Color: #4B8BFA (Blue)
- Background: #F2F3F5 (Light Gray)
- Sidebar: #FFFFFF (White)
- Text: #0E0E0F (Dark)
- Links: #357BFF (Blue)

## Customization

To customize colors, edit the `:root` variables in `style.css`:

```css
:root {
    --primary: #4B8BFA;
    --sidebar-bg: #FFFFFF;
    --text: #0E0E0F;
    /* ... more variables */
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS Custom Properties support required

## License

Free to use for personal and commercial projects.
# Datapulse-Dashboard
