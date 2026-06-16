import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, u as useInView } from "../_libs/framer-motion.mjs";
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
function Reveal({
  children,
  delay = 0,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      variants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-80px" },
      transition: { delay },
      children
    }
  );
}
function Counter({
  to,
  suffix = "",
  duration = 2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CounterInner, { to, suffix, duration }) });
}
function CounterInner({ to, suffix, duration }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1e3));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n.toLocaleString(),
    suffix
  ] });
}
export {
  Counter as C,
  Reveal as R
};
