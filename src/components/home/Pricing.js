import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Free",
    id: "tier-Free",
    href: "#",
    priceMonthly: "Ghc0.00",
    description: "The essentials to provide your best work for your projects.",
    features: [
      "Access to basic information about the content on the website",
      "Download as PDF PNG",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Single Account",
    id: "tier-account",
    href: "#",
    priceMonthly: "Ghc24.00",
    description: "The essentials to provide your best work for your projects.",
    features: [
      "A charge for the month (billed annually) in the first 12 months",
      "Unlimited views to all financial statements",
      "Up to 50 downloads as XLS, WORD and PDF",
      "Relevant data: complete source of information",
    ],
    mostPopular: false,
  },
  {
    name: "Medium Package",
    id: "tier-startup",
    href: "#",
    priceMonthly: "Ghc32.00",
    description:
      "A plan that scales with live data and accessibility to most of our features and mroe",
    features: [
      "All functions of the single account",
      "Up to 10,000 contents and services",
      "Single licenss",
      "Access for 30 days",
    ],
    mostPopular: true,
  },
  {
    name: "Full package",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Gh48.00",
    description:
      "Dedicated support and Provision and data availabilty on demand.",
    features: [
      "Unlimited number of users",
      "Full access for students and staff to the whole database",
      "Unlimited downloads",
      "IP-activated access",
      "Full accessibility to all services",
    ],
    mostPopular: false,
  },
];
const Pricing = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div id="pricing">
      <div className="py-24 sm:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pricing plans for teams for all people.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Pricing strategy is a comprehensive approach that businesses employ
            to set the optimal price for their products or services, balancing
            market dynamics, competitive positioning, and customer value to
            maximize revenue and profitability.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                  tierIdx === 0 ? "lg:rounded-r-none" : "",
                  tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                  "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.mostPopular ? "text-teal-600" : "text-gray-900",
                        "text-lg font-semibold leading-8"
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-teal-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-teal-600">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-teal-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-teal-600 text-white shadow-sm hover:bg-teal-500"
                      : "text-teal-600 ring-1 ring-inset ring-teal-200 hover:ring-teal-300",
                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  )}
                >
                  Buy plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
