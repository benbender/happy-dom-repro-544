/// <reference types="vitest" />
import { defineConfig } from "vite";
import solid from "solid-start";

export default defineConfig({
  plugins: [solid()],

  test: {
    environment: "happy-dom",
    dir: "src",
    setupFiles: "./vitest.setup.ts",
    transformMode: {
      web: [/.[tj]sx?$/]
    },
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/]
    },
  },

  resolve: {
    conditions: process.env["VITEST"] ? ["browser"]: []
  }
});
