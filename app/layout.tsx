import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niharika Vemula | Full Stack Developer & AI/ML Student",
  description:
    "Portfolio of Niharika Vemula, a Full Stack Developer and Computer Science (AI & ML) student building web and intelligent software products.",
  keywords: ["Niharika Vemula", "Full Stack Developer", "AI ML", "Computer Science", "Portfolio"],
  authors: [{ name: "Niharika Vemula" }],
  openGraph: {
    title: "Niharika Vemula | Full Stack Developer & AI/ML Student",
    description: "Full-stack, AI, and computer-vision projects by Niharika Vemula.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

