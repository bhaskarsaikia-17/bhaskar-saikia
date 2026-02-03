"use client";

import type { LanyardData } from "react-use-lanyard"
import { SpotifyActivity } from "./spotify-activity"
import { OtherActivity } from "./other-activity"
import { OnlineStatus } from "./online-status"

interface ActivityIndicatorProps {
    activity: LanyardData;
    showOnlineStatus?: boolean;
}

export function ActivityIndicator({ activity, showOnlineStatus = false }: ActivityIndicatorProps) {
    // Check for Spotify activity first (from spotify property, not activities array)
    const hasSpotify = activity.listening_to_spotify && activity.spotify;

    // Filter out custom status from activities
    const otherActivities = activity.activities.filter(a => a.id !== "custom" && a.name !== "Spotify");

    return (
        <div>
            {hasSpotify ? (
                <SpotifyActivity activity={activity} />
            ) : otherActivities.length > 0 ? (
                <OtherActivity activity={otherActivities[0]} discordStatus={activity.discord_status} />
            ) : showOnlineStatus ? (
                <OnlineStatus activity={activity} />
            ) : (
                <p className="text-sm text-muted-foreground">No current activity</p>
            )}
        </div>
    );
}
