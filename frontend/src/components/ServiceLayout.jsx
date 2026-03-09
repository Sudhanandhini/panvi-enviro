import { Link, useLocation } from 'react-router-dom';
import pdf  from "../assets/e-broucher.pdf"

// Sidebar menu groups - same structure as the header dropdown
const wasteWaterServices = [
  { label: 'Sewage Treatment Plant (STP)', path: '/service/sewage-treatment-plant' },
  { label: 'Effluent Treatment Plant (ETP)', path: '/service/effluent-treatment-plant' },
  { label: 'Common Effluent Treatment Plant (CETP)', path: '/service/common-effluent-treatment-plant' },
  { label: 'Zero Liquid Discharge Plant (ZLD)', path: '/service/zero-liquid-discharge-plant' },
  { label: 'Rain Water Harvesting System', path: '/service/rain-water-harvesting-system' },
];

const wtpServices = [
  { label: 'Industrial & Commercial RO Plant', path: '/service/industrial-commercial-ro-plant' },
  { label: 'Water Softener', path: '/service/water-softener' },
  { label: 'Demineralisation Plant/DM Plant-MB Plant', path: '/service/demineralisation-plant' },
];

// Brochure decorative icon (diagonal lines pattern like on site)
const BrochureIcon = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20 opacity-60" fill="none">
    <rect x="10" y="10" width="45" height="60" rx="3" stroke="#60a5fa" strokeWidth="3" fill="none"/>
    <rect x="18" y="10" width="45" height="60" rx="3" stroke="#93c5fd" strokeWidth="3" fill="none"/>
    <line x1="10" y1="25" x2="55" y2="25" stroke="#60a5fa" strokeWidth="2"/>
    <line x1="10" y1="35" x2="55" y2="35" stroke="#60a5fa" strokeWidth="1.5"/>
    <line x1="10" y1="42" x2="55" y2="42" stroke="#60a5fa" strokeWidth="1.5"/>
    <line x1="10" y1="49" x2="55" y2="49" stroke="#60a5fa" strokeWidth="1.5"/>
  </svg>
);

export default function ServiceLayout({ title, sidebarItems, content }) {
  const location = useLocation();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">

        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h3 className="text-primary text-xl font-bold mb-4" style={{fontFamily:'Raleway,sans-serif'}}>
            Our Services
          </h3>

          {/* Sidebar links */}
          <div className="mb-6">
            {sidebarItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`block px-4 py-3 text-sm font-medium transition-colors border-b border-blue-400 ${
                  location.pathname === item.path
                    ? 'bg-secondary text-white'
                    : 'bg-nav-blue text-white hover:bg-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Brochure box */}
          <div className="bg-secondary rounded-sm p-5 relative overflow-hidden">
            <h4 className="text-primary font-bold text-xl mb-3" style={{fontFamily:'Raleway,sans-serif'}}>
              Brochure
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed mb-5">
              Benefit of the socie where we oper ate success for the website done
            </p>
            <a
              href={pdf} target="_black"
              className="inline-block bg-nav-blue text-white text-xs font-bold px-5 py-2 uppercase tracking-wider hover:bg-blue-500 transition-colors"
            >
              DOWNLOAD
            </a>
            {/* Decorative icon bottom-right */}
            <div className="absolute -bottom-2 -right-2 opacity-70">
              <BrochureIcon />
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0">
          <h1 className="text-primary text-3xl md:text-4xl font-bold mb-8 leading-tight" style={{fontFamily:'Raleway,sans-serif'}}>
            {title}
          </h1>
          {content}
        </main>
      </div>
    </div>
  );
}

// Export sidebar item sets for reuse
export { wasteWaterServices, wtpServices };
