"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryItem } from "@/types";
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

export function Gallery() {
  const { t, locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allItems: GalleryItem[] = t.gallery.items;

  const filteredItems =
    selectedCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: "all", label: t.gallery.filterAll },
    { id: "plant", label: t.gallery.filterPlant },
    { id: "packaging", label: t.gallery.filterPackaging },
    { id: "fleet", label: t.gallery.filterFleet },
    { id: "ceremony", label: t.gallery.filterCeremony },
  ];

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [lightboxIndex, handlePrev, handleNext]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex, handleKeyDown]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f8f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>§ {t.gallery.tag} §</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.gallery.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.gallery.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-3 sm:px-4 py-1.5 text-xs font-mono font-bold uppercase transition-all border ${
                selectedCategory === cat.id
                  ? "bg-stone-900 text-[#f8f5ee] border-stone-900 shadow-[2px_2px_0px_#44403c]"
                  : "bg-[#fdfbf7] border-stone-400 text-stone-700 hover:bg-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Archival Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="newspaper-card p-3 sm:p-4 bg-[#fdfbf7] flex flex-col justify-between group cursor-pointer border-2 border-stone-900 shadow-[3px_3px_0px_#1c1917] hover:shadow-[5px_5px_0px_#1c1917] transition-all hover:-translate-y-0.5"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between border-b border-stone-300 pb-2 mb-3 text-[10px] font-mono">
                  <span className="font-bold text-stone-600 uppercase tracking-wider">
                    {locale === "bn" ? `প্লেট #${index + 1}` : `PLATE #${index + 1}`}
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#f8f5ee] border border-stone-400 text-stone-800 font-bold uppercase text-[9px]">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Photo Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-stone-400 bg-stone-200 mb-3 shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900/90 text-[#f8f5ee] text-[11px] font-mono font-bold shadow-[2px_2px_0px_#000]">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{t.gallery.viewLarger}</span>
                    </span>
                  </div>
                </div>

                {/* Caption Details */}
                <h3 className="text-sm font-bold font-newspaper text-stone-900 group-hover:text-accent transition-colors leading-snug mb-1.5">
                  <span className="font-mono text-accent text-xs mr-1">FIG. 0{index + 1}:</span>
                  {item.title}
                </h3>
                <p className="text-xs font-newspaper text-stone-700 leading-relaxed text-justify line-clamp-3 mb-2">
                  {item.caption}
                </p>
              </div>

              {/* Bottom Dateline */}
              {item.date && (
                <div className="pt-2 border-t border-stone-300 flex items-center justify-between text-[10px] font-mono text-stone-500">
                  <span>📍 {item.date}</span>
                  <span className="text-accent font-bold group-hover:underline">
                    {locale === "bn" ? "বিস্তারিত →" : "View →"}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && currentItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/85 backdrop-blur-sm animate-fadeIn"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#fdfbf7] border-2 border-stone-900 shadow-[8px_8px_0px_#1c1917] p-4 sm:p-6 flex flex-col max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b-2 border-stone-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="retro-stamp text-[10px]">
                    {locale === "bn"
                      ? `আলোকচিত্র ${lightboxIndex + 1} / ${filteredItems.length}`
                      : `DISPATCH ${lightboxIndex + 1} OF ${filteredItems.length}`}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600 uppercase">
                    [{currentItem.categoryLabel}]
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="p-1 border border-stone-900 bg-[#f8f5ee] text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                    aria-label={t.gallery.close}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Large Image Frame */}
              <div className="relative w-full aspect-[4/3] max-h-[58vh] bg-stone-950 border-2 border-stone-900 overflow-hidden shadow-inner flex items-center justify-center">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                />

                {/* Left / Right Nav Arrows */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-stone-900/80 text-white hover:bg-stone-900 transition-colors border border-stone-700 shadow-md"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-stone-900/80 text-white hover:bg-stone-900 transition-colors border border-stone-700 shadow-md"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Caption Box */}
              <div className="mt-4 pt-3 border-t-2 border-stone-900">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold font-newspaper text-stone-900">
                    <span className="font-mono text-accent text-sm mr-2">
                      FIG. 0{lightboxIndex + 1}:
                    </span>
                    {currentItem.title}
                  </h3>
                  {currentItem.date && (
                    <span className="text-xs font-mono text-stone-600 shrink-0">
                      📍 {currentItem.date}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-newspaper text-stone-800 leading-relaxed text-justify">
                  {currentItem.caption}
                </p>
              </div>

              {/* Modal Footer Controls */}
              <div className="mt-4 pt-3 border-t border-stone-300 flex items-center justify-between text-xs font-mono">
                <span className="text-stone-500 text-[11px]">
                  {locale === "bn"
                    ? "কী-বোর্ডের ← → তীর চিহ্ন দিয়ে ব্রাউজ করুন • ESC চাপলে বন্ধ হবে"
                    : "Use ← → Arrow Keys to Navigate • Press ESC to Close"}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="px-3 py-1 border border-stone-800 bg-[#f8f5ee] hover:bg-stone-200 font-bold"
                  >
                    ← {locale === "bn" ? "পূর্ববর্তী" : "Prev"}
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-3 py-1 border border-stone-800 bg-stone-900 text-[#f8f5ee] hover:bg-accent font-bold"
                  >
                    {locale === "bn" ? "পরবর্তী" : "Next"} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

