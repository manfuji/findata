import React from "react";

const Testimonies = () => {
  return (
    <div>
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
            src="/picture.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
          <div
            className="absolute -left-80 -top-56 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#46e9ff] to-[#6ffff3] opacity-[0.45]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#46e9ff] to-[#6ffff3] opacity-25"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            {/* <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
              alt=""
            /> */}
            <span className="text-2xl font-bold text-white">Power of data</span>
            <figure>
              <blockquote className="mt-6 text-lg font-normal text-white sm:text-xl sm:leading-8">
                <p className="">
                  “The power of data is its ability to inform, but the true
                  value lies in its capacity to inspire action.Empowering
                  through insightful data, where precision meets innovation. In
                  the realm of information, clarity is the key to informed
                  decision-making.”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-white">
                <div className=" font-light">Manfuji</div>
                <div className="mt-1  font-light">Developer</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
