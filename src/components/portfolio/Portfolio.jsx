import { useState } from "react";
import Projects from "./Projects";

import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/1 - Project Work.jpg";
import card4 from "../../assets/images/portfolio-images/2 - Project Ujikom.jpg";
import card5 from "../../assets/images/portfolio-images/5 - Project AbsenKhan.jpg";
import card6 from "../../assets/images/portfolio-images/API.jpg";
import card7 from "../../assets/images/portfolio-images/API.jpg";
import card8 from "../../assets/images/portfolio-images/API.jpg";
import card9 from "../../assets/images/portfolio-images/7 - Project PKL .jpg";
import card10 from "../../assets/images/portfolio-images/8 - Project Portofolio.jpg";
import card11 from "../../assets/images/portfolio-images/API.jpg";
import card12 from "../../assets/images/portfolio-images/6 - Project Kelas Industri.jpg";
import card13 from "../../assets/images/portfolio-images/API.jpg";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Enterprise Resource Planning (ERP)",
    title: "Project Item Loan Management",
    tech: "Odoo 19 | PostgreSql",
    status: "public",
    description:
    "This system is designed to manage the borrowing and returning of items efficiently, with basic CRUD functionality for item (book) management.",
    link: "https://github.com/dwyudistira/odoo19_simple_development",
  },
  {
    id: 2,
    image: card2,
    category: "Fullstack Devloper",
    title: "CRUD Simple: Book Manajement",
    tech: "CodeIgniter 4 | Mysql",
    status: "on-going",
    description:
      "Developed a simple CRUD-based Book Management system using CodeIgniter 4 and MySQL, handling both frontend and backend as a Fullstack Developer.",
    link: "https://github.com/dwyudistira/apps_CI4",
  },
  {
    id: 3,
    image: card3,
    category: "Backend Developer",
    title: "Project Ekskul Senbud Digital",
    tech: "PHP | Laravel 11 | Postgresql",
    status: "private",
    description:
    "Website for digitalizing student attendance in extracurricular and arts and culture activities.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "Backend Developer",
    title: "Project Kasir Apps",
    tech: "PHP | Laravel 12 | Mysql",
    status: "public",
    description:
    "Website for digitalizing payments in supermarkets to simplify the transaction process.",
    link: "https://github.com/dwyudistira/Ujikom-kasir.git",
  },
  {
    id: 5,
    image: card5,
    category: "Fullstack Developer",
    title: "Project AbsenKhan Apps",
    tech: "PHP Native | Mysql",
    status: "public",
    description:
    "Website for digitizing student duty system that allows supervisors to monitor duty activities.",
    link: "https://github.com/dwyudistira/AbsenKhan-Project.git",
  },
  {
    id: 6,
    image: card6,
    category: "Backend Developer",
    title: "Project Rest Api GIN",
    tech: "Golang | Gin | Postgresql",
    status: "public",
    description:
    "For me, this learning project is an opportunity to upgrade my skills and better prepare myself for the world of work. I can learn new, relevant things and challenge myself to grow.",
    link: "https://github.com/dwyudistira/Rest-API-with-GIN-CRUD.git",
  },
  {
    id: 7,
    image: card7,
    category: "Backend Developer",
    title: "Project Rest Api GIN Basic",
    tech: "Golang | Gin | Postgresql",
    status: "public",
    description:
    "For me, this learning project is an opportunity to upgrade my skills and better prepare myself for the world of work. I can learn new, relevant things and challenge myself to grow.",
    link: "https://github.com/dwyudistira/Rest-API-with-GIN-bassic.git",
  },
  {
    id: 8,
    image: card8,
    category: "Backend Developer",
    title: "Study Rest Api Echo",
    tech: "Golang | Echo | Postgresql",
    status: "public",
    description:
    "For me, this learning project is an opportunity to upgrade my skills and better prepare myself for the world of work. I can learn new, relevant things and challenge myself to grow.",
    link: "https://github.com/dwyudistira/Rest-API-Echo-Go.git",
  },
  {
    id: 9,
    image: card9,
    category: "Backend Developer",
    title: "Project YanInvitation",
    tech: "PHP | Laravel 10 | Mysql",
    status: "private",
    description:
    "A website that provides digital invitation creation services specifically for corporate business needs.",
    link: "#!",
  },
  {
    id: 10,
    image: card10,
    category: "Frontend Developer",
    title: "Portofolio Website",
    tech: "HTML | CSS | Javascript",
    status: "public",
    description:
    "Personal portfolio website showcasing my projects and experience in web development.",
    link: "https://yudstiradw.netlify.app/",
  },

  {
    id: 11,
    image: card11,
    category: "Backend Developer",
    title: "Project Api Book Library",
    tech: "NodeJs | ExpressJs | Mysql",
    status: "public",
    description:
    "The presence of industry in the classroom is a very valuable experience because it can add new insights and knowledge for me.",
    link: "https://github.com/dwyudistira/Industry_Class_Express.git",
  },
  {
    id: 12,
    image: card12,
    category: "Frontend Developer",
    title: "Project Company Profile",
    tech: "Javascript | VueJs",
    status: "public",
    description:
      "The presence of industry in the classroom is a very valuable experience because it can add new insights and knowledge for me.",
    link: "https://github.com/dwyudistira/Industry_Class_Vue.git",
  },
  {
    id: 12,
    image: card13,
    category: "Backend Developer",
    title: "Project Flood Monitoring",
    tech: "Python | FastAPI | Postgresql",
    status: "private",
    description:
      "Worked as a Backend Developer on a Flood Monitoring system using Python, FastAPI, and PostgreSQL to manage and process environmental data efficiently.",
    link: "#!",
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  // 🔍 FILTER DATA
  const filteredProjects = projectData.filter((project) =>
    `${project.title} ${project.category} ${project.tech}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // 📌 TAMPILKAN 6 / SEMUA
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="relative z-10 mt-30 md:mt-56 xl:mt-72 pt-2 pb-24 max-xxl:px-2"
    >
      {/* HEADER */}
      <div className="mb-10 text-center mx-auto max-w-144.25">
        <p className="section-title">Portfolio</p>

        <p className="font-normal text-[18px] max-sm:text-[14px] pt-4 text-gray-400">
          A curated selection of my work in ERP systems, backend development,
          and UI/UX design.
        </p>
        {/* STATUS LEGEND */}
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span>Public Project</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span>Private Project</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span>On-Progres Project</span>
          </div>
        </div>
        {/* 🔍 SEARCH BAR */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search project (title, tech, category)..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(false); // reset saat search
            }}
            className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-picto-primary focus:outline-none"
          />
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((data) => (
              <Projects key={data.id} data={data} />
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No projects found.
            </p>
          )}
        </div>
      </div>

      {/* BUTTON */}
      {filteredProjects.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-primary py-3 px-6 text-[16px] font-semibold"
          >
            {showAll ? "Show Less" : "More Project"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
