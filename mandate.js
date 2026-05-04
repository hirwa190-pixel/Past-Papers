function categoriesPage() {
  return `
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f5f5f5;
      }

      .hero {
        height: 220px;
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url('https://images.unsplash.com/photo-1519681393784-d120267933ba');
        background-size: cover;
        background-position: center;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
      }

      .hero h1 {
        color: #9be7a1;
        margin: 0;
        font-size: 32px;
      }

      .hero p {
        max-width: 500px;
        font-size: 14px;
        margin-top: 10px;
        line-height: 1.5;
      }

      .container {
        padding: 40px;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
      }

      .card {
        background: #dcdcdc;
        border-radius: 15px;
        padding: 20px;
        border: 1px solid #bbb;
        transition: 0.3s;
      }

      .card:hover {
        transform: translateY(-3px);
      }

      .card h3 {
        font-size: 16px;
        margin-bottom: 10px;
      }

      .card p {
        font-size: 14px;
        color: #333;
      }

      .card a {
        display: inline-block;
        margin-top: 15px;
        font-weight: bold;
        text-decoration: none;
        color: black;
      }

      .card a:hover {
        color: #0a5c2f;
      }

      @media (max-width: 768px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div class="hero">
      <h1>Categories</h1>
      <p>
        This section compiles different past papers.
        Click on 'get more' for more information about each of the past papers.
      </p>
    </div>

    <div class="container">
      <div class="grid">

        <div class="card">
          <h3>P1 UP TO P5 EXAMINATION PAST PAPERS</h3>
          <p>These are the past papers for p1 up to p6 which can help students to learn...</p>
          <a href="#">Get more →</a>
        </div>

        <div class="card">
          <h3>S1 UP TO S2 EXAMINATION PAST PAPERS</h3>
          <p>These are the past papers which can help students to learn...</p>
          <a href="#">Get more →</a>
        </div>

        <div class="card">
          <h3>P6 ; S3 AND S6 NATIONAL EXAMINATIONS PAST PAPERS</h3>
          <p>These are the past papers for national examinations for p6; s3 and s6...</p>
          <a href="#">Get more →</a>
        </div>

        <div class="card">
          <h3>TVET PAST PAPERS FOR EXAMS</h3>
          <p>These are the past papers for tvet national examinations...</p>
          <a href="#">Get more →</a>
        </div>

      </div>
    </div>
  `;
}