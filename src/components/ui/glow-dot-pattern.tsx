"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

export function GlowDotPattern({ className }: { className?: string }) {
    return (
        <div className={cn("relative w-full overflow-hidden", className)}>
            <DotPattern
                glow={true}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom,white,transparent)]"
                )}
            />
        </div>
    );
}
