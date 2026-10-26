import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f8f5ee",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "amena™ | The Demineralized Water Gazette & Battery Care Bulletin",
  description:
    "আমেনা™ - বুয়েট পরীক্ষিত ৭-স্তরের নিউক্লিয়ার মিডিয়া পরিশোধিত ডিমিনারেলাইজড পানি (DM Water), ব্যাটারি পানি, ইঞ্জিন কুলিং ওয়াটার ও ইলেক্ট্রোলাইট। টিডিএস < ১ ppm। বাংলাদেশে ব্যাটারির আয়ু বাড়াতে একমাত্র বিজ্ঞানসম্মত সমাধান।",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-serif antialiased text-stone-900 bg-[#f8f5ee] selection:bg-stone-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
