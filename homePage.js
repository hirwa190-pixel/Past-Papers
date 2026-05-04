const homePage = `

<nav>
    <div class="logo">
        <img src="past papers_logo.png">
    </div>

    <ul>
        <li class="active">Home</li>
        <li>About Us</li>
        <li>Register</li>
        <li>Contact</li>
    </ul>
</nav>

<!-- HERO -->
<section class="hero">
<img src="assets/home_background.png">
    <div class="overlay">
        <h1>Welcome to Your Ultimate Study Hub</h1>

        <div class="features">
            <div class="feature-box">
                <h3>Study Resources</h3>
                <p>Access Past Papers, Notes and more.</p>
            </div>

            <div class="feature-box">
                <h3>Expert Guidance</h3>
                <p>Learn with structured explanations.</p>
            </div>

            <div class="feature-box">
                <h3>Exam Preparation</h3>
                <p>Mock exams and practice tools.</p>
            </div>
        </div>
    </div>
</section>

<!-- INFO CARDS -->
<section class="info">

    <div class="info-box">
        <h3>About</h3>
        <p>Access structured learning materials and track progress.</p>
    </div>

    <div class="info-box">
        <h3>Our Mission</h3>
        <p>To empower students with quality content and support.</p>
    </div>

    <div class="info-box">
        <h3>Our Vision</h3>
        <p>To be a leading platform for digital learning and growth.</p>
    </div>

    <div class="info-box">
        <h3>Our Values</h3>
        <p>Excellence, integrity, accessibility, and success.</p>
    </div>

</section>

<!-- PAST PAPERS -->
<section class="papers">

    <h2>Explore Past Papers</h2>

    <div class="cards">

        <div class="card">
            <h4>P1 UP TO P5 EXAMS</h4>
            <p>Past papers for primary students.</p>
            <button>Get more →</button>
        </div>

        <div class="card">
            <h4>S1 UP TO S2 EXAMS</h4>
            <p>Past papers for lower secondary.</p>
            <button>Get more →</button>
        </div>

        <div class="card">
            <h4>P6, S3 AND S6 NATIONAL</h4>
            <p>National exam past papers.</p>
            <button>Get more →</button>
        </div>

        <div class="card">
            <h4>TVET PAST PAPERS</h4>
            <p>Past papers for TVET students.</p>
            <button>Get more →</button>
        </div>

    </div>

</section>

<!-- WHAT WE OFFER -->
<section class="offer">
    <h3>What We Offer:</h3>
    <p>
        We provide past exam papers, clear revision materials, and flexible tools
        that help you learn anytime. Our exam preparation content is designed to
        be simple, effective, and confidence-building.
    </p>
</section>

<!-- FOOTER -->
<footer>

    <div class="footer-container">

        <div class="links">
            <h3>Useful links</h3>
            <ul>
                <li>Mineduc</li>
                <li>REB</li>
                <li>University of Rwanda</li>
                <li>TVET Board</li>
            </ul>
        </div>

        <div class="contact">
            <h3>Contact Us</h3>
            <p>pastpapers@yahoo.com</p>
            <p>07899875456</p>
        </div>

    </div>

</footer>

`;
function loadHome() {
    const app = document.getElementById("app");

    // 🔥 Remove old styles
    document.querySelectorAll(".page-style").forEach(s => s.remove());

    app.innerHTML = "";

    const div = document.createElement("div");
    div.innerHTML = homePage;

    // 🔹 CREATE STYLE
    const style = document.createElement("style");
    style.classList.add("page-style");

    style.textContent = `
        body {
            margin: 0;
            font-family: Arial;
            background: #e6e6e6;
        }

        nav {
            display: flex;
            justify-content: space-between;
            padding: 15px 40px;
            background: #d9d9d9;
        }

        nav ul {
            display: flex;
            gap: 20px;
            list-style: none;
        }

        .active {
            color: #4CAF50;
            font-weight: bold;
        }

        .hero {
            height: 250px;
            background: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c") center/cover;
            display: flex;
            align-items: center;
        }

        .overlay {
            background: rgba(0,0,0,0.6);
            color: white;
            padding: 30px;
            width: 100%;
        }

        h1 {
            color: #7CFC00;
        }

        .features {
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }

        .feature-box {
            background: white;
            color: black;
            padding: 15px;
            border-radius: 10px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 30px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
        }

        footer {
            background: green;
            color: white;
            padding: 20px;
        }
    `;

    // 🔥 APPEND
    document.head.appendChild(style);
    app.appendChild(div);
}

export default homePage;