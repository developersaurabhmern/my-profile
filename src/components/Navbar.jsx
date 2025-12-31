import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const menu = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Expertise", path: "/expertise" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="absolute top-6 right-6 custom-css">
      <div
        className="
          flex gap-6 px-8 py-3
          rounded-full
          bg-gradient-to-r from-cyan-900/70 to-teal-900/70
          backdrop-blur-xl
          border border-cyan-400/30
          shadow-[0_0_30px_rgba(34,211,238,0.15)]
        "
      >
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                relative text-lm font-medium transition-all duration-300
                ${isActive ? "text-white" : "text-cyan-300 hover:text-white"}
              `}
            >
              {item.name}

              {/* Active underline glow */}
              {isActive && (
                <span
                  className="
                    absolute -bottom-2 left-1/2 -translate-x-1/2
                    w-6 h-[3px]
                    rounded-full
                    bg-gradient-to-r from-cyan-400 to-purple-500
                  "
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
