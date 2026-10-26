"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProductItem } from "@/types";
import { ArrowUpRight, X } from "lucide-react";

export function Products() {
  const { t, locale } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleInquiry = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.products.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.products.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.products.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((prod) => (
            <div
              key={prod.id}
              className={`newspaper-card p-6 bg-[#fdfbf7] flex flex-col justify-between ${
                prod.popular ? "border-2 border-stone-900" : ""
              }`}
            >
              <div>
                {/* Header with Product Tag & Badge */}
                <div className="flex items-start justify-between border-b border-stone-300 pb-3 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-600">
                    {locale === "bn" ? `পণ্য কোড #${prod.id.toUpperCase()}` : `CAT. ITEM #${prod.id.toUpperCase()}`}
                  </span>
                  {prod.badge && (
                    <span className="retro-stamp text-[10px]">
                      {prod.badge}
                    </span>
                  )}
                </div>

                {/* Product Name & Tagline */}
                <h3 className="text-xl font-bold font-newspaper text-stone-900 mb-1 leading-tight">
                  {prod.name}
                </h3>
                <p className="text-xs font-mono text-accent font-bold mb-3">
                  {prod.tagline}
                </p>
                <p className="text-xs sm:text-sm font-newspaper text-stone-700 leading-relaxed mb-4 text-justify">
                  {prod.description}
                </p>

                {/* Features Bullet List */}
                <div className="space-y-1.5 py-3 border-t border-b border-stone-300 mb-4 text-xs font-newspaper text-stone-800">
                  {prod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Packaging Formats */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block mb-1.5">
                    {locale === "bn" ? "প্যাকেজিং সাইজ:" : "PACKAGING OPTIONS:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prod.packaging.map((pack, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 text-[11px] font-mono border border-stone-400 bg-[#f8f5ee] text-stone-800"
                      >
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-300 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="flex-1 py-2 px-3 border border-stone-900 bg-[#f8f5ee] text-xs font-mono font-bold text-stone-900 hover:bg-stone-200 transition-colors text-center shadow-[2px_2px_0px_#1c1917]"
                >
                  {t.products.viewSpecs}
                </button>
                <button
                  onClick={handleInquiry}
                  className="flex items-center justify-center p-2 bg-stone-900 text-[#f8f5ee] hover:bg-accent transition-colors shadow-[2px_2px_0px_#44403c]"
                  title={locale === "bn" ? "অর্ডার অনুসন্ধান" : "Order Inquiry"}
                >
                  <ArrowUpRight className="w-4 h-4 font-bold" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Detailed Technical Specs */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg p-6 sm:p-8 newspaper-card bg-[#fdfbf7] border-2 border-stone-900 shadow-[8px_8px_0px_#1c1917]">
              <div className="flex items-start justify-between border-b-2 border-stone-900 pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 tracking-wider">
                    {locale === "bn" ? "টেকনিক্যাল স্পেসিফিকেশন বিবরণী" : "TECHNICAL DISPATCH SPEC SHEET"}
                  </span>
                  <h3 className="text-xl font-bold font-newspaper text-stone-900">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs font-mono text-accent font-bold">{selectedProduct.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 border border-stone-900 bg-[#f8f5ee] text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="my-4 space-y-4 font-newspaper">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                    {locale === "bn" ? "ল্যাবরেটরি স্পেসিফিকেশন:" : "LABORATORY SPECIFICATIONS:"}
                  </h4>
                  <div className="divide-y divide-stone-300 border border-stone-400 bg-[#f8f5ee] text-xs font-mono">
                    {selectedProduct.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2">
                        <span className="text-stone-700">{sp.label}</span>
                        <span className="font-bold text-stone-900">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                    {locale === "bn" ? "উপযোগী ক্ষেত্রসমূহ:" : "RECOMMENDED APPLICATIONS:"}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono border border-stone-400 bg-[#f8f5ee] text-stone-800"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-stone-900 flex gap-3">
                <button
                  onClick={() => {
                    handleInquiry();
                    setSelectedProduct(null);
                  }}
                  className="w-full py-3 bg-stone-900 text-[#f8f5ee] font-mono font-bold text-xs uppercase hover:bg-accent transition-colors shadow-[3px_3px_0px_#44403c]"
                >
                  {t.products.orderInquiry}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
