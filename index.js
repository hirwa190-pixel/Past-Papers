import homePage from "./homePage.js";
import aboutPage from "./aboutPage.js";
import registrationPage from "./Registration.js";
import mandatePage from "./mandate.js";
import navbar from "./components/Header.js";
import footer from "./components/Footer.js";
import contactPage from "./contact.js";

const app = document.getElementById("app");

window.showPage = function(page) {
  let content = "";
  if (page === "home")         content = homePage();
  else if (page === "about")   content = aboutPage();
  else if (page === "mandate") content = mandatePage();
  else if (page === "registration") content = registrationPage();
  else if (page === "contact") content = contactPage();

  app.innerHTML = navbar(page) + content + footer();

  if (page === "registration") {
    setTimeout(() => { if (window.showSignup) showSignup(); }, 0);
  }

  window.scrollTo(0, 0);
};

showPage("home");