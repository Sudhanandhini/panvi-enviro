import ServiceLayout, { wasteWaterServices } from '../../components/ServiceLayout';

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=550&q=80"
          alt="Sewage Treatment Plant"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify">
          Basically, to choose between technologies among the various available technologies & design of STP totally
          depend upon the source from which waste water is generated, no. of working hours of plant & we parameters
          we want in output.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Sewage is the waste generated from residential, institutional, commercial and industrial establishments.
        STP plans treats the sewage to make it fit for safe disposal, agriculture use or domestic use in toilets etc.
        The process of removing contaminants from municipal wastewater, containing mainly household sewage plus some
        industrial wastewater.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Physical, chemical, and biological processes are used to remove contaminants and produce treated wastewater
        that is safe enough to be released into the environment. A by-product of sewage treatment is a semi-solid
        waste or slurry, called sewage sludge. The sludge has to undergo further treatment before being suitable
        for disposal or application to land.
      </p>
    </div>
  </div>
);

export default function SewageTreatmentPlant() {
  return (
    <ServiceLayout
      title="Sewage Water Treatment Plant"
      sidebarItems={wasteWaterServices}
      content={content}
    />
  );
}
