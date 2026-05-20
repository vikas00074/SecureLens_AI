import Navbar from '../components/Navbar'
import UploadBox from '../components/UploadBox'

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">
          Real-Time Fraud Detection Dashboard
        </h1>

        <UploadBox />
      </div>
    </div>
  )
}

export default Dashboard