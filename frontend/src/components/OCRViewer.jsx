function OCRViewer({ ocrData }) {

  return (

    <div className="bg-[#111827] p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        OCR Extraction Results
      </h2>

      <div className="space-y-4">

        {ocrData?.map((item, index) => (

          <div
            key={index}
            className="bg-[#1E293B] p-4 rounded-lg"
          >

            <p className="text-cyan-400">
              {item.text}
            </p>

            <p className="text-gray-400 text-sm">
              Confidence: {item.confidence}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default OCRViewer