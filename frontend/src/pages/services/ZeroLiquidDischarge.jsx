import ServiceLayout, { wasteWaterServices } from '../../components/ServiceLayout';

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=550&q=80"
          alt="Zero Liquid Discharge Plant"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify mb-3">
          Zero liquid discharge technologies help plants meet discharge and water reuse requirements, enabling
          your business to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
          <li>Meet stringent cooling tower blowdown and Flue Gas Desulfurization (FGD) discharge regulations.</li>
          <li>Treat and recover valuable products from waste water sources.</li>
          <li>Better manage thegenerated output water.</li>
          <li>Control the water quality that is to be reclaimed or recycled.</li>
        </ul>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        It is used to evaporate the residue water from MFF concentrated liquid and generate dry salt for disuse.
        MCC concentrated liquid have large amounts of water content which is not possible to dispose so salt dryer
        is used after MFF to reclaim water content from MFF concentrated liquid.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        ZLD systems use a combination of membrane technologies, evaporators, and crystallizers to achieve nearly
        zero liquid discharge, recovering maximum water for reuse while generating a solid residue for safe disposal.
      </p>
    </div>
  </div>
);

export default function ZeroLiquidDischarge() {
  return (
    <ServiceLayout
      title="Zero Liquid Discharge Plant"
      sidebarItems={wasteWaterServices}
      content={content}
    />
  );
}
