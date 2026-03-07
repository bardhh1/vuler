import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on complexity, but most websites take 4-8 weeks from start to finish. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer maintenance and support packages to keep your site secure, fast, and updated as your business evolves.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern standards including React, Vite, Node.js, and scalable CMS/automation tooling based on project requirements.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Absolutely. We work remotely with teams worldwide and maintain clear communication through structured weekly updates.",
  },
];

const quickFacts = [
  { label: "Response Time", value: "< 24 Hours", icon: "fas fa-clock" },
  { label: "Project Onboarding", value: "2-4 Days", icon: "fas fa-rocket" },
  { label: "Preferred Mode", value: "Async + Calls", icon: "fas fa-comments" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [activeFaq, setActiveFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("--- New Contact Form Submission ---");
    console.log("Full Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Company:", formData.company);
    console.log("Project Type:", formData.projectType);
    console.log("Budget Range:", formData.budget);
    console.log("Message:", formData.message);

    setSubmitted(true);
    setFormData(initialFormState);
  }

  return (
    <>
      <section className="pb-16 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell p-7 text-center sm:p-10">
            <span className="section-kicker">Contact</span>
            <h1 className="font-display mt-5 text-5xl font-semibold text-slate-950 sm:text-6xl">
              Let&apos;s discuss your next high-impact digital project
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              Share a few details about what you need and we&apos;ll reply with a
              practical next-step plan tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="section-shell p-7 sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                Project Inquiry Form
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                The more context you provide, the better we can scope your project.
              </p>

              <form id="contactForm" className="mt-7 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3 text-slate-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3 text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3 text-slate-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-700">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3 text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3 text-slate-800 focus:outline-none"
                    >
                      <option value="">Select project type</option>
                      <option value="website">Website Development</option>
                      <option value="ecommerce">E-commerce Website</option>
                      <option value="webapp">Web Application</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-semibold text-slate-700">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3 text-slate-800 focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="350-700">350 - 700 EUR</option>
                      <option value="700-1200">700 - 1,200 EUR</option>
                      <option value="1200-2000">1,200 - 2,000 EUR</option>
                      <option value="2000-3000">2,000 - 3,000 EUR</option>
                      <option value="over-3000">Over 3,000 EUR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, timeline, audience, and any references you like."
                    className="glass-input w-full resize-none rounded-xl px-4 py-3 text-slate-800 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-interactive glass-btn w-full rounded-xl px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1"
                >
                  Send Message
                  <i className="fas fa-paper-plane ml-2" />
                </button>

                {submitted ? (
                  <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Thanks for reaching out. We&apos;ll respond within 24 hours.
                  </p>
                ) : null}
              </form>
            </div>

            <aside className="space-y-6">
              <div className="section-shell p-7">
                <h3 className="font-display text-2xl font-semibold text-slate-900">Direct Contact</h3>
                <div className="mt-5 space-y-5">
                  <div className="glass-card rounded-2xl p-4">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="glass-icon flex h-10 w-10 items-center justify-center">
                        <i className="fas fa-envelope text-sm text-white" />
                      </div>
                      <span className="font-semibold text-slate-900">Email</span>
                    </div>
                    <p className="text-sm text-slate-600">pixelpulseks@gmail.com</p>
                  </div>
                  <div className="glass-card rounded-2xl p-4">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="glass-icon flex h-10 w-10 items-center justify-center">
                        <i className="fas fa-phone text-sm text-white" />
                      </div>
                      <span className="font-semibold text-slate-900">Phone</span>
                    </div>
                    <p className="text-sm text-slate-600">+383 45 259 373</p>
                  </div>
                </div>
              </div>

              <div className="section-shell p-7">
                <h3 className="font-display text-2xl font-semibold text-slate-900">Quick Facts</h3>
                <div className="mt-5 space-y-4">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="glass-card rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="glass-icon flex h-9 w-9 items-center justify-center">
                          <i className={`${fact.icon} text-xs text-white`} />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-slate-500">
                            {fact.label}
                          </div>
                          <div className="font-display text-lg font-semibold text-slate-900">
                            {fact.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell p-8 sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-600">
              Common questions about how we plan, build, and support projects.
            </p>
            <div className="mt-6 space-y-4">
              {faqs.map((faq, index) => {
                const isActive = activeFaq === index;

                return (
                  <article key={faq.question} className="glass-card overflow-hidden rounded-2xl">
                    <button
                      type="button"
                      className="cursor-interactive faq-question flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left"
                      onClick={() => setActiveFaq((current) => (current === index ? null : index))}
                    >
                      <h3 className="font-display text-xl font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <i
                        className={`fas fa-chevron-down text-primary-600 transition-transform duration-200 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`faq-answer px-6 pb-6 ${
                        isActive ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
