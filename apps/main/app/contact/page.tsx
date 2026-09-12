"use client";

import { useActionState } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";
import { submitContactForm, type ContactFormState } from "./actions";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const initialState: ContactFormState = { success: false };

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B17] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />

        <div className="container relative mx-auto px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
          <Badge
            variant="outline"
            className="mb-7 border-primary/40 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
          >
            GET IN TOUCH
          </Badge>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Let's build
                <br />
                <span className="text-primary">something great.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Have an idea, a business challenge, or a product you want to
                bring to life? Tell us about it. We'll help you figure out the
                right way forward.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Start with a conversation
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    No pressure. Just ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="relative bg-[#F4F5FA]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="container relative mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* FORM CARD */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              {!state.success ? (
                <>
                  <div className="mb-9">
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary">
                      YOUR PROJECT
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      Tell us what you're building.
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                      Give us a little context and we'll get back to you with
                      the next steps.
                    </p>
                  </div>

                  <form action={formAction} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-slate-700"
                        >
                          Your Name
                        </Label>

                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:ring-primary"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-slate-700"
                        >
                          Email Address
                        </Label>

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-slate-700"
                      >
                        Company
                        <span className="ml-1 text-slate-400">(optional)</span>
                      </Label>

                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        className="h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:ring-primary"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-slate-700"
                      >
                        Tell us about your project
                      </Label>

                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={7}
                        placeholder="What are you looking to build? What problem are you trying to solve?"
                        className="resize-none rounded-xl border-slate-200 bg-slate-50/50 p-4 focus-visible:ring-primary"
                      />
                    </div>

                    {state.error && (
                      <p className="text-sm text-red-500">{state.error}</p>
                    )}

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-xs text-xs leading-5 text-slate-400">
                        We'll only use your information to respond to your
                        enquiry.
                      </p>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isPending}
                        className="h-12 gap-2 rounded-xl px-6 font-semibold"
                      >
                        {isPending ? "Sending..." : "Send Message"}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Message received.
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                    Thanks for reaching out. We'll review your project and get
                    back to you as soon as possible.
                  </p>
                </div>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-5">
              <div className="rounded-3xl bg-[#0A0E1B] p-7 text-white sm:p-8">
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary">
                  CONTACT DETAILS
                </p>

                <h2 className="mb-8 text-2xl font-bold">
                  We'd love to hear from you.
                </h2>

                <div className="space-y-7">
                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value="hello@crossord.com"
                  />

                  <ContactItem
                    icon={Phone}
                    label="Phone"
                    value="+91 00000 00000"
                  />

                  <ContactItem
                    icon={MapPin}
                    label="Location"
                    value="Ludhiana, Punjab, India"
                  />
                </div>
              </div>

              {/* RESPONSE CARD */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ClockIcon />
                </div>

                <h3 className="font-semibold text-slate-900">
                  What happens next?
                </h3>

                <div className="mt-5 space-y-4">
                  <Step number="01" text="We review your project details." />
                  <Step
                    number="02"
                    text="We get back to you within one business day."
                  />
                  <Step number="03" text="We discuss the best path forward." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden bg-[#070B17] text-white">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />

        <div className="container relative mx-auto px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
            HAVE QUESTIONS?
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            Not sure where to start?
            <br />
            <span className="text-white/50">That's what we're here for.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/45">
            You don't need to have everything figured out before contacting us.
            Let's start with a conversation.
          </p>
        </div>
      </section>
    </main>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-primary">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/35">
          {label}
        </p>

        <p className="text-sm font-medium text-white/80">{value}</p>
      </div>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
        {number}
      </span>

      <p className="text-sm text-slate-500">{text}</p>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
