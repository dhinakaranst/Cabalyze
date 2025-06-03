const teamMembers = [
  {
    name: "Mantej Singh Arora",
    role: "The Front Man (Lead)",
    image: "/team/mantej.png",
    quote: "I just make sure chaos is well organized and fabolsoulsly executed",
    linkedin: "https://linkedin.com/in/mantej-singh-arora",
    github: "https://github.com/mantejsingh"
  },
  {
    name: "Ishaan Sharma",
    role: "Backend Developer",
    image: "/team/ishaan.png",
    quote: "If java had true garbage collection, most programs would delete themselves upon execution",
    linkedin: "https://linkedin.com/in/ishaan-sharma",
    github: "https://github.com/ishaan"
  },
  {
    name: "Gagandeep",
    role: "DevOps Guy",
    image: "/team/gagandeep.png",
    quote: "They are not bugs but they are the features",
    linkedin: "https://linkedin.com/in/gagandeep",
    github: "https://github.com/gagandeep"
  },
  {
    name: "Ayush Saini",
    role: "UI/UX Designer",
    image: "/team/ayush.png",
    quote: "",
    linkedin: "https://linkedin.com/in/ayush-saini",
    github: "https://github.com/ayush"
  },
  {
    name: "Dhruv Pandey",
    role: "The Surprise Guy",
    image: "/team/dhruv.png",
    quote: "",
    linkedin: "https://linkedin.com/in/dhruv-pandey",
    github: "https://github.com/dhruv"
  }
];

const Team = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the amazing people behind Price Pilot.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {member.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">{member.role}</p>
                {member.quote && (
                  <p className="mt-4 text-sm leading-6 text-gray-600 italic">"{member.quote}"</p>
                )}
                <div className="mt-4 flex gap-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 