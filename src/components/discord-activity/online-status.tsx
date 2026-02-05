"use client";

import type { LanyardData } from "react-use-lanyard"
import Image from "next/image";
import { useState } from "react";

const statusTextMap = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline"
}

const statusDotColorMap = {
    online: "#22c55e",
    idle: "#eab308",
    dnd: "#ef4444",
    offline: "#6b7280"
}

const statusTextColorMap = {
    online: "#22c55e",
    idle: "#eab308",
    dnd: "#ef4444",
    offline: "#6b7280"
}

// Discord Public Flags - Bitfield values
const DISCORD_FLAGS = {
    DISCORD_EMPLOYEE: 1 << 0,
    PARTNERED_SERVER_OWNER: 1 << 1,
    HYPESQUAD_EVENTS: 1 << 2,
    BUG_HUNTER_LEVEL_1: 1 << 3,
    HOUSE_BRAVERY: 1 << 6,
    HOUSE_BRILLIANCE: 1 << 7,
    HOUSE_BALANCE: 1 << 8,
    EARLY_SUPPORTER: 1 << 9,
    BUG_HUNTER_LEVEL_2: 1 << 14,
    VERIFIED_BOT_DEVELOPER: 1 << 17,
    ACTIVE_DEVELOPER: 1 << 22,
} as const;

// Badge configurations with Discord CDN URLs
const BADGE_CONFIG: Record<string, { name: string; icon: string }> = {
    DISCORD_EMPLOYEE: { name: "Discord Staff", icon: "https://cdn.discordapp.com/badge-icons/5e74e9b61934fc1f67c65515d1f7e60d.png" },
    PARTNERED_SERVER_OWNER: { name: "Partnered Server Owner", icon: "https://cdn.discordapp.com/badge-icons/3f9748e53446a137a052f3454e2de41e.png" },
    HYPESQUAD_EVENTS: { name: "HypeSquad Events", icon: "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png" },
    BUG_HUNTER_LEVEL_1: { name: "Bug Hunter", icon: "https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png" },
    HOUSE_BRAVERY: { name: "HypeSquad Bravery", icon: "https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png" },
    HOUSE_BRILLIANCE: { name: "HypeSquad Brilliance", icon: "https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png" },
    HOUSE_BALANCE: { name: "HypeSquad Balance", icon: "https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png" },
    EARLY_SUPPORTER: { name: "Early Supporter", icon: "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png" },
    BUG_HUNTER_LEVEL_2: { name: "Bug Hunter Level 2", icon: "https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png" },
    VERIFIED_BOT_DEVELOPER: { name: "Early Verified Bot Developer", icon: "https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4b43.png" },
    ACTIVE_DEVELOPER: { name: "Active Developer", icon: "https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png" },
};

// Parse public_flags to get badges
function getBadgesFromFlags(publicFlags: number): string[] {
    const badges: string[] = [];
    for (const [key, value] of Object.entries(DISCORD_FLAGS)) {
        if (publicFlags & value) {
            badges.push(key);
        }
    }
    return badges;
}

export function OnlineStatus({ activity, inline = false }: { activity: LanyardData; inline?: boolean }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Get Discord user info
    const discordUser = activity.discord_user;
    const avatarUrl = discordUser?.avatar
        ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png?size=128`
        : `https://cdn.discordapp.com/embed/avatars/${parseInt(discordUser?.discriminator || '0') % 5}.png`;

    const displayName = discordUser?.global_name || discordUser?.username || "Discord User";
    const username = discordUser?.username || "";

    // Get badges from public_flags
    const publicFlags = (discordUser as unknown as { public_flags?: number })?.public_flags || 0;
    const userBadges = getBadgesFromFlags(publicFlags);

    if (inline) {
        return (
            <div className="flex items-center gap-2">
                <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: statusDotColorMap[activity.discord_status] }}
                />
                <span
                    className="text-xs font-medium"
                    style={{ color: statusTextColorMap[activity.discord_status] }}
                >
                    {statusTextMap[activity.discord_status]}
                </span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            {/* Discord Avatar with Status Indicator */}
            <div className="relative shrink-0">
                <div className="relative rounded-full overflow-hidden" style={{ width: '56px', height: '56px' }}>
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-muted animate-pulse rounded-full" />
                    )}
                    <Image
                        src={avatarUrl}
                        alt={displayName}
                        fill
                        sizes="56px"
                        className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                {/* Status Dot - positioned at bottom right */}
                <div
                    className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-card"
                    style={{ backgroundColor: statusDotColorMap[activity.discord_status] }}
                />
            </div>

            {/* User Info */}
            <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex items-center gap-2">
                    <p className="text-base font-semibold truncate">
                        {displayName}
                    </p>
                    <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
                        style={{
                            color: statusTextColorMap[activity.discord_status],
                            backgroundColor: `${statusDotColorMap[activity.discord_status]}15`
                        }}
                    >
                        {statusTextMap[activity.discord_status]}
                    </span>
                </div>

                {/* Username with badges */}
                <div className="flex items-center gap-2">
                    {username && (
                        <p className="text-sm text-muted-foreground shrink-0">
                            @{username}
                        </p>
                    )}

                    {/* Badges */}
                    {userBadges.length > 0 && (
                        <div className="flex items-center gap-1.5">
                            {userBadges.map((badge) => {
                                const config = BADGE_CONFIG[badge];
                                if (!config) return null;
                                return (
                                    <img
                                        key={badge}
                                        src={config.icon}
                                        alt={config.name}
                                        title={config.name}
                                        width={18}
                                        height={18}
                                        className="shrink-0"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>

                <p className="text-xs text-muted-foreground/60 mt-1">
                    No activity at the moment
                </p>
            </div>
        </div>
    );
}
