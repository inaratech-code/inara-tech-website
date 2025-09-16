# INARA TECH Website

A modern, responsive company website for INARA TECH built with React, Vite, Tailwind CSS, and Framer Motion. Features enterprise technology solutions, smooth animations, and a premium design focused on digital transformation and business growth.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite for fast development
- **Beautiful Design**: Tailwind CSS with custom design system
- **Smooth Animations**: Framer Motion for engaging interactions
- **Smooth Scrolling**: Lenis.js for buttery smooth scrolling
- **Enterprise Solutions**: Showcase of technology services and solutions
- **Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Clean HTML structure and meta tags
- **Business Focused**: Professional design for enterprise clients

## 📋 Pages

1. **Home** - Hero section with animated intro and smooth scroll navigation
2. **About** - Company information with expertise, values, and team
3. **Services** - Enterprise technology solutions with hover effects and animations
4. **Blog** - Industry insights and technology articles
5. **Contact** - Contact form with validation and business inquiries

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis.js
- **Markdown**: react-markdown, gray-matter
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personalwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Company Information

1. **Update company information** in the following files:
   - `src/pages/Home.jsx` - Hero content and company overview
   - `src/pages/About.jsx` - Company bio, expertise, values
   - `src/pages/Services.jsx` - Technology solutions and services
   - `src/components/Footer.jsx` - Contact information
   - `src/pages/Contact.jsx` - Contact details

2. **Customize the design** in:
   - `tailwind.config.js` - Colors, fonts, animations
   - `src/index.css` - CSS variables and custom styles

3. **Update blog content** in:
   - `content/blogs/` - Add your technology and industry articles

### Business Integration

1. **CRM Integration**:
   - Replace contact form handling in `src/pages/Contact.jsx`
   - Integrate with your preferred CRM system

2. **Analytics Setup**:
   - Add Google Analytics or other tracking tools
   - Update tracking codes in `index.html`

### Enterprise Features

To add enterprise-specific features:

1. **Update the contact form** in `src/pages/Contact.jsx`
2. **Add lead qualification** questions
3. **Integrate with your sales pipeline**

## 📝 Blog System

### Adding Blog Posts

1. Create new markdown files in `content/blogs/`
2. Use the following frontmatter structure:

```markdown
---
title: "Your Technology Article Title"
date: "2024-01-15"
    author: "INARA TECH Team"
excerpt: "Brief description of the article"
thumbnail: "/blog/your-image.jpg"
tags: ["AI", "Digital Transformation", "Technology"]
---

# Your content here
```

### Blog Features

- **Markdown Support**: Full markdown with syntax highlighting
- **Tag System**: Filter posts by tags
- **Industry Insights**: Technology and business articles
- **Responsive Design**: Optimized for all screen sizes

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... other colors
}
```

### Animations

Custom animations are defined in `tailwind.config.js`:

```javascript
animation: {
  "fade-in": "fadeIn 0.5s ease-in-out",
  "slide-up": "slideUp 0.5s ease-out",
  // ... more animations
}
```

### Components

The project uses shadcn/ui components. Add new components:

```bash
npx shadcn@latest add [component-name]
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set build command**: `npm run build`
3. **Set output directory**: `dist`
4. **Deploy**

### Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`
4. **Deploy**

### Other Platforms

The project builds to a static site in the `dist` folder, making it compatible with any static hosting service.

## 🔍 SEO Optimization

- **Meta tags** in `index.html`
- **Semantic HTML** structure
- **Clean URLs** with React Router
- **Optimized images** (add your own)
- **Structured data** ready for implementation

## 📊 Performance

- **Lazy loading** for images and components
- **Optimized bundles** with Vite
- **Minified CSS** with Tailwind
- **Smooth scrolling** with Lenis.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help or have questions:

1. Check the documentation
2. Search existing issues
3. Create a new issue with details

## 🎯 Roadmap

- [ ] Dark mode toggle
- [ ] Newsletter integration
- [ ] Case studies section
- [ ] Client testimonials
- [ ] Analytics integration
- [ ] PWA support

---

**Built with ❤️ by INARA TECH using React, Tailwind CSS, and Framer Motion**
