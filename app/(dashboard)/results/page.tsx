"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sessions = [
  {
    id: 1,
    type: "Behavioral",
    company: "Google",
    date: "June 1, 2026",
    duration: "32 min",
    overallScore: 88,
    scores: {
      clarity: 90,
      structure: 85,
      relevance: 88,
      confidence: 89,
    },
    questions: [
      {
        question:
          "Tell me about a time when you had to lead a project under tight deadlines.",
        score: 92,
        feedback:
          "Excellent use of the STAR method. You clearly outlined the situation and your specific actions.",
      },
      {
        question:
          "Describe a situation where you had to work with a difficult team member.",
        score: 85,
        feedback:
          "Good response, but could provide more specific examples of conflict resolution techniques used.",
      },
      {
        question:
          "Give an example of when you failed at something. What did you learn?",
        score: 88,
        feedback:
          "Strong self-awareness shown. The learning outcomes were clearly articulated.",
      },
    ],
    strengths: [
      "Clear communication style",
      "Good use of specific examples",
      "Strong problem-solving narrative",
    ],
    improvements: [
      "Quantify achievements when possible",
      "Practice more concise responses",
      "Add more leadership-focused examples",
    ],
  },
  {
    id: 2,
    type: "Technical",
    company: "Meta",
    date: "May 30, 2026",
    duration: "45 min",
    overallScore: 75,
    scores: {
      clarity: 78,
      structure: 72,
      relevance: 80,
      confidence: 70,
    },
    questions: [
      {
        question: "Design a URL shortening service like bit.ly.",
        score: 78,
        feedback:
          "Good understanding of system components. Consider discussing scalability more.",
      },
      {
        question: "How would you design a rate limiter?",
        score: 72,
        feedback:
          "Covered basic concepts but missed some edge cases in distributed systems.",
      },
    ],
    strengths: [
      "Good foundational knowledge",
      "Clear explanation of trade-offs",
    ],
    improvements: [
      "Study distributed systems patterns",
      "Practice drawing system diagrams",
      "Review common scaling techniques",
    ],
  },
  {
    id: 3,
    type: "Case Study",
    company: "McKinsey",
    date: "May 28, 2026",
    duration: "28 min",
    overallScore: 92,
    scores: {
      clarity: 95,
      structure: 90,
      relevance: 92,
      confidence: 91,
    },
    questions: [
      {
        question:
          "Our client is a retail company seeing declining profits. What would you investigate?",
        score: 94,
        feedback:
          "Excellent structured approach using frameworks. Very thorough analysis.",
      },
      {
        question:
          "Should a streaming service expand into live sports broadcasting?",
        score: 90,
        feedback:
          "Strong market analysis and good consideration of financial implications.",
      },
    ],
    strengths: [
      "Excellent framework application",
      "Strong quantitative analysis",
      "Clear recommendation structure",
    ],
    improvements: [
      "Consider more diverse perspectives",
      "Add risk mitigation strategies",
    ],
  },
];

export default function ResultsPage() {
  const [selectedSession, setSelectedSession] = useState(sessions[0]);
  const [activeTab, setActiveTab] = useState<"overview" | "questions">(
    "overview"
  );

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-primary";
    if (score >= 70) return "text-chart-4";
    return "text-destructive";
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 85) return "bg-primary";
    if (score >= 70) return "bg-chart-4";
    return "bg-destructive";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Interview Results
          </h2>
          <p className="text-muted-foreground">
            Review your performance and track your progress over time.
          </p>
        </div>
        <Button asChild>
          <Link href="/practice">New Practice Session</Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Session List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Recent Sessions</h3>
          <div className="space-y-2">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setSelectedSession(session)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-all",
                  selectedSession.id === session.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-foreground">
                      {session.type} Interview
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {session.company} • {session.date}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "text-2xl font-bold",
                      getScoreColor(session.overallScore)
                    )}
                  >
                    {session.overallScore}%
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Session Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Score Card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {selectedSession.type} Interview - {selectedSession.company}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedSession.date} • {selectedSession.duration} •{" "}
                  {selectedSession.questions.length} questions
                </p>
              </div>
              <div className="text-center">
                <div
                  className={cn(
                    "text-5xl font-bold",
                    getScoreColor(selectedSession.overallScore)
                  )}
                >
                  {selectedSession.overallScore}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Overall Score
                </div>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(selectedSession.scores).map(([key, value]) => (
                <div key={key} className="rounded-lg bg-secondary/50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm capitalize text-muted-foreground">
                      {key}
                    </span>
                    <span
                      className={cn("font-semibold", getScoreColor(value))}
                    >
                      {value}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        getScoreBarColor(value)
                      )}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 rounded-lg bg-secondary p-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={cn(
                "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                activeTab === "overview"
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("questions")}
              className={cn(
                "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                activeTab === "questions"
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Questions & Feedback
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" ? (
            <div className="grid gap-6 md:grid-cols-2">
              {/* Strengths */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">Strengths</h4>
                </div>
                <ul className="space-y-2">
                  {selectedSession.strengths.map((strength, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas for Improvement */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">
                    Areas for Improvement
                  </h4>
                </div>
                <ul className="space-y-2">
                  {selectedSession.improvements.map((improvement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-chart-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedSession.questions.map((q, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-1 text-sm text-muted-foreground">
                        Question {index + 1}
                      </div>
                      <p className="font-medium text-foreground">{q.question}</p>
                    </div>
                    <div
                      className={cn(
                        "shrink-0 rounded-lg px-3 py-1 text-lg font-bold",
                        q.score >= 85
                          ? "bg-primary/10 text-primary"
                          : q.score >= 70
                            ? "bg-chart-4/10 text-chart-4"
                            : "bg-destructive/10 text-destructive"
                      )}
                    >
                      {q.score}%
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <div className="mb-1 text-sm font-medium text-foreground">
                      AI Feedback
                    </div>
                    <p className="text-sm text-muted-foreground">{q.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* AI Recommendations */}
          <div className="rounded-xl border border-primary/50 bg-primary/5 p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground">
                AI Recommendation
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Based on your performance, we recommend focusing on{" "}
              <span className="font-medium text-foreground">
                quantifying your achievements
              </span>{" "}
              in your responses. Practice sessions that include metrics-driven
              examples can improve your overall score by 15-20%. Consider
              practicing 2-3 more behavioral interviews this week to reinforce
              the STAR method.
            </p>
            <div className="mt-4">
              <Button asChild size="sm">
                <Link href="/practice">Start Recommended Practice</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
