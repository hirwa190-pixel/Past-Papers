export function loginForm() {
  return `
    <div class="card">
      <h2>Login</h2>
       <label for="email">Email</label>
      <input placeholder="Email">
        <label for="password">Password</label>
      <input type="password" placeholder="Password">
      <button>Login</button>
      <p>Don't have account? <a href="#" onclick="showSignup()">Sign up</a></p>
    </div>
  `;
}