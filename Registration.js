import loginForm  from "./login.js";
import  signupForm  from "./signup.js";

export function registerPage() {
  return `
    <div id="auth"></div>
  `;
}

window.showLogin = function() {
  document.getElementById("auth").innerHTML = loginForm();
};

window.showSignup = function() {
  document.getElementById("auth").innerHTML = signupForm();
};


setTimeout(() => {
  if (document.getElementById("auth")) {
    showLogin();
  }
}, 0);