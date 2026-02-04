"use client";

import { useEffect, useState } from "react";
import { useLanyard, type LanyardData } from "react-use-lanyard";
import { LoaderCircle } from "lucide-react"
import { ActivityIndicator } from "./activity-indicator";
import { OnlineStatus } from "./online-status";
import { DISCORD_USER_ID } from '../../config/discord';

export function DiscordActivity({ showOnlineStatus = false }: { showOnlineStatus?: boolean }) {
    const [lanyardData, setLanyardData] = useState<LanyardData | null>(null);

    const { loading, status } = useLanyard({
        userId: DISCORD_USER_ID,
        socket: true
    })


    useEffect(() => {
        if (status) {
            setLanyardData(status)
        }
    }, [loading, status])

    return <div className="text-theme-foreground-secondary dark:text-gray-300 text-sm mt-2">
        {
            (loading && !lanyardData) ? <LoadingIndicator /> :
                (!loading && !lanyardData) ? <ErrorIndicator /> :
                    lanyardData && <ActivityIndicator activity={lanyardData} showOnlineStatus={showOnlineStatus} />
        }
    </div>
}

export function DiscordOnlineStatus() {
    const [lanyardData, setLanyardData] = useState<LanyardData | null>(null);

    const { loading, status } = useLanyard({
        userId: DISCORD_USER_ID,
        socket: true
    })

    useEffect(() => {
        if (status) {
            setLanyardData(status)
        }
    }, [loading, status])

    if (loading || !lanyardData) return null;

    return <OnlineStatus activity={lanyardData} inline={true} />
}

function LoadingIndicator() {
    return (
        <div className="flex items-center justify-center gap-1 h-6">
            <span className="w-2 h-2 bg-theme-foreground dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-theme-foreground dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-theme-foreground dark:bg-white rounded-full animate-bounce" />
        </div>
    );
}

function ErrorIndicator() {
    return <div className="text-red-500">
        <p>Something went wrong while fetching Discord activity.</p>
    </div>
}

export function formatDuration(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}