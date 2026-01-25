import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import InteractiveDemo from "./components/InteractiveDemo/InteractiveDemo";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import UIShowcase from "./components/UIShowcase/UIShowcase";
import CTASection from "./components/CTASection/CTASection";
import AboutPage from "./components/About/About"; // Import baru
import Footer from "./components/Footer/Footer";
import "./styles/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingDownloadButton from "./components/FloatingDownloadButton/FloatingDownloadButton";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/interactive" element={<InteractiveDemo />} />
                <Route path="/features" element={<FeaturesSection />} />
                <Route path="/ui-showcase" element={<UIShowcase />} />
                <Route path="/download" element={<CTASection />} />
                <Route path="/about" element={<AboutPage />} />  
              </Routes>
              <FloatingDownloadButton></FloatingDownloadButton>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;