import myPhoto from "../assets/my-ptoho.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-72 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-6 flex flex-col items-center
      overflow-y-auto scrollbar-none">
      
      <img src={myPhoto} className="rounded-xl shadow-lg" />

      <h2 className="mt-4 text-xl font-semibold text-white neon-container">
        <span className="neon-text">Saurabh Prajapati</span>
      </h2>
      <span className="text-sm text-gray-400">
        Sr. Full Stack Developer (MERN)
      </span>

      <div className="w-full h-px bg-white/10 my-6" />

      <div className="space-y-3 text-sm text-gray-300 w-full">
        <p><FontAwesomeIcon icon={faEnvelope} /> saurabhprajapati242@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> +91-9651044338</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Ghaziabad, IN</p>
      </div>

      <div className="mt-3 text-sm text-gray-300 w-full flex gap-3">
        <a href="https://www.linkedin.com/in/saurabh-prajapati-85a164167/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#fff" />
        </a>
        <a href="https://github.com/developersaurabhmern" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#fff" />
        </a>
      </div>
    </aside>
  );
}
