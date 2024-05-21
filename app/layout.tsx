import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Keystro app" />
        <meta property="og:site_name" content="Keystro app" />
        <meta property="og:url" content="https://keystro.app" />
        <meta
          property="og:description"
          content="Show which key you pressing to your audience, Highlight Your Cursor, and Hear Realistic Keyboard Sounds! Available for Windows and MacOS."
        />

        <meta
          name="keywords"
          content="keystroke, keystrokes, keyboard, shortcuts, show keystrokes, keystroke pro, cursor pro, keyviz, key visualise, keyfx, cursor highlight, mechvibes, klack, keyboard shound, thock, mechenical keybaord shound, mech keyboard, mechanical keyboard, mechanical keyboards, mechanical keyboard pro, mech keyboard pro, mech keyboards pro, mech keyboard pro, mech keyboards pro"
        ></meta>
        <meta
          property="og:image"
          itemProp="image"
          content="https://keystro.app/keystro_banner.jpg"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anshrathodfr" />
        <meta name="twitter:creator" content="@anshrathodfr" />
        <meta name="twitter:title" content="Keystro app" />
        <meta
          name="twitter:description"
          content="Show which key you pressing to your audience, Highlight Your Cursor, and Hear Realistic Keyboard Sounds! Available for Windows and MacOS."
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://keystro.app/keystro_banner.jpg"
        />
        <link rel="icon" href="favicon.ico" />
        <Script src="https://cdn.paritydeals.com/banner.js" />
        <title>Keystro app</title>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
