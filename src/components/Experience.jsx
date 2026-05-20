import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      role: 'Diploma Apprentice  —  IT &amp; Network Support',
      company: 'Bharat Electronics Limited (BEL)',
      period: 'Aug 2023 – Aug 2024',
      type: 'Apprenticeship',
      responsibilities: [
        'Provided L1/L2 desktop and network support to 100+ end users across the unit, resolving hardware, software and connectivity tickets within SLA.',
        'Installed, configured and maintained Windows 10/11 workstations, including OS imaging, drivers, Microsoft Office / O365 and antivirus.',
        'Configured and troubleshot LAN connectivity, switches, patch panels, cabling, IP addressing, DNS and DHCP issues across the office network.',
        'Assisted senior engineers in router/switch configuration, VLAN setup and basic network monitoring for uninterrupted day-to-day operations.',
        'Supported CCTV / system integration setups: IP camera configuration, NVR management and remote viewing over the internal network.',
        'Logged, tracked and closed incidents using a ticketing workflow; documented troubleshooting steps and standard operating procedures.',
      ],
      color: '#00ffd1',
    },
    {
      role: 'IT Support / Networking Project Trainee',
      company: 'Self-Initiated Lab &amp; Community Projects',
      period: '2022 – 2023',
      type: 'Training',
      responsibilities: [
        'Built a home lab with Cisco Packet Tracer and VirtualBox to practise LAN/WAN, VLAN, sub-netting and basic Cisco IOS configuration.',
        'Set up a Windows Server domain with Active Directory, Group Policy and shared file/print services for a small simulated office.',
        'Practised Linux (Ubuntu / CentOS) basics: user/permission management, services, networking commands and shell scripting.',
      ],
      color: '#00ff88',
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Work </span>
            <span className="text-[#00ffd1]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ffd1] via-[#00ff88] to-[#00ffd1]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -ml-[7px] z-10"
                  style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}` }}
                />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <Card className="bg-[#0f1419] border border-[#00ffd1]/20 p-6 hover:border-[#00ffd1] hover:shadow-[0_0_30px_rgba(0,255,209,0.15)] transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ border: `2px solid ${exp.color}`, boxShadow: `0 0 15px ${exp.color}40` }}
                      >
                        <Briefcase size={24} style={{ color: exp.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold font-orbitron" style={{ color: exp.color }}>
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-gray-300 font-poppins font-semibold">{exp.company}</p>
                        <p className="text-gray-500 font-poppins text-sm">{exp.period}</p>
                        <span
                          className="inline-block mt-2 px-3 py-1 text-xs font-poppins rounded-full"
                          style={{
                            color: exp.color,
                            backgroundColor: `${exp.color}10`,
                            border: `1px solid ${exp.color}40`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-gray-300 font-poppins text-sm">
                          <span className="text-[#00ffd1] mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
