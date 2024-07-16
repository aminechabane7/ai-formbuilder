import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FormGenius",
  description: "Create custom forms effortlessly, gather valuable",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" >
      <body className={inter.className}>
        <Header/>

        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
    </ClerkProvider>
  );
}
