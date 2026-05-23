import { useState } from 'react'

function UploadBox() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)

  const uploadFile = async () => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await API.post('/upload', formData)

    setResult(response.data)
  }

  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={uploadFile}
      >
        Upload
      </button>

      {result && (
        <div className="mt-4">
          <h2>Fraud Score: {result.fraud_score}%</h2>
          <p>Status: {result.status}</p>
        </div>
      )}
    </div>
  )
}

export default UploadBox