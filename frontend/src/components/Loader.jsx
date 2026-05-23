function Loader({ progress }) {

  return (

    <div className="mt-6">

      <div className="w-full bg-[#1E293B] rounded-full h-5">

        <div
          className="bg-cyan-400 h-5 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-2 text-center">
        Uploading... {progress}%
      </p>

    </div>
  )
}

export default Loader