"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type TemplateType = "landing" | "toko" | "dashboard";

type Template = {
  name: string;
  author: string;
  category: string;
  type: TemplateType;
  href: string;
  image: string;
};

const templates: Template[] = [
  {
    name: "Optimus Platform",
    author: "@kerroudj",
    category: "SaaS / Company Profile",
    type: "landing",
    href: "https://v0.app/templates/LHv4frpA7Us",
    image: "/templates/optimus.JPG",
  },

  {
    name: "Brillance SaaS",
    author: "@yadwinder",
    category: "SaaS Landing Page",
    type: "landing",
    href: "https://v0.app/templates/zdiN8dHwaaT",
    image: "/templates/briliant.JPG",
  },

  {
    name: "Pointer AI",
    author: "@yadwinder",
    category: "Product Landing",
    type: "landing",
    href: "https://v0.app/templates/XQxxv76lK5w",
    image: "/templates/pointer.JPG",
  },

  {
    name: "Auralink",
    author: "@mikeyi2a",
    category: "SaaS Landing Page",
    type: "landing",
    href: "https://v0.app/templates/zoQPxUaTqvE",
    image: "/templates/auralink.JPG",
  },

  {
    name: "Hously Studio",
    author: "@kerroudj",
    category: "Architecture / Property",
    type: "landing",
    href: "https://v0.app/templates/8o7jKw7qwlb",
    image: "/templates/hously.JPG",
  },

  {
    name: "Skal Ventures",
    author: "@joyco",
    category: "Agency / Corporate",
    type: "landing",
    href: "https://v0.app/templates/tnZGzubtsTc",
    image: "/templates/skal.JPG",
  },

  {
    name: "MONO Store",
    author: "@kerroudj",
    category: "eCommerce",
    type: "toko",
    href: "https://v0.app/templates/YZqpzOQAqeb",
    image: "/templates/mono.JPG",
  },

  {
    name: "Shopify Store",
    author: "@joyco",
    category: "Shopify eCommerce",
    type: "toko",
    href: "https://v0.app/templates/XmzC9oi7g4m",
    image: "/templates/shopify.JPG",
  },

  {
    name: "Car Rental",
    author: "@patelmaya9812",
    category: "Booking / Rental",
    type: "toko",
    href: "https://v0.app/templates/CirmLMhUoF0",
    image: "/templates/rental.JPG",
  },

  {
    name: "Financial Analytics",
    author: "@kerroudj",
    category: "Analytics Dashboard",
    type: "dashboard",
    href: "https://v0.app/templates/jrYuNlqLsd9",
    image: "/templates/finance.JPG",
  },
];

const filters: { label: string; value: TemplateType | "all" }[] = [
  { label: "Semua", value: "all" },
  { label: "Landing Page", value: "landing" },
  { label: "Toko Online", value: "toko" },
  { label: "Dashboard", value: "dashboard" },
];

/* A lightweight CSS wireframe preview that reflects the template's layout type */


export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState<TemplateType | "all">("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visible = templates.filter((t) => active === "all" || t.type === active);

  return (
    <section id="templates" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Template Gallery
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Pilih template,
            <br />
            coba live preview-nya.
          </h2>
          <p className="text-xl text-muted-foreground">
            Landing page, toko online, hingga dashboard. Klik template untuk
            membuka live preview yang sudah tersedia.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 h-10 rounded-full text-sm font-medium transition-all duration-300 ${active === f.value
                ? "bg-foreground text-background"
                : "border border-foreground/15 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col overflow-hidden rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${150 + i * 60}ms` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-zinc-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                      {t.name}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {t.category}
                    </p>

                    <p className="mt-4 text-xs text-zinc-400">
                      {t.author}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-zinc-600 group-hover:text-black transition-colors">
                    Live Preview
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Full-width marquee outside container for flair */}
      <div className="w-full mt-16 lg:mt-24">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {templates.map((t) => (
                <a
                  key={`${t.name}-${setIndex}`}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {t.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{t.category}</div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
