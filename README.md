# use-theme-hook

A simple React hook for toggling between light and dark themes. This hook allows you to easily implement theme switching functionality in your React applications with minimal setup. It handles theme persistence using `localStorage` and automatically applies the selected theme to your application.

## Features

- **Toggle between Light and Dark themes**.
- **Automatic theme persistence** using `localStorage`.
- **Easy integration** with any React or React TypeScript application.
- **Customizable**: Style your application based on the theme attribute.

## Installation

To install the `use-theme-hook`, run the following command:

```bash
npm i @bholuvivek/use-theme-hook
```

```bash
yarn add @bholuvivek/use-theme-hook
```

# How to Use

## 1. Wrap Your App with the ThemeProvider
- To start using the theme hook, wrap your application's root component with the ThemeProvider component. This will provide the theme context to your entire application.

```bash
// App.tsx
import React from 'react';
import { ThemeProvider } from 'use-theme-hook'; // Import the ThemeProvider from the package

const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Your application's components go here */}
      <h1>Welcome to My Themed Application</h1>
    </ThemeProvider>
  );
};

export default App;
```


## 2. Use the useTheme Hook in Your Components
- Inside any of your components, you can use the useTheme hook to access the current theme and toggle functionality.

```bash
import React from 'react';
import { useTheme } from 'use-theme-hook'; // Import the useTheme hook from the package

const MainContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Destructure theme and toggleTheme from the hook

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default MainContent;
```


##  3. Apply CSS Based on the Theme
` To style your application based on the current theme, you can use CSS classes or data attributes applied to the body or root element.

### Example: Styling with CSS
- Create a CSS file (e.g., styles.css) with styles for light and dark themes:


```css
/* theme.css */

/* Light Theme */
body[data-theme='light'] {
  background-color: #ffffff;
  color: #000000;
}

/* Dark Theme */
body[data-theme='dark'] {
  background-color: #121212;
  color: #ffffff;
}
```

```javascript
## main file
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './theme.css'; // Import the theme styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```


## API Reference
 #### useTheme
T - he useTheme hook provides the current theme and a function to toggle between light and dark themes.

#### Return Values
 **theme:** string: The current theme, either "light" or "dark".
**toggleTheme:** () => void: A function to toggle the theme between light and dark.

#### ThemeProvider
- The ThemeProvider component provides the theme context to your entire application.

#### Props

**children:** ReactNode: The children components that will be wrapped by the theme provider.

## Customization
 - You can further customize the hook to fit your application's needs:

## Default Theme: Change the default theme in the useTheme.ts file.
**Additional Styles:** Apply additional styles based on the data-theme attribute or class names applied to the 
root element.

#### Contributing
 - Contributions are welcome! Please open an issue or submit a pull request for any improvements, bug fixes, or feature requests.


### Key Sections Explained

1. **Installation**: Instructions on how to install the package using npm or yarn.
2. **How to Use**: Detailed steps on how to wrap your app with `ThemeProvider` and use the `useTheme` hook in your components.
3. **Styling**: Explanation of how to apply CSS styles based on the theme, including a code snippet for CSS.
4. **API Reference**: Describes the hook's return values and the `ThemeProvider` component.
5. **Customization**: Tips on customizing the default behavior or appearance of the themes.
6. **Contributing**: Invites the community to contribute to the project with issues or pull requests.
7. **License**: States the license type, typically MIT, which is common for open-source packages.

This README serves as a comprehensive guide for users, making it
