import Link from "gt-next/link";
import { LocaleSelector } from "@/components/locale-selector";

const Header = () => (
    <header className="container flex w-full items-center justify-between">
        <Link
            className="underline-offset-1 hover:underline hover:opacity-80"
            href="/"
        >
            <span className="text-muted-foreground text-sm font-medium md:text-base">
                @gsmt
            </span>
        </Link>
        <LocaleSelector />
    </header>
);

export { Header };
