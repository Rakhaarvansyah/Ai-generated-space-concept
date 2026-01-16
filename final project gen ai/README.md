# Industrial Cafe Portfolio

Modern, responsive web portfolio showcasing 4 AI-generated industrial cafe design concepts **with live AI generation feature**.

## 🎨 Project Overview

This portfolio demonstrates the use of generative AI in design and interior architecture, featuring:
- Four pre-designed industrial cafe concepts
- **Live AI generation tool** to create custom cafe concepts on-demand
- Interactive gallery with detailed concept information

## ✨ NEW: AI Generation Feature

Generate your own custom industrial cafe concepts directly in the browser using OpenAI's DALL-E 3 API:

- **4 Preset Styles**: Urban Loft, Minimalist, Vintage, Modern Factory
- **Atmosphere Control**: Bright & Airy, Warm & Cozy, Dark & Moody, Sophisticated
- **Custom Descriptions**: Add specific elements, materials, and details
- **HD Quality**: 1792x1024 resolution images
- **Download**: Save generated concepts instantly

### How to Use AI Generation:

1. **Get OpenAI API Key:**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account and generate an API key
   - Copy your API key (starts with `sk-...`)

2. **Generate Your Concept:**
   - Enter your API key in the form (stored locally in browser)
   - Choose a preset style or select "Custom"
   - Pick an atmosphere
   - Add custom details (optional)
   - Click "Generate Concept"
   - Wait 10-30 seconds for AI to create your image

3. **Download & Use:**
   - Download the generated image
   - Regenerate if you want variations
   - Use in your portfolio or projects

**Note:** Your API key is stored locally in your browser and never sent to our servers. Each generation costs approximately $0.04 USD through OpenAI's API.

1. **Urban Loft Cafe** - High ceilings with exposed brick and concrete
2. **Minimalist Industrial** - Clean lines and refined simplicity
3. **Vintage Industrial** - Retro elements with warm, nostalgic touches
4. **Modern Factory** - Sleek, contemporary industrial aesthetic

## 🚀 Features

- **Live AI Generation** - Create custom cafe concepts with DALL-E 3 API
- **4 Preset Styles** - Urban Loft, Minimalist, Vintage, Modern Factory
- **Atmosphere Control** - Customize lighting and mood
- **Download Generated Images** - Save concepts in HD quality
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Interactive Gallery** - Hover effects and smooth animations
- **Modal/Lightbox** - Detailed view of each design concept
- **Modern UI/UX** - Industrial-themed dark design
- **Performance Optimized** - Fast loading, smooth animations
- **Accessibility** - Semantic HTML and keyboard navigation

## 📁 Project Structure

```
industrial-cafe-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles and animations
├── js/
│   └── script.js          # Interactive functionality
├── images/
│   └── concepts/          # Placeholder for AI-generated images
│       ├── concept-1.jpg  # Urban Loft Cafe
│       ├── concept-2.jpg  # Minimalist Industrial
│       ├── concept-3.jpg  # Vintage Industrial
│       └── concept-4.jpg  # Modern Factory
└── README.md              # This file
```

## 🎯 How to Use

1. **View the Portfolio:**
   - Open `index.html` in a web browser
   - Explore the four design concepts
   - Click "View Details" to see full descriptions

2. **Add Your AI-Generated Images:**
   - Generate images using AI tools (DALL-E, Midjourney, etc.)
   - Save them as `concept-1.jpg`, `concept-2.jpg`, `concept-3.jpg`, `concept-4.jpg`
   - Place them in the `images/concepts/` folder
   - Recommended resolution: 1920x1200 or higher

3. **Customize Content:**
   - Edit concept descriptions in `js/script.js` (conceptsData object)
   - Modify colors in `css/styles.css` (CSS variables at the top)
   - Update text in `index.html`

## 🎨 AI Image Generation Prompts

### Concept 1: Urban Loft Cafe
```
A modern industrial cafe interior with high ceilings, exposed brick walls, raw concrete surfaces, large warehouse windows with natural light, Edison bulb pendant lights, mix of wooden and metal furniture, plants in concrete planters, warm atmospheric lighting, photorealistic, architectural photography, 4K quality
```

### Concept 2: Minimalist Industrial Cafe
```
Minimalist industrial cafe interior, clean lines, monochromatic color scheme with warm accents, polished concrete floor, white-washed brick, black steel framework, simple modern furniture, strategic lighting, spacious open layout, negative space, photorealistic, architectural photography, 4K quality
```

### Concept 3: Vintage Industrial Cafe
```
Vintage industrial cafe interior from 1920s-1950s era, aged brick walls, distressed leather seating, antique industrial machinery as decor, warm Edison bulb lighting, reclaimed wood surfaces, brass and copper fixtures, nostalgic atmosphere, rich textures, photorealistic, architectural photography, 4K quality
```

### Concept 4: Modern Factory Cafe
```
Contemporary industrial cafe interior, sleek metal surfaces, glass partitions, brushed stainless steel, polished concrete with metallic finish, LED accent lighting, modern furniture with industrial influences, cutting-edge design, futuristic yet industrial, photorealistic, architectural photography, 4K quality
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties, Animations
- **JavaScript (Vanilla)** - No frameworks required
- **Google Fonts** - Inter & Playfair Display

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Educational Context

This project is designed for the "Using GenAI in Design & Interior Architecture" course, demonstrating how AI technologies can be integrated into design workflows for commercial spaces.

## 📝 Customization Tips

1. **Colors:** Update CSS variables in `:root` section of `styles.css`
2. **Fonts:** Change Google Fonts links in `index.html` and update `--font-primary` and `--font-display` variables
3. **Content:** Edit `conceptsData` object in `script.js` to change descriptions and features
4. **Layout:** Modify grid settings in `.gallery-grid` class for different arrangements

## 🚀 Deployment

To deploy this portfolio:

1. **GitHub Pages:**
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Your site will be live at `https://yourusername.github.io/repo-name`

2. **Netlify/Vercel:**
   - Drag and drop the project folder
   - Instant deployment

3. **Local Hosting:**
   - Use VS Code Live Server extension
   - Or run: `python -m http.server 8000`

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio projects!

---

**Note:** This portfolio uses placeholder images. Replace them with your actual AI-generated cafe design concepts for the best results.
