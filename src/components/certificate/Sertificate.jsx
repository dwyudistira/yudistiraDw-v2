import { useState } from "react";

import img1 from "../../assets/images/certificate/Dicoding-Sertif-1.jpg";
import img2 from "../../assets/images/certificate/Dicoding-Sertif-2.jpg";
import img3 from "../../assets/images/certificate/Dicoding-Sertif-3.jpg";
import img4 from "../../assets/images/certificate/Dicoding-Sertif-4.jpg";
import img5 from "../../assets/images/certificate/Dicoding-Sertif-5.jpg";
import img6 from "../../assets/images/certificate/IBM-Sertif-1.jpg";
import img7 from "../../assets/images/certificate/IBM-Sertif-2.jpg";
import img8 from "../../assets/images/certificate/IBM-Sertif-3.jpg";
import img9 from "../../assets/images/certificate/IBM-Sertif-4.jpg";
import img10 from "../../assets/images/certificate/IBM-Sertif-5.jpg";
import img11 from "../../assets/images/certificate/Myskill-Sertif-1.jpg";
import img12 from "../../assets/images/certificate/Myskill-Sertif-2.jpg";
import img13 from "../../assets/images/certificate/Sertif-AWS.jpg";
import img14 from "../../assets/images/certificate/Sertif-Cyclone.jpg";
import img15 from "../../assets/images/certificate/Sertif-PKL.jpg";
import img16 from "../../assets/images/certificate/Sertif-Seminar-1.jpg";
import img17 from "../../assets/images/certificate/Sertif-Seminar-2.png";
import img18 from "../../assets/images/certificate/Sertif-Unity.jpg";
import img19 from "../../assets/images/certificate/Setif-K3.jpg";

import MonoCertificate from "./MonoCertificate";
import "./certificate.css";

const sertiData = [
  { id: 1, image: img1, title: "Meniti Karier sebagai Software Developer", publish: "Dicoding" },
  { id: 2, image: img2, title: "Belajar Dasar AI", publish: "Dicoding" },
  { id: 3, image: img3, title: "Belajar Dasar Git dengan GitHub", publish: "Dicoding" },
  { id: 4, image: img4, title: "Belajar Dasar Pemrograman Web", publish: "Dicoding" },
  { id: 5, image: img5, title: "Introduction to Financial Literacy", publish: "Dicoding" },
  { id: 6, image: img6, title: "Career Management Essentials", publish: "IBM" },
  { id: 7, image: img7, title: "Introduction to Artificial Intelligence", publish: "IBM" },
  { id: 8, image: img8, title: "Introduction to Generative AI", publish: "IBM" },
  { id: 9, image: img9, title: "Focus Your Direction with Workplace Research", publish: "IBM" },
  { id: 10, image: img10, title: "AI Ethics", publish: "IBM" },
  { id: 11, image: img11, title: "Backend – Basic Golang", publish: "MySkill" },
  { id: 12, image: img12, title: "Backend – Advanced Golang", publish: "MySkill" },
  { id: 13, image: img13, title: "AWS re/Start Program Bootcamp", publish: "Orbit Future Academy" },
  { id: 14, image: img14, title: "Cyclone RPA Certificate", publish: "Cyclone" },
  { id: 15, image: img15, title: "Internship Certificate", publish: "CV Kreasi Sawala Nusantara" },
  { id: 16, image: img16, title: "Frontend Development with Vue.js", publish: "Wanteknologi" },
  { id: 17, image: img17, title: "Backend Development with JavaScript Framework", publish: "PT Laskar Teknologi Bersama" },
  { id: 18, image: img18, title: "Unity Essentials", publish: "Unity" },
  { id: 19, image: img19, title: "TODO: Judul sertif K3", publish: "TODO: Penerbit K3" },
];

const Sertificate = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? sertiData : sertiData.slice(0, 3);

  return (
    <section className="py-24 px-4" id="certificate">
      <div className="max-w-3xl text-center mx-auto pb-12">
        <p className="section-title pb-4">Certificates</p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">
          A collection of certifications and achievements I’ve earned.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleData.map((data) => (
          <MonoCertificate key={data.id} data={data} />
        ))}
      </div>

      {/* BUTTON */}
      {sertiData.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="btn btn-primary py-3 px-6 text-base font-semibold"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Sertificate;
