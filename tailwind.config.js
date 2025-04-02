/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    sm: '640px',  // Figma中的移动端断点
    md: '768px',  // Figma中的平板断点
    lg: '1024px', // Figma中的桌面端断点
    xl: '1280px', // Figma中的大桌面端断点
  },
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    colors: {
      primary: '#FF4D4F', // Figma主色
      secondary: '#1890FF' // Figma辅助色
    },
  },
}