import about from "../assets/about.jpg"
import vis from "../assets/our-mission.jpg"
import mis from "../assets/our-vision.jpg"
import { useState, useEffect, useRef } from "react"

function useCounterAnimation(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ label, icon }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const count = useCounterAnimation(100, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-2 border-gray-200 rounded p-5 text-center hover:border-primary transition-colors duration-200">
      {icon && <div className="text-2xl mb-2">{icon}</div>}
      <div className="text-primary font-black text-3xl mb-2">{count}%</div>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}

function SectionDivider() {
  return <div className="border-t border-gray-200 my-14" />;
}

export default function CompanyProfile() {
  const whyStats = [
    { label: 'Cutting-Edge Technology', icon: '⚙️' },
    { label: 'Cost-Effective Solutions', icon: '💰' },
    { label: 'Expert Team', icon: '👷' },
    { label: 'Premium Quality Products', icon: '🏆' },
    { label: 'End-to-End Support', icon: '🔧' },
    { label: 'Seamless Project Execution', icon: '📋' },
    { label: 'Customer Satisfaction', icon: '😊' },
    { label: 'Reliable & Sustainable', icon: '🌿' },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'ISO 14001:2015 Certified',
    'MSME Registered',
    'GST',
    'PAN',
    'AOA',
    'MQeF',
    'EPFO',
    'IEC – Import & Export',
    'All documents government verified certificate.',
  ];

  const expertise = [
    {
      title: 'Design & Engineering',
      icon: '🏗️',
      points: [
        'Design, supply, erection, and commissioning of ETP, STP, MEE, RO, and Water Softener systems',
        'Customized treatment solutions based on wastewater characteristics',
        'Advanced technologies for efficient treatment and water reuse',
      ],
    },
    {
      title: 'Operation & Maintenance (O&M)',
      icon: '🔩',
      points: [
        'Professional operation and maintenance services for ETP, STP, and ZLD plants',
        'Performance monitoring and process optimization',
        'Preventive maintenance and troubleshooting support',
      ],
    },
    {
      title: 'Environmental Consultancy',
      icon: '📄',
      points: [
        'Assistance for Consent for Establishment (CTE)',
        'Consent for Operation (CTO)',
        'Consent Renewal',
        'Factory License approvals (DISH)',
        'Complete regulatory compliance support',
      ],
    },
    {
      title: 'Environmental Monitoring & Compliance',
      icon: '🔬',
      points: [
        'Environmental monitoring services',
        'Compliance documentation and reporting',
        'Support for regulatory inspections and audits',
      ],
    },
    {
      title: 'Treatability Studies & Technical Support',
      icon: '🧪',
      points: [
        'Wastewater treatability studies',
        'Pilot trials for complex effluents',
        'Process troubleshooting and plant performance improvement',
      ],
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* ── About PANVI ── */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
              About PANVI ENVIRO TECH Pvt. Ltd.
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              <strong className="text-nav-blue">PANVI ENVIRO TECH PVT. LTD.</strong> is a leading environmental engineering company specializing in the{' '}
              <strong>design, supply, installation, and commissioning</strong> of advanced water and wastewater treatment systems. Our expertise includes{' '}
              <strong>Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), Reverse Osmosis (RO), Zero Liquid Discharge (ZLD) systems, and sludge management solutions</strong>.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              With a strong commitment to <strong>environmental sustainability, operational efficiency, and regulatory compliance</strong>, we provide reliable and cost-effective solutions tailored to meet the requirements of industrial and commercial sectors.
            </p>
          </div>
          <div>
            <img
              src={about}
              alt="Water Treatment"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        <SectionDivider />

        {/* ── Our Expertise ── */}
        <div className="mb-14">
          <h2 className="text-primary text-2xl font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Expertise</h2>
          <p className="text-gray-600 text-sm mb-8">
            With <strong>15+ years of experience</strong> in <strong>Environmental Research & Development, Industrial Pollution Control, and Statutory Compliance</strong>, we deliver complete environmental solutions from concept to commissioning.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((exp, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{exp.icon}</span>
                  <h3 className="text-nav-blue font-bold text-base">{exp.title}</h3>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: pt.replace(/(ETP|STP|MEE|RO|Water Softener systems|ZLD|CTE|CTO|DISH)/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ── Why PANVI Enviro Tech ── */}
        <div className="mb-14">
          <h2 className="text-primary text-2xl font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Why PANVI Enviro Tech Pvt Ltd?</h2>
          <p className="text-gray-600 text-sm mb-8">
            Choosing <strong>PANVI</strong> means choosing <strong>reliability, innovation, and excellence</strong> in water and waste management solutions. Here's why our clients trust us:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {whyStats.map((s, i) => (
              <StatCard key={i} label={s.label} icon={s.icon} />
            ))}
          </div>

          {/* Detailed Why Points */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Cutting-Edge Technology', desc: 'We use the latest and most efficient technologies to deliver superior water and waste treatment solutions.' },
                { title: 'Cost-Effective Solutions', desc: 'Top-quality systems at highly competitive prices.' },
                { title: 'Expert Team', desc: 'A skilled and experienced team ensures flawless execution and operation.' },
                { title: 'Premium Quality Products', desc: 'Only high-performance, durable, and reliable products are used.' },
                { title: 'End-to-End Support', desc: 'From installation to after-sales service, we are with you every step of the way.' },
                { title: 'Seamless Project Execution', desc: 'Flawless planning, implementation, and startup for every project.' },
                { title: 'Customer Satisfaction', desc: 'Our ultimate goal is to exceed client expectations, proven by our long list of satisfied customers.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary font-bold mt-0.5">✔</span>
                  <span><strong className="text-nav-blue">{item.title}</strong> – {item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm mt-5 font-medium">
              With PANVI, you're not just choosing a service provider—you're choosing a <strong>trusted partner for sustainable water and waste management</strong>.
            </p>
          </div>
        </div>

        <SectionDivider />

        {/* ── Our Commitment ── */}
        <div className="mb-14">
          <h2 className="text-primary text-2xl font-bold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Commitment</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            At <strong className="text-nav-blue">PANVI ENVIRO TECH PVT. LTD.</strong>, we are committed to delivering <strong>high-quality environmental solutions</strong> that ensure:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
            {[
              { icon: '🏭', text: 'Reliable plant performance' },
              { icon: '💧', text: 'Efficient water and wastewater management' },
              { icon: '♻️', text: 'Long-term operational sustainability' },
              { icon: '📋', text: 'Compliance with CPCB and SPCB environmental regulations' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 text-center hover:border-primary transition-colors duration-200">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Our team of qualified professionals works closely with clients to provide <strong>innovative, practical, and cost-effective environmental solutions</strong>.
          </p>
        </div>

        <SectionDivider />

        {/* ── Certifications & License ── */}
        <div className="mb-14">
          <h2 className="text-primary text-2xl font-bold mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>Certifications &amp; License</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {certifications.map((cert, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-lg p-3 text-center hover:border-primary transition-colors duration-200">
                <div className="text-2xl mb-1">🏅</div>
                <p className="text-gray-700 text-xs font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ── Vision & Mission ── */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src={vis}
              alt="Vision"
              className="w-48 h-auto object-cover mx-auto mb-4 rounded"
            />
            <h3 className="text-primary font-bold text-lg mb-3 tracking-widest">OUR VISION</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We manage our organization and water resources to meet evolving regulatory requirements, water supply needs and customer expectations in the future. We aim to be globally recognised as first choice for <strong>Water, Waste Water</strong> services in the following communities.
            </p>
          </div>
          <div className="text-center">
            <img
              src={mis}
              alt="Mission"
              className="w-48 h-auto object-cover mx-auto mb-4 rounded"
            />
            <h3 className="text-primary font-bold text-lg mb-3 tracking-widest">OUR MISSION</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to consistantly provide a comprehensive range of high quality, cost effective and sustainable water treatment products and services to our valued customers, in order to satisfy their specific water service delivery needs and objectives.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}