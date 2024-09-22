import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const roboto = localFont({
  src: "../fonts/RobotoCondensed.ttf",
  variable: "--font-roboto",
  weight: "100 900",
})

export const jetBrainsMono = localFont({
  src: "../fonts/JetBrainsMono.ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
})