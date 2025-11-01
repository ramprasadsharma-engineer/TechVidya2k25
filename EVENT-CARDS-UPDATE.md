# 🎨 Event Cards - NEW DESIGN

## ✨ What's Changed

Your event cards now have an **INSANE** new design with background images as watermarks!

---

## 🎯 New Layout Structure

```
┌─────────────────────────────────────┐
│  [Background SVG Image Watermark]   │
│  ┌───────────────────────────────┐  │
│  │ Dark Overlay for Readability  │  │
│  │                               │  │
│  │  EVENT TITLE (Gradient)       │  │
│  │                               │  │
│  │  Two-line description of      │  │
│  │  the event goes here          │  │
│  │                               │  │
│  │  📅 March 15, 2025           │  │
│  │  ⏰ 9:00 AM - 9:00 PM        │  │
│  │  💰 ₹500                     │  │
│  │                               │  │
│  │  [Know More] [Register]       │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## 🎨 Design Features

### 1. **Background Image Watermark**
- SVG posters from `/public/event-posters/`
- Subtle watermark effect
- Dark overlay for text readability
- Pulses on idle, stops on hover

### 2. **Event Title**
- Gradient text (white to neon blue)
- Large, bold, prominent
- Glow effect on text

### 3. **Description**
- Exactly 2 lines visible
- Clean, readable text
- Ellipsis if text overflows

### 4. **Event Details**
- 📅 **Date**: Shows event date
- ⏰ **Time**: Shows time range
- 💰 **Registration Fee**: Shows cost (or "Free")
- Each detail has hover effect
- Icon + text layout

### 5. **Buttons**
- **Know More**: Outline button (neon blue)
- **Register**: Gradient button (blue to purple)
- Both have hover animations
- Glow effects on hover

---

## 📦 Current Events (6 of 33)

| # | Event | Date | Time | Fee | Poster |
|---|-------|------|------|-----|--------|
| 1 | Codeverse | March 15, 2025 | 9:00 AM - 9:00 PM | ₹500 | 1.svg |
| 2 | Robo-Wars | March 16, 2025 | 10:00 AM - 6:00 PM | ₹800 | 2.svg |
| 3 | Pixel-Perfect | March 17, 2025 | 11:00 AM - 5:00 PM | ₹400 | 3.svg |
| 4 | Tech Quiz | March 18, 2025 | 2:00 PM - 4:00 PM | ₹200 | 4.svg |
| 5 | Web-O-Thon | March 19, 2025 | 9:00 AM - 6:00 PM | ₹600 | 5.svg |
| 6 | AI/ML Workshop | March 20, 2025 | 10:00 AM - 4:00 PM | Free | 6.svg |

---

## 🎨 Visual Effects

### Background Watermark
- SVG image covers entire card
- Dark gradient overlay (85% opacity)
- Subtle blur effect on overlay
- Background slightly visible

### Hover Effects
- Card lifts up (`-10px`)
- Glow shadow appears
- Gradient line at top
- Overlay darkens slightly
- Detail boxes slide right
- Buttons glow and lift

### Animations
- Smooth fade in on scroll
- Staggered reveal (0.1s delay each)
- Pulsing watermark (8s cycle)
- Button shine effect on register button

---

## 📱 Responsive Design

### Desktop (1400px+)
- 3 columns
- Full details visible
- All animations enabled

### Tablet (768px - 968px)
- 2 columns
- Adjusted padding
- Optimized spacing

### Mobile (< 768px)
- 1 column
- Stacked buttons
- Compact layout
- Smaller fonts
- Increased card height (500px)

---

## 🎨 Color Scheme

- **Primary Gradient**: #00F0FF → #B026FF
- **Text**: White with high contrast
- **Icons**: Emojis for visual appeal
- **Borders**: Neon blue (rgba)
- **Overlay**: Dark black with gradient

---

## 🔧 How to Add More Events

Edit `src/components/Events.jsx`:

```javascript
{
  id: 7,
  title: "Your Event Name",
  description: "Two-line description of your amazing event.",
  date: "March 21, 2025",
  time: "10:00 AM - 5:00 PM",
  registrationFee: "₹300", // or "Free"
  posterImage: "/event-posters/7.svg",
  registrationLink: "YOUR_GOOGLE_FORM_LINK",
  knowMoreLink: "YOUR_EVENT_DETAILS_PAGE"
}
```

---

## 📁 Files Structure

### Images
All 33 SVG posters are now in:
```
public/
  └── event-posters/
      ├── 1.svg
      ├── 2.svg
      ├── 3.svg
      ├── ... (through 33.svg)
```

### Code Files
- `src/components/Events.jsx` - Component with event data
- `src/components/Events.css` - Styling with watermark effects

---

## 🚀 See It Live

Start your dev server:
```bash
npm run dev
```

Visit: `http://localhost:5173`

Scroll down to the Events section and see the magic! ✨

---

## 💡 Pro Tips

### Customize Background Opacity
In `Events.css`, adjust the overlay:
```css
.event-overlay {
  background: rgba(0, 0, 0, 0.85); /* 0.85 = 85% dark */
}
```

### Change Button Colors
```css
.register-btn {
  background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR 100%);
}
```

### Adjust Card Height
```css
.event-card-new {
  min-height: 480px; /* Change this value */
}
```

---

## 🎯 What Makes It Special

1. **SVG Background Watermarks** - Unique poster for each event
2. **Dark Overlay System** - Perfect text readability
3. **Icon-Based Details** - Visual, easy to scan
4. **Dual Button Design** - Clear CTAs
5. **Gradient Effects** - Modern, eye-catching
6. **Smooth Animations** - Buttery 60fps
7. **Fully Responsive** - Works everywhere
8. **Glassmorphism** - Frosted glass effects

---

## 📊 Performance

- **Card Load Time**: Instant (SVG optimized)
- **Animations**: GPU-accelerated
- **Images**: All 33 SVGs loaded efficiently
- **Responsive**: Adapts instantly

---

## 🔥 Next Steps

### Add Remaining 27 Events
Simply copy the event object structure and add:
- Events 7-33 with their respective posters
- Update dates, times, fees
- Add registration links

### Customize Each Event
- Different colors per event type
- Custom icons
- Unique descriptions
- Varied pricing

---

## ✅ Summary

Your event cards now feature:
- ✅ SVG background images as watermarks
- ✅ Title at the top
- ✅ Two-line description
- ✅ Date, Time, Registration Fee with icons
- ✅ "Know More" button (outline style)
- ✅ "Register" button (gradient style)
- ✅ Dark overlay for readability
- ✅ Stunning hover effects
- ✅ Fully responsive
- ✅ All 33 posters ready to use

**The event section looks ABSOLUTELY INSANE! 🎨🔥**

---

Built with ❤️ for TECHVIDYA 2K25 - CHANAKYOTSAV

