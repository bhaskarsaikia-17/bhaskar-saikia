"use client";

import { useState } from "react";
import Image from "next/image";
import { LastFmTrack, LastFmAlbum, LastFmArtist, getTrackImageUrl, getAlbumImageUrl, getArtistImageUrl } from "@/lib/lastfm";
import { cn } from "@/lib/utils";
import { Music, User } from "lucide-react";
import Link from "next/link";

type TabType = "songs" | "albums" | "artists" | "recent";

interface MusicTabsProps {
    topTracks: LastFmTrack[];
    topAlbums: LastFmAlbum[];
    topArtists: LastFmArtist[];
    recentTracks: LastFmTrack[];
}

export function MusicTabs({ topTracks, topAlbums, topArtists, recentTracks }: MusicTabsProps) {
    const [activeTab, setActiveTab] = useState<TabType>("songs");

    const tabs: { id: TabType; label: string }[] = [
        { id: "songs", label: "top songs" },
        { id: "albums", label: "top albums" },
        { id: "artists", label: "top artists" },
        { id: "recent", label: "recent tracks" },
    ];

    return (
        <div className="space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                            activeTab === tab.id
                                ? "bg-foreground text-background border-foreground"
                                : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/50"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Section Title */}
            <p className="font-newsreader italic text-muted-foreground">
                {activeTab === "songs" && "all-time favorites"}
                {activeTab === "albums" && "most played albums"}
                {activeTab === "artists" && "favorite artists"}
                {activeTab === "recent" && "recently played"}
            </p>

            {/* Content Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeTab === "songs" &&
                    topTracks.map((track, index) => (
                        <TrackItem key={`${track.name}-${index}`} track={track} />
                    ))}

                {activeTab === "albums" &&
                    topAlbums.map((album, index) => (
                        <AlbumItem key={`${album.name}-${index}`} album={album} />
                    ))}

                {activeTab === "artists" &&
                    topArtists.map((artist, index) => (
                        <ArtistItem key={`${artist.name}-${index}`} artist={artist} />
                    ))}

                {activeTab === "recent" &&
                    recentTracks.map((track, index) => (
                        <TrackItem key={`${track.name}-${index}`} track={track} showPlays={false} />
                    ))}
            </div>

            {/* Empty state */}
            {((activeTab === "songs" && topTracks.length === 0) ||
                (activeTab === "albums" && topAlbums.length === 0) ||
                (activeTab === "artists" && topArtists.length === 0) ||
                (activeTab === "recent" && recentTracks.length === 0)) && (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">No data available</p>
                    </div>
                )}
        </div>
    );
}

// Track Item Component
function TrackItem({ track, showPlays = true }: { track: LastFmTrack; showPlays?: boolean }) {
    const imageUrl = getTrackImageUrl(track, "large");
    const [imageError, setImageError] = useState(false);

    return (
        <Link href={track.url} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-xl border bg-card/50 hover:bg-card transition-colors p-3 flex items-center gap-3 cursor-pointer h-full">
                {/* Album Art */}
                <div className="shrink-0">
                    {imageUrl && !imageError ? (
                        <div className="size-14 relative rounded-lg overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={`${track.name} album art`}
                                fill
                                sizes="56px"
                                className="object-cover"
                                onError={() => setImageError(true)}
                            />
                        </div>
                    ) : (
                        <div className="size-14 rounded-lg bg-muted flex items-center justify-center">
                            <Music className="size-6 text-muted-foreground" />
                        </div>
                    )}
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {track.name}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">{track.artist.name}</p>
                    {showPlays && track.playcount && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                            {parseInt(track.playcount).toLocaleString()} plays
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}

// Album Item Component
function AlbumItem({ album }: { album: LastFmAlbum }) {
    const imageUrl = getAlbumImageUrl(album, "large");
    const [imageError, setImageError] = useState(false);

    return (
        <Link href={album.url} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-xl border bg-card/50 hover:bg-card transition-colors p-3 flex items-center gap-3 cursor-pointer h-full">
                {/* Album Art */}
                <div className="shrink-0">
                    {imageUrl && !imageError ? (
                        <div className="size-14 relative rounded-lg overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={`${album.name} album art`}
                                fill
                                sizes="56px"
                                className="object-cover"
                                onError={() => setImageError(true)}
                            />
                        </div>
                    ) : (
                        <div className="size-14 rounded-lg bg-muted flex items-center justify-center">
                            <Music className="size-6 text-muted-foreground" />
                        </div>
                    )}
                </div>

                {/* Album Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {album.name}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">{album.artist.name}</p>
                    {album.playcount && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                            {parseInt(album.playcount).toLocaleString()} plays
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}

// Artist Item Component
function ArtistItem({ artist }: { artist: LastFmArtist }) {
    const imageUrl = getArtistImageUrl(artist, "large");
    const [imageError, setImageError] = useState(false);

    return (
        <Link href={artist.url} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-xl border bg-card/50 hover:bg-card transition-colors p-3 flex items-center gap-3 cursor-pointer h-full">
                {/* Artist Image */}
                <div className="shrink-0">
                    {imageUrl && !imageError ? (
                        <div className="size-14 relative rounded-full overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={`${artist.name}`}
                                fill
                                sizes="56px"
                                className="object-cover"
                                onError={() => setImageError(true)}
                            />
                        </div>
                    ) : (
                        <div className="size-14 rounded-full bg-muted flex items-center justify-center">
                            <User className="size-6 text-muted-foreground" />
                        </div>
                    )}
                </div>

                {/* Artist Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {artist.name}
                    </h4>
                    {artist.playcount && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                            {parseInt(artist.playcount).toLocaleString()} plays
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
