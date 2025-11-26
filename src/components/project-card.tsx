import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: {
    href: string;
    label: string;
  };
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-foreground/50">
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          {tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {link && (
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-foreground hover:underline"
          >
            {link.label}
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
