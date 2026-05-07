export function signupForm() {
  return `
    <div style="
      background:white; border-radius:16px;
      padding:36px 40px; width:100%; max-width:360px;
      box-shadow:0 2px 20px rgba(0,0,0,0.08);
      display:flex; flex-direction:column; gap:0;
      font-family:Arial,sans-serif;
    ">
      <h2 style="text-align:center;font-size:22px;font-weight:bold;color:#111;margin:0 0 24px;">sign up</h2>

      <label style="font-size:13px;color:#333;margin-bottom:5px;display:block;">Name:</label>
      <input type="text" placeholder="Enter your name..." style="
        width:100%;padding:10px 14px;border:1px solid #ddd;
        border-radius:20px;font-size:13px;outline:none;
        margin-bottom:14px;box-sizing:border-box;background:#f9f9f9;
      ">

      <label style="font-size:13px;color:#333;margin-bottom:5px;display:block;">Email:</label>
      <input type="email" placeholder="Enter your email..." style="
        width:100%;padding:10px 14px;border:1px solid #ddd;
        border-radius:20px;font-size:13px;outline:none;
        margin-bottom:14px;box-sizing:border-box;background:#f9f9f9;
      ">

      <label style="font-size:13px;color:#333;margin-bottom:5px;display:block;">Password:</label>
      <input type="password" placeholder="Enter your Password..." style="
        width:100%;padding:10px 14px;border:1px solid #ddd;
        border-radius:20px;font-size:13px;outline:none;
        margin-bottom:22px;box-sizing:border-box;background:#f9f9f9;
      ">

      <div style="display:flex;justify-content:center;margin-bottom:16px;">
        <button onclick="alert('Account created!')" style="
          background:#a8e6b8;border:none;
          padding:11px 40px;border-radius:20px;
          font-size:15px;font-weight:bold;
          cursor:pointer;color:#1b5e20;
        ">Sign up</button>
      </div>

      <p style="text-align:center;font-size:13px;color:#555;margin:0;">
        Already  have an account ? <a onclick="showLogin()" style="color:#2e7d32;cursor:pointer;font-weight:bold;">login</a>
      </p>
    </div>
  `;
}