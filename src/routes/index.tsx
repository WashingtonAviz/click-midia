import { createFileRoute } from "@tanstack/react-router";

import { ClickMidiaPage } from "./click-midia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "https://clickpartsbrasil.com/click-midia" }],
    links: [{ rel: "canonical", href: "https://clickpartsbrasil.com/click-midia" }],
  }),
  component: ClickMidiaPage,
});
