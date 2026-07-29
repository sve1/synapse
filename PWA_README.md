# Synapse PWA - Mind Mapping & Task Management

**Think.Plan.Execute** - A powerful, offline-first progressive web app for organizing your personal and professional tasks.

## 🚀 Quick Start

### For Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### For GitHub Pages Deployment

1. **Build the app**:
   ```bash
   pnpm build
   ```

2. **Copy to deployment folder**:
   ```bash
   cp -r dist/public/* github-pages-dist/
   ```

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Enable GitHub Pages** in repository settings (Settings → Pages → Deploy from branch → main)

Your app will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## ✨ Features

### 📊 Mind Mapping
- Visual mind map with personal and professional categories
- Drag-and-drop category reordering
- Color-coded organization
- Real-time visual connections

### ✅ Task Management
- Create tasks with descriptions, priorities, and due dates
- Organize into expandable categories
- Checklist support for complex tasks
- Mark tasks complete with visual feedback

### 🔍 Search & Filter
- Real-time search across tasks and categories
- Task progress indicators
- Overdue task highlighting
- Quick category navigation

### 📱 Progressive Web App
- **Installable**: Add to home screen on mobile/desktop
- **Offline**: Works completely without internet
- **Fast**: Instant loading with service worker caching
- **Private**: All data stored locally, never sent to servers

## 🎨 Design

- **Dark theme** with warm accents
- **Responsive** layout for all screen sizes
- **Smooth animations** and transitions
- **Intuitive** interface with drag-and-drop support

## 💾 Data Storage

- All data stored in browser's `localStorage`
- No account required
- No data sent to servers
- Automatic persistence

### Backup Your Data

```javascript
// Export: Copy from browser console
localStorage.getItem('mindmap-app-data')

// Import: Paste in browser console
localStorage.setItem('mindmap-app-data', 'YOUR_DATA_HERE')
```

## 📦 Project Structure

```
client/
├── public/
│   ├── manifest.json      # PWA configuration
│   ├── sw.js              # Service worker
│   └── icon-*.png         # App icons
├── src/
│   ├── components/
│   │   └── MindMapTasks.tsx    # Main app component
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   └── SplashScreen.tsx    # Splash screen
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
└── index.html             # HTML template
```

## 🛠️ Development

### Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format
```

### Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Service Worker** - Offline support

## 📱 Installation

### Mobile (iOS/Android)
1. Open app in browser
2. Tap Share → Add to Home Screen
3. Name and install

### Desktop (Windows/Mac/Linux)
1. Open app in Chrome/Edge
2. Click Install button
3. Confirm installation

## 🌐 Browser Support

- Chrome/Edge 40+
- Firefox 44+
- Safari 11.1+
- iOS Safari 11.3+
- Chrome Android 40+

## 📝 License

MIT License - Feel free to use and modify

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📚 Learn More

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [GitHub Pages Deployment](./GITHUB_PAGES_DEPLOYMENT.md)

---

**Think.Plan.Execute.** 🧠✨
