module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Final Hand-Picked Color Palette for the application
        darkBackground: '#4731D3',      // Deep slate grey for dark mode background #1A202C
        darkPrimary: '#CBF281',         // Medium sky blue for main accents in dark mode #4299E1
        darkSecondary: '#ffffff',       // Light slate grey for secondary text/elements in dark mode #A0AEC0
        lightBackground: '#CBF281',     // Off-white for light mode background
        lightPrimary: '#4731D3',        // Teal color for main accents in light mode
        lightSecondary: '#1A202C',      // Darker grey for secondary text/elements in light mode
        accent: '#ED8936',              // Orange for hover/focus states
        error: '#E53E3E',               // Red for error messages

        // These colors are kept for historical context but are not actively used for the button background anymore
        toggleDarkSelected: '#4731D3',
        toggleLightSelected: '#CBF281',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
