import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Small Office LAN Setup & VLAN Segmentation',
      description: 'Designed and configured a structured LAN for a 25-user office: Cisco switches, VLANs for departments, DHCP scopes, and basic ACL-based security on the router.',
      tech: ['Cisco IOS', 'VLAN', 'DHCP', 'TCP/IP', 'Subnetting'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
      github: 'https://github.com/amit-kumar84',
      color: '#00ffd1',
    },
    {
      title: 'Windows Server Active Directory Lab',
      description: 'Built a multi-VM lab with Windows Server 2022: domain controller, Active Directory, Group Policy, user/OU management, file sharing and RDP-based remote support.',
      tech: ['Windows Server', 'Active Directory', 'Group Policy', 'Hyper-V'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
      github: 'https://github.com/amit-kumar84',
      color: '#00ff88',
    },
    {
      title: 'Network Monitoring Dashboard (PRTG / Nagios)',
      description: 'Deployed a monitoring stack to track device uptime, bandwidth and CPU/RAM across routers and servers. Configured email alerts for incidents and built a basic NOC view.',
      tech: ['PRTG', 'Nagios', 'SNMP', 'Linux', 'Bash'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
      github: 'https://github.com/amit-kumar84',
      demo: 'https://example.com',
      color: '#00ffd1',
    },
    {
      title: 'CCTV &amp; IP Camera Integration',
      description: 'Installed and configured a 16-channel IP CCTV system with NVR, structured cabling, static IP planning, motion-based recording and remote viewing over secure VPN.',
      tech: ['CCTV', 'NVR', 'IP Cameras', 'VPN', 'Networking'],
      image: 'https://images.unsplash.com/photo-1606584610793-39b6e4b3a36f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
      github: 'https://github.com/amit-kumar84',
      color: '#00ff88',
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Featured </span>
            <span className="text-[#00ffd1]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
          <p className="text-gray-400 font-poppins mt-6 max-w-3xl mx-auto">
            Hands-on IT Infrastructure, Networking and System Administration projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#0f1419] border border-[#00ffd1]/20 overflow-hidden group hover:border-[#00ffd1] hover:shadow-[0_0_40px_rgba(0,255,209,0.2)] transition-all duration-500"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold font-orbitron mb-3" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <p className="text-gray-300 font-poppins mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-poppins rounded-full border"
                      style={{
                        borderColor: `${project.color}40`,
                        color: project.color,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 bg-transparent border border-[#00ffd1]/50 text-[#00ffd1] hover:bg-[#00ffd1]/10 hover:border-[#00ffd1] font-poppins transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-[#00ff88]/20 border border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0f1f] hover:border-[#00ff88] font-poppins transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
