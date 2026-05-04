import { aboutPage } from "./about.js";
import { registerPage } from "./register.js";

const app = document.getElementById("app");


const style = document.createElement("style");
style.textContent = `
body { font-family: Arial; background: #f3f3f3; }

nav {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background: #ddd;
}

.card, .form-box {
  background: #dcdcdc;
  padding: 30px;
  border-radius: 20px;
  width: 400px;
  margin: 50px auto;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  border: none;
}

button {
  padding: 10px;
  border-radius: 20px;
  border: none;
  background: #8fb174;
}
`;
document.head.appendChild(style);


window.showPage = function(page) {
  if (page === "home") {
    app.innerHTML = "<h1 style='text-align:center'>Welcome</h1>";
  }
  else if (page === "about") {
    app.innerHTML = aboutPage();
  }
  else if (page === "register") {
    app.innerHTML = registerPage();
  }
};