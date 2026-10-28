import Link from "next/link";
import { LocaleSelector } from "@/components/locale-selector";

const Header = ({ locale }: { locale: string }) => {
    const homeHref = locale === "en" ? "/" : `/${locale}`;

    return (
        <header className="container flex w-full items-center justify-between">
            <Link
                className="underline-offset-1 hover:underline hover:opacity-80"
                href={homeHref}
            >
                <h1 className="text-muted-foreground text-sm font-medium md:text-base">
                    @gsmt
                </h1>
            </Link>
            <LocaleSelector />
        </header>
    );
};

export { Header };
