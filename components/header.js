export default function navbar(activePage = "home") {
  const links = [
    { label: "Home",       page: "home" },
    { label: "About Us",   page: "about" },
    { label: "Mandate",    page: "mandate" },
    { label: "Register",   page: "registration" },
    { label: "Contact",    page: "contact" },
  ];

  const linkHTML = links.map(l => `
    <span onclick="showPage('${l.page}')" style="
      cursor:pointer;
      font-size:13px;
      font-weight:${activePage === l.page ? 'bold' : 'normal'};
      color:#3a7d3a;
      text-decoration:${activePage === l.page ? 'underline' : 'none'};
      white-space:nowrap;
    ">${l.label}</span>
  `).join("");

  return `
    <nav style="
      display:flex; align-items:center; justify-content:space-between;
      padding:6px 16px; background:#f2f2f2;
      border-bottom:1px solid #ccc; font-family:Arial,sans-serif;
      position:sticky; top:0; z-index:1000;
    ">
      <div style="display:flex;align-items:center;gap:6px;min-width:60px;">
        <div style="
          width:42px;height:42px;
          border:2px solid #5aac5a;
          border-radius:6px;
          background:#e8f5e9;
          display:flex;align-items:center;justify-content:center;
          font-size:20px;
        ">📋</div>
        <div style="font-size:8px;font-weight:bold;color:#2e7d32;line-height:1.3;">PAST<br>PAPERS</div>
      </div>

      <div style="display:flex;gap:22px;align-items:center;">
        ${linkHTML}
      </div>

      <div style="
        display:flex;align-items:center;
        border:1px solid #bbb;border-radius:4px;
        background:white;overflow:hidden;min-width:150px;
      ">
        <span style="padding:6px 8px;font-size:13px;color:#777;border-right:1px solid #ddd;">☰</span>
        <input type="text" placeholder="Search" style="
          border:none;outline:none;padding:6px 8px;
          font-size:13px;flex:1;background:white;
          font-family:Arial,sans-serif;
        ">
        <span style="padding:6px 8px;font-size:13px;color:#777;border-left:1px solid #ddd;">🔍</span>
      </div>
    </nav>
  `;
}