import React, { useState, useEffect, useRef } from 'react';
import { Network, Server, Headphones, ShieldCheck } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const [counters, setCounters] = useState({ devices: 0, tickets: 0, uptime: 0, networks: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = { devices: 150, tickets: 300, uptime: 99, networks: 15 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        devices: Math.floor(targetValues.devices * progress),
        tickets: Math.floor(targetValues.tickets * progress),
        uptime: Math.floor(targetValues.uptime * progress),
        networks: Math.floor(targetValues.networks * progress),
      });
      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, interval);
  };

  const stats = [
    { icon: Headphones, label: 'Tickets Resolved', value: `${counters.tickets}+`, color: '#00ffd1' },
    { icon: Server, label: 'Devices Supported', value: `${counters.devices}+`, color: '#00ff88' },
    { icon: Network, label: 'Networks Configured', value: `${counters.networks}+`, color: '#00ffd1' },
    { icon: ShieldCheck, label: 'System Uptime', value: `${counters.uptime}%`, color: '#00ff88' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="text-white">Who I </span>
            <span className="text-[#00ffd1]">Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 font-poppins text-lg leading-relaxed">
              I am an <span className="text-[#00ffd1] font-semibold">IT Infrastructure &amp; Network Engineer</span> with hands-on training as a Diploma Apprentice at <span className="text-[#00ff88] font-semibold">Bharat Electronics Limited (BEL)</span>.
            </p>
            <p className="text-gray-300 font-poppins text-lg leading-relaxed">
              I specialise in <span className="text-[#00ff88] font-semibold">desktop &amp; network support, LAN/WAN configuration, Windows &amp; Linux system administration</span> and CCTV / system integration. I enjoy diagnosing issues from physical cabling all the way up to the application layer.
            </p>
            <p className="text-gray-300 font-poppins text-lg leading-relaxed">
              My goal is to grow into roles like <span className="text-[#00ffd1] font-semibold">NOC Engineer, System Administrator, or Cloud Support Engineer</span> — including vocational and technical opportunities in Germany — by combining strong fundamentals with reliable, ITIL-aligned support.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffd1]/20 to-[#00ff88]/20 rounded-lg blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Server Room and Network Infrastructure"
              className="relative rounded-lg shadow-2xl border border-[#00ffd1]/30 w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="bg-[#0f1419] border border-[#00ffd1]/20 p-6 text-center hover:border-[#00ffd1] hover:shadow-[0_0_30px_rgba(0,255,209,0.2)] transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ border: `2px solid ${stat.color}`, boxShadow: `0 0 20px ${stat.color}40` }}
                  >
                    <Icon size={32} style={{ color: stat.color }} />
                  </div>
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold font-orbitron mb-2 transition-all duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 font-poppins text-sm">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
