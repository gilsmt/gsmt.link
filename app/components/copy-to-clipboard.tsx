"use client";

import { Slot } from "@radix-ui/react-slot";
import copy from "copy-to-clipboard";
import { type ComponentProps, useState } from "react";

const CopyToClipboard = ({
    text,
    ...props
}: ComponentProps<typeof Slot> & { text: string }) => {
    const [copied, setCopied] = useState(false);

    const copyHandler = async () => {
        await copy(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <Slot {...props} data-copied={copied} onClick={copyHandler} />
            <span aria-live="polite" className="sr-only">
                {copied ? "Copied" : ""}
            </span>
        </>
    );
};

export { CopyToClipboard };
