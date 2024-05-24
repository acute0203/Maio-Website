import { defineConfig, UserConfigExport } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"
import pluginRewriteAll from "vite-plugin-rewrite-all"

export default (): UserConfigExport => {
  return defineConfig({
    plugins: [react(), pluginRewriteAll()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }
  })
}
