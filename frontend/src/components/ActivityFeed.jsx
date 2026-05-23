function ActivityFeed() {

  const activities = [
    "Document uploaded",
    "OCR extraction completed",
    "Forgery scan initiated",
    "Risk score generated"
  ]

  return (

    <div className="bg-[#111827] p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Live Activity Feed
      </h2>

      <div className="space-y-3">

        {activities.map((item, index) => (

          <div
            key={index}
            className="border-l-4 border-cyan-400 pl-4 py-2"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  )
}

export default ActivityFeed