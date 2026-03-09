import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyProfile from './pages/CompanyProfile';
import ProjectServices from './pages/ProjectServices';
import Clients from './pages/Clients';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Service sub-pages
import SewageTreatmentPlant from './pages/services/SewageTreatmentPlant';
import EffluentTreatmentPlant from './pages/services/EffluentTreatmentPlant';
import CommonEffluentTreatment from './pages/services/CommonEffluentTreatment';
import ZeroLiquidDischarge from './pages/services/ZeroLiquidDischarge';
import RainWaterHarvesting from './pages/services/RainWaterHarvesting';
import IndustrialROPlant from './pages/services/IndustrialROPlant';
import WaterSoftener from './pages/services/WaterSoftener';
import DemineralisationPlant from './pages/services/DemineralisationPlant';
import DomesticROPurifiers from './pages/DomesticROPurifiers';
import WaterSoftener1 from './pages/WaterSoftener1';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/project-services" element={<ProjectServices />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/water-soft" element={<WaterSoftener1 />} />
              <Route path="/domestic" element={<DomesticROPurifiers />} />

            {/* Waste Water Treatment sub-pages */}
            <Route path="/service/sewage-treatment-plant" element={<SewageTreatmentPlant />} />
            <Route path="/service/effluent-treatment-plant" element={<EffluentTreatmentPlant />} />
            <Route path="/service/common-effluent-treatment-plant" element={<CommonEffluentTreatment />} />
            <Route path="/service/zero-liquid-discharge-plant" element={<ZeroLiquidDischarge />} />
            <Route path="/service/rain-water-harvesting-system" element={<RainWaterHarvesting />} />
            

            {/* Water Treatment Plant sub-pages */}
            <Route path="/service/industrial-commercial-ro-plant" element={<IndustrialROPlant />} />
            <Route path="/service/water-softener" element={<WaterSoftener />} />
            <Route path="/service/demineralisation-plant" element={<DemineralisationPlant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
