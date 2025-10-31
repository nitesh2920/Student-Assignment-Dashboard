import { useState, useEffect } from 'react'
import { defaultData } from './data/mockData'
import { 
  initializeAppData, 
  loadCurrentUser, 
  loadUsers, 
  loadAssignments, 
  loadSubmissions 
} from './utils/storage'

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Student Assignment Management System
        </h1>
        
        {/* Development info - will be replaced with actual components in next tasks */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Foundation Ready</h2>
          <div className="space-y-2 text-gray-600">
            <p>✅ Mock data loaded: {users.length} users, {assignments.length} assignments</p>
            <p>✅ localStorage utilities configured</p>
            <p>✅ Tailwind CSS properly configured</p>
            <p>✅ Data persistence initialized</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Components will be added in subsequent tasks
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
