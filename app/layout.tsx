import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProviders } from "@/components/providers/AppProviders";

export const metadata: Metadata = {
  title: "CloudCom Networks | Building Secure Communications & Digital Infrastructure",
  description: "Next-generation communication, cloud infrastructure, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="text-slate-800 flex flex-col min-h-screen bg-slateBg">
        <AppProviders>
          <Navbar />
          <main id="app-content" className="flex-grow">
              {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
