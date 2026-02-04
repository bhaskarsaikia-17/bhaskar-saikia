"use client";

import Image from "next/image";

export default function WorkflowSection() {
    return (
        <div className="flex min-h-0 flex-col gap-y-6">
            <h2 className="text-xl font-newsreader italic">How I Work</h2>
            <div className="w-full overflow-x-auto">
                <Image
                    src="/workflow.svg"
                    alt="Workflow: Idea → Research → Build → Test → Ship"
                    width={1011}
                    height={300}
                    className="w-full h-auto min-w-[600px] dark:invert dark:opacity-90"
                    priority
                />
            </div>
        </div>
    );
}
