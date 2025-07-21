import Link from "next/link"

const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-base-100 shadow-sm rounded-lg py-6 px-7 mt-7">
        <form>
            <h1 className="text-3xl font-semibold border-b-2 pb-2 border-b-gray-300">Login</h1>
            <div className="flex flex-col mt-5">
                <label htmlFor="email" className="label mb-2">Email Address:</label>
                <input type="email" placeholder="Email Address" id="email" className="input w-full input-md" />
            </div>

            <div className="flex flex-col mt-5">
                <label htmlFor="password" className="label mb-2">Password:</label>
                <input type="password" placeholder="Password" id="password" className="input w-full input-md" />
            </div>
            <div className="w-[75%] mt-5 mx-auto">
                <button className="btn btn-primary w-full">Login</button>
            </div>
            <div className="mt-7">
                <p>Don't have an account? <Link href="/register" className="underline text-purple-400">register</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Login
