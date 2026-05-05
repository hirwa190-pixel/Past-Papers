const API_BASE = 'https://pastpapers.kwartisans.com';

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#registrationForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // get values
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(name);

    // validation
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // data to send
    const userData = {
      name,
      email,
      password
    };

    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        form.reset();
               console.log(result);
      } else {
        alert(result.message || "Registration failed!");
      }

    } catch (error) {
      console.error(error);
      alert("Network error!");
    }
  });

});