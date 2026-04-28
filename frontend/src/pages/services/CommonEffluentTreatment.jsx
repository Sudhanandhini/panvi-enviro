import { useState, useEffect, useRef } from 'react';
import ServiceLayout, { wasteWaterServices } from '../../components/ServiceLayout';
import img1 from "../../assets/cetp.jpg";
import img2 from "../../assets/cetp1.jpg";
import img3 from "../../assets/cetp2.jpg";

const slides = [img2, img3, img1];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    clearInterval(timerRef.current);
    setCurrent(index);
    startTimer();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden rounded mb-8" style={{ height: '320px' }}>
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`CETP slide ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i === current ? '#8dc63f' : 'rgba(255,255,255,0.6)' }}
          />
        ))}
      </div>
    </div>
  );
}

const content = (
  <div>
    <ImageSlider />

    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        The pollution that we see in today's world implies that there is a huge need for wastewater management
        in all industries that produce effluents. Effluents are basically included all the domestic sewage and
        the industrial wastewaters that are produced in an industrial plant. The need for a solution that
        includes different steps of collection, conveying, treatment and the final disposition of the effluents
        from the different industrial districts, has given rise to the concept of common effluent treatment
        plants (CETP) mainly for small and medium scale industries.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Before having CETP implemented, sometimes the effluent from the industries needs to be given preliminary
        treatment, which includes correcting the pH or removal of a specific pollutant.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Common Effluent Treatment Plants (CETPs) are established for clusters of small-scale industries where
        individual treatment plants may not be economically feasible. Our CETP solutions provide cost-effective,
        compliant treatment for multiple industrial units sharing common infrastructure.
      </p>
    </div>
  </div>
);

export default function CommonEffluentTreatment() {
  return (
    <ServiceLayout
      title="Common Effluent Treatment Plants (CETP)"
      sidebarItems={wasteWaterServices}
      content={content}
    />
  );
}
