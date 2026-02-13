import React from 'react'

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Welcome 👋
        </h1>
        <p className="text-gray-600 text-lg">
          Go to{" "}
          <span className="text-indigo-600 font-semibold">
            Products
          </span>{" "}
          to see all the products
        </p>
      </div>
    </div>
  )
}

export default Home
