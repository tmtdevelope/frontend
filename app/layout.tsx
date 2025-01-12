import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./Theme/provider";
import ClientWrapper from "./ClientWrapper";
import { IMAGES } from "./utils/images";
import Script from "next/script";  
import Navbar from "./components/Header/Navbar";
import FooterWrapper from "./FooterWrapper";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000",
  ),
  title: {
    default: "TrustMTrans - Non-Emergency Medical Transportation (NEMT)",
    template: "%title% | TrustMTrans",
  },
  description:
    "Safe and reliable non-emergency medical transportation (NEMT) services in the Bay Area. We provide wheelchair, gurney, and ambulatory services. Call us today!",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "non-emergency medical transportation, NEMT services, Bay Area medical transport, wheelchair transport, gurney transport, ambulatory services, 24/7 medical transportation",
  openGraph: {
    title: "TrustMTrans - Non-Emergency Medical Transportation (NEMT)",
    description:
      "Safe and reliable non-emergency medical transportation (NEMT) services in the Bay Area.",
    images: [
      {
        url: IMAGES.light,
        width: 1200,
        height: 630,
        alt: "TrustMTrans Logo",
      },
    ],
    url: "https://www.trustmtrans.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrustMTrans - Non-Emergency Medical Transportation (NEMT)",
    description:
      "Safe and reliable non-emergency medical transportation (NEMT) services in the Bay Area.",
    images: [IMAGES.light],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KJVG4GJ');
          `,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-9MH4V607TJ`}  
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9MH4V607TJ');  
          `,
        }}
      />
      {/* End Google Analytics */}

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJVG4GJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ClientWrapper>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <FooterWrapper />
          </Providers>
        </ClientWrapper>
      </body>
    </html>
  );
}