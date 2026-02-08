"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { HomeIcon, FolderKanban, NotebookIcon, Radio, LucideIcon } from "lucide-react";

// Icon lookup map to ensure icons are properly included in production bundle
const iconMap: Record<string, LucideIcon> = {
  HomeIcon,
  FolderKanban,
  NotebookIcon,
  Radio,
};

// Debug logging for production icon issue (set to false to disable)
const DEBUG_DOCK = false;

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    if (DEBUG_DOCK) {
      console.log("[DOCK DEBUG] ===================");
      console.log("[DOCK DEBUG] Current pathname:", pathname);
      console.log("[DOCK DEBUG] Is home page:", pathname === "/");
      console.log("[DOCK DEBUG] Navbar items:", DATA.navbar);
      console.log("[DOCK DEBUG] Icon map keys:", Object.keys(iconMap));

      DATA.navbar.forEach((item, index) => {
        const IconComponent = iconMap[item.iconName] || item.icon;
        console.log(`[DOCK DEBUG] Item ${index}:`, {
          href: item.href,
          iconName: item.iconName,
          iconFromMap: !!iconMap[item.iconName],
          iconFromItem: !!item.icon,
          finalIcon: !!IconComponent,
          iconComponentName: IconComponent?.displayName || IconComponent?.name || "unknown",
        });
      });
    }
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item, index) => {
          const isExternal = item.href.startsWith("http");
          // Use the explicit iconName for reliable production rendering (Function.name gets minified in prod)
          const IconComponent = iconMap[item.iconName] || item.icon;

          // Debug: Log each icon render
          if (DEBUG_DOCK) {
            console.log(`[DOCK DEBUG] Rendering item ${index} (${item.label}):`, {
              href: item.href,
              isCurrentPage: item.href === pathname,
              iconExists: !!IconComponent,
            });
          }

          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  data-debug-href={item.href}
                  data-debug-icon={item.iconName}
                >
                  <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                    {IconComponent ? (
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    ) : (
                      <span style={{ color: 'red', fontSize: '10px' }}>NO ICON</span>
                    )}
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator orientation="vertical" className="h-9 mx-1" />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
