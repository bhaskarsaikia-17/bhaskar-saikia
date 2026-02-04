"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryImage {
    url: string;
    key: string;
    size: number;
    lastModified: string;
}

interface GalleryProps {
    className?: string;
}

// Individual gallery image with skeleton loading
function GalleryImageWithSkeleton({ src, alt }: { src: string; alt: string }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="aspect-square rounded-xl overflow-hidden bg-muted relative">
            {/* Skeleton */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, 200px"
                className={`object-cover hover:scale-105 transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                unoptimized
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
}

export function Gallery({ className }: GalleryProps) {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch("/api/v1/gallery");
                if (response.ok) {
                    const data = await response.json();
                    setImages(data);
                }
            } catch (error) {
                console.error("Failed to fetch gallery images:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    }, []);

    if (loading) {
        return (
            <div className={cn("space-y-3", className)}>
                <p className="font-newsreader italic text-sm text-muted-foreground">
                    the gallery
                </p>
                <div className="w-full grid grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded-xl bg-muted animate-pulse"
                        />
                    ))}
                </div>
            </div>
        );
    }

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
                {displayImages.slice(0, 3).map((image, index) => (
                    <GalleryImageWithSkeleton
                        key={index}
                        src={image.url}
                        alt={`Gallery photo ${index + 1}`}
                    />
                ))}

                {/* Row 2 */}
                {displayImages.slice(3, 5).map((image, index) => (
                    <GalleryImageWithSkeleton
                        key={index + 3}
                        src={image.url}
                        alt={`Gallery photo ${index + 4}`}
                    />
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
