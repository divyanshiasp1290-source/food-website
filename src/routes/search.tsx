import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/search")({
  component: SearchRedirectPage,
  head: () => ({
    meta: [{ title: "Search — Auréa Foods" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function SearchRedirectPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, []);

  return null;
}
