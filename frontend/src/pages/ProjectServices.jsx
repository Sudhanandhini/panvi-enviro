const SectionTitle = ({ number, title, color }) => (
  <h2
    className={`text-2xl font-bold mb-6 ${color || 'text-primary'}`}
    style={{fontFamily:'Raleway,sans-serif'}}
  >
    {number}. {title}
  </h2>
);

const NumBadge = ({ n }) => (
  <span className="inline-flex w-7 h-7 rounded-full bg-primary text-white text-xs font-bold items-center justify-center flex-shrink-0 mr-3">
    {n}
  </span>
);

export default function ProjectServices() {
  const wasteWaterPlants = [
    { label: 'Sewage Treatment Plant (STP)', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80' },
    { label: 'Effluent Treatment Plant (ETP)', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&q=80' },
    { label: 'Common Effluent Treatment Plant (CETP)', img: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&q=80' },
    { label: 'Zero Liquid Discharge Plant (ZLD)', img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&q=80' },
    { label: 'Rain Water Harvesting System', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  ];

  const waterTreatment = [
    { label: 'Industrial & Commercial RO Plant', img: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=400&q=80' },
    { label: 'Water Softener', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80' },
    { label: 'Demineralisation Plant/DM Plant-MB Plant', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&q=80' },
  ];

  const omItems = ['STP', 'ETP', 'WTP', 'MEE', 'ZLD', 'OTHERS'];

  const revampLeft = ['ACF & PSF Media Replacements', 'Pumps', 'Blowers', 'Diffusers', 'Plant Equipment'];
  const revampRight = ['Electrical Items', 'Mechanical Items', 'Bio-Culture', 'Others'];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-100 py-6 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-secondary">Project & Services</h1>
          <p className="text-sm text-gray-500 mt-1">Home / Project & Services</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">

        {/* 1. Waste Water Treatment Plants */}
        <section>
          <SectionTitle number="1" title="Waste Water Treatment Plants" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-2">
            {wasteWaterPlants.slice(0, 3).map((p, i) => (
              <div key={i}>
                <img src={p.img} alt={p.label} className="w-full h-44 object-cover rounded mb-2 shadow-sm" />
                <p className="text-sm text-gray-700">{p.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6">
            {wasteWaterPlants.slice(3).map((p, i) => (
              <div key={i}>
                <img src={p.img} alt={p.label} className="w-full h-44 object-cover rounded mb-2 shadow-sm" />
                <p className="text-sm text-gray-700">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200"></div>

        {/* 2. Water Treatment Plant */}
        <section>
          <SectionTitle number="2" title="Water Treatment Plant – WTP" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {waterTreatment.map((p, i) => (
              <div key={i}>
                <img src={p.img} alt={p.label} className="w-full h-44 object-cover rounded mb-2 shadow-sm" />
                <p className="text-sm text-gray-700">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200"></div>

        {/* 3. O&M */}
        <section>
          <SectionTitle number="3" title="Operation and Maintenance (O & M), AMC" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&q=80"
                alt="O&M"
                className="w-full h-56 object-cover rounded shadow-sm"
              />
            </div>
            <div className="space-y-3">
              {omItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <NumBadge n={i + 1} />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200"></div>

        {/* 4. Calibrations */}
        <section>
          <SectionTitle number="4" title="Calibrations and Services" />
          <p className="text-gray-600 text-sm leading-relaxed">
            We provide comprehensive calibration and service support for all types of water and wastewater treatment equipment, ensuring optimal performance, regulatory compliance, and operational efficiency across all plant systems.
          </p>
        </section>

        <div className="border-t border-gray-200"></div>

        {/* 5. Supply */}
        <section>
          <h2
            className="text-2xl font-bold mb-4 text-secondary"
            style={{fontFamily:'Raleway,sans-serif'}}
          >
            5. Supply of Spares & Trouble Shooting Services and Chemicals
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We supply genuine spare parts, troubleshooting services, and chemicals for all major water and wastewater treatment systems. Our rapid response team ensures minimum downtime and maximum plant availability.
          </p>
        </section>

        <div className="border-t border-gray-200"></div>

        {/* 6. Revamping */}
        <section>
          <h2
            className="text-2xl font-bold mb-6 text-primary"
            style={{fontFamily:'Raleway,sans-serif'}}
          >
            6. Revamping and Optimization
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {revampLeft.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <NumBadge n={i + 1} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {revampRight.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <NumBadge n={i + 1} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
