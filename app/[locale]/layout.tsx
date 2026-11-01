import { cn } from "cn";
import { GTProvider, useLocale } from "gt-next";
import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import type { PropsWithChildren } from "react";
import "@blossom-carousel/react/style.css";
import "../globals.css";

const WEBSITE_URL = "https://gsmt.dev";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
    appleWebApp: { capable: true, statusBarStyle: "default" },
    category: "technology",
    description: "",
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
    colorScheme: "light dark",
    initialScale: 1,
    themeColor: [
        { color: "#ffffff", media: "(prefers-color-scheme: light)" },
        { color: "#000000", media: "(prefers-color-scheme: dark)" },
    ],
    viewportFit: "cover",
    width: "device-width",
};

export default function LocaleLayout(props: PropsWithChildren) {
    const locale = useLocale();

    return (
        <html dir="ltr" lang={locale}>
            <body className={cn("pb-24", inter.className, serif.variable)}>
                <GTProvider>{props.children}</GTProvider>
            </body>
        </html>
    );
}
