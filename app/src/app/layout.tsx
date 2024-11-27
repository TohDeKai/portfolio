import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Add the required weight(s)
});
export const metadata: Metadata = {
  title: "De Kai",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Additional meta tags or favicon can be added here */}</head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
