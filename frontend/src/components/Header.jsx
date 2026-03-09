import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-1.png';

const PhoneIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Company Profile', path: '/company-profile' },
    { label: 'Project & Services', path: '/project-services', dropdown: true },
    { label: 'Clients', path: '/clients' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    'Waste Water Treatment Plants',
    'Water Treatment Plant – WTP',
    'Operation and Maintenance (O & M), AMC',
    'Calibrations and Services',
    'Supply of Spares & Trouble Shooting',
    'Revamping and Optimization',
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-nav-blue py-1 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-white">Opening Hours : Mon - Fri: 9:30am - 6:30pm</p>
        </div>
      </div>

      {/* Logo & Contact Row */}
      <div className="bg-white py-3 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className=" flex items-center justify-center overflow-hidden bg-white">
              <div className="text-center">
                <div className="text-nav-blue font-bold text-xs leading-tight">
                  <div className="w-[100px] h-auto  flex items-center justify-center">
                  <img src={logo} alt="PANVI Logo" className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div>
            
            </div>
          </Link>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <div>
                <p className="font-semibold text-sm text-gray-800 pb-1">+91 - 99450 - 96328</p>
                <p className="text-xs text-gray-500">Talk to us</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon />
              <div>
                <p className="font-semibold text-sm text-gray-800 pb-1">info@panvienvirotech.com</p>
                <p className="text-xs text-gray-500">Drop us a Mail</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LocationIcon />
              <div>
                <p className="font-semibold text-sm text-gray-800 pb-1">Bengaluru</p>
                <p className="text-xs text-gray-500">Find us</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-secondary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-nav-blue">
        <div className="max-w-6xl mx-auto px-4">
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors duration-200 flex items-center gap-1 ${
                        isActive ? 'text-primary' : 'text-white hover:text-primary'
                      }`
                    }
                  >
                    {item.label}
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    </svg>
                  </NavLink>
                  <div className="absolute top-full left-0 bg-white shadow-lg z-50 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {services.map((s, i) => (
                      <Link key={i} to="/project-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white border-b border-gray-100 last:border-0">
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                      isActive ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'
                    }`
                  }
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              )
            ))}
            <div className="ml-auto">
              <a
                href="../assets/e-broucher.pdf"  target="_blank"
                className="bg-secondary text-white px-5 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-secondary-light transition-colors duration-200 block"
              >
                Download E-Broucher
              </a>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div className="md:hidden py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-white text-sm font-medium hover:text-primary"
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
              <a href="#" className="block mt-2 bg-secondary text-white px-4 py-2 text-sm font-semibold text-center">
                Download E-Broucher
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
