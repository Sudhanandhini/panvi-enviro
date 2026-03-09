import ServiceLayout, { wasteWaterServices } from '../../components/ServiceLayout';
import img1 from "../../assets/rainwater.jpg";

const content = (
  <div>
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-shrink-0">
        <img
          src={img1}
          alt="Rain Water Harvesting System"
          className="w-full md:w-80 h-60 object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm leading-relaxed text-justify">
          Rainwater Harvesting is an intelligent idea and concept to collect the water during monsoon season so
          that the water scarcity of other seasons can be fulfilled. Rain water harvesting is that process in
          which rainwater is preserved in tanks or diverted underground so that it can be used in various
          applications. Such stored rainwater can be used for agriculture and irrigation. Such harvested rainwater
          can reduce the overdependence on municipal water supply saving money as well as time.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        Our rainwater harvesting systems are designed for residential, commercial, and industrial applications.
        These systems capture and store rainwater from rooftop runoff, which is then filtered and stored for
        various non-potable and potable uses.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">
        By implementing a comprehensive rainwater harvesting system, you can significantly reduce your dependence
        on groundwater and municipal water supply, resulting in substantial water bill savings and contributing
        to sustainable water management practices.
      </p>
    </div>
  </div>
);

export default function RainWaterHarvesting() {
  return (
    <ServiceLayout
      title="Rain Water Harvesting System"
      sidebarItems={wasteWaterServices}
      content={content}
    />
  );
}
