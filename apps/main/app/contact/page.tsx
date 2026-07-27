"use client";

import { useState } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // TODO: wire up to your backend/email service
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen">
            <section>
                <div className="container mx-auto px-6 pt-32 pb-20">
                    <Badge
                        variant="outline"
                        className="mb-6 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                    >
                        Contact Us
                    </Badge>
                    <h1 className="text-4xl font-bold mb-4 max-w-xl">
                        Let's talk about your project.
                    </h1>
                    <p className="text-muted-foreground max-w-xl mb-16">
                        Tell us a bit about what you're building and we'll get back to
                        you within a business day.
                    </p>

                    <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
                        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" required placeholder="Your name" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" required placeholder="you@company.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" required rows={5} placeholder="Tell us about your project..." />
                            </div>
                            <Button type="submit" size="lg">
                                {submitted ? "Sent — we'll be in touch" : "Send Message"}
                            </Button>
                        </form>

                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-1 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">Email</p>
                                    <p className="text-muted-foreground text-sm">hello@crossord.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="h-4 w-4 mt-1 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">Phone</p>
                                    <p className="text-muted-foreground text-sm">+91 00000 00000</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-1 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">Location</p>
                                    <p className="text-muted-foreground text-sm">Ludhiana, Punjab, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}