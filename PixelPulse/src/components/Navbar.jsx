import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteData";

function navLinkClass(isActive) {
  const base =
    "nav-pill rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300";

  if (isActive) {
    return `${base} nav-pill-active`;
  }

  return `${base} text-slate-700`;
}

function mobileNavLinkClass(isActive) {
  const base = "rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200";

  if (isActive) {
    return `${base} bg-sky-50 text-primary-700`;
  }

  return `${base} text-slate-700 hover:bg-slate-100`;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleOutsideClick(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-6">
      <div className="glass-navbar mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl px-4 shadow-2xl sm:px-6">
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            alt="Pixel Pulse Logo"
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            src="/img/1-removebg-preview.png"
          />
        </NavLink>

        <div className="hidden md:block">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => navLinkClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="relative flex items-center md:hidden">
          <button
            ref={buttonRef}
            type="button"
            aria-controls="mobile-dropdown"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            className="cursor-interactive rounded-lg border border-slate-300/70 bg-white/70 p-2 text-slate-700 backdrop-blur-md transition-colors hover:text-primary-600 focus:outline-none"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <i className={`text-xl ${isMenuOpen ? "fas fa-times" : "fas fa-bars"}`} />
          </button>

          <div
            ref={menuRef}
            id="mobile-dropdown"
            className={`absolute right-0 top-14 z-50 min-w-44 rounded-xl border border-white/50 bg-white/90 p-2 shadow-xl backdrop-blur-xl transition-all duration-200 ${
              isMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => mobileNavLinkClass(isActive)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
