import type * as React from "react";

const PageShell = (props: React.ComponentProps<"main">) => (
    <main
        {...props}
        className="gutter-stable relative isolate z-0 h-fit w-full max-w-full min-w-0 flex-1 flex-col overflow-x-clip py-6 outline-none [-webkit-user-drag:none] focus-visible:outline-none"
        id="main"
        tabIndex={-1}
    />
);

export { PageShell };
