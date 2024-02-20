import { createStitches } from "@stitches/react";

export const { config, css, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      transparent: "#00000000",
      black: "#000",
      gray900: "#121214",
      gray500: "#555",
      warn: "#ffab04",
      error: "red",
      white: "#fff",
    },
    fonts: {
      body: "var(--font-roboto)",
      title: "var(--font-bungee)",
    },
  },
});
