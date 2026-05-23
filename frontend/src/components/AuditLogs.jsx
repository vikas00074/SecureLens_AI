function AuditLogs() {

  const logs = [
    "Document uploaded",
    "OCR completed",
    "Fraud analysis initiated",
    "Risk score generated"
  ]

  return (

    <div className="bg-[#111827] p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Audit Logs
      </h2>

      <div className="space-y-3">

        {logs.map((log, index) => (

          <div
            key={index}
            className="bg-[#1E293B] p-3 rounded-lg"
          >
            {log}
          </div>

        ))}

      </div>

    </div>
  )
}

export default AuditLogs