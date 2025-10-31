import { useState, useEffect } from 'react'
import { defaultData } from './data/mockData'
import { 
  initializeAppData, 
  loadCurrentUser, 
  loadUsers, 
  loadAssignments, 
  loadSubmissions 
} from './utils/storage'
import Login from './components/Login'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [assignments, setAssignments] = useState([])
  const [submissions, setSubmissions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize app data on first load
    initializeAppData(defaultData)
    
    // Load data from localStorage
    const savedUser = loadCurrentUser()
    const savedUsers = loadUsers(defaultData.users)
    const savedAssignments = loadAssignments(defaultData.assignments)
    const savedSubmissions = loadSubmissions(defaultData.submissions)
    
    setCurrentUser(savedUser)
    setUsers(savedUsers)
    setAssignments(savedAssignments)
    setSubmissions(savedSubmissions)
    setIsLoading(false)
  }, [])

  const handleLogin = (user) => {
    setCurrentUser(user)
  }

  const updateAssignments = (newAssignments) => {
    setAssignments(newAssignments)
  }

  const updateSubmissions = (newSubmissions) => {
    setSubmissions(newSubmissions)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-orange-600">Loading...</div>
        </div>
      </div>
    )
  }

  // Role-based conditional rendering
  const renderContent = () => {
    if (!currentUser) {
      return <Login users={users} onLogin={handleLogin} />
    }

    if (currentUser.role === 'student') {
      return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-orange-100 p-6">
          <h2 className="text-xl font-semibold text-orange-800 mb-4">
            Welcome, {currentUser.name} (Student)
          </h2>
          <p className="text-amber-700">
            Student dashboard will be implemented in task 4
          </p>
        </div>
      )
    }

    if (currentUser.role === 'admin') {
      return (
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg border border-orange-100 p-6">
          <h2 className="text-xl font-semibold text-orange-800 mb-4">
            Welcome, {currentUser.name} (Admin)
          </h2>
          <p className="text-amber-700">
            Admin dashboard will be implemented in task 7
          </p>
        </div>
      )
    }

    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border border-red-200 p-6">
        <h2 className="text-xl font-semibold text-red-600 mb-4 text-center">
          Invalid User Role
        </h2>
        <p className="text-red-500 text-center">
          Please contact administrator
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Responsive container with proper spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header section */}
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-orange-900 mb-2 sm:mb-0">
              Student Assignment Management System
            </h1>
            {currentUser && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="text-center sm:text-right text-sm text-amber-700">
                  Logged in as: {currentUser.name} ({currentUser.role})
                </div>
                <button
                  onClick={() => handleLogin(null)}
                  className="px-3 py-1 text-sm bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <main>
          {renderContent()}
        </main>

    
      </div>
    </div>
  )
}

export default App
