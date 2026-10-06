"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import ScrollProgress from "./motion/ScrollProgress";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-900 text-xs text-brand-100 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>
            {site.tagline} — {site.locations}
          </p>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" /> {site.phone}
            </a>
            <a href={site.emailHref} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`relative border-b bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "border-slate-200 shadow-md shadow-brand-900/5" : "border-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-brand-50 text-brand-800"
                      : "text-slate-600 hover:text-brand-800"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {link.children && (
                  <div className="invisible absolute top-full left-0 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-brand-900/10">
                      {link.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-800"
                        >
                          {c.label}
                        </Link>
                      ))}
                      <Link
                        href={link.href}
                        className="mt-1 block rounded-xl border-t border-slate-100 px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                      >
                        View all {link.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-brand-800 hover:bg-brand-50 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white xl:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={close}
                      className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium ${
                        isActive(link.href)
                          ? "bg-brand-50 text-brand-800"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        onClick={() => setExpanded((v) => (v === link.href ? null : link.href))}
                        className="rounded-xl p-3 text-slate-500 hover:bg-slate-50"
                        aria-label={`Toggle ${link.label} menu`}
                        aria-expanded={expanded === link.href}
                      >
                        <ChevronDown
                          className={`size-4 transition-transform ${expanded === link.href ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {link.children && expanded === link.href && (
                    <div className="ml-4 border-l border-slate-200 pl-2">
                      {link.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={close}
                          className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={close} className="btn-primary mt-2">
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        )}
        </AnimatePresence>
        <ScrollProgress />
      </div>
    </header>
  );
}
