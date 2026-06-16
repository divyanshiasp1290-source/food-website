import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import { d as Button } from "./router-VcT1RhEw.mjs";
import { N as Newspaper, B as BriefcaseBusiness, H as Handshake, A as ArrowRight, b as Mail, c as Phone, d as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
const OFFICES = [{
  city: "Lyon",
  country: "France (HQ)",
  address: "12 Rue de la Confiserie, 69002 Lyon"
}, {
  city: "New York",
  country: "USA",
  address: "550 Madison Avenue, NY 10022"
}, {
  city: "Singapore",
  country: "Asia Pacific",
  address: "1 Raffles Place, Tower 2, Level 24"
}, {
  city: "São Paulo",
  country: "Brazil",
  address: "Av. Brigadeiro Faria Lima 3477"
}];
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Let's ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "talk" }),
      "."
    ] }), description: "Whether you're a retailer, distributor, partner or simply curious — we'd love to hear from you." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-px bg-border md:grid-cols-3", children: [{
      icon: Newspaper,
      title: "Media enquiries",
      text: "Press materials, company statements and interview requests.",
      email: "media@aureafoods.com"
    }, {
      icon: BriefcaseBusiness,
      title: "Careers",
      text: "Explore opportunities or ask about an existing application.",
      email: "careers@aureafoods.com"
    }, {
      icon: Handshake,
      title: "Business partnerships",
      text: "Retail, distribution, sourcing and manufacturing enquiries.",
      email: "partners@aureafoods.com"
    }].map(({
      icon: Icon,
      title,
      text,
      email
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-background p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-2xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: text }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${email}`, className: "mt-5 inline-block text-sm font-bold text-primary underline underline-offset-4", children: email })
    ] }, title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "grid gap-5 bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "input" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "input" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Enquiry type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: "input", defaultValue: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a topic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Consumer care" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Business partnership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Media" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Careers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "How can we help?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, className: "input min-h-36" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex gap-3 text-xs leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "checkbox", className: "mt-0.5 accent-primary" }),
          "I confirm that I am 18 or older and consent to Auréa Foods processing my information to respond to this enquiry."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "mt-2 h-12 rounded-none text-sm font-bold", children: [
          "Send message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "status", className: "border-l-4 border-primary bg-secondary p-4 text-sm font-medium", children: "Thank you. Your message has been received and our team will respond shortly." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl bg-card border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center bg-cocoa text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "hello@aureafoods.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl bg-card border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center bg-cocoa text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "+33 4 72 00 12 00" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border h-64 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Lyon office map", src: "https://www.openstreetmap.org/export/embed.html?bbox=4.82%2C45.74%2C4.86%2C45.77&layer=mapnik", className: "size-full", loading: "lazy" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl", children: "Our global offices" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: OFFICES.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-xl", children: o.city }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: o.country }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-foreground/80 leading-relaxed", children: o.address })
      ] }) }, o.city)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl", children: "Before you contact us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl leading-relaxed text-muted-foreground", children: "For product feedback, include the product name, best-before date and batch code when available. This helps our consumer care team investigate quickly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "Response times" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Consumer and business enquiries: 2–3 working days." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "Privacy requests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please select “Other” and include “Privacy” in your message." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.input{width:100%;border-radius:0;border:1px solid var(--border);background:var(--background);padding:0.875rem 1rem;font-size:0.9rem;outline:none;transition:border-color .2s}.input:focus{border-color:var(--cocoa)}` })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    children
  ] });
}
export {
  Contact as component
};
