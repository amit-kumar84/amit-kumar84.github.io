import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import resumeData from '../data/resumeData';

/* ============================================================
   ATS-FRIENDLY, PROFESSIONAL, SINGLE-PAGE A4 RESUME (PDF)
   - Single column for best ATS parsing
   - Standard Helvetica font (no custom font registration)
   - Plain text, no graphics, no tables
   - Standard section headers in uppercase
   - All content is selectable / searchable text
   - Designed to fit strictly on ONE A4 page (595 x 842 pt)
   ============================================================ */

const COLOR = {
  primary: '#0B2A4A',   // deep navy - professional
  accent:  '#1F4E79',   // secondary navy
  text:    '#1A1A1A',
  muted:   '#4A4A4A',
  rule:    '#0B2A4A',
};

const s = StyleSheet.create({
  page: {
    paddingTop: 26,
    paddingBottom: 24,
    paddingHorizontal: 32,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.35,
    color: COLOR.text,
  },

  /* ---------- Header ---------- */
  header: {
    textAlign: 'center',
    marginBottom: 6,
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
    color: COLOR.primary,
    letterSpacing: 2,
    lineHeight: 1,
    marginBottom: 0,
  },
  headline: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: COLOR.accent,
    marginTop: -2,
    letterSpacing: 0.5,
  },
  subheadline: {
    fontSize: 8.5,
    color: COLOR.muted,
    marginTop: 1,
    letterSpacing: 0.5,
  },
  contactLine: {
    fontSize: 8.5,
    color: COLOR.muted,
    marginTop: 4,
    textAlign: 'center',
  },
  contactLine2: {
    fontSize: 8.5,
    color: COLOR.accent,
    marginTop: 1,
    textAlign: 'center',
  },

  /* ---------- Section ---------- */
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: COLOR.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginTop: 8,
    marginBottom: 2,
  },
  sectionRule: {
    borderBottomWidth: 1.2,
    borderBottomColor: COLOR.rule,
    marginBottom: 5,
  },

  /* ---------- Summary ---------- */
  summary: {
    fontSize: 9,
    color: COLOR.text,
    textAlign: 'justify',
  },

  /* ---------- Skills (one line per category) ---------- */
  skillRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  skillLabel: {
    width: 90,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: COLOR.accent,
  },
  skillValue: {
    flex: 1,
    fontSize: 9,
  },

  /* ---------- Experience / Projects ---------- */
  jobHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  jobRole: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: COLOR.text,
  },
  jobMeta: {
    fontSize: 8.5,
    color: COLOR.muted,
    fontFamily: 'Helvetica-Bold',
  },
  jobCompanyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  jobCompany: {
    fontSize: 9.5,
    color: COLOR.accent,
    fontFamily: 'Helvetica-Oblique',
  },
  jobLocation: {
    fontSize: 8.5,
    color: COLOR.muted,
    fontFamily: 'Helvetica-Oblique',
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 1.5,
  },
  bulletDot: {
    width: 9,
    fontSize: 9,
    color: COLOR.primary,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    textAlign: 'justify',
  },

  /* Projects (compact two-line items) */
  projectItem: {
    marginBottom: 3,
  },
  projectTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    color: COLOR.text,
  },
  projectDesc: {
    fontSize: 9,
    marginTop: 0,
  },
  projectTech: {
    fontSize: 8.5,
    color: COLOR.muted,
    fontFamily: 'Helvetica-Oblique',
  },

  /* Two-column row (Education / Certifications) */
  twoCol: {
    flexDirection: 'row',
    marginTop: 2,
  },
  col: {
    flex: 1,
  },
  colDivider: {
    width: 14,
  },

  /* Education */
  eduItem: {
    marginBottom: 3,
  },
  eduDegree: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    color: COLOR.text,
  },
  eduInst: {
    fontSize: 9,
    color: COLOR.accent,
    fontFamily: 'Helvetica-Oblique',
  },
  eduPeriod: {
    fontSize: 8.5,
    color: COLOR.muted,
  },

  /* Certifications */
  certItem: {
    flexDirection: 'row',
    marginBottom: 1.5,
  },

  /* Footer line: Languages | Strengths */
  footerStrip: {
    marginTop: 6,
  },
  footerLine: {
    fontSize: 8.5,
    color: COLOR.muted,
    marginBottom: 1,
  },
  footerLabel: {
    fontFamily: 'Helvetica-Bold',
    color: COLOR.accent,
  },
});

/* ============================================================
   Reusable section header
   ============================================================ */
const Section = ({ title, children }) => (
  <View wrap={false}>
    <Text style={s.sectionTitle}>{title}</Text>
    <View style={s.sectionRule} />
    {children}
  </View>
);

const Bullet = ({ children }) => (
  <View style={s.bullet}>
    <Text style={s.bulletDot}>{'\u2022'}</Text>
    <Text style={s.bulletText}>{children}</Text>
  </View>
);

/* ============================================================
   PDF Document
   ============================================================ */
const ResumePDF = () => {
  const r = resumeData;

  return (
    <Document
      title={`${r.name} - Resume`}
      author={r.name}
      subject="IT Infrastructure & Network Engineer - Resume"
      keywords="IT Support, Desktop Support Engineer, Network Technician, System Administrator, NOC Engineer, Cloud Support, IT Infrastructure Engineer, CCNA, CompTIA, Windows Server, Active Directory, Linux, AWS, Azure, LAN, WAN, Cisco, VLAN, DNS, DHCP, ITIL, CCTV, BEL Apprentice"
    >
      <Page size="A4" style={s.page}>
        {/* ------------------ Header ------------------ */}
        <View style={s.header}>
          <Text style={s.name}>{r.name.toUpperCase()}</Text>
          <Text style={s.headline}>{r.headline}</Text>
          <Text style={s.subheadline}>{r.subheadline}</Text>
          <Text style={s.contactLine}>
            {r.contact.email}   |   {r.contact.phone}   |   {r.contact.location}
          </Text>
          <Text style={s.contactLine2}>
            {r.contact.linkedin}   |   {r.contact.github}   |   {r.contact.portfolio}
          </Text>
        </View>

        {/* ------------------ Professional Summary ------------------ */}
        <Section title="Professional Summary">
          <Text style={s.summary}>{r.summary}</Text>
        </Section>

        {/* ------------------ Technical Skills ------------------ */}
        <Section title="Technical Skills">
          {Object.entries(r.skills).map(([cat, val]) => (
            <View key={cat} style={s.skillRow}>
              <Text style={s.skillLabel}>{cat}:</Text>
              <Text style={s.skillValue}>{val}</Text>
            </View>
          ))}
        </Section>

        {/* ------------------ Professional Experience ------------------ */}
        <Section title="Professional Experience">
          {r.experience.map((exp, idx) => (
            <View key={idx} wrap={false} style={{ marginBottom: 2 }}>
              <View style={s.jobHeaderRow}>
                <Text style={s.jobRole}>{exp.role}</Text>
                <Text style={s.jobMeta}>{exp.period}</Text>
              </View>
              <View style={s.jobCompanyRow}>
                <Text style={s.jobCompany}>{exp.company}</Text>
                <Text style={s.jobLocation}>{exp.location}</Text>
              </View>
              {exp.bullets.map((b, i) => (
                <Bullet key={i}>{b}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        {/* ------------------ Projects ------------------ */}
        <Section title="Key Projects">
          {r.projects.map((p, i) => (
            <View key={i} style={s.projectItem} wrap={false}>
              <Text style={s.projectTitle}>
                {p.title}
                <Text style={s.projectTech}>   ({p.tech})</Text>
              </Text>
              <Text style={s.projectDesc}>{p.summary}</Text>
            </View>
          ))}
        </Section>

        {/* ------------------ Education + Certifications (2 columns) ------------------ */}
        <View style={s.twoCol}>
          <View style={s.col}>
            <Section title="Education">
              {r.education.map((e, i) => (
                <View key={i} style={s.eduItem}>
                  <Text style={s.eduDegree}>{e.degree}</Text>
                  <Text style={s.eduInst}>{e.institution}</Text>
                  <Text style={s.eduPeriod}>{e.period}</Text>
                </View>
              ))}
            </Section>
          </View>
          <View style={s.colDivider} />
          <View style={s.col}>
            <Section title="Certifications">
              {r.certifications.map((c, i) => (
                <View key={i} style={s.certItem}>
                  <Text style={s.bulletDot}>{'\u2022'}</Text>
                  <Text style={s.bulletText}>{c}</Text>
                </View>
              ))}
            </Section>
          </View>
        </View>

        {/* ------------------ Footer Strip: Languages & Strengths ------------------ */}
        <View style={s.footerStrip}>
          <Text style={s.footerLine}>
            <Text style={s.footerLabel}>Languages: </Text>
            {r.languages}
          </Text>
          <Text style={s.footerLine}>
            <Text style={s.footerLabel}>Strengths: </Text>
            {r.strengths}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
