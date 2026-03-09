import { useState, useEffect, useRef } from "react";


const testimonials = [
  {
    text: "A small river named Duden flows by their place and supplies it with the necessaryregelialia. It is a paradisematic country, in which",
    name: "John Doe",
    role: "Plant Manager, Hikal Ltd",
    initials: "JD",
  },
  {
    text: "We are extremely satisfied with the water treatment solution provided by Panvi Enviro Tech. They understood our requirements and delivered a cost-effective, reliable system on schedule.",
    name: "Ramesh Patil",
    role: "Operations Head, Cipla Ltd",
    initials: "RP",
  },
  {
    text: "The team at Panvi Enviro Tech is highly knowledgeable and professional. Their RO plant installation was seamless, and the post-installation support has been exceptional.",
    name: "Sneha Kulkarni",
    role: "Facility Manager, Thermax India",
    initials: "SK",
  },
  {
    text: "Panvi Enviro Tech has been our trusted partner for industrial wastewater management. Their expertise and prompt response time make them stand out from the competition.",
    name: "Amit Shah",
    role: "Director, Aarti Industries",
    initials: "AS",
  },
];

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const [visible, setVisible] = useState(true);
  const autoRef = useRef(null);

  const goTo = (index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
      setAnimating(false);
    }, 350);
  };

  const next = () => goTo((current + 1) % testimonials.length, "next");
  const prev = () =>
    goTo((current - 1 + testimonials.length) % testimonials.length, "prev");

  // Auto-play
  useEffect(() => {
    autoRef.current = setInterval(next, 5000);
    return () => clearInterval(autoRef.current);
  }, [current]);

  const t = testimonials[current];

  const slideStyle = {
    transition: "opacity 0.35s ease, transform 0.35s ease",
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateX(0)"
      : direction === "next"
      ? "translateX(40px)"
      : "translateX(-40px)",
  };

  return (
    <div className="relative"   >
      {/* Slide */}
      <div
        className="bg-white/10 border border-white/20 rounded p-10 relative overflow-hidden"
        style={slideStyle}
      >
        {/* Quote icon */}
        <div className="absolute top-4 left-6 text-primary opacity-30 text-6xl font-serif leading-none select-none">
          "
        </div>

        <p className="text-gray-300 italic text-lg leading-relaxed mb-6 mt-4">
          "{t.text}"
        </p>

        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
            {t.initials}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.role}</p>
          </div>
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-6" : "bg-white/30 w-2"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSlider;