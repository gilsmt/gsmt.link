"use client";

import {
    BlossomCarousel,
    BlossomDot,
    BlossomDots,
} from "@blossom-carousel/react";
import { cn } from "cn";
import {
    Children,
    cloneElement,
    type HTMLAttributes,
    isValidElement,
    type PropsWithChildren,
    useId,
} from "react";

const Carousel = ({ children }: PropsWithChildren) => {
    const id = useId().replaceAll(":", "");
    const items = Children.toArray(children);

    return (
        <>
            <BlossomCarousel
                className="relative -mr-[max(2rem,50vw-16.75rem)] -ml-[max(2rem,50vw-16.75rem)] grid w-[calc(100%+max(4rem,100vw-33.5rem))] snap-x snap-mandatory scroll-pr-[max(2rem,50vw-16.75rem)] scroll-pl-[max(2rem,50vw-16.75rem)] auto-cols-[20rem] grid-flow-col gap-3 scroll-auto pr-[max(2rem,50vw-16.75rem)] pl-[max(2rem,50vw-16.75rem)]"
                id={id}
            >
                {items.map((child, index) =>
                    isValidElement<{ className?: string }>(child)
                        ? cloneElement(child, {
                              className: cn(
                                  "bg-card relative size-full max-w-xs snap-start overflow-hidden rounded-xl",
                                  index === items.length - 1 && "snap-end",
                                  child.props.className
                              ),
                              "data-blossom-slide": true,
                          } as HTMLAttributes<HTMLElement>)
                        : child
                )}
            </BlossomCarousel>
            <BlossomDots
                className="flex items-center justify-start! gap-1.5! pt-4"
                for={id}
            >
                {({ index, active }) => (
                    <BlossomDot
                        aria-current={active}
                        aria-label={`Slide ${index + 1}`}
                        className={cn(
                            "bg-card! text-muted-foreground! flex size-7 cursor-pointer items-center justify-center rounded-lg text-xs! font-medium! transition-[padding] select-none",
                            active && "bg-red-500! px-2! text-white!"
                        )}
                    >
                        {index + 1}
                    </BlossomDot>
                )}
            </BlossomDots>
        </>
    );
};

export { Carousel };
