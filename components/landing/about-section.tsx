"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    number: "01",
    title: "Kecepatan",
    description: "Website selesai lebih cepat tanpa mengorbankan kualitas. Pilih template, kirim data, dan segera online.",
  },
  {
    number: "02",
    title: "Kualitas Desain",
    description: "Desain modern, minimalis, dan profesional yang membuat bisnis Anda terlihat kredibel dan premium.",
  },
  {
    number: "03",
    title: "Kemudahan",
    description: "Anda tidak perlu memahami teknis. Cukup gunakan website, sisanya kami yang urus.",
  },
  {
    number: "04",
    title: "Pelayanan",
    description: "Dukungan teknis yang jelas dan maintenance tahunan agar website Anda selalu prima.",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16 lg:mb-24">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Tentang XORA
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Bukan sekadar
              <br />
              <span className="text-muted-foreground">pembuat website.</span>
            </h2>
          </div>

          <div
            className={`flex flex-col justify-end gap-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              XORA adalah software house yang membangun produk, sistem, dan
              template digital sendiri. Kami membantu UMKM dan perusahaan tampil
              profesional di dunia digital dengan proses yang cepat, sederhana,
              dan konsisten.
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Visi
                </h3>
                <p className="text-foreground leading-relaxed">
                  Menjadi penyedia website profesional terpercaya untuk bisnis di Indonesia.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Misi
                </h3>
                <p className="text-foreground leading-relaxed">
                  Memberikan solusi digital yang cepat, terjangkau, dan mudah digunakan setiap bisnis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {values.map((value, index) => (
            <div
              key={value.number}
              className={`bg-background p-8 lg:p-10 group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-mono text-sm text-muted-foreground">{value.number}</span>
              <h3 className="text-2xl font-display mt-4 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
