import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
});

export async function GET() {
    try {
        const command = new ListObjectsV2Command({
            Bucket: process.env.R2_BUCKET_NAME,
            Prefix: "gallery/",
        });

        const response = await client.send(command);

        if (!response.Contents) {
            return NextResponse.json([], {
                headers: {
                    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
                },
            });
        }

        // Filter out the folder itself and map to public URLs
        const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
        const images = response.Contents.filter((object) => {
            if (!object.Key || object.Key === "gallery/") return false;
            const ext = object.Key.toLowerCase().split(".").pop();
            return ext && imageExtensions.includes(`.${ext}`);
        }).map((object) => ({
            url: `${process.env.R2_PUBLIC_URL}/${object.Key}`,
            key: object.Key,
            size: object.Size,
            lastModified: object.LastModified,
        }));

        return NextResponse.json(images, {
            headers: {
                "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
            },
        });
    } catch (error) {
        console.error("Error fetching gallery images from R2:", error);
        return NextResponse.json(
            { error: "Failed to fetch gallery images" },
            { status: 500 }
        );
    }
}
