import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import AIAutomationPage from "./pages/AIAutomationPage";
import AICallingPage from "./pages/AICallingPage";
import WebDevPage from "./pages/WebDevPage";
import MobileAppsPage from "./pages/MobileAppsPage";
import UIUXPage from "./pages/UIUXPage";
import ComboPage from "./pages/ComboPage";
import PricingPage from "./pages/PricingPage";
import WorkflowPage from "./pages/WorkflowPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ background: "#FFF8E7", minHeight: "100vh" }}>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          <Route path="/ai-calling" element={<AICallingPage />} />
          <Route path="/web-dev" element={<WebDevPage />} />
          <Route path="/mobile-apps" element={<MobileAppsPage />} />
          <Route path="/uiux" element={<UIUXPage />} />
          <Route path="/combo" element={<ComboPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/workflow" element={<WorkflowPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
