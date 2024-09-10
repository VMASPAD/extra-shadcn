import type { Metadata } from "next";
import "./globals.css"; 
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Shadcn extra",
  description: "Extra components for shadcn",icons:"/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        
        <Analytics />
      </body>
    </html>
  );
}
