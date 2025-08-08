# DevBlog - Developer-Centric Blog Theme

A modern, responsive blog theme designed specifically for developers, featuring a beautiful dark green color scheme and clean, professional design.

## 🎨 Features

- **Dark Green Theme**: Elegant dark theme with green accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Static HTML/CSS**: No frameworks or build process required
- **Developer-Focused**: Designed with developers in mind
- **Clean Typography**: Optimized for reading code and technical content
- **Search Functionality**: Built-in search interface
- **Category System**: Organized content with category tags
- **Newsletter Integration**: Subscription form and management

## 📁 File Structure

```
├── index.html          # Main blog page with 10 blog entries
├── post.html           # Individual blog post template
├── about.html          # About page
├── speaking.html       # Speaking engagements page
├── subscribe.html      # Newsletter subscription page
├── search.html         # Search functionality page
├── styles.css          # Main stylesheet
├── script.js           # Minimal JavaScript file
└── README.md           # This file
```

## 🚀 Getting Started

1. **Download the files** to your web server or local development environment
2. **Open `index.html`** in your browser to view the main blog
3. **Customize the content** by editing the HTML files
4. **Modify the styling** by editing `styles.css`
5. **Deploy** to your web hosting service

## 🎯 Pages Overview

### Main Blog (`index.html`)
- Features 10 blog entries in reverse chronological order
- Each post includes date, categories, title, excerpt, and "Read more" link
- Responsive grid layout
- Search functionality in header

### Individual Post (`post.html`)
- Full blog post template with date and categories
- Code block styling for technical content
- Related posts section
- Social sharing links
- Sample content with JavaScript performance optimization

### About Page (`about.html`)
- Developer background and expertise
- Technology stack overview
- Speaking engagements summary
- Contact information

### Speaking Page (`speaking.html`)
- Upcoming and past speaking engagements
- Speaking topics and formats
- Booking information
- Event details and locations

### Subscribe Page (`subscribe.html`)
- Newsletter subscription form
- Benefits of subscribing
- Testimonials from subscribers
- Privacy information

### Search Page (`search.html`)
- Advanced search interface
- Category and date filters
- Popular search tags
- Search tips and guidance

## 🎨 Customization

### Colors
The theme uses CSS custom properties for easy color customization:

```css
:root {
  --primary-green: #2d5a27;
  --secondary-green: #4a7c59;
  --accent-green: #6b8e23;
  --light-green: #9dc183;
  --dark-bg: #1a1a1a;
  --darker-bg: #0f0f0f;
  --text-primary: #e8e8e8;
  --text-secondary: #b0b0b0;
  --text-muted: #888;
  --border-color: #333;
  --code-bg: #2a2a2a;
  --link-color: #9dc183;
  --link-hover: #b8e6a3;
}
```

### Typography
The theme uses system fonts for optimal performance:
- Primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Code: 'Consolas', 'Monaco', 'Courier New', monospace

### Layout
- Maximum width: 1200px
- Responsive breakpoints: 768px and 480px
- Grid-based layouts for blog posts and content sections

## 📱 Responsive Design

The theme is fully responsive with three breakpoints:

- **Desktop**: Full layout with sidebar navigation
- **Tablet (≤768px)**: Adjusted spacing and stacked elements
- **Mobile (≤480px)**: Single-column layout with optimized touch targets

## 🔧 Technical Features

### Code Highlighting
- Syntax highlighting for code blocks
- Inline code styling
- Monospace font for code elements
- Dark background for code blocks

### Performance Optimizations
- Minimal JavaScript (empty file included for future enhancements)
- CSS custom properties for efficient theming
- Optimized images and assets
- Fast loading times

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast color scheme

## 📝 Content Management

### Adding New Blog Posts
1. Copy the structure from `post.html`
2. Update the title, date, and categories
3. Add your content in the `<article class="post-content">` section
3. Add the post to `index.html` in the blog posts section

### Updating Categories
Categories are defined in multiple places:
- `index.html` (blog post listings)
- `search.html` (search filters)
- `subscribe.html` (interest checkboxes)

### Modifying Navigation
Update the navigation menu in all HTML files:
- `index.html`
- `post.html`
- `about.html`
- `speaking.html`
- `subscribe.html`
- `search.html`

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This theme is provided as-is for personal and commercial use. Feel free to modify and customize it for your needs.

## 🤝 Contributing

While this is a static theme, suggestions for improvements are welcome:
- Better accessibility features
- Additional color schemes
- Enhanced responsive design
- Performance optimizations

## 📞 Support

For questions or customization help, please refer to the code comments in the CSS file or create an issue in the repository.

---

**Built with ❤️ for developers**
