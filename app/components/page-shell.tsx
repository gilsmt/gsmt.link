import type * as React from "react";

const PageShell = (props: React.ComponentProps<"main">) => (
    <>
        <a
            className="focus:bg-background focus:outline-ring sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:underline focus:outline-2 focus:outline-offset-2"
            href="#main"
        >
            Skip to main content
        </a>
        <main
            {...props}
            className="gutter-stable focus-visible:outline-ring relative isolate z-0 h-fit w-full max-w-full min-w-0 flex-1 flex-col overflow-x-clip py-6 [-webkit-user-drag:none] focus-visible:outline-2 focus-visible:outline-offset-4"
            id="main"
            tabIndex={-1}
        />
    </>
);

export { PageShell };
