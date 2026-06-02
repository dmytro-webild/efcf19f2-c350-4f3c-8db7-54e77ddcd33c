import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'UrduEarnHub Pro: Mobile Se Online Paisa Kamana Seekho',
  description: 'UrduEarnHub Pro, beginners ke liye mobile se online earning, freelancing aur earning apps ki complete guides aur tips.',
  keywords: ["online earning, mobile earning, Urdu earning tips, freelancing, earning apps, YouTube Shorts, data entry, zero investment business"],
  openGraph: {
    "title": "UrduEarnHub Pro: Mobile Se Online Paisa Kamana Seekho",
    "description": "UrduEarnHub Pro, beginners ke liye mobile se online earning, freelancing aur earning apps ki complete guides aur tips.",
    "url": "https://urduearnhubpro.com",
    "siteName": "UrduEarnHub Pro",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/smartphone-with-money-credit-card-wallet_23-2148080971.jpg",
        "alt": "Mobile Online Earning"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "UrduEarnHub Pro: Mobile Se Online Paisa Kamana Seekho",
    "description": "UrduEarnHub Pro, beginners ke liye mobile se online earning, freelancing aur earning apps ki complete guides aur tips.",
    "images": [
      "http://img.b2bpic.net/free-photo/smartphone-with-money-credit-card-wallet_23-2148080971.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
