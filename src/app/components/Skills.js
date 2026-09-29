import React from "react";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24">
      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Technologies"
          description="Skills and technologies I've picked up over the years through self-learning and work."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="rounded-full border-border/80 bg-card/60 px-5 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
