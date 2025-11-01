# 📖 Brochure Integration - COMPLETED ✅

## Overview

The event brochure has been successfully integrated into the portfolio! When users click the **"Know More"** button on any event card, they will be taken directly to that event's page in the brochure.

## 🔗 How It Works

- **Brochure URL**: `https://techvidya-2025-brochure.pages.dev/`
- Each event's "Know More" button links to a specific page in the brochure using URL anchors
- Links open in a new tab (`target="_blank"`) so users don't lose their place on the portfolio site
- Format: `https://techvidya-2025-brochure.pages.dev/#page-canvas-X`
- The brochure automatically scrolls to the specified page when accessed via these links

## 📄 Final Page Mapping

The events are mapped to their corresponding pages in the 35-page brochure:

| Event ID | Event Name | Brochure Page | URL Anchor |
|----------|------------|---------------|------------|
| 1 | Hackathon | Page 3 | `#page-canvas-3` |
| 2 | Paper Presentation | Page 11 | `#page-canvas-11` |
| 3 | Cryptohunt | Page 12 | `#page-canvas-12` |
| 4 | Technophilia | Page 13 | `#page-canvas-13` |
| 5 | Free Fire | Page 5 | `#page-canvas-5` |
| 6 | Clash Royale | Page 7 | `#page-canvas-7` |
| 7 | Valorant | Page 8 | `#page-canvas-8` |
| 8 | Capture the Flag | Page 10 | `#page-canvas-10` |
| 9 | Optithon | Page 9 | `#page-canvas-9` |
| 10 | Webcraft | Page 20 | `#page-canvas-20` |
| 11 | VisualX | Page 21 | `#page-canvas-21` |
| 12 | Technical Quiz | Page 14 | `#page-canvas-14` |
| 13 | Platronics | Page 15 | `#page-canvas-15` |
| 14 | Touch Me Not | Page 16 | `#page-canvas-16` |
| 15 | Techenact | Page 17 | `#page-canvas-17` |
| 16 | Cryptic Cross | Page 18 | `#page-canvas-18` |
| 17 | Guess the Prompt | Page 19 | `#page-canvas-19` |
| 18 | Code Decathlon | Page 6 | `#page-canvas-6` |
| 19 | Escape Room Tech Version | Page 22 | `#page-canvas-22` |
| 20 | BattleGround Mobile India | Page 23 | `#page-canvas-23` |
| 21 | Artify | Page 24 | `#page-canvas-24` |
| 22 | Imagify | Page 25 | `#page-canvas-25` |
| 23 | Mindify | Page 26 | `#page-canvas-26` |
| 24 | Ludify | Page 27 | `#page-canvas-27` |
| 25 | Science Spark | Page 28 | `#page-canvas-28` |
| 26 | Thermocol Modelling | Page 29 | `#page-canvas-29` |
| 27 | CAD Clash | Page 30 | `#page-canvas-30` |
| 28 | Link-o-Motion | Page 31 | `#page-canvas-31` |
| 29 | Bridge the Gap | Page 32 | `#page-canvas-32` |
| 30 | Dalal | Page 33 | `#page-canvas-33` |
| 31 | People Craft - Gen Z | Page 34 | `#page-canvas-34` |
| 32 | The Data Hustle | Page 4 | `#page-canvas-4` |
| 33 | Mark-King | Page 35 | `#page-canvas-35` |

**Note**: Page 1 is the cover page, and Page 2 contains the events index.

## 🔧 How to Update Page Numbers

If you need to adjust the page mappings in the future:

1. Open `src/components/Events.jsx`
2. Find the `BROCHURE_URL` constant at the top (line 7)
3. Locate the event you want to update in the `eventData` array
4. Change both the `brochurePage` number and the anchor in `knowMoreLink`

### Example:

```javascript
{
  id: 1,
  title: "Hackathon",
  // ... other properties ...
  knowMoreLink: `${BROCHURE_URL}#page-canvas-3`,  // Update the canvas number here
  brochurePage: 3  // And update this to match
}
```

**Important**: The anchor format must be `#page-canvas-X` where X is the page number. This corresponds to the canvas element IDs in the brochure PDF viewer.

## 🎯 Features

✅ **Direct Navigation**: Users jump directly to the event's page in the brochure  
✅ **New Tab**: Opens in a new tab (`target="_blank"`) so users don't lose their place  
✅ **Security**: Uses `rel="noopener noreferrer"` for secure external links  
✅ **Smooth Scrolling**: Brochure automatically scrolls to the specified page via anchor  
✅ **Easy Updates**: Simple to adjust page numbers if needed  
✅ **Consistent Format**: All events follow the same URL pattern  

## 🚀 Testing

To test the integration:

1. Start your development server: `npm run dev`
2. Navigate to the Events section
3. Click "Know More" on any event card
4. The brochure should open in a new tab and automatically scroll to the event's page

### Example Test:
- Click "Know More" on **Hackathon** → Opens `https://techvidya-2025-brochure.pages.dev/#page-canvas-3`
- Click "Know More" on **Mark-King** → Opens `https://techvidya-2025-brochure.pages.dev/#page-canvas-35`

## 📝 Technical Implementation

### Key Code Changes:

1. **Events.jsx** - Added `BROCHURE_URL` constant and updated all event objects with:
   ```javascript
   knowMoreLink: `${BROCHURE_URL}#page-canvas-X`
   brochurePage: X
   ```

2. **Event Cards** - Know More button opens links in new tab:
   ```javascript
   <motion.a
     href={event.knowMoreLink}
     target="_blank"
     rel="noopener noreferrer"
     className="event-btn know-more-btn"
   >
     Know More
   </motion.a>
   ```

3. **Brochure Structure** - The brochure uses PDF.js to render PDF pages as canvas elements with IDs `page-canvas-1` through `page-canvas-35`, which we use for anchor navigation.

## 📝 Notes

- The brochure has 35 pages total
- Page 1 is the cover page
- Page 2 contains the events index with all event names listed
- Pages 3-35 contain individual event details
- The mapping has been verified by checking multiple pages in the live brochure
- All "Know More" buttons are fully functional and tested

