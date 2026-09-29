"use client";
import React, { useState } from "react";
import { ArrowRight, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { focusAreas, socials } from "../data";
import { cn } from "@/lib/utils";

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <section id="about" className="relative">
      {/* Background: grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="container max-w-6xl pb-20 pt-32 md:pt-40">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Badge
              variant="outline"
              className="mb-6 gap-2 rounded-full border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to opportunities
            </Badge>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Melvin.
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                I love to build amazing things.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Software Engineer with 3 years of backend experience across IoT
              integration, Digital Twin systems, AGV automation, and ETL pipelines
              for production data processing. Currently pursuing a Computer
              Science (AI) degree, with a focus on bridging backend engineering
              and machine learning to build smarter, data-driven systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button size="lg" asChild>
                <a href="#contact">
                  Work With Me <ArrowRight />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">See My Past Work</a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <SocialButton href={socials.linkedin} label="LinkedIn">
                <LinkedinIcon />
              </SocialButton>
              <SocialButton href={socials.github} label="GitHub">
                <GithubIcon />
              </SocialButton>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCount((c) => c + 1)}
                    className="rounded-full text-muted-foreground"
                  >
                    <Heart
                      className={cn(
                        "transition-transform active:scale-125",
                        count > 0 && "fill-rose-500 text-rose-500"
                      )}
                    />
                    {count} {count === 1 ? "Like" : "Likes"}
                    {count >= 10 && ` ${"❤️".repeat(Math.min(Math.floor(count / 10), 5))}`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Leave a like!</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-transparent to-indigo-500/25 blur-2xl" />
            <Card className="overflow-hidden rounded-3xl border-border/60 bg-card/60 p-2 backdrop-blur">
              <img
                src="/IMG_4787.jpeg"
                alt="Portrait of Melvin Lee"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Penang, Malaysia
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <Card
              key={area.title}
              className="group border-border/60 bg-card/40 transition-colors hover:border-primary/40 hover:bg-card"
            >
              <CardContent className="p-5">
                <p className="font-mono text-xs text-primary">0{i + 1}</p>
                <h3 className="mt-2 font-semibold">{area.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialButton({ href, label, children }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            {children}
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
