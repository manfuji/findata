import React from "react";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I choose the best package for my needs?",
      answer:
        "Selecting the ideal package depends on your specific requirements and goals. Our team can assist you in finding the perfect solution tailored to your needs.",
    },
    {
      id: 2,
      question: "What features are included in each package?",
      answer:
        "Each package comes with a unique set of features. Explore our pricing page or contact our support team for detailed information on what each package offers.",
    },
    {
      id: 3,
      question: "Can I upgrade or downgrade my package?",
      answer:
        "Yes, you can easily upgrade or downgrade your package based on your changing needs. Visit your account settings or reach out to our support team for assistance.",
    },
    {
      id: 4,
      question: "Are there any discounts for long-term subscriptions?",
      answer:
        "Yes, we offer discounts for long-term subscriptions. Check our pricing page or contact our sales team to discuss available discounts for extended commitments.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards and online transfers. Visit our billing section or contact our support team for detailed payment information.",
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Faqs;
