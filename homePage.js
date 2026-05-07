export default function homePage() {
  return `
    <style>
      .hero {
        height: 260px;
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url('https://images.unsplash.com/photo-1519389950473-47ba0277781c') center/cover;
        display: flex;
        align-items: center;
        font-family: Arial, sans-serif;
      }
      .overlay {
        color: white;
        padding: 30px 50px;
        width: 100%;
      }
      .overlay h1 { color: #7CFC00; margin:0 0 20px; }
      .features {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      }
      .feature-box {
        background: white;
        color: black;
        padding: 15px 20px;
        border-radius: 10px;
        min-width: 160px;
      }
      .feature-box h3 { margin: 0 0 6px; font-size: 15px; }
      .feature-box p  { margin: 0; font-size: 13px; color: #555; }

      .info-section {
        display: flex;
        gap: 20px;
        padding: 30px 50px;
        background: #e6e6e6;
        flex-wrap: wrap;
        font-family: Arial, sans-serif;
      }
      .info-box {
        flex: 1;
        min-width: 180px;
        background: white;
        padding: 20px;
        border-radius: 10px;
      }
      .info-box h3 { color: #0a5c2f; margin-top: 0; }

      .papers-section {
        padding: 30px 50px;
        font-family: Arial, sans-serif;
      }
      .papers-section h2 { color: #0a5c2f; }
      .cards-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-top: 20px;
      }
      .paper-card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #ddd;
        transition: transform 0.2s;
      }
      .paper-card:hover { transform: translateY(-3px); }
      .paper-card h4 { margin: 0 0 8px; color: #333; }
      .paper-card p  { margin: 0 0 15px; font-size: 13px; color: #666; }
      .paper-card button {
        background: #0a5c2f;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
      }
      .paper-card button:hover { background: #074d27; }

      .offer-section {
        background: #0a5c2f;
        color: white;
        padding: 30px 50px;
        font-family: Arial, sans-serif;
      }
      .offer-section h3 { margin-top: 0; font-size: 22px; }

      @media (max-width: 600px) {
        .cards-grid { grid-template-columns: 1fr; }
        .overlay { padding: 20px; }
        .info-section, .papers-section, .offer-section { padding: 20px; }
      }
    </style>

    <!-- HERO -->
    <section class="hero">
      <div class="overlay">
        <h1>Welcome to Your Ultimate Study Hub</h1>
        <div class="features">
          <div class="feature-box">
            <h3>Study Resources</h3>
            <p>Access past papers, notes and more.</p>
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
    <section class="info-section">
      <div class="info-box">
        <h3>About</h3>
        <p>Access structured learning materials and track your progress.</p>
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
        <p>Excellence, integrity, accessibility, and student success.</p>
      </div>
    </section>

    <!-- PAST PAPERS -->
    <section class="papers-section">
      <h2>Explore Past Papers</h2>
      <div class="cards-grid">
        <div class="paper-card">
          <h4>P1 UP TO P5 EXAMS</h4>
          <p>Past papers for primary school students.</p>
          <button onclick="showPage('mandate')">Get more →</button>
        </div>
        <div class="paper-card">
          <h4>S1 UP TO S2 EXAMS</h4>
          <p>Past papers for lower secondary students.</p>
          <button onclick="showPage('mandate')">Get more →</button>
        </div>
        <div class="paper-card">
          <h4>P6, S3 AND S6 NATIONAL</h4>
          <p>National examination past papers.</p>
          <button onclick="showPage('mandate')">Get more →</button>
        </div>
        <div class="paper-card">
          <h4>TVET PAST PAPERS</h4>
          <p>Past papers for TVET students.</p>
          <button onclick="showPage('mandate')">Get more →</button>
        </div>
      </div>
    </section>

    <!-- WHAT WE OFFER -->
    <section class="offer-section">
      <h3>What We Offer</h3>
      <p>
        We provide past exam papers, clear revision materials, and flexible tools
        that help you learn anytime. Our exam preparation content is designed to
        be simple, effective, and confidence-building.
      </p>
    </section>
  `;
}