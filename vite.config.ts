import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // Menjamin aplikasi diakses dari root URL
  server: {
    host: "0.0.0.0", // Memungkinkan akses dari jaringan lokal
    port: 8080,      // Port yang bisa diakses secara lokal
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias untuk folder src
    },
  },
}));
