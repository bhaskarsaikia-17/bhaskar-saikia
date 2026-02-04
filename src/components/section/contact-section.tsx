"use client";

import Link from "next/link";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";

export default function SocialSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-20 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Socials</span>
      </div>
      <DotPattern
        className={cn(
          "absolute inset-0 h-full w-full z-0",
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl -mt-2">
          Social Links
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => {
              const IconComponent = social.icon;
              const isExternal = social.url.startsWith("http");
              return (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="size-12 flex items-center justify-center rounded-xl bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <IconComponent className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm"
                  >
                    <p>{name}</p>
                    <TooltipArrow className="fill-primary" />
                  </TooltipContent>
                </Tooltip>
              );
            })}
        </div>
      </div>
    </div>
  );
}
