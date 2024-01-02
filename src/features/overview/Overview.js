import { useState } from "react";
import Header from "../../components/home/Header";
import Content from "../../components/overview/Content";
import OverviewSection from "../../components/overview/OverviewSection";
import Footer from "../../components/home/Footer";

export default function Overview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <OverviewSection />
      <Content />
      <Footer />
    </div>
  );
}
