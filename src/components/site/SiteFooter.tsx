import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-cocoa text-cream mt-24">
      <div className="container-x py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-cocoa font-display text-lg">
              A
            </span>
            <span className="font-display text-xl">Auréa Foods</span>
          </div>
          <p className="mt-5 text-sm text-cream/70 max-w-sm leading-relaxed">
            Crafting food experiences loved around the world. Quality, innovation and trust in every
            product, every market, every day.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 transition-colors hover:bg-cream hover:text-cocoa"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Company"
          links={[
            { to: "/about", label: "About Us" },
            { to: "/careers", label: "Careers" },
            { to: "/news", label: "News & Media" },
            { to: "/contact", label: "Contact" },
          ]}
        />

        <FooterCol
          title="Our Brands"
          links={[
            { to: "/products", label: "Chocolate" },
            { to: "/products", label: "Snacks" },
            { to: "/products", label: "Confectionery" },
            { to: "/products", label: "Pet Nutrition" },
          ]}
        />

        <div>
          <h4 className="font-display text-lg mb-4">Newsletter</h4>
          <p className="text-sm text-cream/70 mb-4">
            Updates on innovation, sustainability and new launches.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-full bg-cream/10 border border-cream/15 px-4 py-2.5 text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold"
            />
            <button className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-cocoa hover:opacity-90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Auréa Foods. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-lg mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-cream/70">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-gold transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
