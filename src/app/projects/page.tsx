import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Projects`,
  description: `A collection of projects by ${RESUME_DATA.name}`,
};

export default function ProjectsPage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-4 bg-white print:space-y-3">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="mt-1 max-w-md text-pretty font-mono text-sm text-muted-foreground">
            A collection of projects I've worked on.
          </p>
        </div>

        <Section className="scroll-mb-16">
          <div className="space-y-8">
            {RESUME_DATA.projects.map((project) => (
              <div key={project.title} className="group relative">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:underline"
                        aria-label={`${project.title} (opens in a new tab)`}
                      >
                        {project.link.label}
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </main>
  );
}
