import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function Settings() {

  return (

    <div className="flex bg-[#0F172A] min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 p-8 w-full">

        <Navbar />

        <div className="bg-[#111827] p-8 rounded-2xl">

          <h1 className="text-4xl font-bold mb-4">
            Settings
          </h1>

          <p className="text-gray-400">
            Configure AI engine, alerts, integrations and workflows.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Settings