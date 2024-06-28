import { Alegreya_Sans } from "next/font/google";
import "./globals.css";
import { meta } from "@/components/meta";

const font = Alegreya_Sans({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "auto",
});

export const metadata = {
  title: meta.applicationName,
  ...meta,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={font.className}>{children}</body>
    </html>
  );
}