# 🛠️ Development Guide

## Architecture Overview

```
forensic-investigation-website/
├── HTML Structure
│   ├── Board Container
│   ├── Pinned Elements Layer
│   ├── SVG Connections Layer
│   ├── UI Controls Layer
│   ├── Modal System
│   └── Utility Elements
├── CSS Layers
│   ├── Global Styles
│   ├── Layout Grid
│   ├── Component Styles
│   ├── Animation Keyframes
│   └── Responsive Queries
└── JavaScript Modules
    ├── Data Management (main.js)
    ├── Board Logic (investigation-board.js)
    └── Animation System (animations.js)
```

## Code Organization

### main.js
**Responsibilities:**
- Investigation data structure
- Evidence definitions
- Suspect information
- Timeline events
- Section metadata
- Board initialization

**Key Objects:**
```javascript
- investigationData: Complete case structure
- sectionData: 6 forensic sections with details
- suspectProfiles: Suspect information
- evidenceCollection: All pinned elements
- timeline: Investigation chronology
```

### investigation-board.js
**Responsibilities:**
- Board initialization
- Element rendering
- Event handling
- Dragging logic
- Connection drawing
- Modal management
- Search/filter
- Zoom/pan controls

**Key Classes:**
```javascript
- InvestigationBoard: Main board controller
- Element: Individual pinned element
- Connection: Red string relationship
- Modal: Content display system
- SearchManager: Search and filter
```

### animations.js
**Responsibilities:**
- Animation queuing
- Effect creation
- Transition management
- Utility animations
- Notification system

**Key Classes:**
```javascript
- AnimationController: Central animation management
- TypewriterEffect: Text animation
- ParallaxEffect: Scroll effects
- ConfettiAnimation: Success animations
- Notification: Toast messages
```

## Data Flow

### Initialization Flow
1. HTML loads
2. CSS files parsed
3. JavaScript loads
4. investigationData loaded from main.js
5. InvestigationBoard initialized
6. Elements rendered to DOM
7. SVG connections drawn
8. Event listeners attached
9. LocalStorage restored
10. Page ready for interaction

### Interaction Flow
1. User action detected
2. Event handler triggered
3. Data updated if needed
4. DOM modified
5. Animations queued
6. State saved to LocalStorage
7. UI reflects changes

### Modal Opening Flow
1. User clicks element
2. Modal data retrieved
3. Content formatted
4. Modal displayed with animation
5. Event listeners attached to modal
6. User can interact with content
7. Click outside or ESC closes modal

## Adding New Features

### Adding New Evidence

**Step 1:** Define evidence in main.js
```javascript
const newEvidence = {
    id: 'evidence-unique-id',
    title: 'Evidence Title',
    section: 'fingerprints', // or other section
    description: 'Full description',
    category: 'photo', // photo, note, document, suspect
    position: { x: 100, y: 100 },
    connections: ['related-evidence-id'],
    details: {
        discoveredBy: 'Name',
        discoveredDate: '2024-01-01',
        location: 'Crime scene location',
        significance: 'Why this matters'
    }
};
```

**Step 2:** Add to investigationData.evidence array
```javascript
investigationData.evidence.push(newEvidence);
```

**Step 3:** Re-render board
```javascript
board.render();
```

### Adding New Section

**Step 1:** Add section to main.js
```javascript
const newSection = {
    id: 'new-section',
    title: 'Section Title',
    icon: '🔬',
    color: '#hexcolor',
    description: 'Section description',
    subtopics: [
        { title: 'Topic 1', content: 'Content...' },
        { title: 'Topic 2', content: 'Content...' }
    ]
};

investigationData.sections.push(newSection);
```

**Step 2:** Update CSS with new color
```css
.section-new-section {
    background-color: #hexcolor;
    border-color: #hexcolor;
}
```

**Step 3:** Add content to at least one evidence item

### Adding New Animation

**Step 1:** Define keyframes in animations.css
```css
@keyframes newAnimation {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        transform: translateX(10px);
        opacity: 0.5;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
```

**Step 2:** Add utility class
```css
.animate-newAnimation {
    animation: newAnimation 0.5s ease-in-out;
}
```

**Step 3:** Use in JavaScript
```javascript
animationController.queueAnimation(element, 'newAnimation', 500);
```

### Adding New Connection Type

**Step 1:** Update investigationData.connectionTypes in main.js
```javascript
connectionTypes: {
    newType: {
        color: '#hexcolor',
        style: 'solid', // or 'dashed', 'dotted'
        width: 2,
        label: 'Connection Label'
    }
}
```

**Step 2:** Update CSS
```css
.connection-newType {
    stroke: #hexcolor;
    stroke-dasharray: 5,5; /* for dashed */
    stroke-width: 2;
}
```

**Step 3:** Use in connections
```javascript
const connection = new Connection(element1, element2, 'newType');
```

## Debugging

### Console Commands

**View investigation data:**
```javascript
console.log(investigationData);
```

**View board instance:**
```javascript
console.log(board);
```

**View all elements:**
```javascript
console.log(board.elements);
```

**View all connections:**
```javascript
console.log(board.connections);
```

**Trigger animation:**
```javascript
animationController.queueAnimation(element, 'bounce', 600);
```

**Check LocalStorage:**
```javascript
console.log(localStorage.getItem('investigationState'));
```

### Common Issues

**Issue: Elements not appearing**
- Check console for JavaScript errors
- Verify position coordinates are valid
- Ensure element has valid section ID
- Check if element is within board bounds

**Issue: Connections not drawing**
- Verify SVG canvas exists in DOM
- Check connection IDs are valid
- Ensure elements have been rendered
- Look for JavaScript errors in console

**Issue: Animations not playing**
- Check CSS animations are defined
- Verify keyframes are correct
- Ensure animation class is applied
- Check animation duration is > 0
- Look for animation-iteration-count issues

**Issue: Modal not opening**
- Verify click handler is attached
- Check modal HTML exists
- Ensure element has valid data
- Check modal CSS is loaded
- Look for z-index issues

## Performance Optimization

### Techniques Used

1. **CSS Transforms**
   - Use transform instead of position
   - Use GPU acceleration with will-change
   - Avoid layout thrashing

2. **RequestAnimationFrame**
   - All animations use rAF
   - Synced with browser refresh rate
   - Prevents jank and stuttering

3. **Event Delegation**
   - Single listener on parent
   - Fewer event listeners overall
   - Better memory usage

4. **Lazy Loading**
   - Modal content loaded on open
   - Images lazy-loaded
   - Heavy computations deferred

5. **Debouncing**
   - Resize events debounced
   - Scroll events throttled
   - Search input debounced

### Performance Metrics

- **First Paint:** < 1s
- **Time to Interactive:** < 2s
- **Animation FPS:** 60fps
- **Modal Open Time:** < 300ms
- **Search Response:** < 100ms

## Testing

### Manual Testing Checklist

- [ ] Elements render correctly
- [ ] Dragging works smoothly
- [ ] Connections draw properly
- [ ] Modals open and close
- [ ] Animations play smoothly
- [ ] Keyboard shortcuts work
- [ ] Search filters correctly
- [ ] Zoom/pan controls function
- [ ] LocalStorage saves state
- [ ] Responsive design works
- [ ] Mobile touch works
- [ ] No console errors

### Browser Testing

- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+
- [ ] Mobile Safari
- [ ] Chrome Mobile

## Deployment

### GitHub Pages

1. Enable GitHub Pages in repo settings
2. Select 'main' branch as source
3. Wait for deployment
4. Access at: https://lealalana-web.github.io/forensic-investigation-website

### Custom Domain

1. Add CNAME file with domain
2. Update DNS records
3. Enable HTTPS
4. Configure domain in repo settings

## Maintenance

### Regular Tasks

- Monitor console for errors
- Check browser compatibility
- Update content as needed
- Test new features thoroughly
- Optimize performance regularly
- Backup investigation data
- Update documentation

### Version Control

- Use meaningful commit messages
- Tag releases with version numbers
- Maintain changelog
- Document breaking changes
- Test before merging

---

**Last Updated:** 2026-05-18  
**Next Review:** 2026-06-18
