import { Bell, UserCircle2 } from "lucide-react"

function Navbar() {

  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-3xl font-bold">
          Fraud Intelligence Dashboard
        </h1>

        <p className="text-gray-400">
          Real-Time Banking Anomaly Detection
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="bg-[#111827] p-3 rounded-full">
          <Bell />
        </div>

        <div className="bg-[#111827] p-2 rounded-full">
          <UserCircle2 size={32} />
        </div>

      </div>
    </div>
  )
}

export default Navbar