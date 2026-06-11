import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Heart,
  MessageCircle,
  Moon,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  Trophy,
  Truck,
  Users,
} from "lucide-react";
import heroBooks from "@/assets/hero-books.jpg";
import bookPolice from "@/assets/book-police.jpg";
import bookPpsc from "@/assets/book-ppsc.jpg";
import bookPatwari from "@/assets/book-patwari.jpg";
import bookPspcl from "@/assets/book-pspcl.jpg";
import bookClerk from "@/assets/book-clerk.jpg";
import bookPyq from "@/assets/book-pyq.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Book Store — Crack Punjab Government Exams with Confidence" },
      { name: "description", content: "Premium books, updated syllabus, previous year papers and expert preparation guides for Punjab Police, Patwari, Clerk, PPSC and PSPCL exams." },
      { property: "og:title", content: "Smart Book Store — Premium Punjab Government Exam Bookstore" },
      { property: "og:description", content: "Trusted by thousands of successful aspirants across Punjab." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const FEATURED = [
  { id: 1, title: "Punjab Police SI — Mastery Edition", tag: "Bestseller", price: 849, mrp: 1200, rating: 4.9, reviews: 1240, cover: bookPolice },
  { id: 2, title: "PPSC Civil Services Complete Guide", tag: "New 2025", price: 1199, mrp: 1599, rating: 5.0, reviews: 862, cover: bookPpsc },
  { id: 3, title: "Patwari Exam — Revenue & Land Records", tag: "Updated", price: 699, mrp: 999, rating: 4.8, reviews: 1830, cover: bookPatwari },
  { id: 4, title: "PSPCL Assistant Lineman Technical", tag: "Limited", price: 749, mrp: 1099, rating: 4.7, reviews: 540, cover: bookPspcl },
];

const BESTSELLERS = [
  { title: "Clerk & Steno Cadre Guide", price: 549, cover: bookClerk },
  { title: "10-Year Solved PYQ Compilation", price: 399, cover: bookPyq },
  { title: "Punjab Police Constable Pro", price: 599, cover: bookPolice },
  { title: "PPSC GK & Punjab Affairs", price: 699, cover: bookPpsc },
  { title: "Patwari Mock Test Series", price: 299, cover: bookPatwari },
  { title: "PSPCL Technical Compendium", price: 799, cover: bookPspcl },
];

const CATEGORIES = [
  { name: "Punjab Police", count: 42, accent: "from-blue-500/20 to-blue-900/10" },
  { name: "PPSC", count: 28, accent: "from-emerald-500/20 to-emerald-900/10" },
  { name: "Patwari", count: 36, accent: "from-amber-500/20 to-amber-900/10" },
  { name: "Clerk & Steno", count: 19, accent: "from-rose-500/20 to-rose-900/10" },
  { name: "PSPCL", count: 24, accent: "from-violet-500/20 to-violet-900/10" },
  { name: "Previous Year Papers", count: 64, accent: "from-cyan-500/20 to-cyan-900/10" },
  { name: "Mock Tests", count: 51, accent: "from-fuchsia-500/20 to-fuchsia-900/10" },
  { name: "Bundles & Combos", count: 12, accent: "from-orange-500/20 to-orange-900/10" },
];

const REASONS = [
  { icon: Check, title: "Updated Syllabus", desc: "Aligned with the latest 2024–25 PPSC, PSSSB and PSPCL notifications." },
  { icon: Trophy, title: "Expert-Written Content", desc: "Authored by toppers, retired officers and subject specialists." },
  { icon: BookOpen, title: "Solved Previous Year Papers", desc: "10+ years of decoded patterns with chapter-wise analysis." },
  { icon: Truck, title: "24-Hour Dispatch", desc: "Free, fast delivery across every district in Punjab." },
  { icon: Sparkles, title: "Affordable Pricing", desc: "Premium quality at student-friendly rates with generous bundles." },
  { icon: Users, title: "Trusted by 50,000+ Aspirants", desc: "The reference set for Punjab government job preparation." },
];

const TESTIMONIALS = [
  { name: "Sarabjit Singh", exam: "Rank 42 — Punjab Police SI", quote: "Nearly 70% of GK in the actual paper was traceable to the Smart Book Store guide. Unmatched precision.", initials: "SS" },
  { name: "Amrit Kaur", exam: "Patwari, Bathinda", quote: "Cleared in my first attempt. The revenue paper notes alone are worth the entire bundle.", initials: "AK" },
  { name: "Deepak Sharma", exam: "Clerk-cum-DEO, Mohali", quote: "The solved PYQs saved me weeks of hunting through old papers. Pattern recognition became effortless.", initials: "DS" },
  { name: "Harleen Brar", exam: "PPSC Naib Tehsildar", quote: "The Punjab affairs section is exactly the depth Mains demands. Nothing else compares.", initials: "HB" },
  { name: "Rajdeep Singh", exam: "PSPCL Assistant Lineman", quote: "Technical compendium covered every concept the exam threw at me. Highly recommended.", initials: "RS" },
];

const FAQS = [
  { q: "Is the syllabus updated for the latest 2024–25 notifications?", a: "Yes. Every book is revised within weeks of any notification from PPSC, PSSSB or PSPCL. Look for the green 'Updated' badge on product cards." },
  { q: "How fast is delivery across Punjab?", a: "Orders placed before 4 PM ship the same day. Most addresses across Punjab receive delivery within 24–48 hours with free shipping over ₹499." },
  { q: "Do you offer refunds or replacements?", a: "Damaged books are replaced free of cost within 7 days. Unopened books can be returned within 5 days for a full refund." },
  { q: "Can I get sample chapters before buying?", a: "Absolutely. Tap 'Quick View' on any product to read the first chapter, table of contents and a sample of solved PYQs." },
  { q: "Do you have combo bundles for full exam prep?", a: "Yes — explore the Bundles & Combos category for curated multi-book kits that include mock tests at up to 35% off." },
];

function Home() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 glass">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg leading-none">S</div>
            <span className="font-display text-xl tracking-tight">Smart Book Store<span className="text-gold">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#categories" className="hover:text-foreground transition-colors">Exams</a>
            <a href="#featured" className="hover:text-foreground transition-colors">Bestsellers</a>
            <a href="#bestsellers" className="hover:text-foreground transition-colors">New Arrivals</a>
            <a href="#faq" className="hover:text-foreground transition-colors">Help</a>
          </nav>
          <div className="flex items-center gap-1.5">
            <button aria-label="Search" className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition">
              <Search className="size-4" />
            </button>
            <button aria-label="Wishlist" className="hidden sm:grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition">
              <Heart className="size-4" />
            </button>
            <button aria-label="Cart" className="relative grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition">
              <ShoppingBag className="size-4" />
              <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-primary-foreground">2</span>
            </button>
            <button aria-label="Toggle theme" onClick={() => setDark(d => !d)} className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition">
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button className="ml-1 hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-luxe transition hover:translate-y-[-1px] sm:inline-flex">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="pointer-events-none absolute inset-0 -z-10">
          <img src={heroBooks} alt="" aria-hidden width={1920} height={1080} className="size-full object-cover opacity-[0.22] dark:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          <div className="absolute -top-40 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        </motion.div>

        <div className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:pt-24 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
              </span>
              Updated for 2024–25 Syllabus
            </div>

            <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Crack Punjab Government Exams with{" "} Confidence.
              {/* <span className="text-gradient-gold italic"></span> */}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
              Premium books, decoded syllabi, expert preparation guides and complete resources for Punjab Police, Patwari, Clerk, PPSC and PSPCL — trusted by thousands of successful aspirants.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition hover:translate-y-[-1px] sm:w-auto">
                Shop Books
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface-elevated px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto">
                View Bestsellers
              </button>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Check, label: "Updated Syllabus" },
                { icon: BookOpen, label: "PYQs Included" },
                { icon: Trophy, label: "Expert Curated" },
                { icon: Truck, label: "Fast Delivery" },
              ].map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface-elevated/60 px-3 py-2.5 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                >
                  <b.icon className="size-3.5 shrink-0 text-gold" />
                  <span className="truncate">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating book stack */}
          <div className="relative mx-auto mt-16 flex h-64 max-w-3xl items-end justify-center gap-4 sm:h-80 sm:gap-6">
            {[bookPpsc, bookPolice, bookPatwari, bookPyq, bookPspcl].map((src, i) => {
              const rotations = [-10, -4, 0, 5, 11];
              const lifts = [40, 16, 0, 18, 44];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ rotate: rotations[i], y: -lifts[i] }}
                  className="relative h-48 w-28 shrink-0 overflow-hidden rounded-md shadow-[0_30px_60px_-15px_rgba(15,23,42,0.45)] ring-1 ring-black/5 sm:h-64 sm:w-40"
                >
                  <img src={src} alt="" aria-hidden width={400} height={600} className="size-full object-cover" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {/*<section id="categories" className="border-t border-border/60 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">01 · Categories</p>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Browse by examination</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">View all exams →</a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <motion.a
                key={c.name}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:border-gold/40 hover:shadow-card sm:p-6"
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100 ${c.accent}`} />
                <div className="mb-12 grid size-10 place-items-center rounded-xl bg-gold/10 text-gold">
                  <BookOpen className="size-5" />
                </div>
                <h3 className="font-semibold tracking-tight text-foreground">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.count} resources</p>
                <ArrowRight className="absolute right-4 top-4 size-4 -rotate-45 text-muted-foreground transition group-hover:rotate-0 group-hover:text-gold" />
              </motion.a>
            ))}
          </div>
        </div>
      </section> */}

      {/* FEATURED */}
      <section id="featured" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">02 · Featured</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">The most recommended titles</h2>
            <p className="mt-4 text-muted-foreground">Hand-picked by toppers and faculty for comprehensive, exam-ready preparation.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {FEATURED.map((b, i) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group flex flex-col"
              >
                <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-2xl bg-muted ring-1 ring-black/5">
                  <img src={b.cover} alt={b.title} loading="lazy" width={800} height={1024} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-surface-elevated/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground backdrop-blur">
                    {b.tag}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-gold px-2 py-1 text-[10px] font-bold text-primary-foreground">
                    -{Math.round(((b.mrp - b.price) / b.mrp) * 100)}%
                  </span>
                  <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
                    <button className="flex-1 rounded-xl bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-lg">Add to Cart</button>
                    <button aria-label="Quick view" className="grid size-10 place-items-center rounded-xl bg-surface-elevated text-foreground shadow-lg">
                      <Search className="size-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-current" />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">{b.rating} ({b.reviews})</span>
                </div>
                <h3 className="mt-2 font-semibold tracking-tight text-foreground">{b.title}</h3>
                <div className="mt-auto flex items-baseline gap-2 pt-3">
                  <span className="font-display text-xl">₹{b.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{b.mrp}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative overflow-hidden border-y border-border/60 bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="absolute -right-32 top-0 size-[500px] rounded-full bg-gold/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">03 · Why Smart Book Store</p>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Built for serious aspirants.</h2>
            <p className="mt-5 text-base text-primary-foreground/70">Six reasons Smart Book Store has become the reference set for Punjab government exam preparation.</p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-primary p-8"
              >
                <div className="mb-6 grid size-11 place-items-center rounded-xl bg-gold/15 text-gold">
                  <r.icon className="size-5" />
                </div>
                <h3 className="mb-2 font-display text-xl tracking-tight">{r.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/65">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Counters */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-4">
            {[
              { value: "50k+", label: "Students Served" },
              { value: "4.9★", label: "Average Rating" },
              { value: "200+", label: "Titles Published" },
              { value: "24h", label: "Punjab Dispatch" },
            ].map((s) => (
              <div key={s.label} className="bg-primary px-6 py-8 text-center">
                <div className="font-display text-3xl text-gold sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">04 · Success Stories</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Aspirants who made it.</h2>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max gap-6 marquee">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <figure key={i} className="w-[320px] shrink-0 rounded-3xl border border-border bg-card p-7 shadow-card sm:w-[380px]">
                <div className="mb-4 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="size-4 fill-current" />)}
                </div>
                <blockquote className="font-display text-lg leading-snug text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid size-11 place-items-center rounded-full bg-gold/15 font-semibold text-gold">{t.initials}</div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.exam}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BESTSELLERS HORIZONTAL SCROLL */}
      <section id="bestsellers" className="border-t border-border/60 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">05 · Bestsellers</p>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Trending this month</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">
              <Clock className="size-3.5" /> Limited-time pricing
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 sm:gap-6">
            {BESTSELLERS.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group w-[200px] shrink-0 snap-start sm:w-[240px]"
              >
                <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-black/5">
                  <img src={b.cover} alt={b.title} loading="lazy" width={400} height={600} className="size-full object-cover transition group-hover:scale-105" />
                </div>
                <h3 className="line-clamp-2 text-sm font-semibold">{b.title}</h3>
                <div className="mt-1 font-display text-lg">₹{b.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">06 · FAQ</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Questions, answered.</h2>
          </div>
          <div className="divide-y divide-border rounded-3xl border border-border bg-card">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-muted/50"
                  >
                    <span className="font-medium tracking-tight">{f.q}</span>
                    <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-border/60 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Stay ahead of every notification.</h2>
          <p className="mt-4 text-muted-foreground">Join 50,000+ aspirants getting syllabus updates, exam alerts and free prep tips delivered to their inbox.</p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-full border border-border bg-surface-elevated px-5 py-3.5 text-sm outline-none ring-gold/20 transition focus:ring-4"
            />
            <button className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition hover:translate-y-[-1px]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg leading-none">S</div>
              <span className="font-display text-xl">Smart Book Store<span className="text-gold">.</span></span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Premium study material for Punjab Government Exams. Made with care in Chandigarh.</p>
          </div>
          {[
            { h: "Exams", l: ["Punjab Police", "PPSC", "Patwari", "PSPCL", "Clerk"] },
            { h: "Resources", l: ["Previous Papers", "Mock Tests", "Bundles", "Sample Chapters"] },
            { h: "Company", l: ["About", "Contact", "Returns", "Privacy"] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-widest">{col.h}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {col.l.map((i) => <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-border/60 px-4 pt-6 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Smart Book Store Premium Bookstore. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/919876543210"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 active:scale-95 sm:bottom-6"
      >
        <MessageCircle className="size-6" />
      </a>

      {/* Mobile sticky bottom buy bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-full border border-border bg-surface-elevated/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="flex min-w-0 items-center gap-2">
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
            <ShoppingBag className="size-4" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-xs font-semibold">2 items in cart</div>
            <div className="text-[10px] text-muted-foreground">Free delivery unlocked</div>
          </div>
        </div>
        <button className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">Checkout</button>
      </div>
    </div>
  );
}
