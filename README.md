# deep-ui-react library

## Description

deep-ui-react is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of [`tailwind css`](https://tailwindcss.com). and [`radix-ui`](https://www.radix-ui.com/primitives).

The design pattern was taken from this library [`shadcn`](https://ui.shadcn.com/) with the addition of some supports that facilitate the work. We seek to make the private library a highly reliable library.

>Note: This is a trial version and not a production

## Documentation

Visit  [Documentation](https://deep-ui-one.vercel.app/) to view the full documentation.

## Installation

Learn how to use npm i deep-ui-react components to quickly and easily create elegant and flexible pages using Tailwind CSS.

1. Install [`tailwindcss`](https://tailwindcss.com/docs/installation) .

2. Install package with npm.

```bash
npm i deep-ui-react
```

## Usage

1. Configure tailwind.config.js.

Here's what my tailwind.config.js file looks like:

```js
const { themesPreset } = require("deep-ui-react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/deep-ui-react/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [themesPreset],
}
```

2. Configure styles.

Add the following to your globals.css file. You can learn more about using CSS variables for theming in the theming section.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --danger: 0 100% 50%;
    --danger-foreground: 210 40% 98%;

    --warning: 38 92% 50%;
    --warning-foreground: 210 40% 98%;

    --success: 142.1 76.2% 36.3%;
    --success-foreground: 355.7 100% 97.3%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --danger: 0 63% 31%;
    --danger-foreground: 210 40% 98%;

    --warning: 38 92% 50%;
    --warning-foreground: 210 40% 98%;

    --success: 142.1 76.2% 36.3%;
    --success-foreground: 355.7 100% 97.3%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```

2. Import first component.

You can now start adding components to your project.

```jsx
import { Button } from "deep-ui-react";

export default function Example() {
  return <Button>Button</Button>;
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
