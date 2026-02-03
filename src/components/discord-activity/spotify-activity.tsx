"use client";

import type { LanyardData } from "react-use-lanyard";
import { formatDuration } from "./discord-activity";

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

export function SpotifyActivity({ activity }: { activity: LanyardData }) {
    const spotify = activity.spotify;

    if (!spotify) {
        return null;
    }

    const progress = spotify.timestamps
        ? ((Date.now() - spotify.timestamps.start) / (spotify.timestamps.end - spotify.timestamps.start)) * 100
        : 0;

    return (
        <div className="flex items-center gap-3">
            {spotify.album_art_url && (
                <img
                    src={spotify.album_art_url}
                    alt={spotify.album}
                    className="rounded-md object-cover shrink-0"
                    style={{ width: '48px', height: '48px' }}
                />
            )}
            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium truncate">
                        {spotify.song}
                    </p>
                    {/* Online Status - right aligned */}
                    <div className="flex items-center gap-1.5 shrink-0">
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
                </div>
                <p className="text-xs text-muted-foreground truncate">
                    {spotify.artist}
                </p>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-green-500 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                        {spotify.timestamps && formatDuration(Date.now() - spotify.timestamps.start)} / {spotify.timestamps && formatDuration(spotify.timestamps.end - spotify.timestamps.start)}
                    </span>
                </div>
            </div>
        </div>
    );
}
