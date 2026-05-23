import { motion } from "framer-motion"

function StatsCard({ title, value, color }) {

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#111827] p-6 rounded-2xl shadow-lg border border-slate-700"
    >

      <h2 className="text-gray-400 mb-2">
        {title}
      </h2>

      <h1
        className={`text-4xl font-bold ${color}`}
      >
        {value}
      </h1>

    </motion.div>
  )
}

export default StatsCard