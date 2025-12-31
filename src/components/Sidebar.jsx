import myPhoto from "../assets/my-ptoho.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ mobile = false }) {
  return (
    <aside
      className={`
        ${mobile 
          ? "w-full mb-6 rounded-2xl" 
          : "fixed top-0 left-0 h-screen w-72"}
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl
        p-6 flex flex-col items-center
      `}
    >
      {/* Profile Image */}
      <img
        src={myPhoto}
        alt="Profile"
        className="w-32 h-32 object-cover rounded-xl shadow-lg"
      />

      {/* Name */}
      <h2 className="mt-4 text-xl font-semibold text-white text-center">
        <span className="neon-text">Saurabh Prajapati</span>
      </h2>

      {/* Role */}
      <span className="text-sm text-gray-400 text-center">
        Sr. Full Stack Developer (MERN)
      </span>

      <div className="w-full h-px bg-white/10 my-6" />

      {/* Contact Info */}
      <div className="space-y-3 text-sm text-gray-300 w-full break-all">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} />
          saurabhprajapati242@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} />
          +91-9651044338
        </p>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          Ghaziabad, IN
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-4 flex gap-4">
        <a
          href="https://www.linkedin.com/in/saurabh-prajapati-85a164167/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>

        <a
          href="https://github.com/developersaurabhmern"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </aside>
  );
}
