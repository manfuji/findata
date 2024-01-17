import React from "react";
const stats = [
  { label: "Business was founded", value: "2020" },
  { label: "People on the team", value: "12" },
  { label: "Users on the platform", value: "250k" },
  { label: "Worth of Information", value: "Ghc70M" },
];
const Content = () => {
  return (
    <div>
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-800 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                FINDATA BUREAU is a leading source for world-class corporate
                filings and financial data from global companies. Our commitment
                to professional excellence, state-of-the-art technology,
                exceptional Corporate Governance standards, and customer-centric
                culture sets us apart.
              </p>
              <p className="mt-8">
                Incorporated on September 25, 2020, under the companies Act,
                2019 (Act 992), FINDATA BUREAU provides accurate, timely, and
                transparent financial information. With over 20 years of
                detailed company financial statements, we cover key aspects such
                as contact information, incorporation date, previous company
                names, auditors, shareholders, subsidiaries, business
                description, financials, ratios, market prices, and more.
              </p>
            </div>
            <div>
              <p>
                Customize your viewing and export reports into Microsoft Word,
                Excel, or Adobe Acrobat Reader. Access more than 5,000 images of
                company annual reports, benefit from on-site training, and get
                dedicated customer support. Our platform ensures the integrity
                of financial statements presented in "as-reported" form and
                native currencies.
              </p>
              <p className="mt-8">
                Join us to retrieve precisely the information you need, with
                user-friendly features, IP authentication, and extensive support
                services. FINDATA BUREAU is your go-to hub for comprehensive
                financial data, empowering your research and decision-making.
              </p>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
              >
                <dt className="text-base leading-7 text-gray-800">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-gray-800">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Content;
