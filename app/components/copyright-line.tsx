"use client";

import { T, Var } from "gt-next";

const CopyrightLine = () => (
    <span className="text-muted-foreground/60 text-[10px]">
        <T>
            @ <Var>{new Date().getUTCFullYear()}</Var> GSMT. All rights
            reserved.
        </T>
    </span>
);

export { CopyrightLine };
