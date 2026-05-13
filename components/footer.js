export default function footer() {
  return `
    <div style="
      background:#0b4d0b; color:#9fd97a;
      padding:36px 50px; display:flex;
      justify-content:space-between; flex-wrap:wrap;
      gap:30px; font-family:Arial,sans-serif;
    ">
      <div style="flex:1;min-width:240px;">
        <h3 style="color:#9fd97a;font-size:22px;font-weight:bold;margin:0 0 18px;">Useful links</h3>
        <ul style="list-style:disc;padding-left:18px;line-height:2;margin:0;">
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">Mineduc</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">REB</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">Rwanda Polytechnic</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">Webmail</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">TVET Digitalization</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">E-Learning</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">TVET Management Portal</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">TVET Schools MAP</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">MINEDUC</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">Rwanda Coding Academy</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">Rwanda School of Creative Arts and Music</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">Rwanda Polytechnic</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">University of Rwanda</a></li>
          <li><a href="#" style="color:#9fd97a;text-decoration:none;">Rwanda Education Board (REB)</a></li>
        </ul>
      </div>

      <div style="min-width:200px;">
        <h3 style="color:#9fd97a;font-size:22px;font-weight:bold;margin:0 0 18px;">Contact Us</h3>
        <p style="margin:0 0 12px;font-size:15px;font-weight:bold;">pastpapers@yahoo.com</p>
        <p style="margin:0 0 24px;font-size:15px;font-weight:bold;">07899875456</p>
        <div style="display:flex;gap:14px;align-items:center;">
          <a href="#" style="
            width:36px;height:36px;border:2px solid #9fd97a;border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            font-size:16px;text-decoration:none;
          "><img src="assets/inst.png" width=20 height=20></a>
          <a href="#" style="
            width:36px;height:36px;border:2px solid #9fd97a;border-radius:50%;
            background:#2a6b2a;
            display:flex;align-items:center;justify-content:center;
            font-size:14px;text-decoration:none;color:#9fd97a;font-weight:bold;
          ">✕</a>
        </div>
      </div>
    </div>
    <div style="background:#073d07;color:#9fd97a;text-align:center;padding:10px;font-size:12px;font-family:Arial,sans-serif;">
      © ${new Date().getFullYear()} Past Papers. All rights reserved.
    </div>
  `;
}