import ServiceLayout, { wtpServices } from '../../components/ServiceLayout';
import img1 from "../../assets/watersoftner.jpg";

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src={img1}
          alt="Water Softener"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify mb-3">
          Hard water consists of an excess quantity of calcium and magnesium which is highly dissolved in water
          but not suitable for drinking purposes. In fact, hard water may create many problems:-
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
          <li>Decrease the water flow rate</li>
          <li>Increased electricity cost while heating or boiling</li>
          <li>Washing is not performed in a better way</li>
          <li>Leave white stain on the glass surface</li>
          <li>Highly digestive</li>
          <li>Not suitable for skin</li>
        </ul>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Due to the above problems, it is required to soften the water and so the softening water plants are
        established which plays big role in cleaning this.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Softening of water is processed through the ion exchange and precipitation methods. This process rely on
        removing mainly two minerals i.e., calcium and magnesium with the flow of sodium. In this process, two
        separate tanks are associated with a pipe. These two separate tanks denote the brine tank and mineral
        tank. Mineral tanks consist of raw water containing minerals whereas brine consists of sodium chloride
        and both tanks are connected with a tube or pipe. As the process started, the surface of vessels contains
        calcium and magnesium which are flushed through the flow of sodium (salt) which is a perfect and powerful
        solution for the minerals.
      </p>
    </div>
  </div>
);

export default function WaterSoftener() {
  return (
    <ServiceLayout
      title="Water Softener"
      sidebarItems={wtpServices}
      content={content}
    />
  );
}
