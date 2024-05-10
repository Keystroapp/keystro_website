import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keystro app",
  keywords:
    "keystroke, keystrokes, keyboard, shortcuts, show keystrokes, keystroke pro, cursor pro, keyviz, key visualise, keyfx, cursor highlight, mechvibes, klack, keyboard shound, thock, mechenical keybaord shound, mech keyboard, mechanical keyboard, mechanical keyboards, mechanical keyboard pro, mech keyboard pro, mech keyboards pro, mech keyboard pro, mech keyboards pro",
  description:
    "Show which key you pressing to your audience, Highlight Your Cursor, and Hear Realistic Keyboard Sounds! Available for Windows and MacOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
