"use client";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: ReactNode;
    vertical?: boolean;
    repeat?: number;
    duration?: string;
    gap?: string;
    [key: string]: any;
}

export default function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    duration = "40s",
    gap = "2rem",
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            style={{
                "--duration": duration,
                "--gap": gap,
            } as React.CSSProperties}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className,
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee-left": !reverse && !vertical,
                            "animate-marquee-right": reverse && !vertical,
                            "animate-marquee-up": !reverse && vertical,
                            "animate-marquee-down": reverse && vertical,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                        })}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}
