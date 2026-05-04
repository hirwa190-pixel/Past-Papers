export function signupForm() {
  return `
    <div class="card">
      <h2>Sign Up</h2>
      <label for="name">Name</label>
      <input placeholder="Name">
      <label for="email">Email</label>
      <input placeholder="Email">
      <label for="password">Password</label>
      <input type="password" placeholder="Password">
      <button>Sign Up</button>
      <p>Already have account? <a href="#" onclick="showLogin()">Login</a></p>
    </div>
  `;
}