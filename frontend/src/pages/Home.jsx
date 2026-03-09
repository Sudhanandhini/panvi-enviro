import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1400&q=80',
    title: 'Waste Water Treatment Plants',
    sub: 'STP • ETP • CETP • ZLD Solutions',
  },
  {
    bg: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80',
    title: 'Water Treatment Plant – WTP',
    sub: 'Industrial RO • Water Softener • DM Plant',
  },
  {
    bg: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=1400&q=80',
    title: 'Environmental Health & Safety',
    sub: 'Operation & Maintenance • AMC Services',
  },
];

const services = [
  {
    img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&q=80',
    title: 'Effluent Treatment Plant (ETP)',
    desc: 'Effluent Treatment Plant is a facility in which a combination of various processes (e.g., physical, chemical and biological) are used to treat industrial wastewater and remove pollutants.',
  },
  {
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
    title: 'Sewage Treatment Plant (STP)',
    desc: 'Sewage is the waste generated from residential, institutional, commercial and industrial establishments. STP plans treats the sewage to make it fit for safe disposal, agriculture use or domestic use in toilets etc.',
  },
  {
    img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&q=80',
    title: 'Zero Liquid Discharge Plant (ZLD)',
    desc: 'It is used to evaporate the residue water from MFF concentrated liquid and generate dry salt for disuse. MCC concentrated liquid have large amounts of water content which is not possible to dispose so salt dryer is used after MFF to reclaim water content from MFF concentrated liquid.',
  },
  {
    img: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=400&q=80',
    title: 'Industrial & Commercial RO Plant',
    desc: 'Effluent Treatment Plant is a facility in which a combination of various processes (e.g., physical chemical and biological) are used to treat industrial wastewater and remove pollutants.',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.bg} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/60 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-3" style={{fontFamily:'Raleway,sans-serif'}}>
                {slide.title}
              </h1>
              <p className="text-gray-200 text-lg">{slide.sub}</p>
            </div>
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-white/60'}`}/>
          ))}
        </div>
        {/* Arrows */}
        <button onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
          ‹
        </button>
        <button onClick={() => setCurrent(c => (c + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
          ›
        </button>
      </div>

      {/* About Section */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-nav-blue text-white text-xs font-semibold px-4 py-1 uppercase tracking-widest">ABOUT US</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4" style={{fontFamily:'Raleway,sans-serif'}}>
              We do things <span className="text-primary italic">differently</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              <strong className="text-nav-blue">PANVI</strong> Serve is a Environmental Health and Safety service provider and offering various kind of high quality services in and around Karnataka. The team consists of qualified and well trained professionals with extensive experience.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {['Best Materials','Latest Design','Digital Mechines','Best Materials'].map((f,i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-primary text-lg">✦</span> {f}
                </div>
              ))}
            </div>
            <Link to="/company-profile" className="inline-block bg-secondary text-white px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-secondary-light transition-colors duration-200">
              Learn More
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80"
              alt="Water Treatment"
              className="w-full h-72 object-cover rounded"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary flex items-center justify-center">
              <div className="text-white text-center">
                <div className="font-black text-2xl">15+</div>
                <div className="text-xs">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-nav-blue text-white text-xs font-semibold px-4 py-1 uppercase tracking-widest">TOP IN SECTOR</span>
            <h2 className="text-primary text-3xl font-bold mt-4" style={{fontFamily:'Raleway,sans-serif'}}>Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
            {services.map((s, i) => (
              <div key={i} className={`flex gap-0 border ${i % 2 === 0 ? 'border-r border-b border-gray-200' : 'border-b border-gray-200'}`}>
                <div className="w-40 flex-shrink-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" style={{minHeight:'140px'}} />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-secondary text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="footer-bg py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-nav-blue text-white text-xs font-semibold px-4 py-1 uppercase tracking-widest">TESTIMONIALS</span>
          <h2 className="text-white text-3xl font-bold mt-4 mb-10" style={{fontFamily:'Raleway,sans-serif'}}>
            Love from <span className="text-primary">Clients</span>
          </h2>
          <div className="bg-white/10 border border-white/20 rounded p-10 relative">
            <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
              "Panvi Enviro Tech provided excellent service for our effluent treatment plant. Their team of professionals delivered quality work with timely execution and outstanding after-sales support."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">JD</div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">John Doe</p>
                <p className="text-gray-400 text-xs">Plant Manager, Hikal Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
