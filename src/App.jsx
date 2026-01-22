import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import InteractiveDemo from './components/InteractiveDemo/InteractiveDemo';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import UIShowcase from './components/UIShowcase/UIShowcase';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <InteractiveDemo />
          <FeaturesSection />
          <UIShowcase />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;