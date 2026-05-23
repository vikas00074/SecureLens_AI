function AIInsightsCard() {

  const insights = [
    "Signature mismatch detected",
    "Metadata anomaly found",
    "Suspicious OCR confidence",
    "Possible amount overwrite"
  ]

  return (

    <div className="bg-[#111827] p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        AI Insights
      </h2>

      <div className="space-y-3">

        {insights.map((item, index) => (

          <div
            key={index}
            className="bg-[#1E293B] p-3 rounded-lg text-red-400"
          >
            ⚠ {item}
          </div>

        ))}

      </div>

    </div>
  )
}

export default AIInsightsCard