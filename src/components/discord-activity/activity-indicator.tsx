"use client";

import type { LanyardData } from "react-use-lanyard"
import { OtherActivity } from "./other-activity"
import { OnlineStatus } from "./online-status"

interface ActivityIndicatorProps {
    activity: LanyardData;
    showOnlineStatus?: boolean;
}

export function ActivityIndicator({ activity, showOnlineStatus = false }: ActivityIndicatorProps) {
    // Filter out custom status and Spotify from activities (Spotify is now in separate card)
    const otherActivities = activity.activities.filter(a => a.id !== "custom" && a.name !== "Spotify");

    const hasAnyActivity = otherActivities.length > 0;

    return (
        <div className="flex flex-col gap-3">
            {/* Show ALL other activities (excluding Spotify) */}
            {otherActivities.map((activityItem, index) => (
                <OtherActivity
                    key={activityItem.id || activityItem.application_id || index}
                    activity={activityItem}
                    discordStatus={index === 0 ? activity.discord_status : undefined}
                />
            ))}

            {/* Show online status only if no activities and showOnlineStatus is true */}
            {!hasAnyActivity && showOnlineStatus && (
                <OnlineStatus activity={activity} />
            )}

            {/* Show no activity message only if no activities and showOnlineStatus is false */}
            {!hasAnyActivity && !showOnlineStatus && (
                <OnlineStatus activity={activity} />
            )}
        </div>
    );
}
