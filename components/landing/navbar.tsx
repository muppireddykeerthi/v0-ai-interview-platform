"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg
                  className="h-5 w-5 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-2.378.405a9.001 9.001 0 01-8.114 0l-2.378-.405c-1.717-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold text-foreground">
                InterviewAI
              </span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="#features"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Testimonials
              </Link>
            </div>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="#features"
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Testimonials
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" asChild className="w-full justify-center">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="w-full justify-center">
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
