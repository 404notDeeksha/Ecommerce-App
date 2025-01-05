import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";


export default defineConfig({
  plugins: [
    react(),
    Unfonts({    
    }),
  ],
});
