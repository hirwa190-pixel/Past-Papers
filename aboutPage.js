export default function aboutPage() {
  return `
    <style>
      .about-hero {
        background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),
          url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200') center/cover;
        padding: 40px;
        color: white;
        font-family: Arial, sans-serif;
      }
      .about-hero h1 { font-size:22px; margin:0 0 14px; font-weight:bold; }
      .about-hero p  { font-size:13px; line-height:1.7; max-width:600px; margin:0 0 8px; }

      .about-body {
        padding: 30px 40px;
        font-family: Arial, sans-serif;
        background: #fff;
      }
      .about-section { margin-bottom:26px; }
      .about-section h2 {
        font-size:16px; font-weight:bold;
        color:#2e7d32; margin:0 0 10px;
        font-style:italic;
      }
      .about-section p  { font-size:13px; color:#333; line-height:1.7; margin:0 0 8px; }
      .about-section ul { padding-left:20px; margin:0; }
      .about-section ul li { font-size:13px; color:#333; line-height:2; }

      @media(max-width:600px){
        .about-hero, .about-body { padding:20px; }
      }
    </style>

    <section class="about-hero">
      <h1>About Us</h1>
      <p>Students waste hours searching for past papers, jumping between different websites, and still end up confused by unclear or missing answers. Studying becomes slow, frustrating, and inefficient.</p>
      <p>We built this platform to fix that.</p>
    </section>

    <section class="about-body">

      <div class="about-section">
        <h2>What We Do</h2>
        <p>We provide a single, organized space where students can:</p>
        <ul>
          <li>Access past papers by subject and year</li>
          <li>Find clear, structured answers and explanations</li>
          <li>Ask questions and get help when they're stuck</li>
          <li>Study faster and more effectively</li>
        </ul>
        <p style="margin-top:8px;">Everything is designed to remove confusion and save time.</p>
      </div>

      <div class="about-section">
        <h2>The Problem We Solve</h2>
        <p>Most students face the same issues:</p>
        <ul>
          <li>Scattered resources across multiple sites</li>
          <li>Lack of clear explanations</li>
          <li>No support when stuck</li>
          <li>Wasted time during revision</li>
        </ul>
        <p style="margin-top:8px;">This platform eliminates that by bringing everything into one simple system.</p>
      </div>

      <div class="about-section">
        <h2>Our Mission</h2>
        <p>To make exam preparation faster, clearer, and accessible to every student by providing structured past papers and real explanations in one place.</p>
      </div>

      <div class="about-section">
        <h2>Who It's For</h2>
        <p>Built for primary & secondary school students preparing for exams who want to study smarter and improve their results.</p>
      </div>

      <div class="about-section">
        <h2>Our Vision</h2>
        <p>We're building more than just a past paper website. Our goal is to create a smarter learning platform with:</p>
        <ul>
          <li>More subjects and exam content</li>
          <li>Better and deeper explanations</li>
          <li>Performance tracking tools</li>
          <li>Mock exams and practice systems</li>
        </ul>
        <p style="margin-top:8px;">A system where students don't just practice they improve.</p>
      </div>

    </section>
  `;
}