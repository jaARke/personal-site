import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jake Richard",
  description: "Software engineering portfolio, project index, and sandbox",
  openGraph: {
    title: "Jake Richard",
    description: "Software engineering portfolio, project index, and sandbox",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jake Richard's software engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake Richard",
    description: "Software engineering portfolio, project index, and sandbox",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}