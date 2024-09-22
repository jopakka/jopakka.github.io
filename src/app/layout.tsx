import type { Metadata } from "next";
import "./globals.scss";
import { jetBrainsMono, roboto } from "./theme/Typography";
import AppData from "./AppData";

export const metadata: Metadata = {
  title: AppData.name,
  description: AppData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
