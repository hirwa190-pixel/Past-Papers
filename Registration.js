import { loginForm } from "./login.js";
import { signupForm } from "./signup.js";

export default function registrationPage() {
  return `
    <div style="
      min-height:500px;
      background:#f0f0f0;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:50px 20px;
      font-family:Arial,sans-serif;
    ">
      <div id="auth"></div>
    </div>
  `;
}

window.showLogin = function() {
  const auth = document.getElementById("auth");
  if (auth) auth.innerHTML = loginForm();
};

window.showSignup = function() {
  const auth = document.getElementById("auth");
  if (auth) auth.innerHTML = signupForm();
};