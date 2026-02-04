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

    const hasAnyActivity = hasSpotify || otherActivities.length > 0;

    return (
        <div className="flex flex-col gap-3">
            {/* Show Spotify activity if listening */}
            {hasSpotify && (
                <SpotifyActivity activity={activity} />
            )}

            {/* Show ALL other activities */}
            {otherActivities.map((activityItem, index) => (
                <OtherActivity
                    key={activityItem.id || activityItem.application_id || index}
                    activity={activityItem}
                    discordStatus={index === 0 && !hasSpotify ? activity.discord_status : undefined}
                />
            ))}

            {/* Show online status only if no activities and showOnlineStatus is true */}
            {!hasAnyActivity && showOnlineStatus && (
                <OnlineStatus activity={activity} />
            )}

            {/* Show no activity message only if no activities and showOnlineStatus is false */}
            {!hasAnyActivity && !showOnlineStatus && (
                <p className="text-sm text-muted-foreground">No current activity</p>
            )}
        </div>
    );
}
