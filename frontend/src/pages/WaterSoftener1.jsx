import { useState } from 'react';
import { Link } from 'react-router-dom';
import WaterSoftenerSlider from "./WaterSoftenerSlider"

/* ── Reusable Accordion ── */
function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between text-left transition-colors duration-200"
            style={{
              padding: '13px 18px',
              background: open === i ? '#1a8fd1' : '#f9fafb',
              color: open === i ? '#fff' : '#1f2937',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            <span>{item.q}</span>
            <svg
              style={{ width: 16, height: 16, flexShrink: 0, transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : 'none' }}
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div style={{ maxHeight: open === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
            <div style={{ padding: '14px 18px', background: '#fff', borderTop: '1px solid #e5e7eb', fontSize: '13px', color: '#4b5563', lineHeight: '1.7' }}>
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Check Icon ── */
const Check = () => (
  <svg style={{ width: 16, height: 16, color: '#8dc63f', flexShrink: 0, marginTop: 2 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ── Section Heading ── */
const SectionHeading = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-5">
    <span style={{ fontSize: '22px' }}>{icon}</span>
    <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '20px', color: '#2d3561' }}>{title}</h2>
  </div>
);

/* ── Product Card ── */
function ProductCard({ capacity, suitableFor, idealFor, features }) {
  return (
    <div
      className="flex flex-col h-full transition-shadow duration-200 hover:shadow-lg"
      style={{ border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}
    >
      {/* Card header */}
      <div style={{ background: 'linear-gradient(135deg, #1a8fd1 0%, #2d3561 100%)', padding: '18px 20px' }}>
        <div style={{ fontSize: '28px', marginBottom: '6px' }}>💧</div>
        <h3 style={{ color: '#8dc63f', fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '18px' }}>
          {capacity} Water Softener
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginTop: '4px' }}>✅ Domestic Series</p>
      </div>
      {/* Card body */}
      <div style={{ padding: '18px 20px', flex: 1, background: '#fff' }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Suitable for</span>
          <p style={{ fontSize: '13px', color: '#1f2937', fontWeight: 600, marginTop: '2px' }}>{suitableFor}</p>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ideal for</span>
          <p style={{ fontSize: '13px', color: '#1f2937', fontWeight: 600, marginTop: '2px' }}>{idealFor}</p>
        </div>
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2" style={{ fontSize: '13px', color: '#4b5563' }}>
              <Check /> {f}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ padding: '14px 20px', borderTop: '1px solid #e5e7eb', background: '#f9fafb' }}>
        <Link to="/contact" style={{ display: 'block', textAlign: 'center', background: '#8dc63f', color: 'white', padding: '9px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}>
          Get Quote
        </Link>
      </div>
    </div>
  );
}

/* ── FAQ Data ── */
const faqs = [
  {
    q: 'What is a water softener and how does it work?',
    a: 'A Water Softener removes hardness (Calcium & Magnesium salts) using Ion Exchange Resin Technology. Hard water passes through a resin bed that exchanges Ca²⁺ and Mg²⁺ ions with Na⁺ (sodium) ions, converting hard water into soft water suitable for domestic and industrial use. The resin is periodically regenerated using a brine (salt) solution.',
  },
  {
    q: 'What capacity water softener do I need for my home?',
    a: 'For 1–2 bathrooms, a 14-litre model is sufficient. A 35-litre model suits 2–3 bathroom independent houses, while the 50-litre model is ideal for large homes or small apartments with 3–5 bathrooms. For apartments, hotels, or commercial buildings, we offer capacities from 100L to 1000L and above.',
  },
  {
    q: 'What is the outlet hardness after treatment?',
    a: 'Our water softeners deliver outlet hardness of less than 50 ppm (as CaCO₃), regardless of inlet hardness up to 1000 ppm. This makes the treated water safe for domestic appliances, plumbing systems, geysers, washing machines, and industrial boilers/cooling towers.',
  },
  {
    q: 'How often does the softener need salt refilling?',
    a: 'Frequency depends on water hardness and consumption. On average, domestic units require salt refilling every 2–4 weeks. The system uses a brine (salt) solution for automatic regeneration. Fully automatic models self-regenerate based on usage or a timer, minimizing manual intervention.',
  },
  {
    q: 'What warranty and AMC services do you provide?',
    a: 'Panvi Envirotech provides a 4-Year Warranty on manufacturing defects (electrical parts excluded). We also offer Annual Maintenance Contracts (AMC) covering regular inspection, resin testing, valve servicing, and supply of consumables to ensure long-term performance.',
  },
];

/* ── Main Page ── */
export default function WaterSoftener1() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── PAGE BANNER ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0d1b35 0%, #1a8fd1 60%, #2d3561 100%)',
          padding: '56px 16px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative circles */}
        {[120, 220, 340].map((s, i) => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.08)',
            width: s, height: s,
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
          }} />
        ))}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ background: '#8dc63f', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 16px', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '2px' }}>
            PANVI ENVIROTECH PVT. LTD.
          </span>
          <h1 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 900, fontSize: 'clamp(26px,5vw,48px)', color: '#fff', marginTop: '16px', lineHeight: 1.2 }}>
            💧 Water Softener Systems
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', marginTop: '10px' }}>
            14L &nbsp;|&nbsp; 35L &nbsp;|&nbsp; 50L &amp; Above Capacities
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginTop: '8px', maxWidth: '620px', margin: '12px auto 0' }}>
            Hard water causing scaling in bathrooms, pipelines, geysers, and washing machines?<br/>
            Our compact and high-performance <strong style={{ color: '#8dc63f' }}>Domestic &amp; Industrial Water Softeners</strong> completely remove hardness and protect your plumbing systems.
          </p>
        </div>
      </div>

    

      {/* ── WHAT IS A WATER SOFTENER ── */}
<section style={{ background: '#fff', padding: '60px 16px' }}>
  <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '40px', alignItems: 'center' }}>
      {/* Left: Text */}
      <div>
        <SectionHeading icon="🔹" title="What is a Water Softener?" />
        <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
          A Water Softener removes hardness (Calcium &amp; Magnesium salts) using{' '}
          <strong style={{ color: '#1a8fd1' }}>Ion Exchange Resin Technology</strong>, converting hard water into soft water suitable for domestic and industrial applications.
        </p>
        <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8' }}>
          Hard water passes through resin beads that exchange hardness ions with sodium ions, delivering perfectly soft water to every tap in your home or facility.
        </p>

          {/* Info boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { val: '< 50 ppm', label: 'Outlet Hardness' },
                { val: '1000 ppm', label: 'Inlet Capacity' },
                { val: '2–4 kg/cm²', label: 'Operating Pressure' },
                { val: '4 Years', label: 'Warranty' },
              ].map((box, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? '#f0f9ff' : '#f0fdf4', border: `1px solid ${i % 2 === 0 ? '#bae6fd' : '#bbf7d0'}`, borderRadius: '8px', padding: '18px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 900, fontSize: '22px', color: i % 2 === 0 ? '#1a8fd1' : '#8dc63f' }}>{box.val}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{box.label}</div>
                </div>
              ))}
            </div>
      </div>

      {/* Right: Image Slider */}
      <WaterSoftenerSlider />
    </div>
  </div>
</section>
      

      {/* ── DOMESTIC PRODUCTS ── */}
      <section style={{ background: '#f9fafb', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ background: '#1a8fd1', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PRODUCT RANGE</span>
            <h2 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '26px', color: '#2d3561', marginTop: '14px' }}>
              🏠 Domestic Water Softeners
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
            <ProductCard
              capacity="14 Litres"
              suitableFor="1–2 Bathrooms"
              idealFor="Small homes / Villas"
              features={['Compact cabinet model', 'Automatic regeneration', 'Easy installation']}
            />
            <ProductCard
              capacity="35 Litres"
              suitableFor="2–3 Bathrooms"
              idealFor="Independent houses"
              features={['High-quality resin media', 'Fully automatic control valve', 'Low maintenance']}
            />
            <ProductCard
              capacity="50 Litres"
              suitableFor="3–5 Bathrooms"
              idealFor="Large homes / Small apartments"
              features={['Heavy-duty performance', 'Longer regeneration cycle', 'Skid-mounted / Cabinet type']}
            />
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL ── */}
      <section style={{ background: '#fff', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <SectionHeading icon="🏢" title="Commercial & Industrial Water Softeners" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '32px' }}>
            {/* Capacities */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#2d3561', marginBottom: '14px' }}>Capacities Available</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['100 Litres', '200 Litres', '500 Litres', '1000 Litres & Above', 'Customized KLD-based systems'].map((c, i) => (
                  <div key={i} className="flex items-center gap-3" style={{ padding: '10px 14px', background: '#f0f9ff', borderLeft: '3px solid #1a8fd1', fontSize: '14px', color: '#1f2937', fontWeight: 600 }}>
                    <span style={{ color: '#8dc63f', fontWeight: 900 }}>✔</span> {c}
                  </div>
                ))}
              </div>
            </div>
            {/* Suitable for */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#2d3561', marginBottom: '14px' }}>Suitable For</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {['Apartments', 'Hotels', 'Hospitals', 'Boilers', 'Cooling Towers', 'Car Wash Units', 'Textile Industries'].map((s, i) => (
                  <div key={i} className="flex items-center gap-2" style={{ fontSize: '13px', color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: '4px', border: '1px solid #e5e7eb' }}>
                    <span style={{ color: '#8dc63f' }}>✔</span> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECS + FEATURES ── */}
      <section style={{ background: '#f9fafb', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '32px' }}>
          {/* Tech Specs */}
          <div>
            <SectionHeading icon="🔧" title="Technical Specifications" />
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
              {[
                ['Inlet Hardness', 'Up to 1000 ppm'],
                ['Outlet Hardness', '< 50 ppm'],
                ['Operating Pressure', '2 – 4 kg/cm²'],
                ['Regeneration', 'Brine (Salt Based)'],
                ['Vessel Material', 'FRP / MS / SS'],
                ['Control Valve', 'Manual / Automatic'],
              ].map(([key, val], i) => (
                <div key={i} className="flex items-center justify-between" style={{ padding: '11px 16px', background: i % 2 === 0 ? '#fff' : '#f9fafb', borderBottom: i < 5 ? '1px solid #e5e7eb' : 'none' }}>
                  <span style={{ fontSize: '13px', color: '#6b7280' }}>{key}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a8fd1' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <SectionHeading icon="🌟" title="Key Features" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['High-Quality Imported Resin', 'Fully Automatic Operation', 'Compact & Elegant Design', 'Long Service Life', 'Energy Efficient', 'Easy Salt Refilling'].map((f, i) => (
                <div key={i} className="flex items-center gap-3" style={{ padding: '10px 14px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                  <Check /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <SectionHeading icon="🎯" title="Benefits of Installing" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Prevents scale formation', 'Increases life of plumbing & appliances', 'Improves soap efficiency', 'Softer skin & hair', 'Reduces maintenance cost'].map((b, i) => (
                <div key={i} className="flex items-center gap-3" style={{ padding: '10px 14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                  <Check /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section style={{ background: '#fff', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <SectionHeading icon="📦" title="What We Offer" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '16px' }}>
            {[
              { icon: '🚚', label: 'Supply' },
              { icon: '🔩', label: 'Installation' },
              { icon: '⚙️', label: 'Commissioning' },
              { icon: '🛠️', label: 'AMC Services' },
              { icon: '🛡️', label: '4 Years Warranty' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#8dc63f'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
              >
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#2d3561' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '12px' }}>
            * 4 Years Warranty on manufacturing defects only — Electrical parts excluded
          </p>
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
              Everything you need to know about our water softener systems, installation, maintenance, and warranty.
            </p>
            {/* Contact card */}
            <div style={{ background: 'linear-gradient(135deg, #1a8fd1, #2d3561)', borderRadius: '8px', padding: '24px', color: '#fff' }}>
              <div style={{ fontSize: '22px', marginBottom: '10px' }}>📞</div>
              <h3 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '16px', marginBottom: '12px' }}>Contact Us</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.8', opacity: 0.9 }}>
                📍 105, 8th Cross, Vaishnavi Nagar,<br />
                Kengeri, Bangalore – 560060<br />
                📞 +91 99450 96328 | +91 90360 52839<br />
                📧 info@panvienvirotech.com<br />
                🌐 www.panvienvirotech.com
              </p>
              <Link to="/contact" style={{ display: 'inline-block', marginTop: '14px', background: '#8dc63f', color: 'white', padding: '9px 20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '3px', textDecoration: 'none' }}>
                Get Free Quote
              </Link>
            </div>
          </div>
          <div>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      {/* <section style={{ background: '#8dc63f', padding: '40px 16px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <h3 style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff' }}>
              Protect Your Home from Hard Water Today
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>
              Get a free site assessment and customized water softener recommendation.
            </p>
          </div>
          <Link to="/contact"
            style={{ background: '#2d3561', color: 'white', padding: '12px 28px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.background = '#0d1b35'}
            onMouseLeave={e => e.currentTarget.style.background = '#2d3561'}
          >
            Contact Us Now
          </Link>
        </div>
      </section> */}
    </div>
  );
}