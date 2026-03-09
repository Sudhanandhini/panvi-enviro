import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Accordion ── */
function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between text-left transition-colors duration-200"
            style={{ padding: '13px 18px', background: open === i ? '#1a8fd1' : '#f9fafb', color: open === i ? '#fff' : '#1f2937', fontWeight: 600, fontSize: '14px' }}
          >
            <span>{item.q}</span>
            <svg style={{ width: 16, height: 16, flexShrink: 0, transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : 'none' }}
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div style={{ maxHeight: open === i ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
            <div style={{ padding: '14px 18px', background: '#fff', borderTop: '1px solid #e5e7eb', fontSize: '13px', color: '#4b5563', lineHeight: '1.7' }}>
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Check = ({ color = '#8dc63f' }) => (
  <svg style={{ width: 15, height: 15, color, flexShrink: 0, marginTop: 2 }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ── How RO Works steps ── */
const roSteps = [
  { num: 1, label: 'Pre-Filtration', desc: 'Removes sediments and larger particles to protect the RO membrane.' },
  { num: 2, label: 'Activated Carbon Filtration', desc: 'Reduces chlorine, bad taste, odour, and organic contaminants.' },
  { num: 3, label: 'RO Membrane', desc: 'Eliminates TDS, heavy metals, bacteria, and dissolved impurities at molecular level.' },
  { num: 4, label: 'Post-Carbon / UV (Optional)', desc: 'Enhances taste and adds final disinfection for ultra-safe drinking water.' },
];

/* ── RO Brand Cards ── */
const brands = [
  {
    name: 'AquaGuard Sterling RO',
    icon: '💎',
    highlights: ['7-stage purification', 'TDS controller', 'Sleek digital design'],
  },
  {
    name: 'Kent Grand Plus',
    icon: '⭐',
    highlights: ['Double purification', 'Glass-lined storage tank', 'High recovery rate'],
  },
  {
    name: 'Pureit Ultima RO',
    icon: '🛡️',
    highlights: ['Auto-shutoff feature', 'Mineral booster', 'Child lock safety'],
  },
  {
    name: 'Livpure Glo',
    icon: '💡',
    highlights: ['UV + UF + RO combination', 'Smart LED indicators', 'Wall mountable'],
  },
];

/* ── Capacity Table Data ── */
const capacityData = [
  { size: '1–3 People', cap: '6–8 LPH' },
  { size: '4–5 People', cap: '8–10 LPH' },
  { size: '6+ People', cap: '10–15 LPH' },
];

/* ── FAQ Data ── */
const faqs = [
  {
    q: 'What does RO purification remove from water?',
    a: 'Reverse Osmosis effectively removes TDS (Total Dissolved Solids), heavy metals (lead, arsenic, chromium, mercury), nitrates, fluorides, pesticides, bacteria, viruses, and most dissolved organic compounds. It achieves 90–99% rejection of dissolved salts, making water safe for drinking and cooking.',
  },
  {
    q: 'What does LPH mean, and how do I choose the right capacity?',
    a: 'LPH stands for Litres Per Hour – the volume of purified water the RO system can produce in one hour. For 1–3 people, a 6–8 LPH unit is sufficient. Families of 4–5 should choose 8–10 LPH, and larger families (6+) need 10–15 LPH. Usage pattern, storage tank size, and source water TDS also influence selection.',
  },
  {
    q: 'How often should RO filters be replaced?',
    a: 'Sediment and carbon pre-filters typically need replacement every 6–12 months. The RO membrane lasts 2–3 years depending on water quality and usage. Post-carbon filters are replaced annually. Panvi Envirotech provides timely filter replacement reminders and AMC services to ensure your system always delivers safe water.',
  },
  {
    q: 'Is RO water healthy for daily consumption?',
    a: 'Yes. Modern RO systems include a TDS controller or mineral cartridge that retains essential minerals (calcium, magnesium) while removing harmful impurities. This ensures the water is not just pure but also minerally balanced for healthy daily consumption by your family.',
  },
  {
    q: 'What is included in your AMC (Annual Maintenance Contract)?',
    a: 'Our AMC covers regular servicing visits, pre-filter and post-carbon replacements, membrane performance testing, UV lamp replacement (if applicable), sanitization of storage tank, and inspection of all fittings and connections. We also supply genuine spare parts and provide priority technical support throughout the contract period.',
  },
];

/* ── Main Page ── */
export default function DomesticROPurifiers() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── PAGE BANNER ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1b35 0%, #1a8fd1 60%, #2d3561 100%)',
        padding: '56px 16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {[100, 200, 320].map((s, i) => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.07)',
            width: s, height: s,
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
          }} />
        ))}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ background: '#8dc63f', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 16px', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '2px' }}>
            PANVI ENVIROTECH PVT. LTD.
          </span>
          <h1 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,5vw,46px)', color: '#fff', marginTop: '16px', lineHeight: 1.2 }}>
            🌊 Domestic RO Water Purifiers
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '8px' }}>
            Pure &amp; Safe Drinking Water for Your Family
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', maxWidth: '620px', margin: '12px auto 0', lineHeight: '1.7' }}>
            High-performance Domestic Reverse Osmosis (RO) Water Purifiers designed to remove impurities, contaminants, and dissolved solids — giving your family clean, refreshing, and safe water every day.
          </p>
        </div>
      </div>

      {/* ── WHY CHOOSE RO ── */}
      <section style={{ background: '#fff', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span style={{ background: '#1a8fd1', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>WHY CHOOSE RO?</span>
              <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '24px', color: '#2d3561', marginTop: '14px', marginBottom: '20px' }}>
                Why Choose a <span style={{ color: '#1a8fd1' }}>Domestic RO System?</span>
              </h2>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Safe drinking water is essential for health. At <strong style={{ color: '#1a8fd1' }}>Panvi Envirotech</strong>, our RO purifiers deliver clean, refreshing, and safe water every day for your family.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Effective removal of dissolved salts, heavy metals, pesticides, and microbes',
                  'Improved taste, clarity, and odor of water',
                  'Long-lasting filters & low maintenance',
                  'Compact & stylish designs suitable for kitchens',
                  'Energy-efficient & easy to install',
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5" style={{ fontSize: '13px', color: '#374151' }}>
                    <Check /> {b}
                  </div>
                ))}
              </div>
            </div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { val: '99%', label: 'TDS Removal', bg: '#f0f9ff', border: '#bae6fd', col: '#1a8fd1' },
                { val: '4-Stage', label: 'Purification Process', bg: '#f0fdf4', border: '#bbf7d0', col: '#8dc63f' },
                { val: '6–15 LPH', label: 'Capacity Range', bg: '#fefce8', border: '#fde68a', col: '#d97706' },
                { val: 'AMC', label: 'Annual Maintenance', bg: '#fdf4ff', border: '#e9d5ff', col: '#9333ea' },
              ].map((s, i) => (
                <div key={i} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 900, fontSize: '22px', color: s.col }}>{s.val}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW RO WORKS ── */}
      <section style={{ background: '#f9fafb', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ background: '#1a8fd1', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>THE PROCESS</span>
            <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '26px', color: '#2d3561', marginTop: '14px' }}>
              🧠 How Domestic RO Works
            </h2>
            <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>
              A layered purification process ensuring <strong style={{ color: '#1a8fd1' }}>safe drinking water for your home</strong>
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '24px' }}>
            {roSteps.map((step, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Connector line */}
                {i < roSteps.length - 1 && (
                  <div style={{ display: 'none' }} className="md:block absolute top-8 right-0 w-1/2 h-0.5 bg-primary z-0" />
                )}
                <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '24px 20px', position: 'relative', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  {/* Step number */}
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'linear-gradient(135deg,#1a8fd1,#2d3561)',
                    color: '#fff', fontFamily: 'Raleway,sans-serif', fontWeight: 900, fontSize: '18px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 14px',
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 700, fontSize: '15px', color: '#2d3561', marginBottom: '8px' }}>{step.label}</h3>
                  <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.6' }}>{step.desc}</p>
                  {i === 2 && (
                    <span style={{ display: 'inline-block', marginTop: '10px', background: '#8dc63f', color: 'white', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '100px' }}>CORE STAGE</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND MODELS ── */}
      <section style={{ background: '#fff', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ background: '#1a8fd1', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PRODUCT RANGE</span>
            <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '26px', color: '#2d3561', marginTop: '14px' }}>
              💧 Premium Drinking RO Brands &amp; Models
            </h2>
            <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '6px' }}>We offer trusted RO systems from reliable manufacturers</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px' }}>
            {brands.map((brand, i) => (
              <div
                key={i}
                style={{ border: '2px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a8fd1'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,143,209,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ background: 'linear-gradient(135deg,#f0f9ff,#fff)', padding: '24px 20px', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>{brand.icon}</div>
                  <h3 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '15px', color: '#2d3561' }}>{brand.name}</h3>
                </div>
                <div style={{ padding: '16px 20px' }}>
                  {brand.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2" style={{ fontSize: '13px', color: '#374151', padding: '5px 0', borderBottom: j < brand.highlights.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                      <Check /> {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '16px' }}>
            * Replace/Update according to available brands you supply.
          </p>
        </div>
      </section>

      {/* ── CAPACITY TABLE ── */}
      <section style={{ background: '#f9fafb', padding: '60px 16px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '24px', color: '#2d3561' }}>
              🏡 Which Model Suits Your Home?
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '6px' }}>LPH = Litres Per Hour of purified water produced</p>
          </div>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'linear-gradient(135deg,#1a8fd1,#2d3561)' }}>
              {['Household Size', 'Recommended Capacity'].map((h, i) => (
                <div key={i} style={{ padding: '14px 20px', color: '#fff', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</div>
              ))}
            </div>
            {capacityData.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: i % 2 === 0 ? '#fff' : '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ padding: '14px 20px', fontSize: '14px', color: '#374151', fontWeight: 500 }}>{row.size}</div>
                <div style={{ padding: '14px 20px', fontSize: '14px', color: '#1a8fd1', fontWeight: 700 }}>{row.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE & SUPPORT ── */}
      <section style={{ background: '#fff', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '32px' }}>
          {/* Installation & Service */}
          <div>
            <span style={{ fontSize: '20px' }}>🔧</span>
            <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '20px', color: '#2d3561', marginTop: '8px', marginBottom: '16px' }}>
              Installation, Service &amp; Support
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Professional installation',
                'Filter & cartridge replacement reminders',
                'Annual maintenance contracts',
                'Genuine spares and hot-water RO options',
                'After-sales technical support',
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3" style={{ padding: '10px 14px', background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '6px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                  <Check /> {s}
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Us Different */}
          <div>
            <span style={{ fontSize: '20px' }}>💡</span>
            <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '20px', color: '#2d3561', marginTop: '8px', marginBottom: '16px' }}>
              What Makes Panvi Different?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '🌟', text: 'Expert advice to choose the right RO' },
                { icon: '🌟', text: 'Quality-tested products from trusted brands' },
                { icon: '🌟', text: 'Transparent pricing – no hidden charges' },
                { icon: '🌟', text: 'Prompt support and quick service response' },
              ].map((d, i) => (
                <div key={i} style={{ padding: '14px 16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: '#374151' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{d.icon}</span>
                  <span>{d.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section style={{ background: '#f9fafb', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'start' }}>
          <div>
            <span style={{ background: '#1a8fd1', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>FAQ</span>
            <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '24px', color: '#2d3561', marginTop: '14px', marginBottom: '12px' }}>
              Frequently Asked <span style={{ color: '#8dc63f' }}>Questions</span>
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.7', marginBottom: '24px' }}>
              Everything you need to know about our RO systems, filtration stages, maintenance, and how to choose the right purifier for your home.
            </p>
            {/* CTA card */}
            <div style={{ background: 'linear-gradient(135deg, #8dc63f, #6fa027)', borderRadius: '8px', padding: '24px' }}>
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>💧</div>
              <h3 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '16px', color: '#fff', marginBottom: '10px' }}>
                Ready for Safer Drinking Water?
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', marginBottom: '14px' }}>
                📍 105, 8th Cross, Vaishnavi Nagar,<br />
                Kengeri, Bangalore – 560060<br />
                📞 +91 99450 96328 | +91 90360 52839<br />
                📧 info@panvienvirotech.com
              </p>
              <Link to="/contact" style={{ display: 'inline-block', background: '#2d3561', color: 'white', padding: '9px 20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '3px', textDecoration: 'none' }}>
                Get Free Consultation
              </Link>
            </div>
          </div>
          <div>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      {/* <section style={{ background: 'linear-gradient(135deg,#0d1b35,#1a8fd1)', padding: '40px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <h3 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff' }}>
              👉 Get a Free Consultation or Quote Today!
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>
              Our experts will help you select the perfect RO system for your family's needs.
            </p>
          </div>
          <Link to="/contact"
            style={{ background: '#8dc63f', color: 'white', padding: '12px 28px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0, textDecoration: 'none', borderRadius: '3px' }}
            onMouseEnter={e => e.currentTarget.style.background = '#6fa027'}
            onMouseLeave={e => e.currentTarget.style.background = '#8dc63f'}
          >
            Contact Us Now
          </Link>
        </div>
      </section> */}
    </div>
  );
}