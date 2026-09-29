import React from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 bg-card/20 py-24">
      <div className="container max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've Built"
          description="Some of the applications I've developed personally and for work. Some projects aren't included due to confidentiality agreements, but I'm always happy to talk about my experience and the technologies I've worked with."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const tags = project.subtitle.split(",").map((t) => t.trim());
  const hasLink = Boolean(project.link);

  return (
    <Card className="group flex flex-col overflow-hidden border-border/60 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.4)]">
      <div className="relative aspect-video overflow-hidden border-b border-border/60 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "h-full w-full transition-transform duration-500 group-hover:scale-105",
            project.imageFit === "cover" ? "object-cover" : "object-contain p-6"
          )}
        />
        {!hasLink && (
          <Badge
            variant="secondary"
            className="absolute right-3 top-3 gap-1 bg-background/80 backdrop-blur"
          >
            <Lock className="h-3 w-3" /> Coming soon
          </Badge>
        )}
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="line-clamp-4 leading-relaxed first-letter:uppercase">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5 pb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="font-mono text-[11px] font-normal">
            {tag}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto">
        {hasLink ? (
          <Button variant="secondary" size="sm" className="w-full" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit site
              <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>
        ) : (
          <Button variant="secondary" size="sm" className="w-full" disabled>
            Awaiting client approval
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
