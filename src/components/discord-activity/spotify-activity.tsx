"use client";

import type { LanyardData } from "react-use-lanyard";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
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

// Generate random waveform bar heights (memoized per song)
function generateWaveformBars(count: number, seed: number): number[] {
    const bars: number[] = [];
    let random = seed;
    for (let i = 0; i < count; i++) {
        // Simple pseudo-random based on seed
        random = (random * 1103515245 + 12345) & 0x7fffffff;
        const height = 20 + (random % 80); // Height between 20-100%
        bars.push(height);
    }
    return bars;
}

export function SpotifyActivity({ activity }: { activity: LanyardData }) {
    const spotify = activity.spotify;
    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentTime, setCurrentTime] = useState(Date.now());

    // Update current time every second for smooth progress
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Generate consistent waveform bars based on song name
    const waveformBars = useMemo(() => {
        if (!spotify?.song) return [];
        const seed = spotify.song.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return generateWaveformBars(40, seed);
    }, [spotify?.song]);

    if (!spotify) {
        return null;
    }

    const elapsed = spotify.timestamps ? currentTime - spotify.timestamps.start : 0;
    const total = spotify.timestamps ? spotify.timestamps.end - spotify.timestamps.start : 0;
    const progress = total > 0 ? (elapsed / total) * 100 : 0;

    return (
        <div className="flex items-center gap-4">
            {/* Album Art - Larger size */}
            {spotify.album_art_url && (
                <div className="relative shrink-0 rounded-lg overflow-hidden" style={{ width: '80px', height: '80px' }}>
                    {/* Skeleton */}
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-muted animate-pulse" />
                    )}
                    <Image
                        src={spotify.album_art_url}
                        alt={spotify.album}
                        fill
                        sizes="80px"
                        className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
            )}

            {/* Song Info and Progress */}
            <div className="flex flex-col flex-1 min-w-0 gap-2">
                {/* Song Title and Artist */}
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-base font-semibold truncate flex-1 min-w-0">
                            {spotify.song}
                        </p>
                        {/* Online Status */}
                        <div className="flex items-center gap-1.5 shrink-0">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: statusDotColorMap[activity.discord_status] }}
                            />
                            <span
                                className="text-xs font-medium whitespace-nowrap"
                                style={{ color: statusTextColorMap[activity.discord_status] }}
                            >
                                {statusTextMap[activity.discord_status]}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                        {spotify.artist}
                    </p>
                </div>

                {/* Waveform Progress Bar */}
                <div className="flex items-center gap-3">
                    {/* Current Time */}
                    <span className="text-xs text-muted-foreground font-mono w-10 text-right shrink-0">
                        {spotify.timestamps && formatDuration(Math.max(0, elapsed))}
                    </span>

                    {/* Waveform Visualizer */}
                    <div className="flex-1 flex items-center justify-center gap-[2px] h-6">
                        {waveformBars.map((height, index) => {
                            const barProgress = (index / waveformBars.length) * 100;
                            const isPlayed = barProgress < progress;

                            return (
                                <div
                                    key={index}
                                    className={`w-[3px] rounded-full transition-colors duration-150 ${isPlayed
                                            ? 'bg-primary'
                                            : 'bg-muted-foreground/30'
                                        }`}
                                    style={{
                                        height: `${height}%`,
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Total Time */}
                    <span className="text-xs text-muted-foreground font-mono w-10 shrink-0">
                        {spotify.timestamps && formatDuration(total)}
                    </span>
                </div>
            </div>
        </div>
    );
}
