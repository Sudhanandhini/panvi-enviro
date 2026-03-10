import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo-1.png"
import pdf  from "../assets/e-broucher.pdf"

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
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const menuData = [
  {
    label: 'WASTE WATER TREATMENT PLANTS',
    path: '/project-services',
    children: [
      { label: 'SEWAGE TREATMENT PLANT (STP)', path: '/service/sewage-treatment-plant' },
      { label: 'EFFLUENT TREATMENT PLANT (ETP)', path: '/service/effluent-treatment-plant' },
      { label: 'COMMON EFFLUENT TREATMENT PLANT (CETP)', path: '/service/common-effluent-treatment-plant' },
      { label: 'ZERO LIQUID DISCHARGE PLANT (ZLD)', path: '/service/zero-liquid-discharge-plant' },
      { label: 'RAIN WATER HARVESTING SYSTEM', path: '/service/rain-water-harvesting-system' },
    ],
  },
  {
    label: 'WATER TREATMENT PLANT – WTP',
    path: '/project-services',
    children: [
      { label: 'INDUSTRIAL & COMMERCIAL RO PLANT', path: '/service/industrial-commercial-ro-plant' },
      { label: 'WATER SOFTENER', path: '/service/water-softener' },
      { label: 'DEMINERALISATION PLANT/DM PLANT-MB PLANT', path: '/service/demineralisation-plant' },
    ],
  },
  { label: 'OPERATION AND MAINTENANCE (O & M) , AMC', path: '/project-services' },
  { label: 'CALIBRATIONS AND SERVICES', path: '/project-services' },
  { label: 'SUPPLY OF SPARES & TROUBLE SHOOTING SERVICES AND CHEMICALS', path: '/project-services' },
  { label: 'REVAMPING AND OPTIMIZATION', path: '/project-services' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeChild, setActiveChild] = useState(null);
  const dropRef = useRef(null);
  const timeoutRef = useRef(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
    setActiveChild(menuData[0]);
  };
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      setActiveChild(null);
    }, 150);
  };
  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-nav-blue py-1 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-white">Opening Hours : Mon - Fri: 9:30am - 6:30pm</p>
        </div>
      </div>

      {/* Logo + Contact */}
      <div className="bg-white py-3 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className=" flex items-center justify-center bg-white shadow-sm">
            <img src={logo}  />
            </div>
         
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <div>
                <p className="font-semibold text-sm text-gray-800">+91 - 99450 - 96328</p>
                <p className="text-xs text-gray-500">Talk to us</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon />
              <div>
                <p className="font-semibold text-sm text-gray-800">info@panvienvirotech.com</p>
                <p className="text-xs text-gray-500">Drop us a Mail</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LocationIcon />
              <div>
                <p className="font-semibold text-sm text-gray-800">Bengaluru</p>
                <p className="text-xs text-gray-500">Find us</p>
              </div>
            </div>
          </div>

          <button className="md:hidden text-secondary" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-nav-blue relative z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="hidden md:flex items-center">
            {/* HOME */}
            <NavLink to="/" end className={({isActive}) => `px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors ${isActive?'text-primary':'text-white hover:text-primary'}`}>
              Home
            </NavLink>
            {/* COMPANY PROFILE */}
            <NavLink to="/company-profile" className={({isActive}) => `px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors ${isActive?'text-primary border-b-2 border-primary':'text-white hover:text-primary'}`}>
              Company Profile
            </NavLink>

            {/* PROJECT & SERVICES with 2-level dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <NavLink
                to="/project-services"
                className={({isActive}) => `flex items-center gap-1 px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors ${isActive||dropdownOpen?'text-primary':'text-white hover:text-primary'}`}
              >
                Project & Services
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </NavLink>

              {/* Level 1 dropdown */}
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 flex shadow-xl border-t-2 border-primary z-50"
                  style={{minWidth:'420px'}}
                  onMouseEnter={keepOpen}
                  onMouseLeave={closeDropdown}
                >
                  {/* Left: main items */}
               <div className="bg-white w-64 py-1 flex-shrink-0">
  {menuData.map((item, i) => {

    // If item has children → show hover menu
    if (item.children) {
      return (
        <div
          key={i}
          className={`flex items-center justify-between px-4 py-3 text-xs font-bold cursor-pointer border-b border-gray-100 transition-colors ${
            activeChild?.label === item.label
              ? "text-primary bg-gray-50"
              : "text-gray-700 hover:text-primary hover:bg-gray-50"
          }`}
          onMouseEnter={() => setActiveChild(item)}
        >
          <span className="leading-tight">{item.label}</span>

          <svg
            className="w-3 h-3 flex-shrink-0 ml-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
          </svg>
        </div>
      );
    }

    // If no children → direct link
    return (
      <Link
        key={i}
        to={item.path}
        onClick={() => {
          setDropdownOpen(false);
          setActiveChild(null);
        }}
        className="block px-4 py-3 text-xs font-bold text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-100 transition-colors uppercase"
      >
        {item.label}
      </Link>
    );
  })}
</div>
                  {/* Right: children */}
                  {activeChild?.children && (
                    <div className="bg-white border-l border-gray-200 w-72 py-1 flex-shrink-0">
                      {activeChild.children.map((child, j) => (
                        <Link
                          key={j}
                          to={child.path}
                          onClick={() => { setDropdownOpen(false); setActiveChild(null); }}
                          className="block px-4 py-3 text-xs font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors uppercase"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <NavLink to="/clients" className={({isActive}) => `px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors ${isActive?'text-primary border-b-2 border-primary':'text-white hover:text-primary'}`}>
              Clients
            </NavLink>
            <NavLink to="/gallery" className={({isActive}) => `px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors ${isActive?'text-primary border-b-2 border-primary':'text-white hover:text-primary'}`}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `px-4 py-4 text-sm font-medium tracking-wide uppercase transition-colors ${isActive?'text-primary border-b-2 border-primary':'text-white hover:text-primary'}`}>
              Contact
            </NavLink>

            <div className="ml-auto">
              <a href={pdf} target="_blank" className="bg-secondary text-white px-5 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-secondary-light transition-colors block whitespace-nowrap">
                Download E-Broucher
              </a>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div className="md:hidden py-2 border-t border-blue-400">
              <NavLink to="/" end onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-white text-sm font-medium hover:text-primary">Home</NavLink>
              <NavLink to="/company-profile" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-white text-sm font-medium hover:text-primary">Company Profile</NavLink>
              <div className="px-4 py-2">
                <p className="text-white text-sm font-medium mb-1">Project & Services</p>
                {menuData.map((item, i) => (
                  <div key={i}>
                    {item.children ? (
                      item.children.map((child, j) => (
                        <Link key={j} to={child.path} onClick={() => setMobileOpen(false)}
                          className="block pl-4 py-1 text-xs text-blue-200 hover:text-primary">
                          {child.label}
                        </Link>
                      ))
                    ) : (
                      <Link to={item.path} onClick={() => setMobileOpen(false)}
                        className="block pl-4 py-1 text-xs text-blue-200 hover:text-primary">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <NavLink to="/clients" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-white text-sm font-medium hover:text-primary">Clients</NavLink>
              <NavLink to="/gallery" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-white text-sm font-medium hover:text-primary">Gallery</NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-white text-sm font-medium hover:text-primary">Contact</NavLink>
              <a href={pdf} target="_blank" className="block mt-2 mx-4 bg-secondary text-white px-4 py-2 text-sm font-semibold text-center">Download E-Broucher</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
