import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  content: ["./index.html", "./impressum.html"],
  theme: {
    extend: {},
  },
});
