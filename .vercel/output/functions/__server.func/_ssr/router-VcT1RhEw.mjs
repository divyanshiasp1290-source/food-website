import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { E as Earth, C as ChevronDown, M as Menu, S as Search, X, F as Facebook, I as Instagram, L as Linkedin, T as Twitter } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-D5k3q0Ke.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const chocolate = "/assets/product-chocolate-BgK5yajc.jpg";
const snacks = "/assets/product-snacks-BALgx1mw.jpg";
const confectionery = "/assets/product-confectionery-CsxUI5xV.jpg";
const pet = "/assets/product-pet-DlVJolgP.jpg";
const healthy = "/assets/product-healthy-C-CYfIbY.jpg";
const ingredients = "/assets/product-ingredients-Bb07Kr5d.jpg";
const sustain = "/assets/sustainability-fxN7Myjt.jpg";
const milkChocolate = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzdiNGIyYSIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TWlsayBDaG9jb2xhdGU8L3RleHQ+DQo8L3N2Zz4=";
const darkChocolate = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzNiMmYyZiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2Y2ZTdkNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RGFyayBDaG9jb2xhdGU8L3RleHQ+DQo8L3N2Zz4=";
const hazelnutChocolate = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2EzNmIzYiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SGF6ZWxudXQgQ2hvY29sYXRlPC90ZXh0Pg0KPC9zdmc+";
const caramelChocolate = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2MwOGI1MiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iIzNiMWYwZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q2FyYW1lbCBDaG9jb2xhdGU8L3RleHQ+DQo8L3N2Zz4=";
const almondChocolate = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzhiNWEzYyIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QWxtb25kIENob2NvbGF0ZTwvdGV4dD4NCjwvc3ZnPg==";
const proteinBars = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzJiOGY2YiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+UHJvdGVpbiBCYXJzPC90ZXh0Pg0KPC9zdmc+";
const granolaBars = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Q5OWE0ZSIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iIzVhMzIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+R3Jhbm9sYSBCYXJzPC90ZXh0Pg0KPC9zdmc+";
const mixedNuts = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2IwN2EzYiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TWl4ZWQgTnV0czwvdGV4dD4NCjwvc3ZnPg==";
const trailMix = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzhhYTA0YiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VHJhaWwgTWl4PC90ZXh0Pg0KPC9zdmc+";
const fruitGummies = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YyNmI2YiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RnJ1aXQgR3VtbWllczwvdGV4dD4NCjwvc3ZnPg==";
const mintCandies = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzdlZDNiNiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iIzA0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TWludCBDYW5kaWVzPC90ZXh0Pg0KPC9zdmc+";
const dogFood = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2IwNWEzYiIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RG9nIEZvb2Q8L3RleHQ+DQo8L3N2Zz4=";
const catFood = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzZiNGI5YSIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q2F0IEZvb2Q8L3RleHQ+DQo8L3N2Zz4=";
const oats = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2U2YzA3YSIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iIzZiM2IxZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T2F0czwvdGV4dD4NCjwvc3ZnPg==";
const breakfastCereals = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZDVhMSIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MiIgZmlsbD0iIzZiM2IxZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QnJlYWtmYXN0IENlcmVhbHM8L3RleHQ+DQo8L3N2Zz4=";
const brandAurea = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+DQogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2YjNiMWYiLz4NCiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNmZmRkOTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkF1csOpYSBDaG9jb2xhdGU8L3RleHQ+DQo8L3N2Zz4=";
const brandCocoaDreams = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+DQogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0YjJiMmIiLz4NCiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNmNmU3ZDciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkNvY29hIERyZWFtczwvdGV4dD4NCjwvc3ZnPg==";
const brandHazelnut = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+DQogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNhMzZiM2IiLz4NCiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkhhemVsbnV0IEhhcm1vbnk8L3RleHQ+DQo8L3N2Zz4=";
const brandNatureBoost = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+DQogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyYjhmNmIiLz4NCiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPk5hdHVyZSBCb29zdDwvdGV4dD4NCjwvc3ZnPg==";
const brandGoldenGrain = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+DQogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNkOTlhNGUiLz4NCiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjgiIGZpbGw9IiM3YTNmMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkdvbGRlbiBHcmFpbjwvdGV4dD4NCjwvc3ZnPg==";
const CATEGORY_IMAGES = {
  Chocolate: chocolate,
  Snacks: snacks,
  Confectionery: confectionery,
  "Pet Nutrition": pet,
  "Healthy Foods": healthy,
  Ingredients: ingredients
};
const PRODUCT_IMAGES = {
  "milk-chocolate": milkChocolate,
  "dark-chocolate": darkChocolate,
  "hazelnut-chocolate": hazelnutChocolate,
  "caramel-chocolate": caramelChocolate,
  "almond-chocolate": almondChocolate,
  "protein-bars": proteinBars,
  "granola-bars": granolaBars,
  "mixed-nuts": mixedNuts,
  "trail-mix": trailMix,
  "fruit-gummies": fruitGummies,
  "mint-candies": mintCandies,
  "hard-candies": mintCandies,
  "chewy-candies": fruitGummies,
  "dog-food": dogFood,
  "cat-food": catFood,
  "pet-treats": dogFood,
  "oats": oats,
  "breakfast-cereals": breakfastCereals,
  "energy-bites": granolaBars,
  "healthy-snacks": granolaBars,
  "pure-essence": ingredients
};
const PRODUCT_GALLERY_IMAGES = {
  "milk-chocolate": [milkChocolate, chocolate, confectionery, ingredients],
  "dark-chocolate": [darkChocolate, chocolate, confectionery, ingredients],
  "hazelnut-chocolate": [hazelnutChocolate, chocolate, confectionery, ingredients],
  "caramel-chocolate": [caramelChocolate, chocolate, confectionery, ingredients],
  "almond-chocolate": [almondChocolate, chocolate, confectionery, ingredients],
  "protein-bars": [proteinBars, snacks, healthy, ingredients],
  "granola-bars": [granolaBars, healthy, snacks, ingredients],
  "mixed-nuts": [mixedNuts, snacks, ingredients, healthy],
  "trail-mix": [trailMix, snacks, healthy, ingredients],
  "fruit-gummies": [fruitGummies, confectionery, ingredients, sustain],
  "mint-candies": [mintCandies, confectionery, ingredients, sustain],
  "hard-candies": [mintCandies, confectionery, ingredients, sustain],
  "chewy-candies": [fruitGummies, confectionery, ingredients, sustain],
  "dog-food": [dogFood, pet, ingredients, healthy],
  "cat-food": [catFood, pet, ingredients, healthy],
  "pet-treats": [dogFood, pet, ingredients, snacks],
  "oats": [oats, healthy, ingredients, snacks],
  "breakfast-cereals": [breakfastCereals, healthy, ingredients, snacks],
  "energy-bites": [granolaBars, healthy, ingredients, sustain],
  "healthy-snacks": [granolaBars, healthy, snacks, ingredients],
  "pure-essence": [ingredients, sustain, healthy, snacks]
};
const CATEGORIES = [
  "Chocolate",
  "Snacks",
  "Confectionery",
  "Pet Nutrition",
  "Healthy Foods",
  "Ingredients"
];
const BRANDS = [
  // Chocolate Brands
  {
    slug: "aurea-chocolate",
    name: "Auréa Chocolate",
    category: "Chocolate",
    tagline: "Silky and Sublime",
    description: "Premium chocolate crafted from sustainably sourced cocoa.",
    image: brandAurea,
    details: "For over 75 years, Auréa has been the symbol of chocolate excellence. Each bar is crafted with hand-selected cocoa beans from our partner farms, creating a smooth, unforgettable experience. From velvety milk chocolate to intense dark varieties, Auréa brings moments of pure joy to families worldwide.",
    mission: "To deliver moments of pure chocolate indulgence while supporting sustainable farming practices and local communities.",
    values: ["Quality", "Sustainability", "Craftsmanship", "Fair Trade", "Innovation"],
    founded: "1949",
    heritage: "Established in Belgium, Auréa has been perfecting the art of chocolate making for three generations.",
    features: [
      "100% sustainably sourced cocoa",
      "No artificial flavors",
      "Fair trade certified",
      "Melts-in-your-mouth texture"
    ]
  },
  {
    slug: "cocoa-dreams",
    name: "Cocoa Dreams",
    category: "Chocolate",
    tagline: "Indulgence with Purpose",
    description: "Artisanal chocolate with premium fillings.",
    image: brandCocoaDreams,
    details: "Cocoa Dreams brings together traditional chocolate-making with modern innovation. Our signature collection features exquisite flavor combinations created by award-winning chocolatiers.",
    mission: "To create memorable chocolate experiences that celebrate craftsmanship and award-winning flavor innovation.",
    values: ["Artistry", "Innovation", "Premium Quality", "Excellence", "Passion"],
    founded: "1985",
    heritage: "Born from a passion for chocolate, Cocoa Dreams combines heritage techniques with contemporary flavors.",
    features: [
      "Handmade fillings",
      "Organic cocoa butter",
      "Award-winning recipes",
      "Luxury packaging"
    ]
  },
  {
    slug: "hazelnut-harmony",
    name: "Hazelnut Harmony",
    category: "Chocolate",
    tagline: "A Match Made in Heaven",
    description: "Roasted Mediterranean hazelnuts in creamy chocolate.",
    image: brandHazelnut,
    details: "Experience the perfect balance of roasted hazelnut and smooth chocolate. Each piece is carefully crafted to deliver an authentic taste experience.",
    mission: "To celebrate the perfect harmony between premium Mediterranean hazelnuts and fine chocolate.",
    values: ["Tradition", "Quality", "Balance", "Authenticity", "Enjoyment"],
    founded: "1972",
    heritage: "A Mediterranean treasure, combining Italian hazelnut expertise with Belgian chocolate mastery.",
    features: [
      "Mediterranean hazelnuts",
      "Small-batch production",
      "Gluten-free option",
      "Rich hazelnut flavor"
    ]
  },
  // Snacks Brands
  {
    slug: "nature-boost",
    name: "Nature Boost",
    category: "Snacks",
    tagline: "Nutrition Meets Taste",
    description: "20g of plant protein in every elegantly wrapped bar.",
    image: brandNatureBoost,
    details: "Nature Boost combines functional nutrition with delicious taste. Our protein bars are made with real ingredients and provide sustained energy for active lifestyles.",
    mission: "To fuel active lifestyles with nutritious, delicious snacks that support wellness without compromise.",
    values: ["Health", "Nutrition", "Sustainability", "Active Living", "Transparency"],
    founded: "2015",
    heritage: "Created by nutritionists and athletes for athletes and wellness enthusiasts.",
    features: [
      "Plant-based protein",
      "20g protein per bar",
      "No artificial sweeteners",
      "Vegan friendly"
    ]
  },
  {
    slug: "golden-grain",
    name: "Golden Grain",
    category: "Snacks",
    tagline: "Pure, Simple, Wholesome",
    description: "Slow-baked oats, honey and toasted seeds.",
    image: brandGoldenGrain,
    details: "Golden Grain celebrates the simplicity of wholesome ingredients. Each granola bar is baked fresh daily with premium oats and golden honey.",
    mission: "To provide pure, wholesome nutrition through simple, natural ingredients and time-honored baking methods.",
    values: ["Purity", "Simplicity", "Wholesomeness", "Tradition", "Nourishment"],
    founded: "2008",
    heritage: "Inspired by Scandinavian baking traditions, Golden Grain brings artisanal granola to everyday snacking.",
    features: ["Slow-baked daily", "No added sugar", "High fiber content", "Naturally energizing"]
  },
  {
    slug: "nut-artisan",
    name: "Nut Artisan",
    category: "Snacks",
    tagline: "Hand-Selected Excellence",
    description: "Carefully roasted and seasoned nuts.",
    image: snacks,
    details: "Nut Artisan sources the finest nuts from around the world, roasting them in small batches to perfection.",
    mission: "To showcase the natural excellence of premium nuts through careful sourcing and masterful roasting.",
    values: ["Quality", "Craftsmanship", "Global Sourcing", "Purity", "Excellence"],
    founded: "2003",
    heritage: "From nut orchards to your table, Nut Artisan maintains complete control over every roast.",
    features: ["Hand-roasted", "Small batch", "Lightly salted", "No GMO"]
  },
  // Confectionery Brands
  {
    slug: "joy-gummies",
    name: "Joy Gummies",
    category: "Confectionery",
    tagline: "Naturally Delicious Fun",
    description: "Real fruit gummies, naturally coloured and flavoured.",
    image: confectionery,
    details: "Made from real fruit juice and pectin, Joy Gummies deliver authentic fruit flavors with vibrant natural colors.",
    mission: "To bring joy and natural flavor to confectionery through real fruit and clean ingredients.",
    values: ["Natural", "Joy", "Quality", "Transparency", "Health-Conscious"],
    founded: "2012",
    heritage: "Joy Gummies pioneered the real fruit gummy movement, proving that natural can be delicious.",
    features: ["Real fruit juice", "Natural colors", "No artificial flavors", "Low sugar option"]
  },
  {
    slug: "mint-essence",
    name: "Mint Essence",
    category: "Confectionery",
    tagline: "Crisp, Clean & Refreshing",
    description: "Premium peppermint candies with a cool finish.",
    image: confectionery,
    details: "Mint Essence brings a moment of pure refreshment. Crafted with natural peppermint oil, each candy provides a crisp, clean sensation.",
    mission: "To deliver pure refreshment through premium peppermint and natural ingredients.",
    values: ["Purity", "Refreshment", "Natural", "Heritage", "Simplicity"],
    founded: "1995",
    heritage: "A legacy of peppermint excellence, Mint Essence sources the finest oils from traditional peppermint farms.",
    features: [
      "Natural peppermint oil",
      "Cool sensation",
      "Sugar-free option",
      "Long lasting flavor"
    ]
  },
  // Pet Nutrition Brands
  {
    slug: "pawsitive-nutrition",
    name: "Pawsitive Nutrition",
    category: "Pet Nutrition",
    tagline: "Science Meets Love",
    description: "Complete nutrition for every life stage and breed.",
    image: pet,
    details: "Pawsitive Nutrition is backed by veterinary science and formulated by nutritionists who understand your pet's needs. Every formula is created to support health, vitality, and happiness.",
    mission: "To support pet health and happiness through scientifically-formulated, nutritionally-complete diets.",
    values: ["Pet Health", "Science", "Love", "Veterinary Excellence", "Happiness"],
    founded: "2010",
    heritage: "Founded by veterinarians dedicated to optimal pet nutrition.",
    features: ["Vet-formulated", "All life stages", "Breed-specific options", "Grain-free recipes"]
  },
  {
    slug: "feline-care",
    name: "Feline Care",
    category: "Pet Nutrition",
    tagline: "Nutrition Tailored for Cats",
    description: "Carefully balanced recipes for happy, healthy cats.",
    image: pet,
    details: "Feline Care recognizes that cats have unique nutritional needs. Our recipes are formulated by feline nutrition experts.",
    mission: "To provide cats with specialized nutrition that respects their unique biological needs.",
    values: ["Cat Health", "Specialization", "Expertise", "Care", "Wellness"],
    founded: "2009",
    heritage: "Developed by feline nutrition specialists with decades of combined experience.",
    features: ["Taurine-rich", "Hairball control", "Indoor cat formula", "Naturally balanced"]
  },
  {
    slug: "pet-treats-premium",
    name: "Premium Pet Treats",
    category: "Pet Nutrition",
    tagline: "Rewards Your Pet Deserves",
    description: "Wholesome rewards your pets will love.",
    image: pet,
    details: "Every treat is a moment of connection between you and your pet. Premium Pet Treats are made with natural ingredients and love.",
    mission: "To strengthen the bond between pets and their owners through wholesome, natural rewards.",
    values: ["Pet Love", "Natural", "Bond", "Wholesome", "Reward"],
    founded: "2014",
    heritage: "Created to celebrate the special moments between pets and their families.",
    features: [
      "Natural ingredients",
      "No artificial preservatives",
      "Long-lasting",
      "Vet-approved"
    ]
  },
  // Healthy Foods Brands
  {
    slug: "pure-harvest",
    name: "Pure Harvest",
    category: "Healthy Foods",
    tagline: "From Farm to Family",
    description: "Stone-rolled whole oats for a wholesome start.",
    image: healthy,
    details: "Pure Harvest connects you with wholesome foods sourced directly from sustainable farms. Every product tells a story of quality and care.",
    mission: "To connect families with pure, wholesome foods grown with care and sustainability.",
    values: ["Purity", "Sustainability", "Farms", "Family", "Wellness"],
    founded: "2006",
    heritage: "Rooted in commitment to sustainable farming and transparent supply chains.",
    features: ["Organic certified", "Stone-rolled", "No additives", "Whole grain"]
  },
  {
    slug: "wellness-grains",
    name: "Wellness Grains",
    category: "Healthy Foods",
    tagline: "Nourish Your Body",
    description: "Whole grain cereals with no refined sugar.",
    image: healthy,
    details: "Wellness Grains believes breakfast is the foundation of a great day. Our cereals are packed with whole grains and essential nutrients.",
    mission: "To empower families to start each day with nutritious, delicious whole grain cereals.",
    values: ["Nutrition", "Wellness", "Energy", "Family Health", "Quality"],
    founded: "2011",
    heritage: "Built on the belief that breakfast sets the tone for the entire day.",
    features: ["High fiber", "Low sugar", "Rich in nutrients", "Kid-approved"]
  },
  // Ingredients Brands
  {
    slug: "pure-essence",
    name: "Pure Essence",
    category: "Ingredients",
    tagline: "Quality Ingredients for Quality Cooking",
    description: "Premium cooking ingredients for professional results.",
    image: ingredients,
    details: "Pure Essence supplies ingredient companies and restaurants with the finest quality cocoa, vanilla, and spices.",
    mission: "To deliver premium, traceable ingredients that enable professional-quality cooking and baking.",
    values: ["Quality", "Professionalism", "Traceability", "Purity", "Excellence"],
    founded: "1998",
    heritage: "Trusted by chefs and ingredient companies worldwide for uncompromising quality.",
    features: ["Food-grade quality", "Traceable sourcing", "Bulk options", "Professional grade"]
  }
];
const PRODUCTS = [
  {
    slug: "milk-chocolate",
    name: "Milk Chocolate",
    category: "Chocolate",
    description: "Silky milk chocolate crafted from sustainably sourced cocoa.",
    brand: "Auréa Chocolate"
  },
  {
    slug: "dark-chocolate",
    name: "Dark Chocolate",
    category: "Chocolate",
    description: "Intense 70% dark chocolate with a smooth, lingering finish.",
    brand: "Auréa Chocolate"
  },
  {
    slug: "hazelnut-chocolate",
    name: "Hazelnut Chocolate",
    category: "Chocolate",
    description: "Roasted Mediterranean hazelnuts folded into creamy chocolate.",
    brand: "Hazelnut Harmony"
  },
  {
    slug: "caramel-chocolate",
    name: "Caramel Chocolate",
    category: "Chocolate",
    description: "Slow-cooked caramel layered in golden milk chocolate.",
    brand: "Cocoa Dreams"
  },
  {
    slug: "almond-chocolate",
    name: "Almond Chocolate",
    category: "Chocolate",
    description: "Whole roasted almonds in a delicate chocolate shell.",
    brand: "Auréa Chocolate"
  },
  {
    slug: "protein-bars",
    name: "Protein Bars",
    category: "Snacks",
    description: "20g of plant protein in every elegantly wrapped bar.",
    brand: "Nature Boost"
  },
  {
    slug: "granola-bars",
    name: "Granola Bars",
    category: "Snacks",
    description: "Slow-baked oats, honey and toasted seeds.",
    brand: "Golden Grain"
  },
  {
    slug: "mixed-nuts",
    name: "Mixed Nuts",
    category: "Snacks",
    description: "Hand-selected nuts, lightly roasted, lightly salted.",
    brand: "Nut Artisan"
  },
  {
    slug: "trail-mix",
    name: "Trail Mix",
    category: "Snacks",
    description: "Berries, nuts and dark chocolate for the long way home.",
    brand: "Nut Artisan"
  },
  {
    slug: "fruit-gummies",
    name: "Fruit Gummies",
    category: "Confectionery",
    description: "Real fruit gummies, naturally coloured and flavoured.",
    brand: "Joy Gummies"
  },
  {
    slug: "mint-candies",
    name: "Mint Candies",
    category: "Confectionery",
    description: "Crisp peppermint shells with a cool, clean finish.",
    brand: "Mint Essence"
  },
  {
    slug: "hard-candies",
    name: "Hard Candies",
    category: "Confectionery",
    description: "Classic boiled sweets in heritage fruit flavours.",
    brand: "Joy Gummies"
  },
  {
    slug: "chewy-candies",
    name: "Chewy Candies",
    category: "Confectionery",
    description: "Soft, slow-pulled chews with a gentle bite.",
    brand: "Mint Essence"
  },
  {
    slug: "oats",
    name: "Premium Oats",
    category: "Healthy Foods",
    description: "Stone-rolled whole oats for a wholesome start.",
    brand: "Pure Harvest"
  },
  {
    slug: "breakfast-cereals",
    name: "Breakfast Cereals",
    category: "Healthy Foods",
    description: "Whole grain cereals with no refined sugar.",
    brand: "Wellness Grains"
  },
  {
    slug: "energy-bites",
    name: "Energy Bites",
    category: "Healthy Foods",
    description: "Dates, oats and cocoa pressed into perfect bites.",
    brand: "Pure Harvest"
  },
  {
    slug: "healthy-snacks",
    name: "Healthy Snacks",
    category: "Healthy Foods",
    description: "Crunchy, satisfying, nutritionist-approved.",
    brand: "Wellness Grains"
  },
  {
    slug: "dog-food",
    name: "Dog Food",
    category: "Pet Nutrition",
    description: "Complete nutrition for every life stage and breed.",
    brand: "Pawsitive Nutrition"
  },
  {
    slug: "cat-food",
    name: "Cat Food",
    category: "Pet Nutrition",
    description: "Carefully balanced recipes for happy, healthy cats.",
    brand: "Feline Care"
  },
  {
    slug: "pet-treats",
    name: "Pet Treats",
    category: "Pet Nutrition",
    description: "Wholesome rewards your pets will love.",
    brand: "Premium Pet Treats"
  }
];
function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
function getBrand(slug) {
  return BRANDS.find((b) => b.slug === slug);
}
function getBrandsByCategory(category) {
  return BRANDS.filter((b) => b.category === category);
}
function getRelated(slug, n = 3) {
  const p = getProduct(slug);
  if (!p) return [];
  return PRODUCTS.filter((x) => x.category === p.category && x.slug !== slug).slice(0, n);
}
const NAV = [
  {
    to: "/about",
    label: "Who We Are",
    items: [
      { label: "Our story", to: "/about#story" },
      { label: "Purpose & principles", to: "/about#purpose" },
      { label: "Leadership", to: "/about#leadership" },
      { label: "Global presence", to: "/about#global-presence" }
    ]
  },
  {
    to: "/sustainability",
    label: "Sustainability",
    items: [
      { label: "Climate action", to: "/sustainability#climate-action" },
      { label: "Responsible sourcing", to: "/sustainability#responsible-sourcing" },
      { label: "Circular packaging", to: "/sustainability#circular-packaging" },
      { label: "Community impact", to: "/sustainability#community-impact" }
    ]
  },
  {
    to: "/news",
    label: "News & Stories"
  }
];
const BRAND_GROUPS = [
  {
    title: "Confectionery",
    description: "Chocolate, candy and snacks crafted for moments of everyday joy.",
    image: chocolate,
    category: "confectionery"
  },
  {
    title: "Pet Nutrition",
    description: "Science-led nutrition supporting healthier, happier lives for pets.",
    image: pet,
    category: "pet-nutrition"
  },
  {
    title: "Food & Wellness",
    description: "Wholesome foods and ingredients made for modern families.",
    image: healthy,
    category: "healthy-foods"
  }
];
function SiteHeader() {
  const routerState = useRouterState();
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const isProductsRoute = routerState.matches.some(
    (match) => match.routeId?.includes("products")
  );
  const filteredBrands = BRANDS.filter(
    (b) => b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredProducts = PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const _routeKey = routerState.matches.map((m) => m.routeId).join("|");
  reactExports.useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, [_routeKey]);
  reactExports.useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "sticky inset-x-0 top-0 z-50 border-b border-border bg-background transition-shadow",
        scrolled && "shadow-[var(--shadow-soft)]"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden h-10 bg-primary text-primary-foreground lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex h-full items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { size: 14 }),
            " Global locations"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", className: "hover:text-accent", children: "Careers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "font-black hover:text-accent", children: "Contact" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex h-20 items-center justify-between gap-6 lg:h-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black tracking-[-0.06em] md:text-3xl", children: "AURÉA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-lg font-light tracking-tight text-muted-foreground md:text-xl", children: "FOODS" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden h-full items-center gap-9 lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex h-full items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/products",
                  className: "flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Our Brands" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 13, className: "transition-transform group-hover:rotate-180" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none invisible absolute inset-x-0 top-full translate-y-2 border-t-2 border-primary bg-background opacity-0 shadow-[var(--shadow-elegant)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary py-8 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex items-center justify-between gap-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-black", children: "Our Brands" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-base text-primary-foreground/80", children: "Trusted brands, products and nutrition solutions made with quality, science and care." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/products",
                      className: "whitespace-nowrap border-b border-primary-foreground pb-1 text-xs font-black uppercase tracking-widest",
                      children: "View all brands"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid grid-cols-3 gap-10 py-10", children: BRAND_GROUPS.map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/products/category/$category",
                    params: { category: brand.category },
                    className: "group/brand grid grid-cols-[112px_1fr] items-center gap-5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: brand.image,
                          alt: `${brand.title} image`,
                          className: "aspect-square size-28 object-cover"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center justify-between text-xl font-black text-primary", children: [
                          brand.title,
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover/brand:translate-x-1", children: "→" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: brand.description })
                      ] })
                    ]
                  },
                  brand.title
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex gap-10 py-5 text-xs font-extrabold uppercase tracking-wider text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "Brand directory" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sustainability", children: "Sourcing standards" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Partner with us" })
                ] }) })
              ] })
            ] }),
            NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex h-full items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: item.to,
                  className: "flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
                    "items" in item && Array.isArray(item.items) && item.items.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 13, className: "transition-transform group-hover:rotate-180" }) : null
                  ]
                }
              ),
              "items" in item && Array.isArray(item.items) && item.items.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none invisible absolute inset-x-0 top-full translate-y-2 border-t-2 border-primary bg-background opacity-0 shadow-[var(--shadow-elegant)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid grid-cols-[1fr_1.6fr] gap-16 py-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: item.to,
                    className: "mt-6 inline-flex items-center border-b border-primary pb-1 text-xs font-black uppercase tracking-widest text-primary",
                    onClick: () => {
                    },
                    children: "Explore all"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-10 gap-y-1 border-l border-border pl-12", children: (() => {
                  const items = item.items;
                  if (!Array.isArray(items) || items.length === 0) return null;
                  return items.map((x) => {
                    const label = x.label;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: x.to,
                        className: "flex items-center justify-between border-b border-border py-4 text-sm font-bold transition-colors hover:text-primary",
                        onClick: () => {
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                        ]
                      },
                      label
                    );
                  });
                })() })
              ] }) }) : null
            ] }, item.to))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "inline-flex items-center justify-center rounded-full p-2 text-primary transition hover:bg-muted/20 hover:text-foreground",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Open navigation menu",
              "aria-expanded": open,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-5 lg:flex", children: !isProductsRoute && (searchOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[420px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: (event) => event.preventDefault(),
                className: "flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        autoFocus: true,
                        value: searchQuery,
                        onChange: (e) => setSearchQuery(e.target.value),
                        placeholder: "Search brands or products...",
                        className: "w-full rounded-full bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "rounded-full bg-cocoa px-4 py-3 text-sm font-semibold text-cream transition hover:bg-cocoa/90",
                      children: "Search"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      },
                      className: "rounded-full p-2 text-muted-foreground transition hover:bg-muted/20 hover:text-foreground",
                      "aria-label": "Close search",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-full mt-2 w-full z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-72 overflow-y-auto rounded-lg border border-border bg-background p-2 shadow-[var(--shadow-soft)]", children: [
              searchQuery === "" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-muted-foreground", children: "Start typing to search brands or products." }) : null,
              searchQuery !== "" && filteredBrands.length === 0 && filteredProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-muted-foreground", children: "No results found." }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2", children: [
                filteredBrands.slice(0, 6).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/products/brand/$slug",
                    params: { slug: b.slug },
                    onClick: () => setSearchOpen(false),
                    className: "flex items-start gap-3 rounded-md px-3 py-2 hover:bg-card transition",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-foreground", children: b.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", children: b.tagline })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase", children: "Brand" })
                    ]
                  },
                  b.slug
                )),
                filteredProducts.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/product/$slug",
                    params: { slug: p.slug },
                    onClick: () => setSearchOpen(false),
                    className: "flex items-start gap-3 rounded-md px-3 py-2 hover:bg-card transition",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-foreground", children: p.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", children: p.brand })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase", children: "Product" })
                    ]
                  },
                  p.slug
                ))
              ] })
            ] }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "aria-label": "Search",
              className: "text-primary",
              onClick: () => setSearchOpen(true),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, {}),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "Search" })
              ]
            }
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "border-t border-border bg-background lg:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-col gap-1", children: [
              NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: item.to,
                  onClick: () => setOpen(false),
                  className: "py-3 text-lg font-bold text-foreground",
                  children: item.label
                },
                item.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/products",
                  onClick: () => setOpen(false),
                  className: "order-first py-3 text-lg font-bold text-foreground",
                  children: "Our Brands"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 gap-2", children: BRAND_GROUPS.map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/products/category/$category",
                  params: { category: brand.category },
                  onClick: () => setOpen(false),
                  className: "rounded-lg border border-border bg-card/60 px-3 py-2 text-sm font-bold text-foreground hover:bg-card",
                  children: brand.title
                },
                brand.category
              )) })
            ] })
          }
        ) })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-cocoa text-cream mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-cream text-cocoa font-display text-lg", children: "A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl", children: "Auréa Foods" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-cream/70 max-w-sm leading-relaxed", children: "Crafting food experiences loved around the world. Quality, innovation and trust in every product, every market, every day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": "Social link",
            className: "grid h-10 w-10 place-items-center rounded-full border border-cream/15 transition-colors hover:bg-cream hover:text-cocoa",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Company",
          links: [
            { to: "/about", label: "About Us" },
            { to: "/careers", label: "Careers" },
            { to: "/news", label: "News & Media" },
            { to: "/contact", label: "Contact" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Our Brands",
          links: [
            { to: "/products", label: "Chocolate" },
            { to: "/products", label: "Snacks" },
            { to: "/products", label: "Confectionery" },
            { to: "/products", label: "Pet Nutrition" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-4", children: "Newsletter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-cream/70 mb-4", children: "Updates on innovation, sustainability and new launches." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex gap-2", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              required: true,
              placeholder: "you@company.com",
              className: "flex-1 rounded-full bg-cream/10 border border-cream/15 px-4 py-2.5 text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-cocoa hover:opacity-90", children: "Join" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-cream/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-cream/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Auréa Foods. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms & Conditions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Cookies" })
      ] })
    ] }) })
  ] });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-cream/70", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "hover:text-gold transition-colors", children: l.label }) }, l.label)) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$p = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Auréa Foods — Crafting Food Experiences Loved Around The World" },
      {
        name: "description",
        content: "Auréa Foods is a global food manufacturer crafting premium chocolate, confectionery, snacks, healthy foods and pet nutrition for families everywhere."
      },
      { name: "author", content: "Auréa Foods" },
      { property: "og:title", content: "Auréa Foods — Crafting Food Experiences" },
      {
        property: "og:description",
        content: "Quality, innovation and trusted food products delivered to families in 80+ countries."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$p.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-dvh flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$n = () => import("./sustainability-n1E3bNFH.mjs");
const Route$o = createFileRoute("/sustainability")({
  head: () => ({
    meta: [{
      title: "Sustainability — Auréa Foods"
    }, {
      name: "description",
      content: "Our 2035 roadmap for regenerative sourcing, renewable energy, sustainable packaging and community impact."
    }, {
      property: "og:title",
      content: "Sustainability — Auréa Foods"
    }, {
      property: "og:description",
      content: "How we make food a force for good."
    }, {
      property: "og:url",
      content: "/sustainability"
    }],
    links: [{
      rel: "canonical",
      href: "/sustainability"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const BASE_URL = "";
const Route$n = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/about",
          "/products",
          "/sustainability",
          "/news",
          "/careers",
          "/contact",
          ...PRODUCTS.map((p) => `/products/${p.slug}`)
        ];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$m = () => import("./search-BsN-m3Zi.mjs");
const Route$m = createFileRoute("/search")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component"),
  head: () => ({
    meta: [{
      title: "Search — Auréa Foods"
    }, {
      name: "robots",
      content: "noindex"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  })
});
const $$splitComponentImporter$l = () => import("./products-sx8dxZe5.mjs");
const Route$l = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Our Brands — Auréa Foods"
    }, {
      name: "description",
      content: "Explore Auréa Foods brands across chocolate, snacks, confectionery, pet nutrition, healthy foods and ingredients."
    }, {
      property: "og:title",
      content: "Our Brands — Auréa Foods"
    }, {
      property: "og:description",
      content: "Trusted brands made with quality, science and care."
    }, {
      property: "og:url",
      content: "/products"
    }],
    links: [{
      rel: "canonical",
      href: "/products"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./news-11aqFGn0.mjs");
const Route$k = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News & Media — Auréa Foods"
    }, {
      name: "description",
      content: "Company news, industry insights, sustainability updates and product launches from Auréa Foods."
    }, {
      property: "og:title",
      content: "News & Media — Auréa Foods"
    }, {
      property: "og:description",
      content: "The latest from the Auréa newsroom."
    }, {
      property: "og:url",
      content: "/news"
    }],
    links: [{
      rel: "canonical",
      href: "/news"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./contact-BeC7bO9m.mjs");
const Route$j = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Auréa Foods"
    }, {
      name: "description",
      content: "Get in touch with Auréa Foods — partnerships, press, careers and customer enquiries."
    }, {
      property: "og:title",
      content: "Contact — Auréa Foods"
    }, {
      property: "og:description",
      content: "Reach our global offices."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./careers-DJDX3dbz.mjs");
const Route$i = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Auréa Foods"
    }, {
      name: "description",
      content: "Join 18,000 people building the world's most trusted food company. Open roles across manufacturing, R&D, supply chain and corporate."
    }, {
      property: "og:title",
      content: "Careers — Auréa Foods"
    }, {
      property: "og:description",
      content: "Build a career that feeds the world."
    }, {
      property: "og:url",
      content: "/careers"
    }],
    links: [{
      rel: "canonical",
      href: "/careers"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./about-Dd4sG133.mjs");
const Route$h = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Auréa Foods"
    }, {
      name: "description",
      content: "Four generations of craft, a global manufacturing footprint, and a single obsession: making food families love."
    }, {
      property: "og:title",
      content: "About Auréa Foods"
    }, {
      property: "og:description",
      content: "Our story, mission, leadership and manufacturing excellence."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./index-CV_-b8Hi.mjs");
const Route$g = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Auréa Foods — Crafting Food Experiences Loved Around The World"
    }, {
      name: "description",
      content: "Global food manufacturer delivering premium chocolate, snacks, confectionery, healthy foods and pet nutrition to families in 80+ countries."
    }, {
      property: "og:title",
      content: "Auréa Foods — Crafting Food Experiences"
    }, {
      property: "og:description",
      content: "Quality, innovation and trust in every product we make."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./sustainability.responsible-sourcing-D5_6PROS.mjs");
const Route$f = createFileRoute("/sustainability/responsible-sourcing")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component"),
  head: () => ({
    meta: [{
      title: "Responsible sourcing — Auréa Foods"
    }, {
      name: "description",
      content: "How we source responsibly."
    }],
    links: [{
      rel: "canonical",
      href: "/sustainability/responsible-sourcing"
    }]
  })
});
const $$splitComponentImporter$e = () => import("./sustainability.community-impact-BbTIul5f.mjs");
const Route$e = createFileRoute("/sustainability/community-impact")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component"),
  head: () => ({
    meta: [{
      title: "Community impact — Auréa Foods"
    }, {
      name: "description",
      content: "How we invest in communities."
    }],
    links: [{
      rel: "canonical",
      href: "/sustainability/community-impact"
    }]
  })
});
const $$splitComponentImporter$d = () => import("./sustainability.climate-action-DeFLUk_h.mjs");
const Route$d = createFileRoute("/sustainability/climate-action")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component"),
  head: () => ({
    meta: [{
      title: "Climate action — Auréa Foods"
    }, {
      name: "description",
      content: "Our climate action initiatives."
    }],
    links: [{
      rel: "canonical",
      href: "/sustainability/climate-action"
    }]
  })
});
const $$splitComponentImporter$c = () => import("./sustainability.circular-packaging-CP5OQ8g-.mjs");
const Route$c = createFileRoute("/sustainability/circular-packaging")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component"),
  head: () => ({
    meta: [{
      title: "Circular packaging — Auréa Foods"
    }, {
      name: "description",
      content: "Our approach to circular packaging."
    }],
    links: [{
      rel: "canonical",
      href: "/sustainability/circular-packaging"
    }]
  })
});
const $$splitComponentImporter$b = () => import("./product._slug-Llz6Cn1c.mjs");
const Route$b = createFileRoute("/product/$slug")({
  loader: ({
    params
  }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    const brand = product.brand ? getBrand(product.brand) : null;
    return {
      product,
      brand,
      related: getRelated(params.slug)
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.product.name} — Auréa Foods`
    }, {
      name: "description",
      content: loaderData.product.description
    }, {
      property: "og:title",
      content: `${loaderData.product.name} — Auréa Foods`
    }, {
      property: "og:description",
      content: loaderData.product.description
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/product/${loaderData.product.slug}`
    }] : [],
    links: loaderData ? [{
      rel: "canonical",
      href: `/product/${loaderData.product.slug}`
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./news.media-resources-DktBOmpO.mjs");
const Route$a = createFileRoute("/news/media-resources")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component"),
  head: () => ({
    meta: [{
      title: "Media resources — Auréa Foods"
    }, {
      name: "description",
      content: "Downloadables and media resources."
    }],
    links: [{
      rel: "canonical",
      href: "/news/media-resources"
    }]
  })
});
const $$splitComponentImporter$9 = () => import("./news.latest-news-Bo6-LM1N.mjs");
const Route$9 = createFileRoute("/news/latest-news")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      title: "Latest news — Auréa Foods"
    }, {
      name: "description",
      content: "Latest updates from Auréa Foods."
    }],
    links: [{
      rel: "canonical",
      href: "/news/latest-news"
    }]
  })
});
const $$splitComponentImporter$8 = () => import("./news.innovation-D2TBoHYi.mjs");
const Route$8 = createFileRoute("/news/innovation")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      title: "Innovation — Auréa Foods"
    }, {
      name: "description",
      content: "Innovation stories from Auréa Foods."
    }],
    links: [{
      rel: "canonical",
      href: "/news/innovation"
    }]
  })
});
const $$splitComponentImporter$7 = () => import("./news.company-stories-C9Ib3zSh.mjs");
const Route$7 = createFileRoute("/news/company-stories")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "Company stories — Auréa Foods"
    }, {
      name: "description",
      content: "Culture and company stories from Auréa Foods."
    }],
    links: [{
      rel: "canonical",
      href: "/news/company-stories"
    }]
  })
});
const $$splitComponentImporter$6 = () => import("./about.story-CjfUY2NF.mjs");
const Route$6 = createFileRoute("/about/story")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Our story — Auréa Foods"
    }, {
      name: "description",
      content: "Learn about Auréa Foods history."
    }],
    links: [{
      rel: "canonical",
      href: "/about/story"
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./about.purpose-BDYzUkOJ.mjs");
const Route$5 = createFileRoute("/about/purpose")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Purpose & principles — Auréa Foods"
    }, {
      name: "description",
      content: "Our purpose and principles."
    }],
    links: [{
      rel: "canonical",
      href: "/about/purpose"
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./about.leadership-C0WUMO08.mjs");
const Route$4 = createFileRoute("/about/leadership")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Leadership — Auréa Foods"
    }, {
      name: "description",
      content: "Meet the leadership team at Auréa Foods."
    }],
    links: [{
      rel: "canonical",
      href: "/about/leadership"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./about.global-presence-CAlws-Et.mjs");
const Route$3 = createFileRoute("/about/global-presence")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Global presence — Auréa Foods"
    }, {
      name: "description",
      content: "Our global footprint."
    }],
    links: [{
      rel: "canonical",
      href: "/about/global-presence"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./products.category._slug-BNxCuXMA.mjs");
const Route$2 = createFileRoute("/products/category/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: ({
    params
  }) => {
    const categorySlug = params.slug;
    const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
    return {
      meta: [{
        title: `${categoryName} — Auréa Foods`
      }, {
        name: "description",
        content: `Explore our ${categoryName} brands and products.`
      }, {
        property: "og:title",
        content: `${categoryName} — Auréa Foods`
      }],
      links: [{
        rel: "canonical",
        href: `/products/category/${categorySlug}`
      }]
    };
  }
});
const $$splitComponentImporter$1 = () => import("./products.category._category-ZDizR-Va.mjs");
const Route$1 = createFileRoute("/products/category/$category")({
  loader: ({
    params
  }) => {
    const slug = params.category;
    const category = CATEGORIES.find((c) => c.toLowerCase().replace(/\s+/g, "-") === slug);
    if (!category) throw notFound();
    const brands = getBrandsByCategory(category);
    const items = PRODUCTS.filter((p) => p.category === category);
    return {
      category,
      brands,
      items
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.category} — Auréa Foods`
    }, {
      name: "description",
      content: `Explore ${loaderData.category} brands and products from Auréa Foods.`
    }, {
      property: "og:title",
      content: `${loaderData.category} — Auréa Foods`
    }, {
      property: "og:description",
      content: `Explore ${loaderData.category} brands and products from Auréa Foods.`
    }] : [],
    links: loaderData ? [{
      rel: "canonical",
      href: `/products/category/${loaderData.category.toLowerCase().replace(/\s+/g, "-")}`
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./products.brand._slug-Cb9Cx5fc.mjs");
const Route = createFileRoute("/products/brand/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Brand — Auréa Foods"
    }, {
      name: "description",
      content: "Discover our premium brand"
    }, {
      property: "og:title",
      content: "Brand — Auréa Foods"
    }],
    links: [{
      rel: "canonical",
      href: "/products/brand/"
    }]
  })
});
const SustainabilityRoute = Route$o.update({
  id: "/sustainability",
  path: "/sustainability",
  getParentRoute: () => Route$p
});
const SitemapDotxmlRoute = Route$n.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$p
});
const SearchRoute = Route$m.update({
  id: "/search",
  path: "/search",
  getParentRoute: () => Route$p
});
const ProductsRoute = Route$l.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$p
});
const NewsRoute = Route$k.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$p
});
const ContactRoute = Route$j.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$p
});
const CareersRoute = Route$i.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$p
});
const AboutRoute = Route$h.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$p
});
const IndexRoute = Route$g.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$p
});
const SustainabilityResponsibleSourcingRoute = Route$f.update({
  id: "/responsible-sourcing",
  path: "/responsible-sourcing",
  getParentRoute: () => SustainabilityRoute
});
const SustainabilityCommunityImpactRoute = Route$e.update({
  id: "/community-impact",
  path: "/community-impact",
  getParentRoute: () => SustainabilityRoute
});
const SustainabilityClimateActionRoute = Route$d.update({
  id: "/climate-action",
  path: "/climate-action",
  getParentRoute: () => SustainabilityRoute
});
const SustainabilityCircularPackagingRoute = Route$c.update({
  id: "/circular-packaging",
  path: "/circular-packaging",
  getParentRoute: () => SustainabilityRoute
});
const ProductSlugRoute = Route$b.update({
  id: "/product/$slug",
  path: "/product/$slug",
  getParentRoute: () => Route$p
});
const NewsMediaResourcesRoute = Route$a.update({
  id: "/media-resources",
  path: "/media-resources",
  getParentRoute: () => NewsRoute
});
const NewsLatestNewsRoute = Route$9.update({
  id: "/latest-news",
  path: "/latest-news",
  getParentRoute: () => NewsRoute
});
const NewsInnovationRoute = Route$8.update({
  id: "/innovation",
  path: "/innovation",
  getParentRoute: () => NewsRoute
});
const NewsCompanyStoriesRoute = Route$7.update({
  id: "/company-stories",
  path: "/company-stories",
  getParentRoute: () => NewsRoute
});
const AboutStoryRoute = Route$6.update({
  id: "/story",
  path: "/story",
  getParentRoute: () => AboutRoute
});
const AboutPurposeRoute = Route$5.update({
  id: "/purpose",
  path: "/purpose",
  getParentRoute: () => AboutRoute
});
const AboutLeadershipRoute = Route$4.update({
  id: "/leadership",
  path: "/leadership",
  getParentRoute: () => AboutRoute
});
const AboutGlobalPresenceRoute = Route$3.update({
  id: "/global-presence",
  path: "/global-presence",
  getParentRoute: () => AboutRoute
});
const ProductsCategorySlugRoute = Route$2.update({
  id: "/category/$slug",
  path: "/category/$slug",
  getParentRoute: () => ProductsRoute
});
const ProductsCategoryCategoryRoute = Route$1.update({
  id: "/category/$category",
  path: "/category/$category",
  getParentRoute: () => ProductsRoute
});
const ProductsBrandSlugRoute = Route.update({
  id: "/brand/$slug",
  path: "/brand/$slug",
  getParentRoute: () => ProductsRoute
});
const AboutRouteChildren = {
  AboutGlobalPresenceRoute,
  AboutLeadershipRoute,
  AboutPurposeRoute,
  AboutStoryRoute
};
const AboutRouteWithChildren = AboutRoute._addFileChildren(AboutRouteChildren);
const NewsRouteChildren = {
  NewsCompanyStoriesRoute,
  NewsInnovationRoute,
  NewsLatestNewsRoute,
  NewsMediaResourcesRoute
};
const NewsRouteWithChildren = NewsRoute._addFileChildren(NewsRouteChildren);
const ProductsRouteChildren = {
  ProductsBrandSlugRoute,
  ProductsCategoryCategoryRoute,
  ProductsCategorySlugRoute
};
const ProductsRouteWithChildren = ProductsRoute._addFileChildren(
  ProductsRouteChildren
);
const SustainabilityRouteChildren = {
  SustainabilityCircularPackagingRoute,
  SustainabilityClimateActionRoute,
  SustainabilityCommunityImpactRoute,
  SustainabilityResponsibleSourcingRoute
};
const SustainabilityRouteWithChildren = SustainabilityRoute._addFileChildren(
  SustainabilityRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute: AboutRouteWithChildren,
  CareersRoute,
  ContactRoute,
  NewsRoute: NewsRouteWithChildren,
  ProductsRoute: ProductsRouteWithChildren,
  SearchRoute,
  SitemapDotxmlRoute,
  SustainabilityRoute: SustainabilityRouteWithChildren,
  ProductSlugRoute
};
const routeTree = Route$p._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BRANDS as B,
  CATEGORIES as C,
  PRODUCT_IMAGES as P,
  Route$b as R,
  CATEGORY_IMAGES as a,
  chocolate as b,
  cn as c,
  Button as d,
  PRODUCT_GALLERY_IMAGES as e,
  PRODUCTS as f,
  getBrandsByCategory as g,
  Route$1 as h,
  getBrand as i,
  router as r,
  sustain as s
};
