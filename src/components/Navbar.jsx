import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!isHome) return;

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0f1f]/95 backdrop-blur-md border-b border-[#00ffd1]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-base sm:text-lg md:text-2xl font-bold font-orbitron cursor-pointer group"
            onClick={() => (isHome ? scrollToSection('home') : navigate('/'))}
          >
            <span className="text-[#00ffd1] group-hover:text-[#00ff88] transition-colors duration-300">
              {'<Amit Kumar | IT Infra Engineer/>'}
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 font-poppins text-sm transition-all duration-300 relative group ${
                  activeSection === link.id && isHome ? 'text-[#00ffd1]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffd1] to-[#00ff88] transform origin-left transition-transform duration-300 ${
                    activeSection === link.id && isHome ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
            <Link
              to="/resume"
              className="ml-2 px-4 py-2 font-poppins text-sm rounded-md border border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a0f1f] transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={16} /> Resume
            </Link>
          </div>

          <button
            className="lg:hidden text-[#00ffd1] p-2 hover:bg-[#00ffd1]/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#00ffd1]/20 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 font-poppins transition-all duration-300 ${
                  activeSection === link.id && isHome
                    ? 'text-[#00ffd1] bg-[#00ffd1]/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-3 font-poppins text-[#00ff88] hover:bg-[#00ff88]/10"
            >
              Resume
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
