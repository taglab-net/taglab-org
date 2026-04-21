import { createFileRoute } from "@tanstack/react-router";

import { motion } from "framer-motion";
import heroHands from "@/assets/hero-hands.jpg";
import impactField from "@/assets/impact-field.jpg";
import vizStewardship from "@/assets/viz-stewardship.jpg";
import vizCrm from "@/assets/viz-crm-workflow.jpg";
import vizAnalytics from "@/assets/viz-analytics.jpg";


export const Route = createFileRoute("/")({
  component: Landing,
});

const services = [
  { n: "01", t: "Donor Communication", d: "Thank-yous, appeals, and stewardship emails that sound like a human wrote them — because one did." },
  { n: "02", t: "Donor Journey Design", d: "Map the path from first gift to lifetime champion. We design every touchpoint in between." },
  { n: "03", t: "Content & Updates", d: "Monthly storytelling, newsletters, and social content that keeps your mission top of mind." },
  { n: "04", t: "CRM & Segmentation", d: "Clean your data, build segments, and send the right message to the right donor at the right moment." },
  { n: "05", t: "Analytics & Attribution", d: "See what's working. Retention, LTV, channel ROI — the numbers that actually move giving." },
  { n: "06", t: "Campaigns", d: "End-of-year, matching gift, giving days. Strategy, creative, and execution under one roof." },
  { n: "07", t: "Donor Portfolio", d: "Major gift prospect research, moves management, and briefing docs for your development team." },
  { n: "08", t: "Outreach & Engagement", d: "Ambassador programs, peer-to-peer, and community building that turns donors into advocates." },
  { n: "09", t: "Impact Updates", d: "Quarterly impact reports and field stories that prove every dollar moved the needle." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            taglab<span className="text-primary">studio</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#capabilities" className="hover:text-foreground transition">In practice</a>
            <a href="#approach" className="hover:text-foreground transition">Approach</a>
            <a href="#impact" className="hover:text-foreground transition">Impact</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:bg-primary/90 transition shadow-soft">
            Start a conversation
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
              <span className="w-8 h-px bg-accent" />
              A digital studio for nonprofits
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.98] text-balance">
              Donors don't give to <em className="italic text-accent">organizations.</em>
              <br />
              They give to <span className="text-primary">people they trust.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Taglab Studio helps mission-driven teams build donor relationships that last —
              through thoughtful communication, clean CRM, and stories that prove impact.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:bg-primary/90 transition shadow-lift">
                Book a discovery call
                <span aria-hidden>→</span>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium hover:bg-secondary transition">
                See what we do
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "62%", v: "avg. donor retention lift" },
                { k: "3.4×", v: "email revenue growth" },
                { k: "40+", v: "nonprofits served" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-3xl text-primary">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lift">
              <img
                src={heroHands}
                alt="Hands joined together in a community gathering at golden hour"
                width={1600}
                height={1200}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-lift max-w-[240px] border border-border hidden md:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">This quarter</div>
              <div className="font-display text-2xl">$1.2M raised</div>
              <div className="text-sm text-muted-foreground mt-1">across 12 campaigns we ran with partners</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE / TRUST */}
      <section className="border-y border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <span className="uppercase tracking-[0.2em] text-xs">Trusted by teams who care</span>
          <div className="flex flex-wrap gap-x-10 gap-y-2 font-display text-lg">
            <span>Harbor Foundation</span>
            <span>Rootwell</span>
            <span>Meadow Fund</span>
            <span>Commonlight</span>
            <span>Vestige.org</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-4">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                The full donor lifecycle, handled with care.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed flex items-end">
              From the first touchpoint to the tenth-year anniversary gift, we design systems
              and stories that keep your donors close — and your team sane.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-card p-8 lg:p-10 group hover:bg-secondary/60 transition-colors"
              >
                <div className="font-display text-sm text-accent mb-6 tracking-widest">{s.n}</div>
                <h3 className="font-display text-2xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES IN ACTION — visual showcase */}
      <section id="capabilities" className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-4">In practice</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                What the work actually looks like.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 text-lg text-muted-foreground leading-relaxed flex items-end">
              A peek at the artifacts, systems, and dashboards we build alongside your team.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* CRM Workflow + Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft group"
            >
              <div className="aspect-[4/3] bg-primary p-5 lg:p-6 flex flex-col relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl" aria-hidden />

                {/* Workflow title bar */}
                <div className="relative flex items-center justify-between mb-3">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-accent font-semibold">Workflow</div>
                  <div className="text-[10px] text-primary-foreground/80 font-display italic">
                    New Major Donor Onboarding
                  </div>
                </div>

                {/* Steps row */}
                <div className="relative flex items-stretch gap-0 mb-3">
                  {[
                    { n: "1", t: "Gift ≥ $1k", sub: "Trigger" },
                    { n: "2", t: "Wait 1 day", sub: "Delay" },
                    { n: "3", t: "Send email", sub: "Action" },
                  ].map((s, i) => (
                    <div key={s.n} className="flex items-center flex-1">
                      <div className="flex-1 bg-background/95 rounded-md px-2 py-2 shadow-soft border border-border/40">
                        <div className="flex items-center gap-1 mb-0.5">
                          <span className="w-3.5 h-3.5 rounded-full bg-accent text-accent-foreground text-[8px] font-bold flex items-center justify-center">
                            {s.n}
                          </span>
                          <span className="text-[7px] uppercase tracking-wider text-muted-foreground">{s.sub}</span>
                        </div>
                        <div className="text-[9px] font-medium text-foreground leading-tight">{s.t}</div>
                      </div>
                      {i < 2 && (
                        <div className="flex items-center px-0.5 text-accent">
                          <div className="w-2 h-px bg-accent/70" />
                          <span className="text-[10px] leading-none -ml-0.5">▸</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Arrow down to email */}
                <div className="relative flex justify-center mb-2" aria-hidden>
                  <div className="h-3 w-px bg-accent/70" />
                </div>

                {/* Email preview */}
                <div className="relative flex-1 bg-background rounded-md shadow-lift border border-border overflow-hidden flex flex-col">
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-border bg-secondary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                    <span className="ml-1 text-[8px] text-muted-foreground">email · preview</span>
                  </div>
                  <div className="px-3 py-2 flex-1 flex flex-col">
                    <div className="text-[8px] text-muted-foreground mb-0.5">To: sarah.chen@email.com</div>
                    <div className="text-[10px] font-display font-semibold text-foreground leading-tight mb-1.5">
                      Sarah, welcome to our circle of champions.
                    </div>
                    <div className="space-y-0.5 mb-1.5">
                      <div className="h-0.5 rounded-full bg-secondary w-full" />
                      <div className="h-0.5 rounded-full bg-secondary w-[92%]" />
                      <div className="h-0.5 rounded-full bg-secondary w-[78%]" />
                    </div>
                    <div className="mt-auto inline-flex self-start text-[8px] font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">
                      Meet the team →
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <div className="text-xs uppercase tracking-widest text-accent mb-2">CRM · Automation</div>
                <h3 className="font-display text-2xl mb-2">Workflow design & email templates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multi-step donor journeys — welcome, thank-you, re-engagement — wired into your
                  CRM with on-brand email templates ready to send.
                </p>
              </div>
            </motion.div>

            {/* Donation campaign + form — built as real UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft"
            >
              <div className="aspect-[4/3] bg-gradient-warm p-6 lg:p-8 flex items-center justify-center">
                <div className="w-full max-w-sm bg-background rounded-xl shadow-lift border border-border p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[10px] uppercase tracking-widest text-accent">Spring Campaign</div>
                    <div className="text-[10px] text-muted-foreground">78% of goal</div>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden mb-5">
                    <div className="h-full w-[78%] bg-accent rounded-full" />
                  </div>
                  <div className="font-display text-lg mb-3 leading-tight">Choose a gift</div>
                  <div className="grid grid-cols-4 gap-1.5 mb-3">
                    {["$25", "$50", "$100", "$250"].map((a, i) => (
                      <div
                        key={a}
                        className={`text-xs py-2 rounded-md text-center font-medium ${
                          i === 1
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        {a}
                      </div>
                    ))}
                  </div>
                  <div className="text-[11px] py-2 px-3 rounded-md border border-border text-muted-foreground mb-3">
                    Custom amount
                  </div>
                  <div className="bg-accent text-accent-foreground text-xs font-semibold py-2.5 rounded-md text-center">
                    Give now →
                  </div>
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <div className="text-xs uppercase tracking-widest text-accent mb-2">Campaigns · Fundraising</div>
                <h3 className="font-display text-2xl mb-2">Donation campaigns & online forms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conversion-tuned giving pages, suggested amounts, and campaign pages that make
                  saying yes the easiest thing a donor does all week.
                </p>
              </div>
            </motion.div>

            {/* Impact stories + annual report */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft group"
            >
              <div className="aspect-[4/3] bg-gradient-warm p-6 lg:p-8 flex items-center justify-center gap-4 lg:gap-5 relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" aria-hidden />
                <div className="absolute -bottom-12 -right-8 w-48 h-48 rounded-full bg-primary/15 blur-2xl" aria-hidden />

                {/* Impact Story card (web) */}
                <div className="relative flex-1 bg-background rounded-xl shadow-lift border border-border overflow-hidden rotate-[-2deg] max-w-[55%]">
                  <div className="h-5 bg-secondary/60 border-b border-border flex items-center gap-1 px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="relative h-20 bg-primary overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-accent/80 rounded-t-[50%]" />
                    <div className="absolute top-2 right-3 w-5 h-5 rounded-full bg-background/90" />
                    <div className="absolute bottom-2 left-4 w-3 h-4 rounded-full bg-background/70" />
                  </div>
                  <div className="p-3">
                    <div className="text-[8px] uppercase tracking-widest text-accent mb-1">Story · Meadow Fund</div>
                    <div className="font-display text-[11px] leading-tight text-foreground mb-2">
                      How 240 families found stable housing this year.
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 rounded-full bg-secondary w-full" />
                      <div className="h-1 rounded-full bg-secondary w-[85%]" />
                      <div className="h-1 rounded-full bg-secondary w-[70%]" />
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-[8px] font-medium text-primary">
                      Read story <span aria-hidden>→</span>
                    </div>
                  </div>
                </div>

                {/* Annual Impact Report cover */}
                <div className="relative flex-shrink-0 w-[38%] aspect-[3/4] bg-primary rounded-lg shadow-lift rotate-[3deg] overflow-hidden flex flex-col p-3 text-primary-foreground">
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent" />
                  <div className="absolute -bottom-4 -left-3 w-16 h-16 rounded-full bg-accent/30" />
                  <div className="text-[7px] uppercase tracking-[0.2em] text-accent mb-1 relative">Annual Impact</div>
                  <div className="font-display text-[11px] leading-tight mb-2 relative">Report 2024</div>
                  <div className="mt-auto space-y-1.5 relative">
                    <div>
                      <div className="font-display text-base leading-none">$1.2M</div>
                      <div className="text-[7px] opacity-70 uppercase tracking-wider">raised</div>
                    </div>
                    <div>
                      <div className="font-display text-base leading-none">8,420</div>
                      <div className="text-[7px] opacity-70 uppercase tracking-wider">donors</div>
                    </div>
                    <div>
                      <div className="font-display text-base leading-none text-accent">96%</div>
                      <div className="text-[7px] opacity-70 uppercase tracking-wider">to programs</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <div className="text-xs uppercase tracking-widest text-accent mb-2">Content · Reporting</div>
                <h3 className="font-display text-2xl mb-2">Impact stories & annual reports</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Web-native story pages and printed annual reports that turn outcomes into
                  narrative — the kind donors forward, save, and screenshot.
                </p>
              </div>
            </motion.div>

            {/* Analytics dashboard — built as real UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft"
            >
              <div className="aspect-[4/3] bg-primary p-6 lg:p-8 flex items-center justify-center">
                <div className="w-full bg-background rounded-xl shadow-lift p-5">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-secondary/60 rounded-lg p-3">
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground mb-1">Revenue</div>
                      <div className="font-display text-lg text-primary leading-none">$1.24M</div>
                    </div>
                    <div className="bg-secondary/60 rounded-lg p-3">
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground mb-1">Avg gift</div>
                      <div className="font-display text-lg text-primary leading-none">$148</div>
                    </div>
                    <div className="bg-secondary/60 rounded-lg p-3">
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground mb-1">Donors</div>
                      <div className="font-display text-lg text-primary leading-none">8,420</div>
                    </div>
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground mb-2">Donor tiers</div>
                  <div className="space-y-1.5">
                    {[
                      { label: "Champion", pct: 92, amt: "$500+" },
                      { label: "Patron", pct: 68, amt: "$250" },
                      { label: "Sustainer", pct: 44, amt: "$100" },
                      { label: "Grassroots", pct: 28, amt: "<$100" },
                    ].map((t) => (
                      <div key={t.label} className="flex items-center gap-2 text-[10px]">
                        <div className="w-16 text-muted-foreground shrink-0">{t.label}</div>
                        <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{ width: `${t.pct}%` }}
                          />
                        </div>
                        <div className="w-10 text-right font-medium text-foreground">{t.amt}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <div className="text-xs uppercase tracking-widest text-accent mb-2">Analytics · Insight</div>
                <h3 className="font-display text-2xl mb-2">Dashboards you'll actually open</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Revenue, average gift, total donors, and tier breakdowns — rolled up into views
                  your board understands and your team trusts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="approach" className="bg-primary text-primary-foreground py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lift bg-card">
              <img
                src={vizStewardship}
                alt="Abstract risograph illustration of an envelope with a heart, representing donor stewardship"
                width={1200}
                height={1400}
                loading="lazy"
                className="w-full h-[560px] object-contain bg-background"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Our approach</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8 text-balance">
              We treat every donor like the person they are.
            </h2>
            <div className="space-y-6 text-primary-foreground/85 text-lg leading-relaxed">
              <p>
                Most nonprofit marketing reads like a bank statement. We think that's a missed
                opportunity. Your donors gave because they believed. Our job is to keep that
                belief warm.
              </p>
              <p>
                We work embedded with your team — as strategists, writers, and operators —
                building the systems that let you show up consistently for the people funding
                your mission.
              </p>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Monthly strategy + weekly execution",
                "Your CRM, your data, your donors — we just make it sing",
                "Transparent reporting, no jargon, no inflated dashboards",
              ].map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Impact</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                Stories we've helped tell.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft"
            >
              <img
                src={impactField}
                alt="Volunteer handing a care package to a young person in the community"
                width={1200}
                height={1400}
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <div className="p-8 lg:p-10">
                <div className="text-xs uppercase tracking-widest text-accent mb-3">Rootwell Foundation</div>
                <h3 className="font-display text-2xl mb-3">Rebuilding a lapsed donor program</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Segmented 18,000 dormant donors, rewrote the reactivation journey, and
                  recovered <span className="text-foreground font-medium">$340k</span> in
                  12 months.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-hero text-primary-foreground rounded-2xl p-10 lg:p-12 flex flex-col justify-between min-h-[440px] shadow-lift"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-accent mb-3">Meadow Fund</div>
                <h3 className="font-display text-3xl lg:text-4xl mb-4 text-balance">
                  "Our end-of-year campaign tripled. But the real win? Donors told us they
                  finally felt seen."
                </h3>
              </div>
              <div>
                <div className="h-px bg-primary-foreground/20 mb-4" />
                <div className="text-sm text-primary-foreground/80">
                  — Amara Okafor, Director of Development
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">Let's talk</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.02] mb-8 text-balance">
            Your mission deserves a marketing partner who <em className="italic text-accent">actually gets it.</em>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute discovery call. No pitch deck, no pressure — just a real
            conversation about your donors and what's next.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@taglabstudio.org"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-primary/90 transition shadow-lift"
            >
              hello@taglabstudio.org
              <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-medium hover:bg-secondary transition"
            >
              Browse services
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="font-display text-xl font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              taglab<span className="text-primary">studio</span>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Digital marketing, built for nonprofits.
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Taglab Studio · taglabstudio.org
          </div>
        </div>
      </footer>
    </div>
  );
}
