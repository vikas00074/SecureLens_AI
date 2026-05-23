function FraudHeatmap({ suspiciousRegions }) {

  return (

    <div className="bg-[#111827] p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Fraud Heatmap
      </h2>

      <div className="space-y-3">

        {suspiciousRegions?.map((region, index) => (

          <div
            key={index}
            className="bg-red-500/20 border border-red-500 p-3 rounded-lg"
          >

            Suspicious Region:
            X: {region.x}
            Y: {region.y}

          </div>

        ))}

      </div>

    </div>
  )
}

export default FraudHeatmap