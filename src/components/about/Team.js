import React from "react";
const team = [
  {
    name: "Kwame ..........",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmslMjBmaW50ZWN0fGVufDB8fDB8fHww",
    location: "Accra, Ghana",
  },
  {
    name: "James ..........",
    role: "Co-Founder ",
    imageUrl:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmslMjBmaW50ZWN0fGVufDB8fDB8fHww",
    location: "Accra, Ghana",
  },
  {
    name: "Kofi ..........",
    role: "Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmslMjBmaW50ZWN0fGVufDB8fDB8fHww",
    location: "Accra, Ghana",
  },
  // More people...
];
const Team = () => {
  return (
    <div>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
            neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
