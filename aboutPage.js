const aboutPage = `
<nav>
    <div class="logo">
        <img src="past papers_logo.png">
    </div>

    <ul>
        <li>Home</li>
        <li class="active">About Us</li>
        <li>Register</li>
        <li>Contact</li>
    </ul>
</nav>

<section class="hero">
    <div class="overlay">
    <img src="assets/About_Background.png">
        <h1>About Us</h1>
        <p>
            Students waste hours searching for past papers, jumping between different websites,
            and still end up confused by unclear or missing answers.
        </p>
        <p>We built this platform to fix that.</p>
    </div>
</section>

<section class="content">

<h2>What We Do</h2>
<ul>
    <li>Access past papers by subject and year</li>
    <li>Find clear, structured answers and explanations</li>
    <li>Ask questions and get help when stuck</li>
    <li>Study faster and more effectively</li>
</ul>

<p>Everything is designed to remove confusion and save time.</p>

<h2>The Problem We Solve</h2>
<ul>
    <li>Scattered resources across multiple sites</li>
    <li>Lack of clear explanations</li>
    <li>No support when stuck</li>
    <li>Wasted time during revision</li>
</ul>

<p>This platform brings everything into one simple system.</p>

<h2>Our Mission</h2>
<p>To make exam preparation faster and clearer for every student.</p>

<h2>Who It's For</h2>
<p>Secondary school students preparing for national exams.</p>

<h2>Our Vision</h2>
<ul>
    <li>Better explanations</li>
    <li>Performance tracking</li>
    <li>Mock exams</li>
</ul>

</section>
`;

export default aboutPage;

function loadAbout() {
    const app = document.getElementById("app");

    // 🔥 Remove old styles
    document.querySelectorAll(".page-style").forEach(s => s.remove());

    app.innerHTML = "";

    const div = document.createElement("div");
    div.innerHTML = aboutPage;

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
            height: 200px;
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

        .content {
            padding: 30px;
        }

        h2 {
            color: #4CAF50;
        }
    `;

    document.head.appendChild(style);
    app.appendChild(div);
}

export default loadAbout;