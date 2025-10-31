// Mock data for the Student Assignment Management System

export const mockUsers = [
  // Students
  { id: 1, name: "Alice Johnson", role: "student" },
  { id: 2, name: "Bob Smith", role: "student" },
  { id: 3, name: "Carol Davis", role: "student" },
  { id: 4, name: "David Wilson", role: "student" },
  { id: 5, name: "Emma Brown", role: "student" },

  // Admins/Professors
  { id: 6, name: "Prof. Arun", role: "admin" },
  { id: 7, name: "Prof. John Doe", role: "admin" }
];

export const mockAssignments = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Complete the React basics tutorial and build a simple component-based application. Focus on understanding JSX, props, and state management.",
    dueDate: "2024-12-15",
    driveLink: "https://drive.google.com/file/d/1abc123def456/view",
    createdBy: 6 // Prof. Michael Chen
  },
  {
    id: 2,
    title: "JavaScript ES6+ Features",
    description: "Learn and implement modern JavaScript features including arrow functions, destructuring, async/await, and modules.",
    dueDate: "2024-12-20",
    driveLink: "https://drive.google.com/file/d/2xyz789ghi012/view",
    createdBy: 6 // Prof. Michael Chen
  },
  {
    id: 3,
    title: "CSS Grid and Flexbox",
    description: "Master CSS layout techniques by creating responsive layouts using CSS Grid and Flexbox. Submit your portfolio website.",
    dueDate: "2024-12-25",
    driveLink: "https://drive.google.com/file/d/3uvw345jkl678/view",
    createdBy: 7 // Prof. Sarah Martinez
  }
];

export const mockSubmissions = [
  // Alice Johnson's submissions
  { assignmentId: 1, studentId: 1, submitted: true },
  { assignmentId: 2, studentId: 1, submitted: false },
  { assignmentId: 3, studentId: 1, submitted: false },

  { assignmentId: 1, studentId: 2, submitted: true },
  { assignmentId: 2, studentId: 2, submitted: true },
  { assignmentId: 3, studentId: 2, submitted: false },

  { assignmentId: 1, studentId: 3, submitted: false },
  { assignmentId: 2, studentId: 3, submitted: false },
  { assignmentId: 3, studentId: 3, submitted: true },

  { assignmentId: 1, studentId: 4, submitted: true },
  { assignmentId: 2, studentId: 4, submitted: false },
  { assignmentId: 3, studentId: 4, submitted: false },

 
  { assignmentId: 1, studentId: 5, submitted: false },
  { assignmentId: 2, studentId: 5, submitted: true },
  { assignmentId: 3, studentId: 5, submitted: true }
];

export const defaultData = {
  users: mockUsers,
  assignments: mockAssignments,
  submissions: mockSubmissions
};