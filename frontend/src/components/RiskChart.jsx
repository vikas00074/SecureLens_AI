import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

function RiskChart() {

  const data = [
    { day: "Mon", risk: 20 },
    { day: "Tue", risk: 45 },
    { day: "Wed", risk: 30 },
    { day: "Thu", risk: 80 },
    { day: "Fri", risk: 60 },
  ]

  return (

    <div className="bg-[#111827] p-6 rounded-2xl h-[350px]">

      <h2 className="text-2xl font-bold mb-6">
        Fraud Analytics
      </h2>

      <ResponsiveContainer width="100%" height="80%">

        <LineChart data={data}>

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="risk"
            stroke="#06B6D4"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}

export default RiskChart