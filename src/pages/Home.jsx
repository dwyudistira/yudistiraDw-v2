import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import Certificate from "../components/certificate/Sertificate";
import "../../index.css";
import Skills from "../components/skills/Skills";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <Portfolio />
      <div className="blog-background">
        <Certificate />
      </div>
      <div className="bg-soft-white">
        <Skills />
      </div>
    </div>
  );
};

export default Home;
