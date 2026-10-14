import React from 'react';
import { User, Code2, Globe, ShieldCheck } from 'lucide-react';
import { UaeFlag } from './Icons';

export default function About({ personal }) {
  const pillars = [
    {
      icon: <Globe className="text-amber-500" size={20} />,
      title: "International Onsite Delivery (Dubai, UAE)",
      badge: <UaeFlag className="w-4 h-2.5 rounded-[1px]" />,
      desc: "Proven track record of 3-month onsite client delivery in Dubai, UAE, leading mission-critical banking ESB migrations with zero functional deviation."
    },
    {
      icon: <Code2 className="text-blue-500" size={20} />,
      title: "Full-Stack & Cloud Architecture",
      badge: null,
      desc: "Delivering responsive frontends (React, Angular) backed by robust cloud-native microservices (Spring Boot, Node.js, Azure APIM)."
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={20} />,
      title: "Quality & High Availability",
      badge: null,
      desc: "Writing modular, test-driven code (TDD) with advanced query optimization, OAuth2 security, and multi-tier approval workflows."
    }
  ];

  return (
    <section id="about" className="py-14 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <User className="text-blue-600 dark:text-blue-400" size={22} />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 text-slate-700 dark:text-slate-300 space-y-4 text-base leading-relaxed">
            <p>{personal.about}</p>
            <p>
              I thrive on architecting and delivering software solutions that combine intuitive user experiences with high performance and reliability. With hands-on experience spanning enterprise banking middleware, responsive web applications, desktop software, and international client delivery in Dubai, my focus is on continuous learning, mastering modern technologies, and driving organization-wide impact.
            </p>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow transition-shadow flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 mt-0.5">
                  {pillar.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    {pillar.badge}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
