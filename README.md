# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements
- View a live countdown timer that updates every second
- Timer will count down 6 hours from the first time opened
- Target time will be saved and consistent on refresh

### Screenshot

![Preview Countdown Timer](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/wahyuanandaa/launch-countdown-timer)
- Live Site URL: [Live Demo](https://wahyuanandaa.github.io/launch-countdown-timer/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript (ES6+)
- Google Fonts (Red Hat Text)

### What I learned

While working on this project, I learned several important things:

1. Using localStorage to persist state:

```javascript
// Saving target time
localStorage.setItem("launchTime", launchDate.toString())

// Retrieving target time
const savedTime = localStorage.getItem("launchTime")
```

2. Implementing responsive background patterns:

```css
body {
  background-image: url("./images/bg-stars.svg"),
    url("./images/pattern-hills.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: center, bottom;
  background-size: cover, 100% auto;
}
```

3. Error handling and validation:

```javascript
function isLocalStorageAvailable() {
  try {
    const test = "test"
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}
```

### Continued development

Some ideas for future development:

- Add flip card animation when numbers change
- Add manual time target setting option
- Add sound notification when timer ends
- Add pause/resume timer feature

### Useful resources

- [MDN Web Docs - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - Comprehensive documentation about localStorage usage
- [CSS-Tricks - Background Patterns](https://css-tricks.com/perfect-full-page-background-image/) - Article about background pattern implementation
- [JavaScript.info - Date and Time](https://javascript.info/date) - Tutorial about date and time manipulation in JavaScript

## Author

- Frontend Mentor - [@Wahyuanandaa](https://www.frontendmentor.io/profile/Wahyuanandaa)
- GitHub - [@wahyuanandaa](https://github.com/wahyuanandaa)
