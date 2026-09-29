import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { socials } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container flex max-w-6xl flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Melvin Lee. Built with Next.js & shadcn/ui.</p>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
