import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore my projects - from web applications to developer tools.",
    openGraph: {
        title: "Projects",
        description: "Explore my projects - from web applications to developer tools.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects",
        description: "Explore my projects - from web applications to developer tools.",
    },
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    return (
        <main className="min-h-dvh flex flex-col gap-8 relative">
            <section id="projects-header">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Projects{" "}
                            <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
                                {DATA.projects.length} projects
                            </span>
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            A collection of projects I&apos;ve built, from web apps to developer tools.
                        </p>
                    </div>
                </BlurFade>
            </section>

            <section id="projects-grid">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 3 + id * 0.08}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
        </main>
    );
}
