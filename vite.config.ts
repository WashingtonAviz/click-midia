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
    build: {
      target: "es2019",
    },
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
    // Emit real page content in index.html so mobile users do not depend on
    // JavaScript download and hydration for the first render.
    pages: [{ path: "/" }],
    prerender: {
      enabled: true,
      crawlLinks: false,
    },
  },
});
