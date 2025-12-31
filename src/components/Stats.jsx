export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-10 mt-10 text-center">
      {[
        ["+8", "Years of Experience"],
        ["+16", "Projects Completed"],
        ["+2", "Projects In Progress"],
      ].map(([num, label]) => (
        <div key={label}>
          <p className="text-3xl font-bold text-white">{num}</p>
          <p className="text-gray-400 text-sm mt-1">{label}</p>
        </div>
      ))}
    </div>
  )
}
