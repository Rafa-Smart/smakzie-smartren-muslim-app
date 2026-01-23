import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import InteractiveDemo from "./components/InteractiveDemo/InteractiveDemo";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import UIShowcase from "./components/UIShowcase/UIShowcase";
import CTASection from "./components/CTASection/CTASection";
import Footer from "./components/Footer/Footer";
import "./styles/globals.css";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HeroSection></HeroSection>}></Route>
              <Route path="/interactive" element={<InteractiveDemo />}></Route>
              <Route
                path="/featuresSection"
                element={<FeaturesSection />}
              ></Route>

              <Route
                path="/uiShowcase"
                element={<UIShowcase></UIShowcase>}
              ></Route>
              <Route
                path="/ctaSection"
                element={<CTASection></CTASection>}
              ></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
