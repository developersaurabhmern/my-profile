import bfcSofttech from "../assets/projects/BFC-Softtech.png"

export default function ProjectCard({ image, title }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group shadow-xl projects-grid">
      <img
        src={image}
        className="group-hover:scale-105 transition duration-500 project-image"
      />

      <div className="absolute inset-0 bg-black/40" />

      <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
        {title}
      </h3>
    </div>
  )
}

