import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DynamicScaling from "@/components/DynamicScaling";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Strufaldi",
  description: "Ideas para diseñar tu piscina de gres porcelánico. Tradición y tecnología cerámica.",
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const antiScaleScript = `
    (function() {
      try {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (!isMobile) {
            var r = window.devicePixelRatio;
            // Only apply if scaling is significant (e.g. > 1.2) to avoid minor jitters on standard screens
            // And mostly targeting Windows-like behaviors where dpr > 1 reduces viewport
            if (r > 1.2) {
              document.body.style.zoom = (1 / r);
            }
        }
      } catch(e){}
    })();
  `;

  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-white text-strufaldi-charcoal`}
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{
            __html: antiScaleScript,
          }}
        />
        <DynamicScaling />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
