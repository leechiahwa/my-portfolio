"use client";
import React, { useState } from "react";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import SectionHeading from "./SectionHeading";
import { socials } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        toast.success("Message sent!", {
          description: "Thanks for reaching out — I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Something went wrong", {
          description: "The message could not be sent. Please try again.",
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "The message could not be sent. Please wait while it's fixed.",
      });
    } finally {
      setSending(false);
    }
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: socials.email, href: `mailto:${socials.email}` },
    { icon: MapPin, label: "Location", value: "Penang, Malaysia" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "melvin-lee", href: socials.linkedin },
    { icon: GithubIcon, label: "GitHub", value: "leechiahwa", href: socials.github },
  ];

  return (
    <section id="contact" className="relative border-t border-border/60 py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="container max-w-5xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
          <Card className="border-border/60 bg-card/60">
            <CardHeader>
              <CardTitle>Contact details</CardTitle>
              <CardDescription>Prefer reaching out directly? Find me here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              {contactItems.map(({ icon: Icon, label, value, href }, i) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <React.Fragment key={label}>
                    {i > 0 && <Separator className="bg-border/60" />}
                    <Wrapper
                      {...(href && {
                        href,
                        target: href.startsWith("http") ? "_blank" : undefined,
                        rel: "noopener noreferrer",
                      })}
                      className="-mx-2 flex items-center gap-4 rounded-lg px-2 py-3 transition-colors hover:bg-accent/50"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border/60 bg-background text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-medium">{value}</span>
                      </span>
                    </Wrapper>
                  </React.Fragment>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/60">
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>I usually reply within a day or two.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-36 resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={sending}>
                  {sending ? <Loader2 className="animate-spin" /> : <Send />}
                  {sending ? "Sending..." : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
