"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const BLUR_FADE_DELAY = 0.04;

interface GalleryImage {
    url: string;
    key: string;
    size: number;
    lastModified: string;
}

// Individual gallery image with skeleton loading
function GalleryImageItem({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className="rounded-xl overflow-hidden bg-muted cursor-pointer group relative"
            style={{ aspectRatio: '1/1' }}
            onClick={onClick}
        >
            {/* Skeleton */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <Image
                src={image.url}
                alt={`Gallery photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={`object-cover group-hover:scale-110 transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading={index < 10 ? "eager" : "lazy"}
                unoptimized
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
}

export function GalleryClient() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'unset';
    };

    const goToPrevious = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
        }
    }, [selectedIndex, images.length]);

    const goToNext = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
        }
    }, [selectedIndex, images.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, goToPrevious, goToNext]);

    // Lightbox Modal Component - rendered via Portal
    const LightboxModal = () => {
        const [zoomLevel, setZoomLevel] = useState(1);
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [isDragging, setIsDragging] = useState(false);
        const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

        // Reset zoom when image changes
        useEffect(() => {
            setZoomLevel(1);
            setPosition({ x: 0, y: 0 });
        }, [selectedIndex]);

        const handleZoomIn = (e: React.MouseEvent) => {
            e.stopPropagation();
            setZoomLevel(prev => Math.min(prev + 0.5, 3));
        };

        const handleZoomOut = (e: React.MouseEvent) => {
            e.stopPropagation();
            setZoomLevel(prev => {
                const newZoom = Math.max(prev - 0.5, 1);
                if (newZoom === 1) {
                    setPosition({ x: 0, y: 0 });
                }
                return newZoom;
            });
        };

        const handleWheel = (e: React.WheelEvent) => {
            e.stopPropagation();
            if (e.deltaY < 0) {
                setZoomLevel(prev => Math.min(prev + 0.25, 3));
            } else {
                setZoomLevel(prev => {
                    const newZoom = Math.max(prev - 0.25, 1);
                    if (newZoom === 1) {
                        setPosition({ x: 0, y: 0 });
                    }
                    return newZoom;
                });
            }
        };

        const handleDoubleClick = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (zoomLevel > 1) {
                setZoomLevel(1);
                setPosition({ x: 0, y: 0 });
            } else {
                setZoomLevel(2);
            }
        };

        const handleMouseDown = (e: React.MouseEvent) => {
            if (zoomLevel > 1) {
                e.stopPropagation();
                setIsDragging(true);
                setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
            }
        };

        const handleMouseMove = (e: React.MouseEvent) => {
            if (isDragging && zoomLevel > 1) {
                e.stopPropagation();
                setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (selectedIndex === null) return null;

        return createPortal(
            <div
                className="fixed inset-0 flex items-center justify-center"
                style={{ zIndex: 9999 }}
                onClick={closeLightbox}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {/* Semi-transparent overlay with blur - allows gallery to show through blurred */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)'
                    }}
                />

                {/* Close Button */}
                <button
                    onClick={closeLightbox}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        padding: '0.5rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        zIndex: 10001,
                        cursor: 'pointer',
                        border: 'none'
                    }}
                >
                    <X className="size-6 text-white" />
                </button>

                {/* Zoom Controls */}
                <div
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '0.5rem',
                        zIndex: 10001
                    }}
                >
                    <button
                        onClick={handleZoomOut}
                        disabled={zoomLevel <= 1}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '9999px',
                            backgroundColor: zoomLevel <= 1 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                            cursor: zoomLevel <= 1 ? 'not-allowed' : 'pointer',
                            border: 'none',
                            opacity: zoomLevel <= 1 ? 0.5 : 1
                        }}
                    >
                        <ZoomOut className="size-5 text-white" />
                    </button>
                    <div
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            fontSize: '0.875rem',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {Math.round(zoomLevel * 100)}%
                    </div>
                    <button
                        onClick={handleZoomIn}
                        disabled={zoomLevel >= 3}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '9999px',
                            backgroundColor: zoomLevel >= 3 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                            cursor: zoomLevel >= 3 ? 'not-allowed' : 'pointer',
                            border: 'none',
                            opacity: zoomLevel >= 3 ? 0.5 : 1
                        }}
                    >
                        <ZoomIn className="size-5 text-white" />
                    </button>
                </div>

                {/* Previous Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        goToPrevious();
                    }}
                    style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        zIndex: 10001,
                        cursor: 'pointer',
                        border: 'none'
                    }}
                >
                    <ChevronLeft className="size-8 text-white" />
                </button>

                {/* Next Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                    }}
                    style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        zIndex: 10001,
                        cursor: 'pointer',
                        border: 'none'
                    }}
                >
                    <ChevronRight className="size-8 text-white" />
                </button>

                {/* Image Container */}
                <div
                    style={{
                        zIndex: 10000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        position: 'relative',
                        width: '100%',
                        height: '85vh',
                    }}
                    onClick={(e) => e.stopPropagation()}
                    onWheel={handleWheel}
                    onDoubleClick={handleDoubleClick}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    {/* Inner wrapper to clip the image with rounded corners */}
                    <div
                        style={{
                            overflow: 'hidden',
                            borderRadius: '20px',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={images[selectedIndex].url}
                            alt={`Gallery photo ${selectedIndex + 1}`}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '85vh',
                                objectFit: 'contain',
                                borderRadius: '20px',
                                transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                                userSelect: 'none'
                            }}
                            draggable={false}
                        />
                    </div>

                    {/* Image Counter */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            padding: '0.5rem 1rem',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            fontSize: '0.875rem'
                        }}
                    >
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    return (
        <>
            <main className="min-h-dvh flex flex-col gap-10 relative">
                {/* Header */}
                <section id="gallery-hero">
                    <div className="mx-auto w-full max-w-2xl">
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <div className="flex items-center gap-4 mb-6">
                                <Link
                                    href="/presence"
                                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <ArrowLeft className="size-4" />
                                    Presence
                                </Link>
                                <div>
                                    <BlurFadeText
                                        delay={BLUR_FADE_DELAY * 2}
                                        className="text-2xl font-newsreader italic tracking-tight"
                                        yOffset={8}
                                        text="gallery"
                                    />
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={BLUR_FADE_DELAY * 3}>
                            <p className="text-muted-foreground">
                                All moments captured.
                            </p>
                        </BlurFade>
                    </div>
                </section>

                {/* Gallery Grid - 5 columns, break out of parent container */}
                <section
                    id="photos"
                    style={{
                        width: '100vw',
                        position: 'relative',
                        left: '50%',
                        right: '50%',
                        marginLeft: '-50vw',
                        marginRight: '-50vw',
                        padding: '0 1rem'
                    }}
                >
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            {loading ? (
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(5, 1fr)',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="rounded-xl bg-muted animate-pulse"
                                            style={{ aspectRatio: '1/1' }}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(5, 1fr)',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {images.map((image, index) => (
                                        <GalleryImageItem
                                            key={index}
                                            image={image}
                                            index={index}
                                            onClick={() => openLightbox(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </BlurFade>

                    {!loading && images.length === 0 && (
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">No photos yet</p>
                            </div>
                        </BlurFade>
                    )}
                </section>
            </main>

            {/* Lightbox Modal - Rendered via Portal */}
            {mounted && <LightboxModal />}
        </>
    );
}
