// Central source of truth for resume content.
// Edit this file to update both the on-screen resume and the downloadable PDF.
// Optimised for 1-page A4 ATS-friendly resume.

const resumeData = {
  name: 'Amit Kumar',
  headline: 'IT Infrastructure & Network Engineer',
  subheadline: 'IT Support  |  Networking  |  System Administration  |  NOC  |  Cloud Support',
  contact: {
    email: 'kumaramit812670@gmail.com',
    phone: '+91 8126704800',
    location: 'India',
    linkedin: 'linkedin.com/in/amit-kumar-h',
    github: 'github.com/amit-kumar84',
    portfolio: 'amit-kumar84.github.io',
  },

  // 3-4 short, keyword-rich lines for ATS scanning
  summary:
    'Detail-oriented IT Infrastructure & Network Engineer trained as a Diploma Apprentice at Bharat Electronics Limited (BEL). Hands-on with desktop / network support, LAN/WAN, Cisco router & switch configuration, Windows & Linux system administration, Active Directory, CCTV and ticketing tools. Strong fundamentals in TCP/IP, DNS, DHCP, VLAN, network monitoring and cloud basics (AWS/Azure). Seeking IT Support, Desktop Support, Network Technician, System Administrator, NOC or Cloud Support roles.',

  // 4 compact categories, each rendered on one line in the PDF
  skills: {
    'Networking': 'LAN/WAN, TCP/IP, DNS, DHCP, NAT, VLAN, Subnetting, Cisco Router & Switch, Firewall basics, VPN, Network Security, PRTG / Nagios / SolarWinds monitoring',
    'IT Support': 'Desktop / Laptop hardware & software troubleshooting, Windows 10/11 installation, MS Office / O365, Outlook, remote support (AnyDesk, TeamViewer, RDP), printers & peripherals, ticketing (ServiceNow, Jira, Freshservice)',
    'System Administration': 'Windows Server, Active Directory, Group Policy, User & Permission management, Linux basics (Ubuntu / CentOS), shell, patch management, backup, antivirus, endpoint security',
    'Cloud & Tools': 'AWS & Azure fundamentals, ITIL Foundations (Incident / Change Mgmt), CCTV & NVR integration, Cisco Packet Tracer, VirtualBox, Hyper-V, Git',
  },

  // Single primary experience entry, tight and impactful (4-5 ATS-keyword-rich bullets)
  experience: [
    {
      role: 'Diploma Apprentice  -  IT & Network Support',
      company: 'Bharat Electronics Limited (BEL)',
      period: 'Aug 2023 - Aug 2024',
      location: 'India',
      bullets: [
        'Provided L1 / L2 desktop and network support to 100+ end users; resolved hardware, software and connectivity tickets within SLA.',
        'Installed and configured Windows 10/11 workstations: OS imaging, drivers, MS Office / O365, antivirus and user account setup.',
        'Troubleshot LAN connectivity issues - switches, structured cabling, IP addressing, DNS and DHCP - to restore network access quickly.',
        'Assisted senior engineers in Cisco router/switch and VLAN configuration, and basic network monitoring for uninterrupted operations.',
        'Supported CCTV / IP camera integration: NVR setup, recording schedules and remote viewing across the internal network.',
        'Logged, tracked and closed incidents using ticketing workflow; documented troubleshooting steps and SOPs for the support team.',
      ],
    },
  ],

  // 3 focused projects for ATS keywords
  projects: [
    {
      title: 'Small Office LAN & VLAN Segmentation',
      summary:
        'Configured a 25-user office LAN with Cisco switches, VLANs per department, DHCP scopes and basic ACL security on the gateway router.',
      tech: 'Cisco IOS, VLAN, DHCP, TCP/IP, Subnetting',
    },
    {
      title: 'Windows Server Active Directory Lab',
      summary:
        'Built a multi-VM lab with Windows Server 2022, Domain Controller, Active Directory, Group Policy, file/print sharing and RDP support.',
      tech: 'Windows Server, Active Directory, Group Policy, Hyper-V',
    },
    {
      title: 'Network Monitoring & CCTV Integration',
      summary:
        'Deployed PRTG / Nagios monitoring with SNMP, email alerts and uptime dashboards; integrated 16-channel IP CCTV with NVR and VPN access.',
      tech: 'PRTG, Nagios, SNMP, CCTV, NVR, VPN',
    },
  ],

  // Kept EXACTLY as the original portfolio (do not modify).
  education: [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Subharti University',
      period: '2024 - Ongoing',
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'BTEUP',
      period: '2021 - 2024',
    },
  ],

  // 4 most relevant certs for IT Infra / Networking roles
  certifications: [
    'Cisco CCNA (Routing & Switching) - Cisco Networking Academy',
    'CompTIA A+ / Network+ Fundamentals - Self-Study',
    'AWS Cloud Practitioner Essentials - AWS Skill Builder',
    'Microsoft Windows Server & Active Directory Basics - Microsoft Learn',
  ],

  languages: 'English (Professional)  |  Hindi (Native)',

  strengths:
    'Troubleshooting & root-cause analysis  |  Customer-focused communication  |  Quick learner  |  Reliable in shift / NOC environments',
};

export default resumeData;
