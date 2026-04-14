import { Link } from "react-router-dom";
import { footerServices, navLinks } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 overflow-hidden border-t border-slate-800/70 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.24),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">
              We design and ship modern digital products that help ambitious teams
              move faster.
            </p>
          </div>

          <div>
            <h4 className="font-display mb-4 text-lg font-semibold text-cyan-300">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    className="text-sm text-slate-300 transition-colors hover:text-cyan-200"
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-4 text-lg font-semibold text-cyan-300">
              Expertise
            </h4>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service} className="text-sm text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-4 text-lg font-semibold text-cyan-300">
              Connect
            </h4>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="cursor-interactive flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-200"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="cursor-interactive flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-200"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="cursor-interactive flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-200"
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Vuler. Crafted for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
