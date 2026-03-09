import ServiceLayout, { wasteWaterServices } from '../../components/ServiceLayout';
import img1 from "../../assets/ETP-1.jpg";

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src={img1}
          alt="Effluent Treatment Plant"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify">
          Effluent treatment plants from Panvi Enviro Technologies are designed to treat both municipal and
          industrial effluent, which consists of wastewater, sludge or sewage. These effluent treatment plants
          are tailored to remove harmful pathogens, clear hazardous chemicals, detergents and toxins, and
          separate and extract valuable substances from effluent.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        An Effluent Treatment Plant (ETP) is a facility in which a combination of various processes
        (e.g., physical, chemical and biological) are used to treat industrial wastewater and remove pollutants.
        The ETP plant is used in industries such as pharmaceuticals, textiles, tanneries and chemicals to purify
        water and remove any toxic and non-toxic materials or chemicals from the water so that it may meet the
        standards set by the relevant government regulations for wastewater treatment.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Our ETP systems are designed to handle effluents from diverse industrial processes, ensuring compliance
        with environmental standards while maximizing water recovery and minimizing operational costs.
      </p>
    </div>
  </div>
);

export default function EffluentTreatmentPlant() {
  return (
    <ServiceLayout
      title="Effluent Treatment Plant (ETP)"
      sidebarItems={wasteWaterServices}
      content={content}
    />
  );
}
