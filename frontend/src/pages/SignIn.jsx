import { useNavigate } from "react-router-dom"

function SignIn() {

  const navigate = useNavigate()

  const handleLogin = () => {

    localStorage.setItem("token", "securelens")

    navigate("/dashboard")
  }

  return (

    <div className="h-screen flex justify-center items-center bg-[#0F172A]">

      <div className="bg-[#111827] p-10 rounded-2xl w-[400px]">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-[#1E293B] mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-[#1E293B] mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-lg font-bold"
        >
          Sign In
        </button>

      </div>

    </div>
  )
}

export default SignIn