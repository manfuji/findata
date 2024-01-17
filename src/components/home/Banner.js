/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Banner = () => {
  return (
    <div className="relative ">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  We provide more than just data.
                  <a
                    href="#features"
                    className="whitespace-nowrap font-semibold text-teal-600"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                What do we bring to you?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <span className="text-teal-600">Findata Bureau:</span> A
                top-tier source for global corporate filings and financial data,
                prioritizing professionalism, technology, governance, market
                knowledge, and customer-centricity.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#pricing"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Get started
                </a>
                <a
                  href="#features"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <div className="w-full rounded overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/video/banner.mp4"
                type="video/mp4"
                className="w-full"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
