import React from 'react';
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '../components/ResumePDF';
import resumeData from '../data/resumeData';

const SectionHeading = ({ children }) => (
  <h2 className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-bold text-[#0f3a5f] border-b-2 border-[#0f3a5f] pb-1 mb-3 mt-5">
    {children}
  </h2>
);

const Resume = () => {
  const r = resumeData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-10 px-4">
      {/* Top controls */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-medium transition"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <PDFDownloadLink
          document={<ResumePDF />}
          fileName={`${r.name.replace(/\s+/g, '_')}_Resume_IT_Infra.pdf`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#0f3a5f] text-white text-sm font-semibold hover:bg-[#1e6091] transition shadow"
        >
          {({ loading }) => (
            <>
              <Download size={16} />
              {loading ? 'Preparing PDF…' : 'Download Resume (PDF)'}
            </>
          )}
        </PDFDownloadLink>
      </div>

      {/* A4-styled paper */}
      <div
        id="resume-paper"
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-md text-slate-800 print:shadow-none"
        style={{ minHeight: '297mm' }}
      >
        <div className="p-8 md:p-12">
          {/* Header */}
          <header className="border-b-2 border-[#0f3a5f] pb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f3a5f] tracking-wide">
              {r.name.toUpperCase()}
            </h1>
            <p className="text-base md:text-lg font-semibold text-[#1e6091] mt-1">
              {r.headline}
            </p>
            <p className="text-xs md:text-sm text-slate-500 mt-1">{r.subheadline}</p>

            <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs md:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><Mail size={14} /> {r.contact.email}</span>
              <span className="inline-flex items-center gap-1"><Phone size={14} /> {r.contact.phone}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={14} /> {r.contact.location}</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1 text-xs md:text-sm text-slate-600">
              <a href={`https://${r.contact.linkedin}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#0f3a5f]">
                <Linkedin size={14} /> {r.contact.linkedin}
              </a>
              <a href={`https://${r.contact.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#0f3a5f]">
                <Github size={14} /> {r.contact.github}
              </a>
              <a href={`https://${r.contact.portfolio}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#0f3a5f]">
                <Globe size={14} /> {r.contact.portfolio}
              </a>
            </div>
          </header>

          {/* Summary */}
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-sm leading-relaxed text-justify">{r.summary}</p>

          {/* Skills */}
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="space-y-1.5">
            {Object.entries(r.skills).map(([cat, value]) => (
              <div key={cat} className="flex flex-col md:flex-row gap-1 md:gap-2 text-sm">
                <span className="font-semibold text-[#1e6091] md:w-1/4">{cat}:</span>
                <span className="md:w-3/4">{value}</span>
              </div>
            ))}
          </div>

          {/* Experience */}
          <SectionHeading>Professional Experience</SectionHeading>
          <div className="space-y-4">
            {r.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <p className="font-bold text-slate-800 text-sm md:text-[15px]">{exp.role}</p>
                  <p className="text-xs md:text-sm text-slate-500">{exp.period}</p>
                </div>
                <p className="italic text-[#1e6091] text-sm">
                  {exp.company}  —  {exp.location}
                </p>
                <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-sm text-slate-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <SectionHeading>Key Projects</SectionHeading>
          <div className="space-y-3">
            {r.projects.map((p, idx) => (
              <div key={idx}>
                <p className="font-bold text-sm text-slate-800">{p.title}</p>
                <p className="text-sm text-slate-700">{p.summary}</p>
                <p className="text-xs italic text-slate-500">Tech: {p.tech}</p>
              </div>
            ))}
          </div>

          {/* Education + Certifications */}
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              <SectionHeading>Education</SectionHeading>
              <div className="space-y-3">
                {r.education.map((e, i) => (
                  <div key={i}>
                    <p className="font-bold text-sm text-slate-800">{e.degree}</p>
                    <p className="text-sm text-slate-600">{e.institution}</p>
                    <p className="text-xs text-slate-500">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading>Certifications</SectionHeading>
              <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-slate-700">
                {r.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages + Strengths */}
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              <SectionHeading>Languages</SectionHeading>
              <p className="text-sm text-slate-700">{r.languages}</p>
            </div>
            <div>
              <SectionHeading>Key Strengths</SectionHeading>
              <p className="text-sm text-slate-700">{r.strengths}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom download button (mobile-friendly) */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-center">
        <PDFDownloadLink
          document={<ResumePDF />}
          fileName={`${r.name.replace(/\s+/g, '_')}_Resume_IT_Infra.pdf`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#00ff88] text-[#0a0f1f] text-sm font-bold hover:bg-[#00ffd1] transition shadow-lg"
        >
          {({ loading }) => (
            <>
              <Download size={18} />
              {loading ? 'Preparing PDF…' : 'Download ATS-Friendly Resume (PDF)'}
            </>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Resume;
