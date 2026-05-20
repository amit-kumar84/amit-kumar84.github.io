import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Networking & Infrastructure',
      color: '#00ffd1',
      skills: [
        { name: 'LAN / WAN Setup & Troubleshooting', level: 85 },
        { name: 'Router & Switch Configuration (Cisco)', level: 80 },
        { name: 'TCP/IP, DNS, DHCP, NAT, VLAN', level: 82 },
        { name: 'Network Monitoring (PRTG, Nagios, SolarWinds)', level: 75 },
        { name: 'Firewall Basics & Network Security', level: 72 },
      ],
    },
    {
      title: 'IT Support & Troubleshooting',
      color: '#00ff88',
      skills: [
        { name: 'Desktop / Laptop Hardware Troubleshooting', level: 90 },
        { name: 'Software Installation & Configuration', level: 88 },
        { name: 'Remote Support (AnyDesk, TeamViewer, RDP)', level: 85 },
        { name: 'Ticketing Systems (ServiceNow, Jira, Freshservice)', level: 80 },
        { name: 'Printer, Peripheral & Email Support (Outlook, O365)', level: 85 },
      ],
    },
    {
      title: 'System Administration',
      color: '#00ffd1',
      skills: [
        { name: 'Windows 10 / 11 Installation & Configuration', level: 88 },
        { name: 'Windows Server & Active Directory Basics', level: 75 },
        { name: 'Linux Basics (Ubuntu, CentOS, Shell)', level: 78 },
        { name: 'User & Group Management, Permissions', level: 80 },
        { name: 'Backup, Patching & System Monitoring', level: 75 },
      ],
    },
    {
      title: 'Cloud, Security & Integration',
      color: '#00ff88',
      skills: [
        { name: 'Cloud Fundamentals (AWS, Azure)', level: 70 },
        { name: 'CCTV Installation & System Integration', level: 85 },
        { name: 'VPN, Endpoint Security & Antivirus Tools', level: 75 },
        { name: 'ITIL Foundations & Incident Management', level: 72 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skillCategories.forEach((category, catIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setVisibleSkills((prev) => [...prev, `${catIndex}-${skillIndex}`]);
              }, (catIndex * category.skills.length + skillIndex) * 80);
            });
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 px-6 bg-[#0a0f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Technical </span>
            <span className="text-[#00ffd1]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
          <p className="text-gray-400 font-poppins mt-6 max-w-3xl mx-auto">
            Core competencies for IT Support, Networking, System Administration, NOC and Cloud Support roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className="bg-[#0f1419] border border-[#00ffd1]/20 p-8 hover:border-[#00ffd1] hover:shadow-[0_0_30px_rgba(0,255,209,0.15)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold font-orbitron mb-6" style={{ color: category.color }}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const isVisible = visibleSkills.includes(`${catIndex}-${skillIndex}`);
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-poppins text-sm">{skill.name}</span>
                        <span className="text-sm font-semibold font-poppins" style={{ color: category.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#1a1f2e] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                            boxShadow: `0 0 10px ${category.color}80`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
          {[
            'IT Support','Desktop Support','Network Technician','System Administrator','NOC Engineer',
            'Cloud Support','TCP/IP','LAN/WAN','Cisco','VLAN','DNS','DHCP','Active Directory',
            'Windows Server','Linux','Ubuntu','AWS','Azure','ITIL','ServiceNow','Jira','Hardware Troubleshooting',
            'Remote Support','CCTV','Network Monitoring','Endpoint Security','VPN','Patch Management'
          ].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-poppins rounded-full border border-[#00ffd1]/30 text-[#00ffd1] bg-[#00ffd1]/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
