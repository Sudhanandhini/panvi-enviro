import ServiceLayout, { wasteWaterServices } from '../../components/ServiceLayout';

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=550&q=80"
          alt="Common Effluent Treatment Plant"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify">
          The pollution that we see in today's world implies that there is a huge need for wastewater management
          in all industries that produce effluents. Effluents are basically included all the domestic sewage and
          the industrial wastewaters that are produced in an industrial plant. The need for a solution that
          includes different steps of collection, conveying, treatment and the final disposition of the effluents
          from the different industrial districts, has given rise to the concept of common effluent treatment
          plants (CETP) mainly for small and medium scale industries.
        </p>
      </div>
    </div>
    <div className="space-y-4">
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
