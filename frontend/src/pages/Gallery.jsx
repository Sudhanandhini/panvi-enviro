import { useState } from 'react';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img8 from "../assets/8.jpg"
import img9 from "../assets/9.jpg"
import img10 from "../assets/10.jpg"
import img11 from "../assets/11.jpg"
import img12 from "../assets/12.jpg"

const galleryImages = [
  { src: img1, alt: 'Water Treatment Plant' },
  { src: img2, alt: 'Industrial Plant' },
  { src: img3, alt: 'RO System' },
  { src: img4, alt: 'ETP Plant' },
  { src: img5, alt: 'CETP Plant' },
  { src: img6, alt: 'Rainwater Harvesting' },
  { src: img7, alt: 'Industrial Equipment' },
  { src: img8, alt: 'Water Softener' },
  { src: img9, alt: 'Sewage Treatment' },
  { src: img10, alt: 'DM Plant' },
  { src: img11, alt: 'ZLD System' },
  { src: img12, alt: 'ZLD System' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div>
      {/* Page Header */}
      {/* <div className="bg-gray-100 py-6 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-secondary">Gallery</h1>
          <p className="text-sm text-gray-500 mt-1">Home / Gallery</p>
        </div>
      </div> */}
<div className="max-w-6xl mx-auto px-4 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {galleryImages.map((img, i) => (
      <div
        key={i}
        className="cursor-pointer rounded overflow-hidden shadow-sm h-56"
        onClick={() => setLightbox(i)}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-primary"
            >
              ✕
            </button>
            <button
              onClick={() => setLightbox(l => (l - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white text-4xl hover:text-primary"
            >
              ‹
            </button>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <button
              onClick={() => setLightbox(l => (l + 1) % galleryImages.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white text-4xl hover:text-primary"
            >
              ›
            </button>
            <p className="text-center text-gray-300 text-sm mt-3">{galleryImages[lightbox].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
