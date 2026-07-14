import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ValuePrepositions from './components/ValuePrepositions';
import ProductCatalog from './components/ProductCatalog';
import InstagramSection from './components/InstagramSection';
import TrainerShowcase from './components/TrainerShowcase';
import PalestrasSection from './components/PalestrasSection';
import AboutAcademy from './components/AboutAcademy';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import { motion } from 'motion/react';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-tactical-dark min-h-screen text-gray-200 selection:bg-tactical-yellow selection:text-tactical-dark font-sans"
    >
      <Header />

      <main>
        <Hero />
        <ProductCatalog />
        
        <TrainerShowcase />
        <PalestrasSection />
        
        <Stats />
        <ValuePrepositions />
        <InstagramSection />
        <AboutAcademy />
        
        <FAQ />
        <ContactSection />
      </main>
    </motion.div>
  );
}
