import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#0b4d0b", // dark green
      color: "#d4f5d4",
      padding: "40px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      fontFamily: "Arial, sans-serif"
    },

    column: {
      width: "45%",
      minWidth: "250px"
    },

    title: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "15px"
    },

    list: {
      listStyle: "disc",
      paddingLeft: "20px"
    },

    link: {
      color: "#d4f5d4",
      textDecoration: "underline",
      marginBottom: "6px",
      cursor: "pointer"
    },

    contactText: {
      marginBottom: "10px",
      fontWeight: "bold"
    },

    icons: {
      display: "flex",
      gap: "15px",
      marginTop: "15px",
      fontSize: "20px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.footer}>

      {/* LEFT SIDE */}
      <div style={styles.column}>
        <div style={styles.title}>Useful links</div>

        <ul style={styles.list}>
          <li style={styles.link}>Mineduc</li>
          <li style={styles.link}>REB</li>
          <li style={styles.link}>Rwanda Polytechnic</li>
          <li style={styles.link}>Webmail</li>
          <li style={styles.link}>TVET Digitalization</li>
          <li style={styles.link}>E-Learning</li>
          <li style={styles.link}>TVET Management Portal</li>
          <li style={styles.link}>TVET Schools MAP</li>
          <li style={styles.link}>MINEDUC</li>
          <li style={styles.link}>Rwanda Coding Academy</li>
          <li style={styles.link}>Rwanda School of Creative Arts and Music</li>
          <li style={styles.link}>University of Rwanda</li>
          <li style={styles.link}>Rwanda Education Board (REB)</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.column}>
        <div style={styles.title}>Contact Us</div>

        <div style={styles.contactText}>pastpapers@yahoo.com</div>
        <div style={styles.contactText}>07899875456</div>

        <div style={styles.icons}>
  <img src="assets/inst.png" alt="icon" style={{ width: "22px" }} />
  <img src="assets/x.png" alt="icon" style={{ width: "22px" }} />
</div>
      </div>

    </div>
  );
};

export default Footer;