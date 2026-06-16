import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function PageHero({
  eyebrow,
  title,
  description,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-12 md:pt-20 pb-14 bg-gradient-to-b from-secondary/70 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
        children: eyebrow
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.1 },
        className: "mt-5 text-3xl md:text-4xl max-w-4xl text-balance leading-[1]",
        children: title
      }
    ),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.25 },
        className: "mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed",
        children: description
      }
    ),
    children
  ] }) });
}
export {
  PageHero as P
};
