# DataPulse Analytics Dashboard

![dashboard_screenshot](screenshots/dashboard_screenshot.png)

A modern, fully-featured responsive dashboard template with collapsible sidebar navigation, dark mode support, and elegant UI components.

## 🌟 Features

- **Collapsible Sidebar**: Smooth expand/collapse functionality with icon-only compact mode
- **Dark Mode Toggle**: Seamless light/dark theme switching with persistent state
- **Responsive Design**: Optimized for all screen sizes and devices
- **Smart Tooltips**: Contextual tooltips appear automatically when sidebar is collapsed
- **Active Link Highlighting**: Visual feedback showing current active navigation item
- **Integrated Search**: Search functionality with auto-expand behavior
- **Profile Section**: User profile display with avatar, name, email, and online status indicator
- **Integrations Section**: Quick access panel for integrated third-party services
- **Premium Icons**: Material Symbols for UI controls and custom SVG icons for navigation
- **Smooth Animations**: Polished transitions and hover effects throughout

## 📁 Project Structure

```
responsive_dashboard_template/
├── index.html          # Main HTML structure
├── style.css           # Complete styling with CSS variables
├── index.js            # JavaScript for sidebar & theme functionality
├── assets/
│   ├── Data_Pulse_Favicon.png    # Browser tab favicon
│   ├── Data_Pulse_logo.png       # Company logo
│   ├── dashboard-icon.svg        # Dashboard navigation icon
│   ├── analytics-icon.svg        # Analytics navigation icon
│   ├── reports-icon.svg          # Reports navigation icon
│   ├── calendar-icon.svg         # Calendar navigation icon
│   ├── messages-icon.svg         # Messages navigation icon
│   ├── logout-icon.svg           # Logout icon
│   ├── search-icon.svg           # Search icon
│   ├── wix-studio.png            # Integration logo example
│   └── natalia.jpg               # User avatar image
└── screenshots/
    └── dashboard_screenshot.png  # README preview image
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required - it's ready to use!

## 💡 Usage

### Sidebar Navigation
- Click the **menu icon** (☰) to toggle sidebar between expanded and collapsed states
- Hover over icons when collapsed to see tooltips
- Click any navigation link to see active state highlighting

### Theme Toggle
- Click the **sun/moon icon** to switch between light and dark modes
- Theme preference is remembered across sessions

### Search
- Click the search input to automatically expand sidebar (if collapsed)
- Type to search (functionality can be customized in `index.js`)

## 🎨 Color Scheme

### Light Mode
```css
--primary: #171D7D          /* Primary brand color */
--sidebar-bg: #FFFFFF       /* Sidebar background */
--bg: #F2F3F5              /* Main background */
--text: #0E0E0F            /* Primary text */
--text-gray: #8E9196       /* Secondary text */
--text-link: #171D7D       /* Link color */
```

### Dark Mode
```css
--primary: #4B8BFA          /* Bright primary for dark mode */
--sidebar-bg: #2A303A       /* Dark sidebar */
--bg: #1A1F25              /* Dark main background */
--text: #F2F3F5            /* Light text */
--text-gray: #A0A3A9       /* Light secondary text */
--text-link: #357BFF       /* Bright link color */
```

## ⚙️ Customization

### Changing Colors
Edit CSS variables in `style.css`:

```css
:root {
    --primary: #171D7D;      /* Change brand color */
    --sidebar-bg: #FFFFFF;   /* Change sidebar background */
    /* ... customize other variables */
}
```

### Adding Navigation Items
Add new items in `index.html` within the `<ul>` in `.sidebar-links.menu-links`:

```html
<li>
    <a href="#your-page" title="Your Page" class="tooltip">
        <svg><!-- your icon --></svg>
        <span class="link hide">Your Page</span>
        <span class="tooltip__content">Your Page</span>
    </a>
</li>
```

### Adding Integrations
Add integration items in the `.integrations` section:

```html
<li>
    <a href="#integration" title="Integration Name" class="tooltip">
        <img src="assets/your-logo.png" alt="Integration Name">
        <span class="link hide">Integration Name</span>
        <span class="tooltip__content">Integration Name</span>
    </a>
</li>
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables, Flexbox, and Grid
- **Vanilla JavaScript** - No frameworks, lightweight and fast
- **Google Fonts** - Lato & Montserrat font families
- **Material Symbols** - Icon font for UI controls

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Requirements:**
- CSS Flexbox support
- CSS Grid support
- CSS Custom Properties (variables)
- ES6 JavaScript

## 📄 License

Free to use for personal and commercial projects.

---

**Created by:** Abdulazeez  
**Repository:** [Datapulse-Dashboard](https://github.com/BrightDev10-Cloud/Datapulse-Dashboard)
