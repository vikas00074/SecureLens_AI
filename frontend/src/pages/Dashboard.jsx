import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StatsCard from "../components/StatsCard"
import UploadDropzone from "../components/UploadDropzone"
import AIInsightsCard from "../components/AIInsightsCard"
import ActivityFeed from "../components/ActivityFeed"
import RiskChart from "../components/RiskChart"

function Dashboard() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="ml-64 p-8 w-full">

        <Navbar />

        <div className="grid grid-cols-4 gap-6 mb-8">

          <StatsCard
            title="Documents Scanned"
            value="1,248"
            color="text-cyan-400"
          />

          <StatsCard
            title="Frauds Detected"
            value="84"
            color="text-red-400"
          />

          <StatsCard
            title="Low Risk"
            value="92%"
            color="text-green-400"
          />

          <StatsCard
            title="AI Accuracy"
            value="98%"
            color="text-yellow-400"
          />

        </div>

        <div className="mb-8">
          <UploadDropzone />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">

          <RiskChart />

          <AIInsightsCard />

        </div>

        <ActivityFeed />

      </div>

    </div>
  )
}

export default Dashboard