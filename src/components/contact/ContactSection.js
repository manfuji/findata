import React from "react";

import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
const ContactSection = () => {
  return (
    <div>
      <section className="relative bg-white" aria-labelledby="contact-heading">
        <div className="absolute h-1/2 w-full bg-stone-50" aria-hidden="true" />
        {/* Decorative dot pattern */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            className="absolute right-0 top-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-stone-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              <ContactInformation />

              {/* Contact form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
