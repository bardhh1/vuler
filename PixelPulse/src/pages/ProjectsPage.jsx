import { Link } from "react-router-dom";
import CountUpStat from "../components/CountUpStat";
import { projectCards, stats } from "../data/siteData";

function ProjectAction({ icon, accentClasses }) {
  return (
    <a
      href="#"
      className={`cursor-interactive flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/85 text-sm transition-all duration-200 ${accentClasses}`}
      onClick={(event) => event.preventDefault()}
    >
      <i className={icon} />
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-16 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell p-7 text-center sm:p-10">
            <span className="section-kicker">Selected Work</span>
            <h1 className="font-display mt-5 text-5xl font-semibold text-slate-950 sm:text-6xl">
              Projects built for performance, trust, and growth
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              A snapshot of products and websites we have delivered across different
              industries, each designed with a strong technical foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((project) => (
              <article
                key={project.title}
                className="project-card glass-card group overflow-hidden rounded-2xl"
              >
                <div
                  className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <i className={`${project.icon} text-5xl text-white`} />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-all duration-300 group-hover:bg-slate-950/30">
                    <div className="flex translate-y-2 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ProjectAction
                        icon="fas fa-external-link-alt"
                        accentClasses={`${project.accentTextClass} ${project.accentHoverClass} ${project.accentHoverTextClass}`}
                      />
                      <ProjectAction
                        icon="fas fa-eye"
                        accentClasses={`${project.accentTextClass} ${project.accentHoverClass} ${project.accentHoverTextClass}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display mb-3 text-2xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`glass-tech rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${project.accentTextClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell p-8 sm:p-10">
            <span className="section-kicker">Impact</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              The numbers behind our delivery standard
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
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

      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-slate-950 p-10 text-center sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.42),_transparent_62%)]" />
            <div className="relative">
              <span className="section-kicker border-cyan-300/40 bg-cyan-50/20 text-cyan-100">
                Your Turn
              </span>
              <h2 className="font-display mt-6 text-4xl font-semibold text-white">
                Have a project you want to level up?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
                Share your goals and we&apos;ll map out a delivery plan that balances
                speed, quality, and long-term scalability.
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
