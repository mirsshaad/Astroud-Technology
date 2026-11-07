"use client";

import React from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export function BentoCard({
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300",
        "bg-white text-slate-900 transform-gpu border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-xl"
      )}
    >
      <div className="relative h-[12rem] sm:h-[14rem] shrink-0 overflow-hidden bg-slate-100">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-70" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
        )}
      </div>
      <div className="relative p-5 sm:p-6 z-20 isolate mt-[-55px] sm:mt-[-65px] min-h-[9rem] backdrop-blur-xl bg-white/95 border-t border-slate-100 text-slate-900 flex flex-col justify-start">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          {eyebrow}
        </span>
        <p className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-1.5 leading-snug">
          {title}
        </p>
        <p className="text-xs sm:text-sm/5 text-slate-600 font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FUIBentoGridDark() {
  return (
    <section className="py-16 sm:py-20 px-6 max-w-7xl mx-auto bg-slate-50/80 text-slate-900 rounded-3xl my-10 border border-slate-200/60">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          Why Astroud
        </div>
        <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-3">
          The capability to build.<br className="hidden sm:inline" /> The care to operate.
        </h2>
        <p className="text-base text-slate-600 font-normal leading-relaxed">
          We bring seasoned cloud engineering into the day-to-day decisions that turn your technology into a durable competitive advantage.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:grid-rows-2">
        {/* Card 1 */}
        <BentoCard
          eyebrow="Insight & Architecture"
          title="Get complete infrastructure clarity"
          description="Continuous visibility across your cloud environment. Audit workload utilization, security postures, compliance benchmarks, and cost efficiency in one unified view."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: 'url(/images/metallic_cloud_mesh.jpg)' }} 
            />
          }
          fade={["bottom"]}
          className="lg:col-span-3 rounded-2xl"
        />

        {/* Card 2 */}
        <BentoCard
          eyebrow="Performance & Scale"
          title="Predictable speed & high availability"
          description="Eliminate operational drag. High-availability clusters, automated failover, and zero-downtime deployments engineered for mission-critical operations."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: 'url(/images/metallic_data_core.jpg)' }} 
            />
          }
          fade={["bottom"]}
          className="lg:col-span-3 rounded-2xl"
        />

        {/* Card 3 */}
        <BentoCard
          eyebrow="Security"
          title="Zero-trust cyber resilience"
          description="Layered defense-in-depth with continuous vulnerability scanning, encrypted backups, and 15-minute recovery point objectives."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: 'url(/images/metallic_shield_node.jpg)' }} 
            />
          }
          fade={["bottom"]}
          className="lg:col-span-2 rounded-2xl"
        />

        {/* Card 4 */}
        <BentoCard
          eyebrow="Human Expertise"
          title="24/7 Dedicated Cloud Engineers"
          description="Direct access to senior cloud architects who know your stack—no automated script readers or junior tier-1 call centers."
          graphic={
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center p-8">
              <div className="w-24 h-24 rounded-full border border-slate-300 flex items-center justify-center bg-white shadow-xl group-hover:scale-110 transition-transform">
                <img src="/logo.png" alt="Astroud" className="h-10 w-auto opacity-95" />
              </div>
            </div>
          }
          fade={["bottom"]}
          className="lg:col-span-2 rounded-2xl"
        />

        {/* Card 5 */}
        <BentoCard
          eyebrow="FinOps"
          title="Continuous cost optimization"
          description="Eliminate cloud waste and idle assets. Transparent monthly billing without surprise bandwidth or proprietary vendor lock-in fees."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-85 transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: 'url(/images/metallic_cloud_mesh.jpg)' }} 
            />
          }
          fade={["bottom"]}
          className="lg:col-span-2 rounded-2xl"
        />
      </div>
    </section>
  );
}
