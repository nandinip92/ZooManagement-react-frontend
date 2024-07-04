import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": `${path.resolve(__dirname, "./src/components")}`,
      "@assets": path.resolve(__dirname, "src/assets"),
      "@api": `${path.resolve(__dirname, "./src/api")}`,
      type: `${path.resolve(__dirname, "./src/types")}`,
      models: `${path.resolve(__dirname, "./src/models")}`,
      requests: `${path.resolve(__dirname, "./src/models/request")}`,
      views: `${path.resolve(__dirname, "./src/models/view")}`,
      public: `${path.resolve(__dirname, "./public")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      speciesImages: path.resolve(__dirname, "./src/assets/Images"),
    },
  },
})
