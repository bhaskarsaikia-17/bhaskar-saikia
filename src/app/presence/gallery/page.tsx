import fs from "fs";
import path from "path";
import { GalleryClient } from "./gallery-client";

export const metadata = {
    title: "Gallery",
    description: "All moments captured",
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

export default function GalleryPage() {
    const galleryImages = getGalleryImages();

    return <GalleryClient images={galleryImages} />;
}

