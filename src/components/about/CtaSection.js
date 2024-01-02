import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
  "Annual team retreats",
  "Benefits for you and your family",
  "A great work environment",
];
const CtaSection = () => {
  return (
    <div>
      <div className="relative isolate -z-10 mt-32 sm:mt-40">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmslMjBmaW50ZWN0fGVufDB8fDB8fHww"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-500 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-7 w-5 flex-none"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-400"
                >
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
