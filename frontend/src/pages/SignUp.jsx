import { useNavigate } from "react-router-dom"

function SignUp() {

  const navigate = useNavigate()

  return (

    <div className="h-screen flex justify-center items-center bg-[#0F172A]">

      <div className="bg-[#111827] p-10 rounded-2xl w-[400px]">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <input
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-[#1E293B] mb-4"
        />

        <input
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-[#1E293B] mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-[#1E293B] mb-6"
        />

        <button
          onClick={() => navigate("/signin")}
          className="w-full bg-cyan-500 p-3 rounded-lg font-bold"
        >
          Sign Up
        </button>

      </div>

    </div>
  )
}

export default SignUp