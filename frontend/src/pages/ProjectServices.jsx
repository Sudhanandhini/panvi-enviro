import img1 from "../assets/STP-1.jpg"
import img2 from "../assets/ETP-1.jpg"
import img3 from "../assets/CETP-1.jpg"
import img4 from "../assets/ZLD-1.jpg"
import img5 from "../assets/rainwater.jpg"
import img6 from "../assets/RO-plant.jpg"
import img7 from "../assets/watersoftner.jpg"
import img8 from "../assets/demineralization.jpg"
import img9 from "../assets/CETP.jpg"

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
    { label: 'Sewage Treatment Plant (STP)', img: img1 },
    { label: 'Effluent Treatment Plant (ETP)', img: img2 },
    { label: 'Common Effluent Treatment Plant (CETP)', img: img3 },
    { label: 'Zero Liquid Discharge Plant (ZLD)', img: img4 },
    { label: 'Rain Water Harvesting System', img: img5 },
  ];

  const waterTreatment = [
    { label: 'Industrial & Commercial RO Plant', img: img6 },
    { label: 'Water Softener', img: img7 },
    { label: 'Demineralisation Plant/DM Plant-MB Plant', img: img8 },
  ];

  const omItems = ['STP', 'ETP', 'WTP', 'MEE', 'ZLD', 'OTHERS'];

  const revampLeft = ['ACF & PSF Media Replacements', 'Pumps', 'Blowers', 'Diffusers', 'Plant Equipment'];
  const revampRight = ['Electrical Items', 'Mechanical Items', 'Bio-Culture', 'Others'];

  return (
    <div>
      

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
                src={img9}
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
