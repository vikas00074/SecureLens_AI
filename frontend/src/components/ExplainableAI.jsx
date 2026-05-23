function ExplainableAI({ explanation }) {

  return (

    <div className="bg-[#111827] p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Explainable AI
      </h2>

      <div className="space-y-4">

        {explanation?.map((item, index) => (

          <div
            key={index}
            className="bg-[#1E293B] p-4 rounded-lg border-l-4 border-cyan-400"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  )
}

export default ExplainableAI