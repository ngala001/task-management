export default function AuthLayout({ children }) {
  return (
    <section className="h-screen">
        <div className="grid grid-cols-2 mx-auto container">
          <div className="mt-5 content-center">
            <div className="p-10 text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Organize Your Day,</h1>
              <h2 className="text-3xl font-semibold mb-6 text-gray-700">Focus on What Matters.</h2>
              <p className="text-lg text-gray-600">
                Welcome to <span className="font-semibold text-indigo-600">TaskFlow</span> — your personal task manager built to help you stay on top of your priorities.
                Track your goals, break them into actionable tasks, and check off progress as you go.
              </p>
            </div>
          </div> 
          <div>
            {children}
          </div>
          <footer className="fixed bottom-0 py-4 bg-base-300 text-center left-0 w-full">
            <small className="text-sm">Porshtech Ltd &copy; - 2025 All rights are reserved</small>
          </footer>
        </div>  
    </section>
  );
}