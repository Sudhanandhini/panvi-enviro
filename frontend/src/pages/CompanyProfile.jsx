import about from "../assets/about-image-side.jpg"
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

function StatCard({ label }) {
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
      <div className="text-primary font-black text-3xl mb-2">{count}%</div>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}

export default function CompanyProfile() {
  const stats = [
    { label: 'latest and best technologies' },
    { label: 'Very competetive price' },
    { label: 'Experienced and expert team' },
    { label: 'Latest products with best quality' },
    { label: 'Exceptional after sale' },
    { label: 'Flawless execution and start up' },
    { label: 'Service and support' },
    { label: 'satisfied customers' },
  ];

  return (
    <div>
    

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Best Service Provider */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-5" style={{fontFamily:'Raleway,sans-serif'}}>
              We are Best Service Provider!
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              <strong className="text-nav-blue">PANVI</strong> Serve is a Environmental Health and Safety service provider and offering various kind of high quality services in and around Karnataka. The team consists of qualified and well trained professionals with extensive experience.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong className="text-nav-blue">PANVI Enviro Tech</strong> EHS Guidelines contain information on Cross-cutting, <strong>Environmental, Health, and Safety</strong> issues potentially applicable to all industry sectors.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 gap-2">
              <img
                src={about}
                alt="Water Treatment"
                className="w-full h-full object-cover"
              />
           
            </div>
        
          </div>
        </div>

        {/* Why Us */}
        <div className="mb-14">
          <h2 className="text-primary text-2xl font-bold mb-2" style={{fontFamily:'Raleway,sans-serif'}}>Why Us?</h2>
          <p className="text-gray-600 text-sm mb-8">
            Our <strong>Waste Water Treatment Plants & Waste Management Products</strong> are the best choice for you because of the following factors:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <StatCard key={i} label={s.label} />
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
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
