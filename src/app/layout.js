import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Melvin Lee — Software Engineer",
  description:
    "Software Engineer building backend systems for IoT, Digital Twins, AGV automation and data pipelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
        <Toaster theme="dark" richColors position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
