import { Link } from "react-router-dom";

const workflow = [
  {
    title: "Discover",
    description: "We learn your business model, target audience, and project goals.",
    icon: "fas fa-search",
  },
  {
    title: "Design",
    description: "We prototype premium interfaces with clarity and conversion in mind.",
    icon: "fas fa-pencil-ruler",
  },
  {
    title: "Develop",
    description: "We ship clean code with performance, accessibility, and SEO baked in.",
    icon: "fas fa-cogs",
  },
  {
    title: "Launch",
    description: "We deploy, monitor, and iterate until results are consistently strong.",
    icon: "fas fa-rocket",
  },
];

const highlights = [
  {
    title: "Modern Tech Stack",
    description:
      "We build with current frameworks and deployment workflows that scale with your business.",
    icon: "fas fa-bolt",
  },
  {
    title: "Smart Automation",
    description:
      "From AI-assisted flows to operational automations, we remove friction from your growth.",
    icon: "fas fa-brain",
  },
  {
    title: "Client Partnership",
    description:
      "You get direct communication, transparent milestones, and practical recommendations.",
    icon: "fas fa-heart",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell p-7 text-center sm:p-10">
            <span className="section-kicker">About PixelPulse</span>
            <h1 className="font-display mt-5 text-5xl font-semibold text-slate-950 sm:text-6xl">
              A focused team building websites that look sharp and perform even
              sharper.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              We are a creative development company helping modern brands turn ideas
              into premium digital experiences that improve trust, engagement, and
              business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="section-shell p-8">
            <span className="section-kicker mb-5">Our Mission</span>
            <h2 className="font-display mb-4 text-3xl font-semibold text-slate-900">
              Build with intent, not just visuals
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We create websites that combine design quality with measurable outcomes.
              Every decision is tied to your business goals, so the final product
              looks strong and delivers real impact.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              <li>Custom web development tailored to your brand identity</li>
              <li>Automation and systems that reduce manual work</li>
              <li>UX that supports conversion and long-term growth</li>
            </ul>
          </article>

          <article className="section-shell p-8">
            <span className="section-kicker mb-5">Our Vision</span>
            <h2 className="font-display mb-4 text-3xl font-semibold text-slate-900">
              Become your long-term technical partner
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We want PixelPulse to be the team you trust when quality, reliability,
              and speed all matter at once. We optimize for strong partnerships, not
              one-off execution.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              <li>Long-term collaboration and strategic guidance</li>
              <li>Continuous adoption of modern tooling and practices</li>
              <li>Transparent process with measurable milestones</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell p-8 sm:p-10">
            <span className="section-kicker">How We Work</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              A structured flow from idea to launch
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {workflow.map((step, index) => (
                <article key={step.title} className="glass-card rounded-2xl p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="glass-icon flex h-11 w-11 items-center justify-center">
                      <i className={`${step.icon} text-white`} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="section-shell p-6">
                <div className="glass-icon mb-4 flex h-12 w-12 items-center justify-center">
                  <i className={`${item.icon} text-white`} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell overflow-hidden p-10 text-center">
            <h2 className="font-display text-4xl font-semibold text-slate-950">
              Let&apos;s build the next standout version of your brand online.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Whether you are refreshing an outdated presence or launching from zero,
              PixelPulse can help you ship with confidence.
            </p>
            <Link
              to="/contact"
              className="cursor-interactive glass-btn mt-8 inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
              <i className="fas fa-arrow-right ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
