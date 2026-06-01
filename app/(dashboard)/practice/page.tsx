"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const interviewTypes = [
  {
    id: "behavioral",
    name: "Behavioral",
    description: "Leadership, teamwork, problem-solving scenarios",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
  },
  {
    id: "technical",
    name: "Technical",
    description: "Coding, system design, algorithms",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
  },
  {
    id: "case",
    name: "Case Study",
    description: "Business strategy and analysis",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
  },
];

const companies = [
  "Google",
  "Meta",
  "Amazon",
  "Apple",
  "Microsoft",
  "Netflix",
  "McKinsey",
  "Bain",
];

const sampleQuestions = {
  behavioral: [
    "Tell me about a time when you had to lead a project under tight deadlines.",
    "Describe a situation where you had to work with a difficult team member.",
    "Give an example of when you failed at something. What did you learn?",
    "Tell me about a time you had to make a decision with incomplete information.",
    "Describe your biggest professional accomplishment.",
  ],
  technical: [
    "Design a URL shortening service like bit.ly.",
    "How would you design a rate limiter?",
    "Explain the difference between SQL and NoSQL databases.",
    "Walk me through how you would debug a slow API endpoint.",
    "Design a real-time chat application.",
  ],
  case: [
    "Our client is a retail company seeing declining profits. What would you investigate?",
    "Should a streaming service expand into live sports broadcasting?",
    "How would you price a new SaaS product entering the market?",
    "A tech startup wants to expand internationally. What factors should they consider?",
    "Estimate the market size for electric vehicles in the US.",
  ],
};

interface Message {
  role: "ai" | "user";
  content: string;
}

export default function PracticePage() {
  const [step, setStep] = useState<"setup" | "practice">("setup");
  const [selectedType, setSelectedType] = useState<string>("behavioral");
  const [selectedCompany, setSelectedCompany] = useState<string>("Google");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions =
    sampleQuestions[selectedType as keyof typeof sampleQuestions];

  const startPractice = () => {
    setStep("practice");
    setMessages([
      {
        role: "ai",
        content: `Welcome to your ${selectedType} interview practice for ${selectedCompany}. I'll be your AI interviewer today. Let's begin with the first question:\n\n${questions[0]}`,
      },
    ]);
  };

  const handleSubmitResponse = () => {
    if (!userInput.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userInput },
    ];

    // Simulate AI feedback
    if (currentQuestion < questions.length - 1) {
      newMessages.push({
        role: "ai",
        content: `Good response! I noticed you used specific examples which is great. Consider structuring your answer using the STAR method for even more impact.\n\nLet's move to the next question:\n\n${questions[currentQuestion + 1]}`,
      });
      setCurrentQuestion((prev) => prev + 1);
    } else {
      newMessages.push({
        role: "ai",
        content:
          "Excellent work! You've completed all the questions for this session. Your responses showed good structure and relevant examples. Click 'View Results' to see your detailed feedback and scores.",
      });
      setShowFeedback(true);
    }

    setMessages(newMessages);
    setUserInput("");
  };

  if (step === "setup") {
    return (
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Configure Your Practice Session
          </h2>
          <p className="mt-2 text-muted-foreground">
            Select the type of interview and target company to get started.
          </p>
        </div>

        {/* Interview Type Selection */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Interview Type
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {interviewTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "flex flex-col items-start rounded-xl border p-4 text-left transition-all",
                  selectedType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                )}
              >
                <div
                  className={cn(
                    "mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
                    selectedType === type.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {type.icon}
                </div>
                <div className="font-medium text-foreground">{type.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {type.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Company Selection */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Target Company
          </h3>
          <div className="flex flex-wrap gap-2">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  selectedCompany === company
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                )}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        {/* Session Settings */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Session Settings
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Number of Questions
              </label>
              <select className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-foreground">
                <option>5 questions (Recommended)</option>
                <option>3 questions (Quick)</option>
                <option>10 questions (Extended)</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Difficulty Level
              </label>
              <select className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-foreground">
                <option>Intermediate</option>
                <option>Beginner</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button size="lg" onClick={startPractice}>
            Start Practice Session
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Session Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}{" "}
            Interview - {selectedCompany}
          </h2>
          <p className="text-sm text-muted-foreground">
            Question {Math.min(currentQuestion + 1, questions.length)} of{" "}
            {questions.length}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {showFeedback ? (
            <Button asChild>
              <a href="/results">View Results</a>
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => {
                setStep("setup");
                setMessages([]);
                setCurrentQuestion(0);
                setShowFeedback(false);
              }}
            >
              End Session
            </Button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{
              width: `${((currentQuestion + (showFeedback ? 1 : 0)) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Chat Interface */}
      <div className="rounded-xl border border-border bg-card">
        <div className="h-[400px] overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-3",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "ai" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                    AI
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-xl px-4 py-3 text-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-chart-2 text-sm font-medium text-white">
                    JD
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        {!showFeedback && (
          <div className="border-t border-border p-4">
            <div className="flex gap-3">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors",
                  isRecording
                    ? "border-destructive bg-destructive/10 text-destructive"
                    : "border-border bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
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
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmitResponse();
                  }
                }}
                placeholder="Type your response or use voice recording..."
                className="flex-1 rounded-lg border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={handleSubmitResponse} disabled={!userInput.trim()}>
                Send
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Press Enter to send, or click the microphone to record your voice
            </p>
          </div>
        )}
      </div>

      {/* Real-time Feedback Panel */}
      {messages.length > 1 && !showFeedback && (
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 font-semibold text-foreground">
            Real-Time Analysis
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Clarity</span>
                <span className="text-sm font-medium text-foreground">85%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[85%] rounded-full bg-primary" />
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Structure</span>
                <span className="text-sm font-medium text-foreground">78%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[78%] rounded-full bg-chart-2" />
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Relevance</span>
                <span className="text-sm font-medium text-foreground">92%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[92%] rounded-full bg-chart-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
