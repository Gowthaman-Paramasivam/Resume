import React from 'react';
import { User, Code2, Zap, ShieldCheck } from 'lucide-react';

export default function About({ personal }) {
  const pillars = [
    {
      icon: <Code2 className="text-blue-500" size={20} />,
      title: "Full-Stack Craftsmanship",
      desc: "Delivering polished frontend user experiences backed by robust, scalable microservices and APIs."
    },
    {
      icon: <Zap className="text-amber-500" size={20} />,
      title: "Performance & DX",
      desc: "Obsessed with lightning-fast load times, streamlined developer tooling, and automated CI/CD deployments."
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={20} />,
      title: "Quality & Resilience",
      desc: "Writing modular, test-driven, maintainable code designed to scale reliably with growing user bases."
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
              I thrive on building modern web applications that combine high aesthetic polish with strict engineering standards. Whether developing responsive UI interfaces in React and Tailwind or architecting scalable backend APIs and automated GitHub Actions workflows, my goal is always to deliver dependable, high-impact software.
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
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
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
