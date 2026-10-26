"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", product: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.contact.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.contact.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Dispatch Bureau */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address */}
            <div className="newspaper-card p-5 bg-[#fdfbf7]">
              <div className="flex items-start gap-3">
                <div className="p-2 border border-stone-900 bg-[#f8f5ee] shrink-0">
                  <MapPin className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block mb-1">
                    {t.contact.addressLabel}
                  </span>
                  <p className="text-sm font-newspaper font-bold text-stone-900 leading-snug">
                    {t.contact.addressValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Helpline */}
            <div className="newspaper-card p-5 bg-[#fdfbf7]">
              <div className="flex items-start gap-3">
                <div className="p-2 border border-stone-900 bg-[#f8f5ee] shrink-0">
                  <Phone className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block mb-1">
                    {t.contact.phoneLabel}
                  </span>
                  <a
                    href={`tel:${t.contact.phoneValue.replace(/[^0-9+]/g, "")}`}
                    className="text-lg font-mono font-bold text-accent hover:underline block"
                  >
                    {t.contact.phoneValue}
                  </a>
                  <span className="text-[11px] font-newspaper italic text-stone-600">
                    {locale === "bn" ? "সরাসরি অর্ডার ও হেল্পলাইন" : "Direct Orders & Helpline"}
                  </span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="newspaper-card p-5 bg-[#fdfbf7]">
              <div className="flex items-start gap-3">
                <div className="p-2 border border-stone-900 bg-[#f8f5ee] shrink-0">
                  <Mail className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block mb-1">
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${t.contact.emailValue}`}
                    className="text-sm font-mono font-bold text-stone-900 hover:text-accent hover:underline block"
                  >
                    {t.contact.emailValue}
                  </a>
                  <span className="text-[11px] font-newspaper italic text-stone-600">
                    {locale === "bn" ? "২৪ ঘণ্টার মধ্যে উত্তর প্রদান" : "Response within 24 hours"}
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="newspaper-card p-5 bg-[#fdfbf7]">
              <div className="flex items-start gap-3">
                <div className="p-2 border border-stone-900 bg-[#f8f5ee] shrink-0">
                  <Clock className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block mb-1">
                    {t.contact.hoursLabel}
                  </span>
                  <p className="text-xs font-mono font-bold text-stone-900">
                    {t.contact.hoursValue}
                  </p>
                  <span className="text-[11px] font-newspaper italic text-stone-600">
                    {locale === "bn" ? "শুক্রবার কারখানা সাপ্তাহিক ছুটি" : "Friday plant weekly holiday"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Retro Telegram Inquiry Form */}
          <div className="lg:col-span-7 newspaper-card p-6 sm:p-8 bg-[#fdfbf7]">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 mx-auto border-2 border-stone-900 bg-[#f8f5ee] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-stone-900" />
                </div>
                <h3 className="text-2xl font-bold font-newspaper text-stone-900">
                  {locale === "bn" ? "বার্তা সফলভাবে পৌঁছেছে!" : "DISPATCH TRANSMITTED"}
                </h3>
                <p className="text-sm font-newspaper text-stone-700 max-w-md mx-auto leading-relaxed">
                  {t.contact.form.successMessage}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-stone-900 text-[#f8f5ee] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#44403c]"
                >
                  {locale === "bn" ? "আরেকটি বার্তা লিখুন" : "COMPOSE ANOTHER MESSAGE"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b-2 border-stone-900 pb-2 mb-4 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-stone-900">
                    OFFICIAL DISPATCH INQUIRY
                  </span>
                  <span className="text-[10px] font-mono text-accent font-bold">
                    * MANDATORY FIELDS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-stone-800 block mb-1">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-3 py-2 border border-stone-900 bg-[#f8f5ee] text-stone-900 placeholder-stone-500 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-stone-900 shadow-[2px_2px_0px_#1c1917]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-stone-800 block mb-1">
                      {t.contact.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.form.phonePlaceholder}
                      className="w-full px-3 py-2 border border-stone-900 bg-[#f8f5ee] text-stone-900 placeholder-stone-500 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-stone-900 shadow-[2px_2px_0px_#1c1917]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-stone-800 block mb-1">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-3 py-2 border border-stone-900 bg-[#f8f5ee] text-stone-900 placeholder-stone-500 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-stone-900 shadow-[2px_2px_0px_#1c1917]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-stone-800 block mb-1">
                      {t.contact.form.product}
                    </label>
                    <select
                      id="contact-product"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3 py-2 border border-stone-900 bg-[#f8f5ee] text-stone-900 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-stone-900 shadow-[2px_2px_0px_#1c1917]"
                    >
                      <option value="" className="text-stone-900 bg-[#fdfbf7]">
                        {t.contact.form.selectProduct}
                      </option>
                      {t.products.items.map((prod) => (
                        <option key={prod.id} value={prod.name} className="text-stone-900 bg-[#fdfbf7]">
                          {prod.name}
                        </option>
                      ))}
                      <option value="Dealership" className="text-stone-900 bg-[#fdfbf7]">
                        ডিলারশিপ ও এজেন্সি সংক্রান্ত
                      </option>
                      <option value="Industrial Bulk" className="text-stone-900 bg-[#fdfbf7]">
                        ইন্ডাস্ট্রিয়াল বাল্ক সাপ্লাই
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase text-stone-800 block mb-1">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-3 py-2 border border-stone-900 bg-[#f8f5ee] text-stone-900 placeholder-stone-500 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-stone-900 shadow-[2px_2px_0px_#1c1917]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-stone-900 text-[#f8f5ee] font-mono font-bold text-xs uppercase hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-[3px_3px_0px_#44403c] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? t.contact.form.submitting : t.contact.form.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
