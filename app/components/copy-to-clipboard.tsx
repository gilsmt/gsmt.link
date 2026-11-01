"use client";

import { Slot } from "@radix-ui/react-slot";
import copy from "copy-to-clipboard";
import { type ComponentProps, useState } from "react";

const CopyToClipboard = ({
    value,
    ...props
}: ComponentProps<typeof Slot> & { value: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyHandler = async () => {
        await copy(value);
        setIsCopied(true);
        window.setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <>
            <Slot {...props} data-copied={isCopied} onClick={copyHandler} />
            <span aria-live="polite" className="sr-only">
                {isCopied ? "Copied" : ""}
            </span>
        </>
    );
};

export { CopyToClipboard };
