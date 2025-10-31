import { useState } from 'react'
import { saveCurrentUser } from '../utils/storage'

const Login = ({ users, onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedUser, setSelectedUser] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Filter users by selected role
  const filteredUsers = selectedRole 
    ? users.filter(user => user.role === selectedRole)
    : []

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value)
    setSelectedUser('') // Reset user selection when role changes
  }

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    
    if (!selectedRole || !selectedUser) {
      return
    }

    setIsLoading(true)
    
    // Find the selected user object
    const user = users.find(u => u.id === parseInt(selectedUser))
    
    if (user) {
      // Save to localStorage and update app state
      saveCurrentUser(user)
      onLogin(user)
    }
    
    setIsLoading(false)
  }

  const handleLogout = () => {
    saveCurrentUser(null)
    onLogin(null)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border border-orange-100 p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-900 mb-2">
          Welcome Back
        </h2>
        <p className="text-amber-700">
          Please select your role and account to continue
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Role Selection */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-orange-800 mb-2">
            Select Role
          </label>
          <select
            id="role"
            value={selectedRole}
            onChange={handleRoleChange}
            className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            required
          >
            <option value="">Choose your role...</option>
            <option value="student">Student</option>
            <option value="admin">Admin (Professor)</option>
          </select>
        </div>

        {/* User Selection */}
        {selectedRole && (
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-orange-800 mb-2">
              Select {selectedRole === 'student' ? 'Student' : 'Professor'} Account
            </label>
            <select
              id="user"
              value={selectedUser}
              onChange={handleUserChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            >
              <option value="">Choose your account...</option>
              {filteredUsers.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Login Button */}
        <button
          type="submit"
          disabled={!selectedRole || !selectedUser || isLoading}
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </span>
          ) : (
            'Login'
          )}
        </button>
      </form>

      {/* Demo Info */}
      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-orange-100">
        <h3 className="text-sm font-semibold text-orange-800 mb-2">Demo Accounts</h3>
        <div className="text-xs text-amber-700 space-y-1">
          <div><strong>Students:</strong> Alice, Bob, Carol, David, Emma</div>
          <div><strong>Admins:</strong> Prof. Arun, Prof. John Doe</div>
        </div>
      </div>
    </div>
  )
}

export default Login