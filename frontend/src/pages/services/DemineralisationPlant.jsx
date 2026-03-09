import ServiceLayout, { wtpServices } from '../../components/ServiceLayout';

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=550&q=80"
          alt="Demineralisation Plant"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify">
          We have with us extensive experience in making available precision-engineered and functioning
          Demineralization Plant. These plants come backed with the latest ion exchange technology that helps
          these plants to effectively remove salts including cations and anions from water which as soluble
          chemical compounds become ionized when dissolved in water.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Demineralization is the process of removing mineral salts from water by using ion exchange processes.
        In the ion exchange process, the contaminant ions are exchanged with either H+ ions (using strong acid
        cation resin) or OH- ions (using strong base anion resin).
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Our DM Plants are used in industries where there is a need for pure, mineral-free water such as
        pharmaceutical, power generation, electronics, textile and chemical processing industries. The Mixed Bed
        (MB) DM Plant provides highly purified water by combining both cation and anion exchangers in a single
        vessel, producing water with very low conductivity ideal for critical industrial applications.
      </p>
    </div>
  </div>
);

export default function DemineralisationPlant() {
  return (
    <ServiceLayout
      title="Demineralization Plant/DM Plant-MB Plant"
      sidebarItems={wtpServices}
      content={content}
    />
  );
}
