import { useState, useEffect } from 'react'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Student Assignment Management System
        </h1>
        {/* App content will be implemented in subsequent tasks */}
        <div className="text-center text-gray-600">
          Application foundation ready - components will be added in next tasks
        </div>
      </div>
    </div>
  )
}

export default App
