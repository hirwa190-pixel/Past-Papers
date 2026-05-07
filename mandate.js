export default function mandatePage() {
  return `
    <style>
      .mandate-hero {
        background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),
          url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200') center/cover;
        padding:36px 40px;
        color:white;
        font-family:Arial,sans-serif;
      }
      .mandate-hero h1 { font-size:22px; margin:0 0 10px; font-weight:bold; }
      .mandate-hero p  { font-size:13px; max-width:500px; line-height:1.6; margin:0; }

      .mandate-body {
        padding:30px 40px;
        background:#fff;
        font-family:Arial,sans-serif;
      }
      .mandate-grid {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:20px;
      }
      .mandate-card {
        border:1px solid #ddd;
        border-radius:10px;
        padding:20px;
        background:#fff;
        transition:box-shadow 0.2s;
      }
      .mandate-card:hover { box-shadow:0 4px 14px rgba(0,0,0,0.1); }
      .mandate-card .m-icon {
        width:36px;height:36px;
        background:#e8f5e9;
        border-radius:6px;
        display:flex;align-items:center;justify-content:center;
        font-size:18px;margin-bottom:12px;
      }
      .mandate-card h4 { font-size:13px; font-weight:bold; color:#111; margin:0 0 8px; }
      .mandate-card p  { font-size:12px; color:#555; margin:0 0 14px; line-height:1.5; }
      .mandate-card a  {
        font-size:12px; color:#333; font-weight:bold;
        text-decoration:none; display:inline-block;
      }
      .mandate-card a:hover { color:#0a5c2f; }

      @media(max-width:600px){
        .mandate-grid { grid-template-columns:1fr; }
        .mandate-hero, .mandate-body { padding:20px; }
      }
    </style>

    <section class="mandate-hero">
      <h1>Categories</h1>
      <p>This section compiles different past papers. Click on 'get more' for more information about each of the past papers.</p>
    </section>

    <section class="mandate-body">
      <div class="mandate-grid">

        <div class="mandate-card">
          <div class="m-icon">📄</div>
          <h4>P1 UP TO P5 EXAMINATION PAST PAPERS</h4>
          <p>These are the past papers for p1 up to p6 which can help students to learn...</p>
          <a href="#">Get more →</a>
        </div>

        <div class="mandate-card">
          <div class="m-icon">📄</div>
          <h4>S1 UP TO S2 EXAMINATION PAST PAPERS</h4>
          <p>These are the past papers which can help students to learn...</p>
          <a href="#">Get more →</a>
        </div>

        <div class="mandate-card">
          <div class="m-icon">🏆</div>
          <h4>P6, S3 AND S6 NATIONAL EXAMINATIONS PAST PAPERS</h4>
          <p>These are the past papers for national examinations for p6;s3 and s6...</p>
          <a href="#">Get more →</a>
        </div>

        <div class="mandate-card">
          <div class="m-icon">🔧</div>
          <h4>TVET PAST PAPERS FOR EXAMS</h4>
          <p>These are the past papers for tvet national examinations...</p>
          <a href="#">Get more →</a>
        </div>

      </div>
    </section>
  `;
}