import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Upload from "./pages/Upload"
import Analytics from "./pages/Analytics"
import AuditLogs from "./pages/AuditLogs"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {

  return (

    <Routes>

      <Route path="/" element={<Navigate to="/signin" />} />

      <Route path="/signin" element={<SignIn />} />

      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/upload" element={<Upload />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/audit-logs" element={<AuditLogs />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/settings" element={<Settings />} />

    </Routes>
  )
}

export default App