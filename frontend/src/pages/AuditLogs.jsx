import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function AuditLogs() {

  const logs = [
    {
      action: "Document Uploaded",
      user: "Underwriting Team",
      time: "10:45 AM",
      status: "Success"
    },
    {
      action: "OCR Extraction Completed",
      user: "AI Engine",
      time: "10:46 AM",
      status: "Success"
    },
    {
      action: "Forgery Detection Triggered",
      user: "Fraud Scanner",
      time: "10:47 AM",
      status: "Warning"
    },
    {
      action: "Risk Score Generated",
      user: "Risk Engine",
      time: "10:48 AM",
      status: "Completed"
    }
  ]

  return (

    <div className="flex bg-[#0F172A] min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 p-8 w-full">

        <Navbar />

        <div className="bg-[#111827] rounded-2xl p-6 shadow-lg">

          <h1 className="text-3xl font-bold mb-6">
            Audit Logs
          </h1>

          <div className="space-y-4">

            {logs.map((log, index) => (

              <div
                key={index}
                className="
                  bg-[#1E293B]
                  p-5
                  rounded-xl
                  border
                  border-slate-700
                  hover:border-cyan-400
                  transition
                "
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-xl font-semibold">
                      {log.action}
                    </h2>

                    <p className="text-gray-400 mt-1">
                      {log.user}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-cyan-400">
                      {log.time}
                    </p>

                    <p className="
                      text-sm
                      mt-1
                      bg-cyan-500/20
                      inline-block
                      px-3
                      py-1
                      rounded-full
                    ">
                      {log.status}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default AuditLogs