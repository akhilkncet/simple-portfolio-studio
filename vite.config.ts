import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Portfolio - Vite configuration
export default defineConfig({
  server: { host: "::" },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
