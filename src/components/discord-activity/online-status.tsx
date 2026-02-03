"use client";

import type { LanyardData } from "react-use-lanyard"

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

export function OnlineStatus({ activity, inline = false }: { activity: LanyardData; inline?: boolean }) {
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
