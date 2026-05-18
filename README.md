# 🔍 Forensic Investigation Website

> Interactive educational platform for criminal forensics investigation - Portuguese Language

## 📋 Overview

A cinematic, interactive investigation board featuring 6 comprehensive sections on criminal forensics investigation. Each section includes detailed information, evidence linking, and interactive elements.

## 🎯 Features

### Core Functionality
- **Full-Screen Investigation Board** - Realistic detective wall with pinned evidence
- **6 Interactive Sections** - Complete Portuguese content organized by forensics specialty
- **Red String Connections** - SVG-based visual links between evidence and suspects
- **Modal System** - Click elements to reveal full detailed content
- **Draggable Elements** - Move evidence around the board
- **Zoom & Pan Controls** - Navigate the investigation board
- **Evidence Linking** - Connect related evidence together
- **Case Timeline** - Track investigation progress

### Visual Design
- Dark cinematic background
- Realistic corkboard texture and styling
- Smooth animations and transitions
- Hover effects on all interactive elements
- Color-coded categories by section
- Responsive layout

### Advanced Features
- Keyboard shortcuts (ESC, DELETE, CTRL+Wheel)
- Mobile touch support
- Animation queue system
- Connection highlighting
- Smooth scroll animations
- Parallax effects
- Typewriter text effects
- Confetti animations for success moments
- Toast notifications
- Ripple effects on buttons

## 📁 File Structure

```
forensic-investigation-website/
├── index.html                    # Main HTML file
├── css/
│   ├── main.css                 # Core styling and layout
│   ├── investigation-board.css  # Board-specific styles
│   └── animations.css           # Animation keyframes
├── js/
│   ├── main.js                  # Investigation data and initialization
│   ├── investigation-board.js   # Board interaction logic
│   └── animations.js            # Animation utilities
└── README.md                    # This file
```

## 🧬 Content Sections

### 1. 🔦 Introdução à Investigação Criminal
**By: Alana e Laura**
- O que é investigação criminal
- Como uma investigação começa
- Preservação da cena do crime
- Importância das evidências
- Apresentação do caso fictício
- Introdução das pistas encontradas

### 2. 🩹 Impressões Digitais e Evidências
**By: Julia e Rafa**
- O que são evidências físicas
- Tipos de impressões digitais
- Como digitais são coletadas
- Pegadas e marcas na cena
- Objetos encontrados no local
- Preservação das provas
- Impressão digital encontrada no caso
- Relação entre evidências e suspeitos

### 3. 🧬 Perícia Biológica e DNA
**By: Gaby e Bia**
- O que é perícia biológica
- O que é DNA
- Como o DNA é coletado
- Sangue, cabelo e saliva como evidências
- Comparação genética
- Identificação por DNA
- DNA encontrado no caso
- Limitações do DNA na investigação

### 4. 🔬 Tecnologia Forense
**By: Sofia e Emili**
- O que é tecnologia forense
- Investigação em celulares e computadores
- Mensagens apagadas
- Rastreamento de localização
- GPS e histórico digital
- Câmeras de segurança
- Redes sociais como evidência
- Dados encontrados no caso
- Importância da tecnologia em crimes atuais

### 5. 🧠 Psicologia Criminal
**By: Keth e Luan**
- O que é psicologia criminal
- Relação entre cérebro e comportamento
- Motivações do crime
- Crime planejado x impulsivo
- Perfil criminal
- Comportamentos analisados em suspeitos
- Influência da infância e ambiente
- Por que cada criminoso reage diferente
- Como a psicologia ajuda a investigação
- Relação da psicologia com as provas do caso

### 6. 🕶️ Reconstrução do Caso
**By: Nay e Jhulie**
- Organização das pistas encontradas
- Ligação entre todas as áreas da investigação
- Explicação final do caso
- Apresentação dos suspeitos
- Interação investigativa
- Conclusão/revelação final do caso

## 🚀 Quick Start

1. Open `index.html` in a modern web browser
2. Explore the investigation board by clicking on pinned elements
3. Use keyboard shortcuts for navigation:
   - **ESC** - Close modals
   - **DELETE** - Remove selected element
   - **CTRL + Scroll** - Zoom in/out
   - **Arrow Keys** - Move selected element

## 🎮 Interactivity Guide

### Clicking Elements
- Click any pinned element on the board to open detailed information in a modal
- Each element is color-coded by its section
- Hover effects show when an element is interactive

### Dragging Elements
- Click and drag any element to reposition it on the board
- Elements snap to grid for organized placement
- Drag handles appear on hover

### String Connections
- Red strings visually link related evidence
- Hover over strings to highlight connected elements
- Click to see the relationship details

### Timeline View
- Access the case timeline to see investigation progress
- Events are organized chronologically
- Each event shows related evidence and connections

### Search & Filter
- Use the search box to find specific evidence or topics
- Filter by section or evidence type
- Results highlight matching elements on the board

## 🎨 Customization

### Changing Colors
Edit `css/investigation-board.css` to modify:
- Background colors
- Accent colors
- String connection colors
- Category colors

### Adding New Evidence
Edit `js/main.js` to add new evidence items:
```javascript
const newEvidence = {
    id: 'unique-id',
    title: 'Evidence Title',
    section: 'section-name',
    description: 'Full description',
    category: 'category-type',
    connections: ['connected-id-1', 'connected-id-2']
};
```

### Modifying Animations
Edit `css/animations.css` to customize:
- Animation durations
- Easing functions
- Transform effects
- Keyframe sequences

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1366px+)
- Tablet (768px+)
- Mobile (320px+)

Touch controls are optimized for mobile devices.

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `ESC` | Close modal |
| `DELETE` | Remove selected element |
| `CTRL + Scroll` | Zoom board |
| `Arrow Keys` | Move element |
| `CTRL + Z` | Undo last action |
| `CTRL + Y` | Redo last action |
| `CTRL + F` | Search evidence |
| `CTRL + T` | Toggle timeline |
| `CTRL + C` | Connect selected elements |

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - No external dependencies
- **SVG** - Vector graphics for connections
- **LocalStorage** - Persist investigation state

## 📊 Performance

- Optimized animations using requestAnimationFrame
- Lazy loading of modal content
- CSS transforms for smooth 60fps animations
- Minimal reflows and repaints
- Efficient event delegation

## 🐛 Known Limitations

- SVG connections may overlap on very dense boards
- Some animations may be reduced on low-end devices
- LocalStorage limited to ~5MB per domain

## 📝 License

Educational project - Free to use and modify

## 👥 Credits

**Created by students:**
- Alana & Laura - Criminal Investigation Introduction
- Julia & Rafa - Fingerprints and Evidence
- Gaby & Bia - Biological Forensics and DNA
- Sofia & Emili - Forensic Technology
- Keth & Luan - Criminal Psychology
- Nay & Jhulie - Case Reconstruction

## 🎓 Educational Purpose

This website serves as an interactive educational tool to teach students about criminal forensics investigation. It presents realistic scenarios and evidence linking to help students understand how different forensic disciplines work together to solve crimes.

## 🔐 Privacy & Security

- No data is sent to external servers
- All investigation data stored locally in browser
- No tracking or analytics
- Safe for educational use in schools

## 📞 Support

For issues or questions, please refer to the code comments or review the documentation in each file.

---

**Last Updated:** 2026-05-18  
**Version:** 1.0.0  
**Status:** Production Ready ✅