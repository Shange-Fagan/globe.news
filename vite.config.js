import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import vitePluginString from "vite-plugin-string";

export default defineConfig({
  plugins: [glsl(), vitePluginString()],
});
