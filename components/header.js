import React from "react";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid #ccc",
      fontFamily: "Arial, sans-serif"
    },

    logo: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: "bold",
      color: "green"
    },

    links: {
      display: "flex",
      gap: "20px",
      color: "green",
      fontWeight: "500",
      cursor: "pointer"
    },

    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },

    searchBox: {
      padding: "6px 10px",
      borderRadius: "15px",
      border: "1px solid #ccc",
      outline: "none"
    },

    menuIcon: {
      fontSize: "20px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.navbar}>
      
      {/* Logo */}
      <div style={styles.logo}>
        
      <img src="assets/past papers_logo.png" alt="logo"  />
      <span>PAST PAPERS</span>
      </div>

      {/* Links */}
      <div style={styles.links}>
        <span>Home</span>
        <span>About Us</span>
        <span>Categories</span>
        <span>Register</span>
        <span>Contact</span>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <input type="text" placeholder="Search" style={styles.searchBox} />
        <span style={styles.menuIcon}>☰</span>
      </div>

    </div>
  );
};

export default Navbar;