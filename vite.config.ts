// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // EasyPanel forwards the complete /click-midia path to this service.
    base: "/click-midia",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // The Click Mídia lead is sent directly to the existing Click Parts Cloud Function.
    router: {
      basepath: "/click-midia",
      routeFileIgnorePattern: "api\\.click-midia-lead\\.ts$",
    },
    // EasyPanel serves this landing page as a static SPA through Nginx.
    spa: {
      enabled: true,
      // The router basepath turns this root route into /click-midia publicly.
      maskPath: "/",
      prerender: { outputPath: "/index.html" },
    },
  },
});
