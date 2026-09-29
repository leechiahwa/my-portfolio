"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled && "border-border bg-background/70 backdrop-blur-xl"
      )}
    >
      <div className="container flex h-16 max-w-6xl items-center justify-between">
        <a href="#about" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-mono text-sm text-primary-foreground">
            ML
          </span>
          Melvin Lee
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <a href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.label}
              </a>
            </Button>
          ))}
          <Button size="sm" className="ml-2" asChild>
            <a href="#contact">
              Hire Me <ArrowRight />
            </a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="mb-6">Menu</SheetTitle>
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <SheetClose key={link.href} asChild>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-2 text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button className="mt-4" asChild>
                  <a href="#contact">
                    Hire Me <ArrowRight />
                  </a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
