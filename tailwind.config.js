module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-azeret-mono)", "monospace"],
      },
      colors: {
        off: "#F7F5F0",
        ink: "#1A1A1A",
        purple: {
          DEFAULT: "#6B4EFF",
          light: "#EDE9FF",
          mid: "#9B87FF",
        },
        coral: "#FF6B6B",
        nude: "#E8D5C4",
        stone: "#8C8884",
        line: "#E2E0DA",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "fade-up": "fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
