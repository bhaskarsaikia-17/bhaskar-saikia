"use client";

import type { Activity } from "react-use-lanyard";
import Image from "next/image";
import { timestampToRelativeTime, trimToLength } from "../../util";
import { Clock } from "lucide-react";
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

type DiscordStatus = "online" | "idle" | "dnd" | "offline";

interface OtherActivityProps {
    activity: Activity;
    discordStatus?: DiscordStatus;
}

export function OtherActivity({ activity, discordStatus }: OtherActivityProps) {
    const [imageError, setImageError] = useState(false);

    const getImageUrl = (imageUrl: string | undefined) => {
        if (!imageUrl) {
            return "https://i.postimg.cc/bNVjsFTQ/avatar.png";
        }

        if (imageUrl.startsWith('mp:external/')) {
            const matches = imageUrl.match(/mp:external\/([^/]+)\/(.+)/);
            if (matches && matches[2]) {
                let extractedUrl = matches[2];
                if (extractedUrl.startsWith('https/'))
                    extractedUrl = extractedUrl.replace('https/', 'https://');
                return extractedUrl;
            }
        }

        if (imageUrl.startsWith('https://cdn.discordapp.com')) {
            return imageUrl;
        }

        if (imageUrl && !imageUrl.startsWith('http') && activity.application_id) {
            return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${imageUrl}.png`;
        }

        return imageUrl;
    };

    const largeImage = getImageUrl(activity.assets?.large_image);

    // For external URLs that aren't in remotePatterns, fall back to img tag
    const isExternalUrl = largeImage.startsWith('http') &&
        !largeImage.includes('cdn.discordapp.com') &&
        !largeImage.includes('i.postimg.cc');

    return (
        <div className="flex items-center gap-3">
            <div className="relative shrink-0" style={{ width: '48px', height: '48px' }}>
                {isExternalUrl || imageError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={imageError ? "https://i.postimg.cc/bNVjsFTQ/avatar.png" : largeImage}
                        alt={activity.name || "Activity status"}
                        className="rounded-md object-cover w-full h-full"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <Image
                        src={largeImage}
                        alt={activity.name || "Activity status"}
                        fill
                        sizes="48px"
                        className="rounded-md object-cover"
                        onError={() => setImageError(true)}
                    />
                )}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium truncate">{activity.name}</p>
                    {discordStatus && (
                        <div className="flex items-center gap-1.5 shrink-0">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: statusDotColorMap[discordStatus] }}
                            />
                            <span
                                className="text-xs font-medium"
                                style={{ color: statusTextColorMap[discordStatus] }}
                            >
                                {statusTextMap[discordStatus]}
                            </span>
                        </div>
                    )}
                </div>
                {activity.details && (
                    <p className="text-xs text-muted-foreground truncate">{trimToLength(activity.details, 40)}</p>
                )}
                {activity.state && (
                    <p className="text-xs text-muted-foreground truncate">{trimToLength(activity.state, 40)}</p>
                )}
                {activity.timestamps?.start && (
                    <p className="text-xs text-primary font-medium flex items-center gap-1 mt-0.5">
                        <Clock size={10} />
                        <span>{timestampToRelativeTime(activity.timestamps.start)}</span>
                    </p>
                )}
            </div>
        </div>
    );
}
