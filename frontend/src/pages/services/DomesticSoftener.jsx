import ServiceLayout from '../../components/ServiceLayout';
import img1 from "../../assets/soft1.png";
import img2 from "../../assets/soft2.png";
import img3 from "../../assets/Picture2.jpg";

const domesticServices = [
  { label: 'Domestic Softener', path: '/service/domestic-softener' },
  { label: 'Domestic RO Purifier', path: '/service/domestic-ro-purifier' },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-nav-blue text-lg font-bold mb-3 uppercase tracking-wide border-l-4 border-primary pl-3">
    {children}
  </h2>
);

const content = (
  <div className="space-y-8">

    {/* Hero images */}
    <div className="grid grid-cols-3 gap-3">
      <img src={img1} alt="Water Softener Unit" className="w-full h-auto object-cover rounded" />
      <img src={img2} alt="Water Softener System" className="w-full h-auto object-cover rounded" />
      <img src={img3} alt="Water Softener Installation" className="w-full h-auto object-cover rounded" />
    </div>

    {/* Intro */}
    <div>
      <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">
        14L | 35L | 50L &amp; Above Capacities
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Hard water causing scaling in bathrooms, pipelines, geysers, and washing machines?{' '}
        <strong className="text-nav-blue">PANVI ENVIROTECH PVT. LTD.</strong> provides compact and high-performance{' '}
        <strong>Domestic &amp; Industrial Water Softeners</strong> designed to completely remove hardness and protect your plumbing systems.
      </p>
    </div>

    <hr className="border-gray-200" />

    {/* What is a Water Softener */}
    <div>
      <SectionTitle>What is a Water Softener?</SectionTitle>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        A Water Softener removes hardness (Calcium &amp; Magnesium salts) using{' '}
        <strong>Ion Exchange Resin Technology</strong>, converting hard water into soft water suitable for domestic and industrial applications.
      </p>
    </div>

    <hr className="border-gray-200" />

    {/* Domestic Water Softeners */}
    <div>
      <SectionTitle>Domestic Water Softeners</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* 14L */}
        <div className="border border-gray-200 rounded p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <h3 className="text-nav-blue font-bold text-sm">14 Litres Water Softener</h3>
          </div>
          <ul className="space-y-1.5 text-gray-600 text-xs">
            <li>Suitable for: 1–2 Bathrooms</li>
            <li>Ideal for: Small homes / Villas</li>
            <li>Compact cabinet model</li>
            <li>Automatic regeneration</li>
            <li>Easy installation</li>
          </ul>
        </div>

        {/* 35L */}
        <div className="border border-gray-200 rounded p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <h3 className="text-nav-blue font-bold text-sm">35 Litres Water Softener</h3>
          </div>
          <ul className="space-y-1.5 text-gray-600 text-xs">
            <li>Suitable for: 2–3 Bathrooms</li>
            <li>Ideal for: Independent houses</li>
          </ul>
        </div>

        {/* 50L */}
        <div className="border border-gray-200 rounded p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <h3 className="text-nav-blue font-bold text-sm">50 Litres Water Softener</h3>
          </div>
          <ul className="space-y-1.5 text-gray-600 text-xs">
            <li>Suitable for: 3–5 Bathrooms</li>
            <li>Ideal for: Large homes / Small apartments</li>
            <li>Heavy-duty performance</li>
            <li>Longer regeneration cycle</li>
            <li>Skid-mounted / Cabinet type</li>
          </ul>
        </div>
      </div>
    </div>

    <hr className="border-gray-200" />

    {/* Commercial & Industrial */}
    <div>
      <SectionTitle>Commercial &amp; Industrial Water Softeners</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <p className="text-sm font-bold text-gray-700 mb-3">Capacities Available:</p>
          <ul className="space-y-2">
            {['100 Litres','200 Litres','500 Litres','1000 Litres & Above','Customized KLD-based systems'].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <CheckIcon /><span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold text-gray-700 mb-3">Suitable for:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            {['Apartments','Hotels','Hospitals','Boilers','Cooling Towers','Car Wash Units','Textile Industries'].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <hr className="border-gray-200" />

    {/* Technical Specifications */}
    <div>
      <SectionTitle>Technical Specifications</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {[
          ['Inlet Hardness', 'Up to 1000 ppm'],
          ['Outlet Hardness', '< 50 ppm'],
          ['Operating Pressure', '2 – 4 kg/cm²'],
          ['Regeneration', 'Brine (Salt Based)'],
          ['Vessel Material', 'FRP / MS / SS'],
          ['Control Valve', 'Manual / Automatic'],
        ].map(([label, value], i) => (
          <div key={i} className="flex justify-between border-b border-gray-100 py-2 text-sm">
            <span className="text-gray-500 font-medium">{label}</span>
            <span className="text-gray-700 font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>

    <hr className="border-gray-200" />

    {/* Key Features + Benefits */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div>
        <SectionTitle>Key Features</SectionTitle>
        <ul className="space-y-2">
          {[
            'High-Quality Imported Resin',
            'Fully Automatic Operation',
            'Compact & Elegant Design',
            'Long Service Life',
            'Energy Efficient',
            'Easy Salt Refilling',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
              <CheckIcon /><span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionTitle>Benefits of Installing Water Softener</SectionTitle>
        <ul className="space-y-2">
          {[
            'Prevents scale formation',
            'Increases life of plumbing & appliances',
            'Improves soap efficiency',
            'Softer skin & hair',
            'Reduces maintenance cost',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
              <CheckIcon /><span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <hr className="border-gray-200" />

    {/* What We Offer */}
    <div>
      <SectionTitle>What We Offer</SectionTitle>
      <ul className="space-y-2">
        {[
          'Supply',
          'Installation',
          'Commissioning',
          'AMC Services',
          '4 Years Warranty (Manufacturing defects only – Electrical parts excluded)',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
            <CheckIcon /><span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <hr className="border-gray-200" />

    {/* Contact Us */}
    <div className="bg-nav-blue rounded p-5 text-white">
      <h2 className="text-primary font-bold text-lg mb-4 uppercase tracking-wide">Contact Us</h2>
      <div className="space-y-2 text-sm">
        <p>📍 105, 8th Cross, Vaishnavi Nagar, Kengeri, Bangalore – 560060</p>
        <p>📞 +91 99450 96328 | +91 90360 52839</p>
        <p>✉ info@panvienvirotech.com</p>
        <p>🌐 www.panvienvirotech.com</p>
      </div>
    </div>

  </div>
);

export default function DomesticSoftener() {
  return (
    <ServiceLayout
      title="Water Softener Systems"
      sidebarItems={domesticServices}
      content={content}
    />
  );
}
