import type { Metadata } from "next";
import { Instrument_Serif, Inter, Plus_Jakarta_Sans } from "next/font/google";
import EnquiryModal from "@/components/EnquiryModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MotionProvider from "@/components/motion/MotionProvider";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Placement & Recruitment in Coimbatore & Trichy`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "HR consultancy Coimbatore",
    "recruitment agency Coimbatore",
    "HR consultancy Trichy",
    "placement consultancy Tiruchirappalli",
    "placement consultancy",
    "jobs in Coimbatore",
    "IT and Non-IT recruitment",
    "talent acquisition",
    "HireMatrix",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/logo-full.png"],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${instrument.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <EnquiryModal />
        </MotionProvider>
      </body>
    </html>
  );
}
