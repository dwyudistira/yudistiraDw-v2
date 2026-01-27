import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDocker,
  FaAws,
  FaServer,
} from "react-icons/fa";

import {
  SiLaravel,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiGo,
  SiPython,
  SiGin,
} from "react-icons/si";



const skillsData = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { id: 4, name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { id: 5, name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  { id: 6, name: "Docker", icon: <FaDocker className="text-sky-400" /> },
  { id: 7, name: "React", icon: <FaReact className="text-cyan-400" /> },
  { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { id: 9, name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { id: 10, name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
  { id: 11, name: "MySQL", icon: <SiMysql className="text-blue-400" /> },

  /* BACKEND & CLOUD */
  { id: 12, name: "Golang", icon: <SiGo className="text-cyan-500" /> },
  { id: 13, name: "AWS", icon: <FaAws className="text-orange-500" /> }, // ✅ FIX
  { id: 14, name: "Python", icon: <SiPython className="text-blue-400" /> },
  { id: 15, name: "Gin", icon: <SiGin className="text-sky-500" /> },
  { id: 16, name: "Echo", icon: <FaServer className="text-indigo-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="content grid md:grid-cols-2 gap-10 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center h-fit md:pe-8 lg:pe-35.75 my-auto max-md:text-center">
        <p className="section-title leading-tight">
          Programming Languages <br />
          <span className="text-primary">and Tools</span>
        </p>

        <p className="mt-4 text-sm sm:text-lg text-gray-400 max-w-md max-md:mx-auto">
          Technologies and tools I use to build reliable, scalable, and maintainable
          digital products.
        </p>

        <a
          href="#!"
          className="mt-6 md:mt-10 btn btn-primary text-white w-fit
                    md:py-3 md:px-6 text-[12px] sm:text-[16px]
                    font-semibold max-md:mx-auto"
        >
          Let’s Collaborate
        </a>
      </div>

      {/* RIGHT SKILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="group flex flex-col items-center justify-center
                       h-32 rounded-2xl
                       bg-white
                       border border-gray-200
                       shadow-sm
                       hover:shadow-lg hover:-translate-y-1
                       transition duration-300"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition">
              {skill.icon}
            </div>
            <p className="text-sm text-gray-700 font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
