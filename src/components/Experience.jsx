import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { UaeFlag } from './Icons';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-14 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="text-blue-600 dark:text-blue-400" size={22} />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-500/30 dark:border-blue-500/20 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experience.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform"></div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Special Highlight Badge (e.g. Dubai Onsite with UAE Flag) */}
                {job.highlightBadge && (
                  <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 dark:bg-amber-950/70 dark:text-amber-200 border border-amber-300/80 dark:border-amber-700/80 shadow-xs">
                    <UaeFlag className="w-4 h-3 rounded-[2px]" />
                    <span>{job.highlightBadge}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                      {job.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 italic">
                  {job.description}
                </p>

                {/* Key Achievements */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {job.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
