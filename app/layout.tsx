import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import localFont from "next/font/local";
import ScrollView from "./_components/small/ScrollView";
import AnimatedLayout from "./_components/AnimatedLayout";
import Head from "next/head";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Fonts/OTF/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Akira Studios",
  description: "Empowering you to elevate your online presence with captivating content, committed to assisting industry leaders in dominating the digital landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/images/favicon.ico"
          type="image/ico"
        />
      </Head>
      <body
        className={clsx(
          satoshi.className,
          "antialiased bg-white text-dblack"
        )}
      >
        <ScrollView />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
