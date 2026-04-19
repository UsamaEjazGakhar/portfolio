"use client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BorderBeamProps {
    className?: string;
    duration?: number;
    borderWidth?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

export const BorderBeam = ({
    className,
    duration = 4,
    borderWidth = 1.5,
    colorFrom = "#a8ff3e",
    colorTo = "transparent",
    delay = 0,
}: BorderBeamProps) => {
    return (
        <div
            style={
                {
                    "--duration": `${duration}s`,
                    "--border-width": `${borderWidth}px`,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": `-${delay}s`,
                } as React.CSSProperties
            }
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit]",
                className
            )}
        >
            <div
                className="absolute inset-0 rounded-[inherit] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
            >
                <div
                    className="absolute inset-[-100%] aspect-square [background:conic-gradient(from_0deg,var(--color-to),var(--color-from),var(--color-to),var(--color-to))] animate-spin-slow"
                    style={{
                        animationDuration: 'var(--duration)',
                        animationDelay: 'var(--delay)',
                        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' // Non-linear speed
                    }}
                />
            </div>
        </div>
    );
};
