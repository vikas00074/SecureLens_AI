import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import UploadDropzone from "../components/UploadDropzone"

function Upload() {

  return (

    <div className="flex bg-[#0F172A] min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 p-8 w-full">

        <Navbar />

        <UploadDropzone />

      </div>

    </div>
  )
}

export default Upload