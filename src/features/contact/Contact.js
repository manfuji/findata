import { Fragment, useState } from "react";

import Footer from "../../components/home/Footer";
import Header from "../../components/home/Header";
import Offices from "../../components/contact/Offices";
import ContactSection from "../../components/contact/ContactSection";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-stone-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Get in touch
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-stone-500">
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh
                phasellus morbi non morbi. In elementum urna ut volutpat.
                Sagittis et vel et fermentum amet consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <ContactSection />

        {/* Contact grid */}
        <Offices />
      </main>
      <Footer />
    </div>
  );
}
