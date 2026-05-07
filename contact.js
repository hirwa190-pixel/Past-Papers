export default function contactPage() {
  return `
    <style>
      .contact-page {
        font-family:Arial,sans-serif;
        background:#f5f5f5;
        padding:30px 40px;
      }
      .contact-top {
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        margin-bottom:20px;
        flex-wrap:wrap;
        gap:10px;
      }
      .contact-top h1 { font-size:20px; color:#222; margin:0; text-transform:uppercase; }
      .contact-badge {
        background:#b7e4c7;
        padding:8px 16px;
        border-radius:10px;
        font-size:13px;
        font-weight:bold;
        color:#1b5e20;
      }
      .contact-sub { font-size:13px; color:#444; margin:0 0 20px; }

      .contact-main {
        background:#e4e4e4;
        border-radius:16px;
        padding:28px;
        display:flex;
        gap:30px;
        flex-wrap:wrap;
        margin-bottom:28px;
      }
      .contact-form-side { flex:1; min-width:240px; }
      .contact-form-side label { font-size:12px; color:#333; display:block; margin-bottom:4px; }
      .radio-row { display:flex; align-items:center; gap:6px; margin-bottom:16px; font-size:13px; color:#333; }
      .contact-form-side input[type="text"],
      .contact-form-side input[type="email"],
      .contact-form-side textarea {
        width:100%; padding:9px 12px;
        border:1px solid #ccc; border-radius:8px;
        font-size:13px; font-family:Arial,sans-serif;
        outline:none; margin-bottom:12px;
        background:white; box-sizing:border-box;
      }
      .contact-form-side textarea { height:90px; resize:vertical; }
      .contact-form-side button {
        background:#95d5b2; border:none;
        padding:10px 22px; border-radius:8px;
        font-size:13px; font-weight:bold;
        cursor:pointer; color:#1b5e20;
      }
      .contact-form-side button:hover { background:#74c69d; }

      .contact-illustration {
        flex:1; min-width:160px;
        display:flex; align-items:center; justify-content:center;
        font-size:60px;
      }

      .contact-info-list { display:flex; flex-direction:column; gap:12px; }
      .contact-info-item {
        display:flex; align-items:center; gap:12px;
        font-size:13px; color:#333;
      }
      .c-icon {
        width:32px;height:32px;
        border-radius:6px;
        display:flex;align-items:center;justify-content:center;
        font-size:16px;
      }

      @media(max-width:600px){
        .contact-page { padding:20px; }
        .contact-main { flex-direction:column; }
      }
    </style>

    <div class="contact-page">

      <div class="contact-top">
        <h1>Contact Us</h1>
        <div class="contact-badge">🤝 We're here to help!</div>
      </div>

      <p class="contact-sub">Need help? 😊<br>
        Send us a message and we'll respond quickly. We're happy to assist you!</p>

      <div class="contact-main">
        <div class="contact-form-side">
          <div class="radio-row">
            <input type="radio" name="type" checked> Get a Quote
          </div>
          <label>Name*</label>
          <input type="text" placeholder="Name">
          <label>Email*</label>
          <input type="email" placeholder="Email">
          <label>Message*</label>
          <textarea placeholder="Message"></textarea>
          <button onclick="alert('Message sent!')">Send Message</button>
        </div>

        <div class="contact-illustration">🤖</div>
      </div>

      <div class="contact-info-list">
        <div class="contact-info-item">
          <div class="c-icon" style="background:#fdecea;">📧</div>
          pastpapers@yahoo.com
        </div>
        <div class="contact-info-item">
          <div class="c-icon" style="background:#e8f5e9;">📞</div>
          +250 785 765 902
        </div>
        <div class="contact-info-item">
          <div class="c-icon" style="background:#f3e5f5;">✕</div>
          @past_papers
        </div>
        <div class="contact-info-item">
          <div class="c-icon" style="background:#e3f2fd;">✈️</div>
          @past_papers
        </div>
      </div>

    </div>
  `;
}