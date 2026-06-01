import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Practice Sessions",
    value: "24",
    change: "+12%",
    trend: "up",
  },
  {
    label: "Average Score",
    value: "85%",
    change: "+5%",
    trend: "up",
  },
  {
    label: "Questions Answered",
    value: "156",
    change: "+23%",
    trend: "up",
  },
  {
    label: "Improvement Rate",
    value: "92%",
    change: "+8%",
    trend: "up",
  },
];

const recentSessions = [
  {
    id: 1,
    type: "Behavioral",
    company: "Google",
    score: 88,
    date: "2 hours ago",
    questions: 5,
  },
  {
    id: 2,
    type: "Technical",
    company: "Meta",
    score: 75,
    date: "Yesterday",
    questions: 4,
  },
  {
    id: 3,
    type: "Case Study",
    company: "McKinsey",
    score: 92,
    date: "2 days ago",
    questions: 3,
  },
  {
    id: 4,
    type: "Behavioral",
    company: "Amazon",
    score: 81,
    date: "3 days ago",
    questions: 6,
  },
];

const upcomingGoals = [
  { label: "Complete 5 behavioral interviews", progress: 60, target: "3/5" },
  { label: "Improve communication score", progress: 75, target: "75/100" },
  { label: "Practice STAR method", progress: 40, target: "2/5 sessions" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Welcome back, John
          </h2>
          <p className="text-muted-foreground">
            {"You're making great progress. Keep it up!"}
          </p>
        </div>
        <Button asChild>
          <Link href="/practice">Start Practice Session</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <span
                className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-primary" : "text-destructive"
                }`}
              >
                {stat.trend === "up" ? (
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
                {stat.change}
              </span>
            </div>
            <div className="mt-2 text-3xl font-bold text-foreground">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Sessions */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-6">
            <h3 className="font-semibold text-foreground">Recent Sessions</h3>
            <Link
              href="/results"
              className="text-sm text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="divide-y divide-border">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 transition-colors hover:bg-secondary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {session.type === "Behavioral" ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    ) : session.type === "Technical" ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {session.type} Interview
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {session.company} • {session.questions} questions
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`font-semibold ${
                      session.score >= 85
                        ? "text-primary"
                        : session.score >= 70
                          ? "text-chart-4"
                          : "text-destructive"
                    }`}
                  >
                    {session.score}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {session.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals & Quick Actions */}
        <div className="space-y-6">
          {/* Weekly Goals */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold text-foreground">Weekly Goals</h3>
            <div className="space-y-4">
              {upcomingGoals.map((goal, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{goal.label}</span>
                    <span className="font-medium text-foreground">
                      {goal.target}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold text-foreground">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                href="/practice"
                className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-secondary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">
                  New Practice Session
                </span>
              </Link>
              <Link
                href="/results"
                className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-secondary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">
                  View Analytics
                </span>
              </Link>
              <button className="flex w-full items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-secondary">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4">
                  <svg
                    className="h-4 w-4"
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
                <span className="text-sm font-medium text-foreground">
                  Get AI Recommendations
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
