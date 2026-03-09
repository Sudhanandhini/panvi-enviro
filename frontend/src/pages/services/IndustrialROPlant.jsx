import ServiceLayout, { wtpServices } from '../../components/ServiceLayout';

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1565118531796-763e5082d113?w=550&q=80"
          alt="Industrial RO Plant"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify mb-3">
          Reverse osmosis (RO) is currently the most mature membrane technology for desalination at a relatively
          low cost which is employed for approximately 50% of desalination plants in the world.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed text-justify">
          Reverse osmosis is a pressure-driven membrane separation technology with an operating pressure of
          1.5–12 MPa and a cut-off limit of 0.1–1 nm, this can eliminate all suspended solids, dissolved
          matters, and colloid from the liquid mixture.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Reverse osmosis is the most sophisticated membrane liquid separation technology, which can block all the
        suspended solids, dissolved matters, colloids, all dissolved salts, and organic matters having a molecular
        weight greater than 100. However, leachate molecules can pass through. Taking the discharge standard into
        account, two stage reverse osmosis membrane treatment process is adopted in this project.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        The first stage reverse osmosis unit aims to treat NF effluent for leachate reuse. The second stage
        reverse osmosis unit treats the concentrate from the first stage to the level required for incineration.
        Concentrate of the second stage flows back to incinerator.
      </p>
    </div>
  </div>
);

export default function IndustrialROPlant() {
  return (
    <ServiceLayout
      title="Industrial & Commercial RO Plant"
      sidebarItems={wtpServices}
      content={content}
    />
  );
}
