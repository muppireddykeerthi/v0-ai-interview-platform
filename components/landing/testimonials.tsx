const testimonials = [
  {
    content:
      "InterviewAI helped me land my dream job at a top tech company. The AI feedback was incredibly accurate and helped me identify weaknesses I didn't know I had.",
    author: "Sarah Chen",
    role: "Software Engineer at Google",
    avatar: "SC",
  },
  {
    content:
      "I went from bombing every interview to getting 3 offers in one month. The practice sessions felt just like real interviews.",
    author: "Michael Rodriguez",
    role: "Product Manager at Meta",
    avatar: "MR",
  },
  {
    content:
      "The behavioral question library is exceptional. It covers every scenario I encountered in my consulting interviews.",
    author: "Emily Watson",
    role: "Consultant at McKinsey",
    avatar: "EW",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-y border-border bg-secondary/30 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by job seekers worldwide
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Join thousands who have transformed their interview performance.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-chart-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
