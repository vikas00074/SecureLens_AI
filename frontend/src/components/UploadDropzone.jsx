import { useDropzone } from "react-dropzone"
import { UploadCloud } from "lucide-react"
import { useState } from "react"
import axios from "axios"
import Loader from "./Loader"

function UploadDropzone() {

  const [progress, setProgress] = useState(0)

  const [uploading, setUploading] = useState(false)

  const [responseData, setResponseData] = useState(null)

  const onDrop = async (acceptedFiles) => {

    try {

      setUploading(true)

      setProgress(0)

      const formData = new FormData()

      formData.append("file", acceptedFiles[0])

      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          onUploadProgress: (progressEvent) => {

            const percent = Math.round(
              (progressEvent.loaded * 100) /
              progressEvent.total
            )

            setProgress(percent)
          }
        }
      )

      setResponseData(response.data)

    } catch (error) {

      console.error(error)

    } finally {

      setUploading(false)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  })

  return (

    <div>

      <div
        {...getRootProps()}
        className="
          border-2
          border-dashed
          border-cyan-400
          rounded-2xl
          p-12
          text-center
          bg-[#111827]
          hover:bg-[#1E293B]
          transition
          cursor-pointer
        "
      >

        <input {...getInputProps()} />

        <UploadCloud
          size={60}
          className="mx-auto text-cyan-400 mb-4"
        />

        <h2 className="text-2xl font-bold">
          Upload Banking Documents
        </h2>

        <p className="text-gray-400 mt-2">
          Drag & Drop PDF, JPG, PNG files
        </p>

      </div>

      {uploading && (
        <Loader progress={progress} />
      )}

      {responseData && (

        <div className="mt-6 bg-[#111827] p-6 rounded-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Analysis Result
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-[#1E293B] p-4 rounded-xl">

              <p className="text-gray-400">
                Fraud Score
              </p>

              <h1 className="text-4xl text-red-400 font-bold">
                {responseData.fraud_score}%
              </h1>

            </div>

            <div className="bg-[#1E293B] p-4 rounded-xl">

              <p className="text-gray-400">
                Status
              </p>

              <h1 className="text-4xl text-cyan-400 font-bold">
                {responseData.status}
              </h1>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default UploadDropzone