import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DiscordActivity } from "@/components/discord-activity/discord-activity";
import { Gallery } from "@/components/presence/gallery";
import fs from "fs";
import path from "path";

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
    title: "Presence",
    description: "What I'm listening to and where I've been",
};

// Get gallery images from the public/gallery folder
function getGalleryImages(): string[] {
    const galleryPath = path.join(process.cwd(), "public", "gallery");

    try {
        const files = fs.readdirSync(galleryPath);
        const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

        return files
            .filter((file) => {
                const ext = path.extname(file).toLowerCase();
                return imageExtensions.includes(ext);
            })
            .map((file) => `/gallery/${file}`);
    } catch {
        console.error("Could not read gallery folder");
        return [];
    }
}

export default function PresencePage() {
    const galleryImages = getGalleryImages();

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            {/* Header */}
            <section id="presence-hero">
                <div className="mx-auto w-full max-w-2xl space-y-4">
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY}
                        className="text-3xl font-semibold tracking-tighter sm:text-4xl"
                        yOffset={8}
                        text="Presence"
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground max-w-[600px] md:text-lg">
                            A glimpse into what I&apos;m listening to and where I&apos;ve been.
                        </p>
                    </BlurFade>
                </div>
            </section>

            {/* Discord Activity Section */}
            <section id="discord-activity">
                <div className="mx-auto w-full max-w-2xl space-y-2">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <p className="font-newsreader italic text-sm text-muted-foreground">
                            discord activity
                        </p>
                        <div className="w-full rounded-xl border bg-card/50 p-4 mt-2">
                            <DiscordActivity />
                        </div>
                    </BlurFade>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery">
                <div className="mx-auto w-full max-w-2xl">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <Gallery images={galleryImages} />
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
