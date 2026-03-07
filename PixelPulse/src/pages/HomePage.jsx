import { Link } from "react-router-dom";
import CountUpStat from "../components/CountUpStat";
import { services, stats } from "../data/siteData";

const engagementPhases = [
  {
    title: "Strategy Sprint",
    description:
      "We define your growth goals, product scope, and roadmap before we write any code.",
    icon: "fas fa-compass",
  },
  {
    title: "Build & Iterate",
    description:
      "Weekly deliveries with transparent progress, QA checkpoints, and performance budgets.",
    icon: "fas fa-layer-group",
  },
  {
    title: "Launch & Scale",
    description:
      "After launch, we optimize conversions, speed, and automation for sustained momentum.",
    icon: "fas fa-chart-line",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative pb-20 pt-36 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <span className="section-kicker">
                <i className="fas fa-wave-square text-sky-700" />
                PixelPulse Studio
              </span>
              <h1 className="font-display max-w-3xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Engineering digital <span className="animated-gradient-text">experiences</span>{" "}
                that make companies look elite.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                We blend product strategy, modern front-end architecture, and conversion
                focused design to build websites clients trust instantly.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/projects"
                  className="cursor-interactive glass-btn inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1"
                >
                  Explore Projects
                  <i className="fas fa-arrow-right ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="cursor-interactive inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/75 px-8 py-4 font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white"
                >
                  Book a Discovery Call
                </Link>
              </div>
            </div>

            <aside className="section-shell p-7 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-2xl font-semibold text-slate-900">
                  Delivery Engine
                </h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Live
                </span>
              </div>
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-4">
                  <p className="font-display text-base font-semibold text-slate-900">
                    Product-led website architecture
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Clean information hierarchy built for trust and conversion.
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-4">
                  <p className="font-display text-base font-semibold text-slate-900">
                    Speed + SEO foundations
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Technical best practices for ranking, accessibility, and fast load.
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-4">
                  <p className="font-display text-base font-semibold text-slate-900">
                    Automation-ready workflows
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Lead capture and operational automations built into your stack.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell mb-10 p-6 sm:p-8">
            <span className="section-kicker mb-5">Capabilities</span>
            <h2 className="font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              A full-stack creative and engineering team in one partner
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Everything stays cohesive: brand language, UX, performance, and technical
              quality, so your website feels premium from first scroll to final click.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500" />
                <div className="glass-icon mb-5 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <i className={`${service.icon} text-xl text-white`} />
                </div>
                <div className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  Service {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mb-3 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {engagementPhases.map((phase) => (
              <article key={phase.title} className="section-shell p-6">
                <div className="glass-icon mb-4 flex h-12 w-12 items-center justify-center">
                  <i className={`${phase.icon} text-lg text-white`} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell p-8 sm:p-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="section-kicker">Results</span>
                <h2 className="font-display mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Built for measurable business outcomes
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-7 text-center md:grid-cols-4">
              {stats.map((stat) => (
                <CountUpStat
                  key={stat.label}
                  target={stat.target}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-sky-200/70 bg-slate-950 p-10 text-center shadow-2xl sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.4),_transparent_60%)]" />
            <div className="relative">
              <span className="section-kicker border-cyan-300/40 bg-cyan-50/20 text-cyan-100">
                Next Step
              </span>
              <h2 className="font-display mt-6 text-4xl font-semibold text-white">
                Ready to refresh PixelPulse quality for your next build?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
                Let&apos;s shape a website that looks premium, performs fast, and helps
                your business convert more visitors into real clients.
              </p>
              <Link
                to="/contact"
                className="cursor-interactive mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50"
              >
                Start Your Project
                <i className="fas fa-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
