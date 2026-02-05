"use client";

import { useEffect, useState } from "react";
import { useLanyard, type LanyardData } from "react-use-lanyard";
import Image from "next/image";
import { useMemo } from "react";
import { formatDuration } from "./discord-activity";
import { DISCORD_USER_ID } from '../../config/discord';

// Generate random waveform bar heights (memoized per song)
function generateWaveformBars(count: number, seed: number): number[] {
    const bars: number[] = [];
    let random = seed;
    for (let i = 0; i < count; i++) {
        random = (random * 1103515245 + 12345) & 0x7fffffff;
        const height = 20 + (random % 80);
        bars.push(height);
    }
    return bars;
}

// Kaomoji arrays for different states
const playingKaomoji = [
    "\\^o^/",
    "(ノ´ヮ`)ノ*: ・゚✧",
    "♪(´ε` )",
    "(＾▽＾)",
    "ヽ(>∀<☆)ノ",
    "♪～(´ε｀ )",
    "(ﾉ◕ヮ◕)ﾉ*:・゚✧",
    "( ´ ▽ ` )ﾉ",
    "٩(◕‿◕｡)۶",
    "♪♪ ヽ(ˇ∀ˇ )ゞ"
];

const idleKaomoji = [
    "( ￣o￣) . z Z",
    "(－_－) zzZ",
    "(∪｡∪)｡｡｡zzz",
    "(￣ρ￣)..zzZZ",
    "₍₍ ◝(　ﾟ∀ ﾟ )◟ ⁾⁾",
    "(  ˘ω˘ )zzz",
    "(¬_¬)zzZ",
    "( ˘ ³˘)zzz",
    "(´-ω-`)zzz",
    "(◡ ‿ ◡ ✿)"
];

// Hook to get random kaomoji that changes every minute
function useRandomKaomoji(kaomojis: string[]) {
    const [kaomoji, setKaomoji] = useState(kaomojis[0]);

    useEffect(() => {
        // Set initial random kaomoji
        setKaomoji(kaomojis[Math.floor(Math.random() * kaomojis.length)]);

        // Change every minute
        const interval = setInterval(() => {
            setKaomoji(kaomojis[Math.floor(Math.random() * kaomojis.length)]);
        }, 60000);

        return () => clearInterval(interval);
    }, [kaomojis]);

    return kaomoji;
}

function LoadingIndicator() {
    return (
        <div className="flex items-center justify-center gap-1 h-6">
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
        </div>
    );
}

function NoSpotifyState() {
    const kaomoji = useRandomKaomoji(idleKaomoji);

    return (
        <div className="flex items-center gap-4">
            <div className="w-[88px] h-[88px] rounded-xl bg-muted/50 flex items-center justify-center shrink-0 border border-border/50">
                <svg className="w-10 h-10 text-muted-foreground/50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-muted-foreground">Not Playing</p>
                    <span className="text-sm text-muted-foreground/60">{kaomoji}</span>
                </div>
                <p className="text-sm text-muted-foreground/60">Spotify is currently idle</p>
            </div>
        </div>
    );
}

function SpotifyPlayer({ spotify, currentTime }: { spotify: NonNullable<LanyardData['spotify']>; currentTime: number }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const kaomoji = useRandomKaomoji(playingKaomoji);

    const waveformBars = useMemo(() => {
        const seed = spotify.song.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return generateWaveformBars(40, seed);
    }, [spotify?.song]);

    const elapsed = spotify.timestamps ? currentTime - spotify.timestamps.start : 0;
    const total = spotify.timestamps ? spotify.timestamps.end - spotify.timestamps.start : 0;
    const progress = total > 0 ? (elapsed / total) * 100 : 0;

    return (
        <div className="flex items-center gap-5">
            {/* Album Art - Visual Focal Point */}
            {spotify.album_art_url && (
                <div className="relative shrink-0 rounded-xl overflow-hidden shadow-lg" style={{ width: '88px', height: '88px' }}>
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-muted animate-pulse" />
                    )}
                    <Image
                        src={spotify.album_art_url}
                        alt={spotify.album}
                        fill
                        sizes="88px"
                        className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
            )}

            {/* Unified Content Area */}
            <div className="flex flex-col flex-1 min-w-0 justify-center gap-3">
                {/* Track Info - Typography Hierarchy */}
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold truncate leading-tight">
                            {spotify.song}
                        </p>
                        <span className="text-base shrink-0">{kaomoji}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                        {spotify.artist}
                    </p>
                </div>

                {/* Playback Elements - Horizontally Aligned */}
                <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-mono tabular-nums w-10 text-right shrink-0">
                        {spotify.timestamps && formatDuration(Math.max(0, elapsed))}
                    </span>

                    <div className="flex-1 flex items-center justify-center gap-[2px] h-5">
                        {waveformBars.map((height, index) => {
                            const barProgress = (index / waveformBars.length) * 100;
                            const isPlayed = barProgress < progress;

                            return (
                                <div
                                    key={index}
                                    className={`w-[3px] rounded-full transition-colors duration-200 ${isPlayed
                                        ? 'bg-green-500'
                                        : 'bg-muted-foreground/25'
                                        }`}
                                    style={{ height: `${height}%` }}
                                />
                            );
                        })}
                    </div>

                    <span className="text-xs text-muted-foreground font-mono tabular-nums w-10 shrink-0">
                        {spotify.timestamps && formatDuration(total)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export function SpotifyCard() {
    const [lanyardData, setLanyardData] = useState<LanyardData | null>(null);
    const [currentTime, setCurrentTime] = useState(Date.now());

    const { loading, status } = useLanyard({
        userId: DISCORD_USER_ID,
        socket: true
    });

    useEffect(() => {
        if (status) {
            setLanyardData(status);
        }
    }, [loading, status]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading && !lanyardData) {
        return <LoadingIndicator />;
    }

    const spotify = lanyardData?.spotify;
    const isListening = lanyardData?.listening_to_spotify && spotify;

    return (
        <div>
            {isListening ? (
                <SpotifyPlayer spotify={spotify} currentTime={currentTime} />
            ) : (
                <NoSpotifyState />
            )}
        </div>
    );
}
