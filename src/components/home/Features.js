import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
const Features = () => {
  const features = [
    {
      name: "Access to live data",
      description:
        "Stay informed with real-time data updates. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Valid and secure information",
      description:
        "Ensure trust with valid and secure information. Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: LockClosedIcon,
    },
    {
      name: "Up to date data",
      description:
        "Make decisions based on the latest information. Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
      icon: ArrowPathIcon,
    },
    {
      name: "Advanced security",
      description:
        "Protect your data with advanced security measures. Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
      icon: FingerPrintIcon,
    },
  ];

  return (
    <div id="features">
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-44 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600">
            Get easy access to data
          </h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover Our Global Financial Data Hub.
          </p>
          <p className="mt-6 text-lg text-left leading-8 text-gray-600">
            FINDATA BUREAU set out to become a single source world-class
            corporate filings and financial data of global companies. We pride
            ourselves with professional and proactive, state of the art
            technology, exceptional Corporate Governance standards, good
            knowledge of various financial institutions and local market, and
            above all, a customer-centric Culture.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
