import ServiceLayout from '../../components/ServiceLayout';
import img1 from "../../assets/101.jpg";
import img2 from "../../assets/102.jpg";
import img3 from "../../assets/107.jpg";
import img4 from "../../assets/106.jpg";
import img5 from "../../assets/Picture5.png";

const domesticServices = [
  { label: 'Domestic Softener', path: '/service/domestic-softener' },
  { label: 'Domestic RO Purifier', path: '/service/domestic-ro-purifier' },
];

const CheckIcon = ({ color = '#8dc63f' }) => (
  <svg style={{ width: 16, height: 16, color, flexShrink: 0, marginTop: 2 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SectionTitle = ({ emoji, children }) => (
  <h2 className="text-nav-blue text-lg font-bold mb-4 uppercase tracking-wide border-l-4 border-primary pl-3">
    {emoji && <span className="mr-2">{emoji}</span>}{children}
  </h2>
);

const brands = [
  { sl: 1, name: 'AQUA 2090',               spec: 'RO + Active Copper + Alkaline + TDS Controller Water Purifier 10L Tank', img: img1 },
  { sl: 2, name: 'AQUA PURO (Purosis)',      spec: 'RO + UX + UF + Alkaline Water Purifier',                                img: img2 },
  { sl: 3, name: 'AQUA Pearl Copper',        spec: 'RO + UX + UF + TDS Controller Water Purifier 12L Tank',                 img: img3 },
  { sl: 4, name: 'AQUA Pearl',               spec: 'RO + LED UV + Alkaline + TDS Controller 12LPH',                         img: img4 },
  { sl: 5, name: 'AQUA Thunder',             spec: 'RO + UV + Alkaline + TDS 12LPH',                                        img: img5 },
  { sl: 6, name: 'AQUA 25LPH Commercial RO', spec: '25LPH Commercial RO + TDS Controller',                                  img: null },
  { sl: 7, name: 'AQUA 50LPH Commercial RO', spec: '50LPH Commercial RO + TDS Controller',                                  img: null },
];

const content = (
  <div className="space-y-8">

     <div className="grid grid-cols-4 gap-3">
          <img src={img1} alt="Water Softener Unit" className="w-full h-auto object-cover rounded" />
          <img src={img2} alt="Water Softener System" className="w-full h-auto object-cover rounded" />
          <img src={img3} alt="Water Softener Installation" className="w-full h-auto object-cover rounded" />
            <img src={img4} alt="Water Softener Installation" className="w-full h-auto object-cover rounded" />
        </div>

    {/* Why Choose */}
    <div>
      <SectionTitle emoji="💧">Why Choose a Domestic RO System?</SectionTitle>
      <p className="text-gray-600 text-sm leading-relaxed text-justify mb-4">
        Safe drinking water is essential for health. At <strong className="text-nav-blue">Panvi Envirotech</strong>, we offer{' '}
        <strong>high-performance Domestic Reverse Osmosis (RO) Water Purifiers</strong> designed to remove impurities, contaminants, and
        harmful dissolved solids from tap or borewell water — giving your family clean, refreshing, and safe water every day.
      </p>
      <p className="text-gray-700 text-sm font-semibold mb-3">Our RO systems provide:</p>
      <ul className="space-y-2">
        {[
          'Effective removal of dissolved salts, heavy metals, pesticides, and microbes',
          'Improved taste, clarity, and odor of water',
          'Long-lasting filters & low maintenance',
          'Compact & stylish designs suitable for kitchens',
          'Energy-efficient & easy to install',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
            <CheckIcon /><span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <hr className="border-gray-200" />

    {/* How RO Works */}
    <div>
      <SectionTitle emoji="🔴">How Domestic RO Works</SectionTitle>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Domestic RO technology uses a <strong>semipermeable membrane</strong> to filter water at the molecular level.
        The process includes:
      </p>
      <ol className="space-y-3">
        {[
          { label: 'Pre-Filtration', desc: 'Removes sediments and larger particles' },
          { label: 'Activated Carbon Filtration', desc: 'Reduces chlorine and organic contaminants' },
          { label: 'RO Membrane', desc: 'Eliminates TDS (Total Dissolved Solids), heavy metals, and bacteria' },
          { label: 'Post-Carbon/UV (Optional)', desc: 'Enhances taste & adds disinfection' },
        ].map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-600">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-nav-blue text-white text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <span><strong className="text-gray-800">{step.label}:</strong> {step.desc}</span>
          </li>
        ))}
      </ol>
      <p className="text-gray-600 text-sm mt-4">
        This layered purification ensures <strong>safe drinking water for your home</strong>.
      </p>
    </div>

    <hr className="border-gray-200" />

    {/* Brand Table */}
    <div>
      <SectionTitle emoji="🔵">Premium Drinking RO Brands &amp; Models</SectionTitle>
      <p className="text-gray-500 text-sm mb-4">
        We offer trusted RO systems from reliable manufacturers. Common choices include:
      </p>

      <div className="overflow-x-auto rounded border border-gray-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-nav-blue text-white">
              <th className="px-4 py-3 text-center font-bold w-16">SL NO.</th>
              <th className="px-4 py-3 text-left font-bold">Brand Name</th>
              {/* <th className="px-4 py-3 text-center font-bold w-32">Image</th> */}
              <th className="px-4 py-3 text-left font-bold">Specifications</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((b, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-center font-semibold text-gray-600 border-b border-gray-100">{b.sl}</td>
                <td className="px-4 py-3 font-bold text-nav-blue border-b border-gray-100 uppercase text-xs">{b.name}</td>
                {/* <td className="px-4 py-3 border-b border-gray-100 text-center">
                  {b.img ? (
                    <img src={b.img} alt={b.name} className="w-20 h-16 object-contain mx-auto" />
                  ) : (
                    <span className="text-gray-300 text-xs">—</span>
                  )}
                </td> */}
                <td className="px-4 py-3 text-gray-600 text-xs leading-relaxed border-b border-gray-100">{b.spec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <hr className="border-gray-200" />

    {/* Which Model Suits */}
    <div>
      <SectionTitle emoji="🎯">Which Model Suits Your Home?</SectionTitle>
      <div className="overflow-x-auto rounded border border-gray-200 max-w-md">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-nav-blue text-white">
              <th className="px-5 py-3 text-left font-bold">Household Size</th>
              <th className="px-5 py-3 text-left font-bold">Recommended Capacity</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1–3 People', '6–8 LPH (Litres Per Hour)'],
              ['4–5 People', '8–10 LPH'],
              ['6+ People', '10–15 LPH'],
            ].map(([size, cap], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-5 py-3 text-gray-700 font-medium border-b border-gray-100">{size}</td>
                <td className="px-5 py-3 text-primary font-bold border-b border-gray-100">{cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-400 text-xs mt-2">LPH = How many litres of purified water produced per hour.</p>
    </div>

    <hr className="border-gray-200" />

    {/* Installation & What Makes Us Different */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div>
        <SectionTitle emoji="🔧">Installation, Service &amp; Support</SectionTitle>
        <p className="text-gray-600 text-sm mb-3">We provide:</p>
        <ul className="space-y-2">
          {[
            'Professional installation',
            'Filter & cartridge replacement reminders',
            'Annual maintenance contracts',
            'Genuine spares and hot-water RO options',
            'After-sales technical support',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
              <CheckIcon /><span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionTitle emoji="💛">What Makes Panvi Envirotech Different?</SectionTitle>
        <ul className="space-y-2">
          {[
            'Expert advice to choose the right RO',
            'Quality-tested products',
            'Transparent pricing',
            'Prompt support and service',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
              <span className="text-yellow-400 text-base flex-shrink-0">💛</span><span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <hr className="border-gray-200" />

    {/* Contact */}
    <div className="bg-nav-blue rounded p-5 text-white">
      <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wide">📞 Contact Us</h2>
      <p className="text-sm text-blue-100 mb-3">Ready for safer drinking water?</p>
      <p className="text-sm font-semibold text-white mb-3">👉 Get a free consultation or quote today!</p>
      <div className="space-y-1 text-sm text-blue-100">
        <p>📍 105, 8th Cross, Vaishnavi Nagar, Kengeri, Bangalore – 560060</p>
        <p>📞 +91 99450 96328 | +91 90360 52839</p>
        <p>✉ info@panvienvirotech.com</p>
        <p>🌐 www.panvienvirotech.com</p>
      </div>
    </div>

  </div>
);

export default function DomesticROPurifier() {
  return (
    <ServiceLayout
      title="Domestic RO Water Purifiers – Pure & Safe Drinking Water"
      sidebarItems={domesticServices}
      content={content}
    />
  );
}
