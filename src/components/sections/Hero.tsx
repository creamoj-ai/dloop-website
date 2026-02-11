"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="inline-block border border-primary/40 text-primary text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
                Early Access — Napoli
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[32px] md:text-5xl lg:text-[48px] font-bold leading-[1.1] mb-5"
            >
              Le regole del delivery
              <br />
              stanno per{" "}
              <span className="text-primary">cambiare</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-text-secondary text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
            >
              L&apos;app che i rider aspettavano non esisteva. Fino ad ora.
              <br />
              <span className="text-white font-medium">dloop</span> e&apos; la prima piattaforma costruita dai rider, per i rider.
              Niente algoritmi nascosti. Niente sorprese. Solo trasparenza totale.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <a href="#registrati">
                <Button size="lg">
                  Entra in dloop <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#come-funziona">
                <Button variant="secondary" size="lg">
                  Scopri la rivoluzione
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-6 md:gap-8 justify-center lg:justify-start"
            >
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <p className="text-xs text-text-secondary">Rider</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">
                  <AnimatedCounter target={25} suffix="K+" />
                </div>
                <p className="text-xs text-text-secondary">Consegne</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">
                  <AnimatedCounter target={4.8} decimals={1} />
                </div>
                <p className="text-xs text-text-secondary">Rating</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Phone Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              {/* Phone frame placeholder */}
              <div className="w-[260px] h-[520px] md:w-[280px] md:h-[560px] rounded-[36px] bg-surface border-2 border-border overflow-hidden shadow-[0_0_60px_rgba(255,107,0,0.15)]">
                {/* Status bar */}
                <div className="h-10 bg-surface-variant flex items-center justify-center">
                  <div className="w-20 h-5 rounded-full bg-background" />
                </div>
                {/* App preview content */}
                <div className="p-4 space-y-3">
                  {/* Top bar mock */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                    <div className="flex-1 h-6 rounded-md bg-surface-variant" />
                    <div className="w-6 h-6 rounded-full bg-surface-variant" />
                  </div>
                  {/* KPI strip mock */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-md bg-primary/10 p-2">
                      <div className="w-8 h-2 bg-primary/30 rounded mb-2" />
                      <div className="w-12 h-4 bg-primary/20 rounded" />
                    </div>
                    <div className="h-16 rounded-md bg-earnings/10 p-2">
                      <div className="w-8 h-2 bg-earnings/30 rounded mb-2" />
                      <div className="w-12 h-4 bg-earnings/20 rounded" />
                    </div>
                    <div className="h-16 rounded-md bg-route/10 p-2">
                      <div className="w-8 h-2 bg-route/30 rounded mb-2" />
                      <div className="w-12 h-4 bg-route/20 rounded" />
                    </div>
                  </div>
                  {/* Order card mock */}
                  <div className="h-20 rounded-lg bg-earnings/10 border border-earnings/20 p-3">
                    <div className="w-24 h-3 bg-earnings/30 rounded mb-2" />
                    <div className="w-32 h-2 bg-earnings/15 rounded mb-2" />
                    <div className="w-16 h-3 bg-earnings/25 rounded" />
                  </div>
                  {/* Zone card mock */}
                  <div className="h-16 rounded-lg bg-surface-variant border-l-3 border-l-urgent p-3">
                    <div className="w-20 h-3 bg-urgent/30 rounded mb-2" />
                    <div className="w-28 h-2 bg-text-secondary/20 rounded" />
                  </div>
                  {/* More cards */}
                  <div className="h-12 rounded-lg bg-surface-variant p-3">
                    <div className="w-16 h-2 bg-text-secondary/20 rounded mb-2" />
                    <div className="w-24 h-2 bg-text-secondary/15 rounded" />
                  </div>
                  <div className="h-12 rounded-lg bg-bonus/10 p-3">
                    <div className="w-20 h-2 bg-bonus/30 rounded mb-2" />
                    <div className="w-28 h-2 bg-bonus/15 rounded" />
                  </div>
                </div>
                {/* Bottom nav mock */}
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-surface border-t border-border flex items-center justify-around px-6">
                  <div className="w-5 h-5 rounded bg-primary/40" />
                  <div className="w-5 h-5 rounded bg-text-secondary/20" />
                  <div className="w-5 h-5 rounded bg-text-secondary/20" />
                  <div className="w-5 h-5 rounded bg-text-secondary/20" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
