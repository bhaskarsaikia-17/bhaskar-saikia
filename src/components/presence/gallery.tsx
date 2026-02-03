"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface GalleryProps {
    images: string[];
    className?: string;
}

export function Gallery({ images, className }: GalleryProps) {
    if (images.length === 0) {
        return (
            <div className={cn("space-y-3", className)}>
                <p className="font-newsreader italic text-sm text-muted-foreground">
                    the gallery
                </p>
                <div className="text-center py-6">
                    <p className="text-sm text-muted-foreground">No photos yet</p>
                </div>
            </div>
        );
    }

    // Show images in a 3x2 grid like the reference
    const displayImages = images.slice(0, 5);

    return (
        <div className={cn("space-y-3", className)}>
            {/* Header */}
            <p className="font-newsreader italic text-sm text-muted-foreground">
                the gallery
            </p>

            {/* 3x2 Grid */}
            <div
                className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0.5rem' }}
            >
                {/* Row 1 */}
                {displayImages.slice(0, 3).map((src, index) => (
                    <div
                        key={index}
                        className="aspect-square rounded-xl overflow-hidden bg-muted"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={`Gallery photo ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}

                {/* Row 2 */}
                {displayImages.slice(3, 5).map((src, index) => (
                    <div
                        key={index + 3}
                        className="aspect-square rounded-xl overflow-hidden bg-muted"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={`Gallery photo ${index + 4}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}

                {/* View All Card */}
                <Link href="/presence/gallery">
                    <div className="aspect-square rounded-xl bg-card/50 border border-border flex items-center justify-center cursor-pointer hover:bg-card transition-colors">
                        <span className="font-newsreader italic text-sm text-muted-foreground">
                            view all
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
