const config = {
  ontent: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
