import React from 'react';
import { Mail, MapPin, Phone, ArrowDown, FileDown, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, UaeFlag, IndiaFlag } from './Icons';

export default function Hero({ personal }) {
  return (
    <section id="top" className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="flex-1 space-y-5">
            {/* Badges including Dubai Onsite Highlight with Country Flag */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Opportunities
              </div>

              {/* Dubai Onsite Spotlight Badge with UAE Flag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 dark:bg-amber-950/70 dark:text-amber-200 border border-amber-300/80 dark:border-amber-700/80 shadow-xs">
                <UaeFlag className="w-4 h-3 rounded-[2px] shadow-xs" />
                <span>Dubai, UAE Onsite Client Delivery (3 Months)</span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personal.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400">
                {personal.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personal.tagline}
            </p>

            {/* Quick Contact & Info Chips */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
                <IndiaFlag className="w-4 h-3 rounded-[2px]" />
                <span>{personal.location}</span>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60 transition-colors"
              >
                <Mail size={16} className="text-blue-500" />
                <span>{personal.email}</span>
              </a>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
                <Phone size={16} className="text-blue-500" />
                <span>{personal.phone}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 no-print">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <FileDown size={17} />
                Download / Print Resume
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
              >
                View Projects
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Spotlight Callout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/70 dark:border-slate-800/70 no-print">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Experience</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">5+ Years Full-Stack</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 shadow-xs">
                <div className="text-xs text-amber-800 dark:text-amber-300 font-medium flex items-center gap-1.5">
                  <UaeFlag className="w-3.5 h-2.5 rounded-[1px]" />
                  <span>International Onsite</span>
                </div>
                <div className="text-sm font-bold text-amber-950 dark:text-amber-100 mt-0.5">Dubai, UAE (3 Months)</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Architecture</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Spring Boot & WSO2 MI</div>
              </div>
            </div>

          </div>

          {/* Profile Card / Avatar Monogram */}
          <div className="flex-shrink-0 self-center md:self-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center text-3xl sm:text-4xl font-extrabold shadow-inner">
                  {personal.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Profile
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
