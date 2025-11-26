import React from "react";
import { Section } from "../../components/ui/section";
import type { RESUME_DATA } from "../../data/resume-data";

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects in a compact single-line format
 */
export function Projects({
  projects,
}: ProjectsProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-1">
      <h2 className="text-xl font-bold" id="side-projects">
        Side projects
      </h2>
      <div className="space-y-1 print:space-y-0.5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex items-baseline gap-2 text-sm print:gap-1 print:text-xs"
          >
            <span className="font-medium inline-flex items-center gap-1">
              {project.title}
              {project.link?.href && (
                <span
                  className="size-1 rounded-full bg-green-500"
                  title="Active project"
                  aria-hidden="true"
                />
              )}
            </span>
            <span className="text-muted-foreground">—</span>
            <span className="text-muted-foreground flex-1">{project.description}</span>
            {project.link?.href && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:underline whitespace-nowrap"
              >
                [{project.link.label}]
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
