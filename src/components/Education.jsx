import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export default function Education({ education, certifications }) {
  return (
    <section id="education" className="py-14 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={22} />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-0.5">
                    {edu.institution}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-blue-600 dark:text-blue-400" size={22} />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
