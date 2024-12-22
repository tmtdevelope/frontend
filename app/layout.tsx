import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./Theme/provider";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ClientWrapper from "./ClientWrapper";
// import GoogleMapsScript from "./components/GoogleMapsScript";
// import GoogleMapsScript from "./components/GoogleMapsScript"; // استيراد المكون

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "TrustMTrans - Professional Translation Services",
  description:
    "Professional translation services for businesses and individuals. Certified translations, localization, and interpretation services in multiple languages.",
  keywords:
    "translation services, professional translation, certified translation, language services, document translation",
  openGraph: {
    title: "TrustMTrans - Professional Translation Services",
    description:
      "Professional translation services for businesses and individuals.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
        {/* <GoogleMapsScript /> */}
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </ClientWrapper>
        {/* تضمين مكون السكربت بعد تحميل المكونات الأخرى */}
      </body>
    </html>
  );
}
