import React from "react";
const offices = [
  {
    id: 1,
    city: "Accra",
    address: ["4556 Brendan Kofi", "Accra, A 90210"],
  },
  {
    id: 2,
    city: "Kumasi",
    address: ["886 Kwame Street", "Kumasi, K 12345"],
  },
  {
    id: 3,
    city: "Volta",
    address: ["7363 Pass", "Volta,  4H8"],
  },
  { id: 4, city: "Volta", address: ["114 Cobble ", "Volta VVVV1"] },
];
const Offices = () => {
  return (
    <div>
      <section aria-labelledby="offices-heading">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h2
            id="offices-heading"
            className="text-3xl font-bold tracking-tight text-stone-900"
          >
            Our offices
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-stone-500">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div key={office.id}>
                <h3 className="text-lg font-medium text-stone-900">
                  {office.city}
                </h3>
                <p className="mt-2 text-base text-stone-500">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offices;
