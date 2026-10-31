import { cn } from "cn";
import { GTProvider } from "gt-next";
import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import type * as React from "react";
import "@blossom-carousel/react/style.css";
import "../globals.css";

const WEBSITE_URL = "https://gsmt.dev";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
    appleWebApp: { capable: true, statusBarStyle: "default" },
    category: "technology",
    description: "",
    formatDetection: { address: false, telephone: false },
    metadataBase: new URL(WEBSITE_URL),
    openGraph: {
        locale: "en_US",
        siteName: "gsmt",
        title: "Gilberto S | Full-stack product developer",
        type: "website",
        url: "/",
    },
    referrer: "origin",
    robots: { noimageindex: true },
    title: {
        default: "Gilberto S | Full-stack product developer",
        template: "%s | @gsmt",
    },
    twitter: { card: "summary", creator: "@gsmmtt" },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const viewport: Viewport = {
    colorScheme: "light",
    initialScale: 1,
    themeColor: "#ffffff",
    viewportFit: "cover",
    width: "device-width",
};

export default async function LocaleLayout(
    props: React.PropsWithChildren<{
        params: Promise<{ locale: string }>;
    }>
) {
    const { locale } = await props.params;

    return (
        <html dir="ltr" lang={locale} suppressHydrationWarning>
            <body
                className={cn("isolate pb-24", inter.className, serif.variable)}
                style={{ colorScheme: "light" }}
            >
                <GTProvider>{props.children}</GTProvider>
            </body>
        </html>
    );
}
