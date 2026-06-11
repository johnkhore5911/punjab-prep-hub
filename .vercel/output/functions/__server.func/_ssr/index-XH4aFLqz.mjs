import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { S as Search, H as Heart, a as ShoppingBag, b as Sun, M as Moon, A as ArrowRight, C as Check, B as BookOpen, T as Trophy, c as Truck, d as Star, e as Sparkles, U as Users, f as Clock, g as ChevronDown, h as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroBooks = "/assets/hero-books-CSSjgYGl.jpg";
const bookPolice = "/assets/book-police-ZAYT2S_t.jpg";
const bookPpsc = "/assets/book-ppsc-y5qTYaDX.jpg";
const bookPatwari = "/assets/book-patwari-BSe1WizS.jpg";
const bookPspcl = "/assets/book-pspcl-DJKv2LIR.jpg";
const bookClerk = "/assets/book-clerk-Bv6j-Tc3.jpg";
const bookPyq = "/assets/book-pyq-BcxZJd1U.jpg";
const FEATURED = [{
  id: 1,
  title: "Punjab Police SI — Mastery Edition",
  tag: "Bestseller",
  price: 849,
  mrp: 1200,
  rating: 4.9,
  reviews: 1240,
  cover: bookPolice
}, {
  id: 2,
  title: "PPSC Civil Services Complete Guide",
  tag: "New 2025",
  price: 1199,
  mrp: 1599,
  rating: 5,
  reviews: 862,
  cover: bookPpsc
}, {
  id: 3,
  title: "Patwari Exam — Revenue & Land Records",
  tag: "Updated",
  price: 699,
  mrp: 999,
  rating: 4.8,
  reviews: 1830,
  cover: bookPatwari
}, {
  id: 4,
  title: "PSPCL Assistant Lineman Technical",
  tag: "Limited",
  price: 749,
  mrp: 1099,
  rating: 4.7,
  reviews: 540,
  cover: bookPspcl
}];
const BESTSELLERS = [{
  title: "Clerk & Steno Cadre Guide",
  price: 549,
  cover: bookClerk
}, {
  title: "10-Year Solved PYQ Compilation",
  price: 399,
  cover: bookPyq
}, {
  title: "Punjab Police Constable Pro",
  price: 599,
  cover: bookPolice
}, {
  title: "PPSC GK & Punjab Affairs",
  price: 699,
  cover: bookPpsc
}, {
  title: "Patwari Mock Test Series",
  price: 299,
  cover: bookPatwari
}, {
  title: "PSPCL Technical Compendium",
  price: 799,
  cover: bookPspcl
}];
const REASONS = [{
  icon: Check,
  title: "Updated Syllabus",
  desc: "Aligned with the latest 2024–25 PPSC, PSSSB and PSPCL notifications."
}, {
  icon: Trophy,
  title: "Expert-Written Content",
  desc: "Authored by toppers, retired officers and subject specialists."
}, {
  icon: BookOpen,
  title: "Solved Previous Year Papers",
  desc: "10+ years of decoded patterns with chapter-wise analysis."
}, {
  icon: Truck,
  title: "24-Hour Dispatch",
  desc: "Free, fast delivery across every district in Punjab."
}, {
  icon: Sparkles,
  title: "Affordable Pricing",
  desc: "Premium quality at student-friendly rates with generous bundles."
}, {
  icon: Users,
  title: "Trusted by 50,000+ Aspirants",
  desc: "The reference set for Punjab government job preparation."
}];
const TESTIMONIALS = [{
  name: "Sarabjit Singh",
  exam: "Rank 42 — Punjab Police SI",
  quote: "Nearly 70% of GK in the actual paper was traceable to the Smart Book Store guide. Unmatched precision.",
  initials: "SS"
}, {
  name: "Amrit Kaur",
  exam: "Patwari, Bathinda",
  quote: "Cleared in my first attempt. The revenue paper notes alone are worth the entire bundle.",
  initials: "AK"
}, {
  name: "Deepak Sharma",
  exam: "Clerk-cum-DEO, Mohali",
  quote: "The solved PYQs saved me weeks of hunting through old papers. Pattern recognition became effortless.",
  initials: "DS"
}, {
  name: "Harleen Brar",
  exam: "PPSC Naib Tehsildar",
  quote: "The Punjab affairs section is exactly the depth Mains demands. Nothing else compares.",
  initials: "HB"
}, {
  name: "Rajdeep Singh",
  exam: "PSPCL Assistant Lineman",
  quote: "Technical compendium covered every concept the exam threw at me. Highly recommended.",
  initials: "RS"
}];
const FAQS = [{
  q: "Is the syllabus updated for the latest 2024–25 notifications?",
  a: "Yes. Every book is revised within weeks of any notification from PPSC, PSSSB or PSPCL. Look for the green 'Updated' badge on product cards."
}, {
  q: "How fast is delivery across Punjab?",
  a: "Orders placed before 4 PM ship the same day. Most addresses across Punjab receive delivery within 24–48 hours with free shipping over ₹499."
}, {
  q: "Do you offer refunds or replacements?",
  a: "Damaged books are replaced free of cost within 7 days. Unopened books can be returned within 5 days for a full refund."
}, {
  q: "Can I get sample chapters before buying?",
  a: "Absolutely. Tap 'Quick View' on any product to read the first chapter, table of contents and a sample of solved PYQs."
}, {
  q: "Do you have combo bundles for full exam prep?",
  a: "Yes — explore the Bundles & Combos category for curated multi-book kits that include mock tests at up to 35% off."
}];
function Home() {
  const [dark, setDark] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(0);
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  const heroRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 glass", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg leading-none", children: "S" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl tracking-tight", children: [
          "Smart Book Store",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#categories", className: "hover:text-foreground transition-colors", children: "Exams" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#featured", className: "hover:text-foreground transition-colors", children: "Bestsellers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#bestsellers", className: "hover:text-foreground transition-colors", children: "New Arrivals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-foreground transition-colors", children: "Help" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Search", className: "grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Wishlist", className: "hidden sm:grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "aria-label": "Cart", className: "relative grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-primary-foreground", children: "2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Toggle theme", onClick: () => setDark((d) => !d), className: "grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition", children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ml-1 hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-luxe transition hover:translate-y-[-1px] sm:inline-flex", children: "Shop Now" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: heroRef, className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y: heroY,
        opacity: heroOpacity
      }, className: "pointer-events-none absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBooks, alt: "", "aria-hidden": true, width: 1920, height: 1080, className: "size-full object-cover opacity-[0.22] dark:opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:pt-24 lg:pb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }, className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex size-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex size-1.5 rounded-full bg-gold" })
            ] }),
            "Updated for 2024–25 Syllabus"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl", children: [
            "Crack Punjab Government Exams with",
            " ",
            " Confidence."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg", children: "Premium books, decoded syllabi, expert preparation guides and complete resources for Punjab Police, Patwari, Clerk, PPSC and PSPCL — trusted by thousands of successful aspirants." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition hover:translate-y-[-1px] sm:w-auto", children: [
              "Shop Books",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition group-hover:translate-x-0.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface-elevated px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto", children: "View Bestsellers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4", children: [{
            icon: Check,
            label: "Updated Syllabus"
          }, {
            icon: BookOpen,
            label: "PYQs Included"
          }, {
            icon: Trophy,
            label: "Expert Curated"
          }, {
            icon: Truck,
            label: "Fast Delivery"
          }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 12
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.3 + i * 0.08,
            duration: 0.6
          }, className: "flex items-center gap-2 rounded-xl border border-border/60 bg-surface-elevated/60 px-3 py-2.5 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "size-3.5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: b.label })
          ] }, b.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto mt-16 flex h-64 max-w-3xl items-end justify-center gap-4 sm:h-80 sm:gap-6", children: [bookPpsc, bookPolice, bookPatwari, bookPyq, bookPspcl].map((src, i) => {
          const rotations = [-10, -4, 0, 5, 11];
          const lifts = [40, 16, 0, 18, 44];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            y: 60
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.4 + i * 0.1,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }, style: {
            rotate: rotations[i],
            y: -lifts[i]
          }, className: "relative h-48 w-28 shrink-0 overflow-hidden rounded-md shadow-[0_30px_60px_-15px_rgba(15,23,42,0.45)] ring-1 ring-black/5 sm:h-64 sm:w-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", "aria-hidden": true, width: 400, height: 600, className: "size-full object-cover" }) }, i);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "featured", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold", children: "02 · Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl tracking-tight sm:text-4xl", children: "The most recommended titles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Hand-picked by toppers and faculty for comprehensive, exam-ready preparation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8", children: FEATURED.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        delay: i * 0.06,
        duration: 0.6
      }, className: "group flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5 aspect-[3/4] overflow-hidden rounded-2xl bg-muted ring-1 ring-black/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.cover, alt: b.title, loading: "lazy", width: 800, height: 1024, className: "size-full object-cover transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-full bg-surface-elevated/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground backdrop-blur", children: b.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute right-3 top-3 rounded-full bg-gold px-2 py-1 text-[10px] font-bold text-primary-foreground", children: [
            "-",
            Math.round((b.mrp - b.price) / b.mrp * 100),
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-3 bottom-3 flex gap-2 opacity-0 transition group-hover:opacity-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 rounded-xl bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-lg", children: "Add to Cart" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Quick view", className: "grid size-10 place-items-center rounded-xl bg-surface-elevated text-foreground shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-amber-500", children: [
          Array.from({
            length: 5
          }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3.5 fill-current" }, j)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs text-muted-foreground", children: [
            b.rating,
            " (",
            b.reviews,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-semibold tracking-tight text-foreground", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-baseline gap-2 pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl", children: [
            "₹",
            b.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground line-through", children: [
            "₹",
            b.mrp
          ] })
        ] })
      ] }, b.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-y border-border/60 bg-primary py-24 text-primary-foreground sm:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-0 size-[500px] rounded-full bg-gold/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold", children: "03 · Why Smart Book Store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl tracking-tight sm:text-5xl", children: "Built for serious aspirants." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base text-primary-foreground/70", children: "Six reasons Smart Book Store has become the reference set for Punjab government exam preparation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3", children: REASONS.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.05,
          duration: 0.5
        }, className: "bg-primary p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 grid size-11 place-items-center rounded-xl bg-gold/15 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 font-display text-xl tracking-tight", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-primary-foreground/65", children: r.desc })
        ] }, r.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-4", children: [{
          value: "50k+",
          label: "Students Served"
        }, {
          value: "4.9★",
          label: "Average Rating"
        }, {
          value: "200+",
          label: "Titles Published"
        }, {
          value: "24h",
          label: "Punjab Dispatch"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-6 py-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gold sm:text-4xl", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-widest text-primary-foreground/60", children: s.label })
        ] }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "overflow-hidden py-20 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold", children: "04 · Success Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl tracking-tight sm:text-4xl", children: "Aspirants who made it." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-6 marquee", children: [...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "w-[320px] shrink-0 rounded-3xl border border-border bg-card p-7 shadow-card sm:w-[380px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex gap-0.5 text-gold", children: Array.from({
            length: 5
          }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-current" }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-lg leading-snug text-foreground", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-3 border-t border-border pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-11 place-items-center rounded-full bg-gold/15 font-semibold text-gold", children: t.initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.exam })
            ] })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "bestsellers", className: "border-t border-border/60 bg-surface py-20 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold", children: "05 · Bestsellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl tracking-tight sm:text-4xl", children: "Trending this month" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3.5" }),
          " Limited-time pricing"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-5 sm:gap-6", children: BESTSELLERS.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 24
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05,
        duration: 0.5
      }, className: "group w-[200px] shrink-0 snap-start sm:w-[240px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-3 aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.cover, alt: b.title, loading: "lazy", width: 400, height: 600, className: "size-full object-cover transition group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "line-clamp-2 text-sm font-semibold", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-display text-lg", children: [
          "₹",
          b.price
        ] })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold", children: "06 · FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl tracking-tight sm:text-4xl", children: "Questions, answered." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border rounded-3xl border border-border bg-card", children: FAQS.map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-muted/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium tracking-tight", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-4 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}` })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            height: 0
          }, animate: {
            opacity: 1,
            height: "auto"
          }, transition: {
            duration: 0.25
          }, className: "px-6 pb-6 text-sm leading-relaxed text-muted-foreground", children: f.a })
        ] }, i);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60 bg-surface py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 text-center sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl tracking-tight sm:text-4xl", children: "Stay ahead of every notification." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Join 50,000+ aspirants getting syllabus updates, exam alerts and free prep tips delivered to their inbox." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "Your email address", className: "flex-1 rounded-full border border-border bg-surface-elevated px-5 py-3.5 text-sm outline-none ring-gold/20 transition focus:ring-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition hover:translate-y-[-1px]", children: "Subscribe" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/60 bg-background py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg leading-none", children: "S" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl", children: [
              "Smart Book Store",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: "Premium study material for Punjab Government Exams. Made with care in Chandigarh." })
        ] }),
        [{
          h: "Exams",
          l: ["Punjab Police", "PPSC", "Patwari", "PSPCL", "Clerk"]
        }, {
          h: "Resources",
          l: ["Previous Papers", "Mock Tests", "Bundles", "Sample Chapters"]
        }, {
          h: "Company",
          l: ["About", "Contact", "Returns", "Privacy"]
        }].map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-5 text-xs font-bold uppercase tracking-widest", children: col.h }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-muted-foreground", children: col.l.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: i }) }, i)) })
        ] }, col.h))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 max-w-7xl border-t border-border/60 px-4 pt-6 text-xs text-muted-foreground sm:px-6", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Smart Book Store Premium Bookstore. All rights reserved."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/919876543210", "aria-label": "Chat on WhatsApp", className: "fixed bottom-24 right-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 active:scale-95 sm:bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-full border border-border bg-surface-elevated/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl md:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs font-semibold", children: "2 items in cart" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Free delivery unlocked" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground", children: "Checkout" })
    ] })
  ] });
}
export {
  Home as component
};
