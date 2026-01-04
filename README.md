# Imunisasi Gamification by dr. Cempaka DF - Puskesmas Cimandala

An interactive classroom exploration website where you can click on objects to discover information about health, wellness, and education.

## Features

- 🏫 **3D Classroom Scene**: A beautifully rendered classroom with perspective
- 👆 **Interactive Objects**: Click on various items throughout the classroom
- 🎯 **What? & Who? Buttons**: Interactive buttons on the wall
- 📋 **Health Information**: Learn about vaccination schedules and health topics
- 🎨 **Smooth Animations**: Enjoy hover effects and transitions
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Classroom Elements

### Interactive Objects:
- **What? & Who? Buttons** - Click to learn about the experience
- **Student** 👧 - Learn about health education
- **Cat** 🐱 - Information about pets and mental health
- **Laptop** 💻 - Digital learning tools
- **Books** 📚 - Educational materials
- **Papers & Notes** 📄 - Documentation and records
- **Lunchbox** 🍱 - Nutrition information
- **Fruits** 🍊 - Healthy eating
- **JADWAL BIAS** 📋 - Vaccination schedule information
- **SAPIDOL Marker** 🖊️ - Documentation tools
- **Plant** 🪴 - Environmental health

### Background Elements:
- Ceiling with light fixtures
- Blackboard with "Yuk, SUNTIK" message
- Window with curtains
- Wooden floor with perspective
- Multiple desk rows

## How to Use

1. Open `index.html` in your web browser
2. Explore the classroom scene
3. Click on any object or button to see information
4. Close modals by clicking X, clicking outside, or pressing Escape

## Customization

### Adding Your Own Assets:
When you're ready to replace placeholders:
1. Replace emoji icons in `index.html` with `<img>` tags pointing to your assets
2. Update the `object-icon` class in CSS to style your images
3. Adjust positioning in the inline styles as needed

### Modifying Content:
- Edit the `objectContent` object in `script.js` to change titles and descriptions
- Update object positions in `index.html` using inline styles
- Customize colors and styling in `styles.css`

### Adding More Objects:
1. Add a new `<div class="interactive-object">` in `index.html`
2. Add a corresponding entry in `objectContent` in `script.js`
3. Position it using inline styles

## Placeholder Assets

Currently using emoji placeholders. Replace with your actual assets by:
- Changing `.object-icon` from emoji to `<img src="path/to/asset.png">`
- Adjusting sizes in CSS as needed
- Maintaining the same `data-id` structure for functionality

Enjoy exploring the classroom! 🚀
