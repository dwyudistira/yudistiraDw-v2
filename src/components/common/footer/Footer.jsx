import logo from "../../../assets/Y_Logo.png";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { id: 1, name: "Home", url: "home" },
  { id: 2, name: "About", url: "about" },
  { id: 3, name: "Portfolio", url: "portfolio" },
  { id: 4, name: "Certificate", url: "certificate" },
  { id: 5, name: "Skills", url: "skills" },
  { id: 6, name: "Contact", url: "contact" },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#1A3263]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-md">
              <img
                src={logo}
                alt="Yudistira Logo"
                className="object-contain"
              />
            </div>

            <span className="text-white text-2xl font-semibold tracking-wide">
              Yudistira
            </span>
          </a>

          {/* NAV */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.url}`}
                className="
                  relative text-sm sm:text-base
                  text-indigo-200 hover:text-white transition
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-full after:bg-indigo-300
                  after:scale-x-0 after:origin-left
                  after:transition-transform
                  hover:after:scale-x-100
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* SOCIAL + EMAIL */}
          <div className="flex items-center gap-5 text-indigo-200">
            <a
              href="https://www.instagram.com/ydstr.d.w/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-lg hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/dwyudistira"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-lg hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yudistira-dharma-wardana/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-lg hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <span className="h-5 w-px bg-white/30 mx-1" />

            <a
              href="mailto:yourname@gmail.com"
              className="flex items-center gap-2 text-sm hover:text-white transition"
            >
              <FaEnvelope />
              yudistiradarma08@email.com
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/15" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-sm text-indigo-200">
            © {year} Yudistira. All rights reserved.
          </p>

          <p className="text-sm text-indigo-200">
            Developed with ❤️ by{" "}
            <a
              href="#"
              className="font-semibold underline hover:text-white transition"
            >
              Yudistira Dharma W
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
