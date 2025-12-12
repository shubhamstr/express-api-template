// This is where business logic lives.
// No Express code. No request/response handling.

export const userService = {
  getAllUsers: async () => {
    // Example static data – replace with Mongo model logic later
    return [
      { id: 1, name: "Shubham", role: "Admin" },
      { id: 2, name: "John Doe", role: "User" },
    ]
  },
}
