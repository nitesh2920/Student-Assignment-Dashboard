// localStorage utility functions for data persistence

const STORAGE_KEYS = {
  USERS: 'sams_users',
  ASSIGNMENTS: 'sams_assignments', 
  SUBMISSIONS: 'sams_submissions',
  CURRENT_USER: 'sams_current_user'
};

export const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

/**
 * Load data from localStorage
 * @param {string} key - Storage key
 * @param {any} defaultValue - Default value if key doesn't exist
 * @returns {any} Parsed data or default value
 */
export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

export const clearAllStorage = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

// Specific functions for application data

/**
 * Save users data
 * @param {Array} users - Array of user objects
 */
export const saveUsers = (users) => {
  saveToStorage(STORAGE_KEYS.USERS, users);
};

export const loadUsers = (defaultUsers = []) => {
  return loadFromStorage(STORAGE_KEYS.USERS, defaultUsers);
};

/**
 * Save assignments data
 * @param {Array} assignments - Array of assignment objects
 */
export const saveAssignments = (assignments) => {
  saveToStorage(STORAGE_KEYS.ASSIGNMENTS, assignments);
};

export const loadAssignments = (defaultAssignments = []) => {
  return loadFromStorage(STORAGE_KEYS.ASSIGNMENTS, defaultAssignments);
};

export const saveSubmissions = (submissions) => {
  saveToStorage(STORAGE_KEYS.SUBMISSIONS, submissions);
};


export const loadSubmissions = (defaultSubmissions = []) => {
  return loadFromStorage(STORAGE_KEYS.SUBMISSIONS, defaultSubmissions);
};


export const saveCurrentUser = (user) => {
  saveToStorage(STORAGE_KEYS.CURRENT_USER, user);
};

/**
 * Load current user session
 * @returns {Object|null} Current user object or null
 */
export const loadCurrentUser = () => {
  return loadFromStorage(STORAGE_KEYS.CURRENT_USER, null);
};

export const clearCurrentUser = () => {
  removeFromStorage(STORAGE_KEYS.CURRENT_USER);
};


export const initializeAppData = (defaultData) => {
  const users = loadUsers();
  const assignments = loadAssignments();
  const submissions = loadSubmissions();

  // Initialize with default data if localStorage is empty
  if (!users || users.length === 0) {
    saveUsers(defaultData.users);
  }
  
  if (!assignments || assignments.length === 0) {
    saveAssignments(defaultData.assignments);
  }
  
  if (!submissions || submissions.length === 0) {
    saveSubmissions(defaultData.submissions);
  }
};