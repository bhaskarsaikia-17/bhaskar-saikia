import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { MusicTabs } from "@/components/presence/music-tabs";
import { getTopTracks, getTopAlbums, getTopArtists, getRecentTracks } from "@/lib/lastfm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
    title: "Music",
    description: "My music taste and playlists",
};

export default async function MusicPage() {
    // Fetch all data in parallel
    const [topTracks, topAlbums, topArtists, recentTracks] = await Promise.all([
        getTopTracks(8),
        getTopAlbums(8),
        getTopArtists(8),
        getRecentTracks(8),
    ]);

    return (
        <main className="min-h-dvh flex flex-col gap-10 relative">
            {/* Header */}
            <section id="music-hero">
                <div className="mx-auto w-full max-w-2xl space-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <Link
                            href="/presence"
                            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                        >
                            <ArrowLeft className="size-4" />
                            Back to Presence
                        </Link>
                    </BlurFade>

                    <BlurFadeText
                        delay={BLUR_FADE_DELAY * 2}
                        className="text-3xl font-newsreader italic tracking-tight"
                        yOffset={8}
                        text="music"
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <p className="text-muted-foreground max-w-[600px]">
                            My music taste and playlists
                        </p>
                    </BlurFade>
                </div>
            </section>

            {/* Music Tabs */}
            <section id="tracks">
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <MusicTabs
                        topTracks={topTracks}
                        topAlbums={topAlbums}
                        topArtists={topArtists}
                        recentTracks={recentTracks}
                    />
                </BlurFade>
            </section>

            {/* Footer */}
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <p className="text-sm text-muted-foreground text-center">
                    Data from{" "}
                    <Link
                        href="https://www.last.fm/user/bhaskarop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                        Last.fm
                    </Link>
                </p>
            </BlurFade>
        </main>
    );
}
