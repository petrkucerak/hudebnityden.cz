const homeUrl = "https://hudebnityden.cz/";
const title = "Hudební týden";
const description =
  "Jeden týden o prázdninách na DCŽM Vesmír v partě mladých trávíme tím, že zpíváme, hrajeme na hudební nástroje, tvoříme, hrajeme hry, diskutejeme, vzděláváme se a modlíme se.";
const color = "#ffffff";

export const meta = {
  description: description,
  applicationName: title,
  keywords: ["Hudební týden na Vesmíru", "Hudebák", "Hudebňák", "DCŽM Vesmír"],
  referrer: "origin-when-cross-origin",
  authors: [
    {
      name: "Petr Kučera",
      url: "https://petrkucerak.cz/",
    },
  ],
  colorScheme: "light",
  themeColor: color,
  manifest: `${homeUrl}manifest.json`,
  viewport: {
    width: "device-width",
    initialScale: 1,
    // minimumScale: 1,
    shrinkToFit: "no",
    // userScalable: "no",
    viewportFit: "cover",
  },
  assets: [`${homeUrl}assets`],
  category: "music",
  openGraph: {
    title: title,
    url: homeUrl,
    description: description,
    images: [
      {
        url: `${homeUrl}opengraph-image.jpg`,
        width: 1920,
        height: 1080,
        alt: "Hudební týden na Vesmíru",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@petrkucerak",
    images: [`${homeUrl}opengraph-image.jpg`],
  },
};
