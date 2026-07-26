import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — deep guo-red, aged gold foil, ink, ivory silk, blush
        wine: {
          DEFAULT: "#5C1420",
          50: "#FBEAEA",
          100: "#F0CACE",
          200: "#DE9CA3",
          300: "#C46A76",
          400: "#9E3A48",
          500: "#7A1F2B",
          600: "#5C1420",
          700: "#450F18",
          800: "#2E0A10",
          900: "#1C0509",
        },
        gold: {
          DEFAULT: "#C9A15A",
          50: "#FBF6EB",
          100: "#F3E6C4",
          200: "#E8D19C",
          300: "#DCBD79",
          400: "#C9A15A",
          500: "#B08A42",
          600: "#8C6C31",
          700: "#664E24",
          800: "#433317",
          900: "#241B0C",
        },
        ivory: {
          DEFAULT: "#F8F2E7",
          soft: "#F3ECDD",
          deep: "#EDE3CE",
        },
        ink: {
          DEFAULT: "#1C1210",
          soft: "#2B1E1A",
        },
        blush: "#E8C7C0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        cn: ["var(--font-noto-serif-sc)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #DCBD79 0%, #C9A15A 45%, #8C6C31 100%)",
        "wine-gradient": "linear-gradient(180deg, #450F18 0%, #1C0509 100%)",
        "silk-texture":
          "radial-gradient(ellipse at top, rgba(201,161,90,0.08), transparent 60%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,161,90,0.35), 0 8px 30px rgba(0,0,0,0.25)",
        soft: "0 10px 40px rgba(28,18,16,0.12)",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 3s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        spinSlow: "spinSlow 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
