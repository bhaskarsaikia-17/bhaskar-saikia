// Last.fm API utility functions

export interface LastFmTrack {
    name: string;
    artist: {
        name: string;
        url: string;
    };
    url: string;
    playcount?: string;
    image: {
        size: string;
        "#text": string;
    }[];
    "@attr"?: {
        nowplaying?: string;
    };
    album?: {
        "#text": string;
    };
}

export interface LastFmTopTracksResponse {
    toptracks: {
        track: LastFmTrack[];
    };
}

export interface LastFmRecentTracksResponse {
    recenttracks: {
        track: LastFmTrack[];
    };
}

const LASTFM_API_BASE = "https://ws.audioscrobbler.com/2.0/";

/**
 * Get top tracks for the configured user
 */
export async function getTopTracks(limit: number = 8): Promise<LastFmTrack[]> {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = process.env.LASTFM_USERNAME;

    if (!apiKey || !username) {
        console.error("Last.fm API key or username not configured");
        return [];
    }

    try {
        const res = await fetch(
            `${LASTFM_API_BASE}?method=user.gettoptracks&user=${username}&api_key=${apiKey}&format=json&period=overall&limit=${limit}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!res.ok) {
            throw new Error(`Last.fm API error: ${res.status}`);
        }

        const data: LastFmTopTracksResponse = await res.json();
        return data.toptracks?.track || [];
    } catch (error) {
        console.error("Failed to fetch top tracks:", error);
        return [];
    }
}

/**
 * Get recent tracks including now playing
 */
export async function getRecentTracks(limit: number = 1): Promise<LastFmTrack[]> {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = process.env.LASTFM_USERNAME;

    if (!apiKey || !username) {
        console.error("Last.fm API key or username not configured");
        return [];
    }

    try {
        const res = await fetch(
            `${LASTFM_API_BASE}?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=${limit}`,
            { cache: 'no-store' } // Forces a fresh fetch every time for live showing
        );

        if (!res.ok) {
            throw new Error(`Last.fm API error: ${res.status}`);
        }

        const data: LastFmRecentTracksResponse = await res.json();
        return data.recenttracks?.track || [];
    } catch (error) {
        console.error("Failed to fetch recent tracks:", error);
        return [];
    }
}

/**
 * Get the best available image URL for a track
 */
export function getTrackImageUrl(track: LastFmTrack, size: "small" | "medium" | "large" | "extralarge" = "extralarge"): string {
    const image = track.image?.find((img) => img.size === size);
    return image?.["#text"] || track.image?.[track.image.length - 1]?.["#text"] || "";
}

/**
 * Check if a track is currently playing
 */
export function isNowPlaying(track: LastFmTrack): boolean {
    return track["@attr"]?.nowplaying === "true";
}

// Album types
export interface LastFmAlbum {
    name: string;
    artist: {
        name: string;
        url: string;
    };
    url: string;
    playcount: string;
    image: {
        size: string;
        "#text": string;
    }[];
}

export interface LastFmTopAlbumsResponse {
    topalbums: {
        album: LastFmAlbum[];
    };
}

// Artist types
export interface LastFmArtist {
    name: string;
    url: string;
    playcount: string;
    image: {
        size: string;
        "#text": string;
    }[];
}

export interface LastFmTopArtistsResponse {
    topartists: {
        artist: LastFmArtist[];
    };
}

/**
 * Get top albums for the configured user
 */
export async function getTopAlbums(limit: number = 8): Promise<LastFmAlbum[]> {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = process.env.LASTFM_USERNAME;

    if (!apiKey || !username) {
        console.error("Last.fm API key or username not configured");
        return [];
    }

    try {
        const res = await fetch(
            `${LASTFM_API_BASE}?method=user.gettopalbums&user=${username}&api_key=${apiKey}&format=json&period=overall&limit=${limit}`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            throw new Error(`Last.fm API error: ${res.status}`);
        }

        const data: LastFmTopAlbumsResponse = await res.json();
        return data.topalbums?.album || [];
    } catch (error) {
        console.error("Failed to fetch top albums:", error);
        return [];
    }
}

/**
 * Get top artists for the configured user
 */
export async function getTopArtists(limit: number = 8): Promise<LastFmArtist[]> {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = process.env.LASTFM_USERNAME;

    if (!apiKey || !username) {
        console.error("Last.fm API key or username not configured");
        return [];
    }

    try {
        const res = await fetch(
            `${LASTFM_API_BASE}?method=user.gettopartists&user=${username}&api_key=${apiKey}&format=json&period=overall&limit=${limit}`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            throw new Error(`Last.fm API error: ${res.status}`);
        }

        const data: LastFmTopArtistsResponse = await res.json();
        return data.topartists?.artist || [];
    } catch (error) {
        console.error("Failed to fetch top artists:", error);
        return [];
    }
}

/**
 * Get album image URL
 */
export function getAlbumImageUrl(album: LastFmAlbum, size: "small" | "medium" | "large" | "extralarge" = "extralarge"): string {
    const image = album.image?.find((img) => img.size === size);
    return image?.["#text"] || album.image?.[album.image.length - 1]?.["#text"] || "";
}

/**
 * Get artist image URL
 */
export function getArtistImageUrl(artist: LastFmArtist, size: "small" | "medium" | "large" | "extralarge" = "extralarge"): string {
    const image = artist.image?.find((img) => img.size === size);
    return image?.["#text"] || artist.image?.[artist.image.length - 1]?.["#text"] || "";
}
