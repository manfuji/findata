/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import Footer from "../../components/home/Footer";
import Header from "../../components/home/Header";
import Banner from "../../components/home/Banner";
import Features from "../../components/home/Features";
import Testimonies from "../../components/home/Testimonies";
import BanksLogo from "../../components/home/BanksLogo";
import Pricing from "../../components/home/Pricing";
import Faqs from "../../components/home/Faqs";
import CatSection from "../../components/home/CatSection";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="isolate">
        {/* Hero section */}
        <Banner />

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BanksLogo />
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto esse, blanditiis cum accusamustae!
              </span>
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" /> Read
                our case study <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        {/* Feature section */}

        <Features />
        {/* Testimonial section */}
        <Testimonies />

        {/* Pricing section */}
        <Pricing />

        {/* FAQs */}

        <Faqs />
        {/* CTA section */}
        <CatSection />
      </main>
      <Footer />
    </div>
  );
}
