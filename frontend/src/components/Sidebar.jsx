import {
  LayoutDashboard,
  Upload,
  BarChart3,
  FileText,
  ShieldAlert,
  Settings,
  FileBarChart
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function Sidebar() {

  const navigate = useNavigate()

  const menuItems = [
    {
      icon: <LayoutDashboard />,
      label: "Dashboard",
      path: "/dashboard"
    },
    {
      icon: <Upload />,
      label: "Upload",
      path: "/upload"
    },
    {
      icon: <BarChart3 />,
      label: "Analytics",
      path: "/analytics"
    },
    {
      icon: <FileText />,
      label: "Audit Logs",
      path: "/audit-logs"
    },
    {
      icon: <FileBarChart />,
      label: "Reports",
      path: "/reports"
    },
    {
      icon: <Settings />,
      label: "Settings",
      path: "/settings"
    },
  ]

  return (

    <div className="w-64 bg-[#111827] h-screen p-6 fixed">

      <div className="flex items-center gap-2 mb-10">

        <ShieldAlert
          className="text-cyan-400"
          size={32}
        />

        <h1 className="text-2xl font-bold">
          DocuShield AI
        </h1>

      </div>

      <div className="space-y-4">

        {menuItems.map((item, index) => (

          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1E293B] cursor-pointer transition"
          >

            {item.icon}

            <span>{item.label}</span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Sidebar