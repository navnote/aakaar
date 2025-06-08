import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
	root: path.resolve(__dirname),
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "./src"),
		},
	},
	optimizeDeps: {
		include: ["@tabler/icons-react"],
	},
});
