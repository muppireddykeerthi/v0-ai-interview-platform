import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">
              AI-Powered Interview Preparation
            </span>
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Ace Your Next Interview with{" "}
            <span className="text-primary">AI Coaching</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Practice with our AI interviewer, get real-time feedback, and build
            confidence. Master behavioral, technical, and case interviews with
            personalized coaching.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/login">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href="#features">See How It Works</Link>
            </Button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">92%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>

        {/* Preview Image */}
        <div className="relative mt-16 md:mt-20">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-2 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-chart-4/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
              <span className="ml-2 text-xs text-muted-foreground">
                Interview Practice Session
              </span>
            </div>
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <div className="mb-2 text-sm font-medium text-foreground">
                      AI Interviewer
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {`"Tell me about a time when you had to lead a project under tight deadlines. How did you manage the team and ensure success?"`}
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/50 bg-primary/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        Y
                      </span>
                      Your Response
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {`"In my previous role, I led a team of five engineers to deliver a critical feature within two weeks..."`}
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4">
                  <div className="mb-3 text-sm font-medium text-foreground">
                    Real-Time Feedback
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Clarity
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-secondary">
                          <div className="h-full w-4/5 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          85%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Structure
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-secondary">
                          <div className="h-full w-[90%] rounded-full bg-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          90%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Relevance
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-secondary">
                          <div className="h-full w-3/4 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          75%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-md bg-background p-3">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-primary">Tip:</span>{" "}
                      Consider using the STAR method to structure your response
                      for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
