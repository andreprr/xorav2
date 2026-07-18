"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Membership Promo",
    description: "Cocok untuk UMKM yang ingin mulai online dengan biaya ringan.",
    price: {
      build: "500rb",
      renewal: "300rb",
    },
    features: [
      "Website 2-3 halaman",
      "Responsive Design",
      "Domain & Hosting",
      "SSL Gratis",
      "Integrasi WhatsApp",
      "Basic SEO",
      "Maintenance bulanan",
      "Support WhatsApp",
    ],
    cta: "Mulai Sekarang",
    popular: true,
  },

  {
    name: "Basic",
    description: "Website profesional dengan pembayaran sekali.",
    price: {
      build: "1jt",
      renewal: "300rb",
    },
    features: [
      "Website hingga 5 halaman",
      "Responsive Design",
      "Domain & Hosting 1 Tahun",
      "SSL Gratis",
      "Integrasi WhatsApp",
      "Google Maps",
      "Basic SEO",
      "Garansi",
    ],
    cta: "Konsultasi Gratis",
    popular: false,
  },

  {
    name: "Premium",
    description: "Untuk kebutuhan bisnis yang lebih kompleks.",
    price: {
      build: null,
      renewal: null,
    },
    features: [
      "Halaman unlimited",
      "Custom Design",
      "Admin Panel",
      "Booking / Form",
      "Katalog Produk",
      "E-Commerce",
      "Maintenance Prioritas",
      "Custom Request",
    ],
    cta: "Hubungi Kami",
    popular: false,
  },
];

export function PricingSection() {
  const [showRenewal, setShowRenewal] = useState(false);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Harga
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Harga jelas,
            <br />
            <span className="text-stroke">transparan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Bayar sekali untuk pembuatan. Tahun berikutnya cukup perpanjangan domain, hosting &amp; maintenance. Tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className={`text-sm transition-colors ${!showRenewal ? "text-foreground" : "text-muted-foreground"
              }`}
          >
            Pembuatan (sekali)
          </span>
          <button
            onClick={() => setShowRenewal(!showRenewal)}
            className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
          >
            <div
              className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${showRenewal ? "translate-x-7" : "translate-x-0"
                }`}
            />
          </button>
          <span
            className={`text-sm transition-colors ${showRenewal ? "text-foreground" : "text-muted-foreground"
              }`}
          >
            Perpanjangan / Bulan
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.price.build !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-muted-foreground">Rp</span>
                    <span className="font-display text-5xl lg:text-6xl text-foreground">
                      {showRenewal ? plan.price.renewal : plan.price.build}
                    </span>
                    <span className="text-muted-foreground">
                      {showRenewal ? "/bulan" : "sekali"}
                    </span>
                  </div>
                ) : (
                  <span className="font-display text-4xl text-foreground">Custom</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${plan.popular
                  ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                  : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                  }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Semua paket sudah termasuk domain, hosting, SSL, dan garansi.{" "}
          <a href="#contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Konsultasikan kebutuhan Anda
          </a>
        </p>
      </div>
    </section>
  );
}
