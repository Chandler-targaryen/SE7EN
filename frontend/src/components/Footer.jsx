import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        textAlign: "center",
        color: "white",
        borderTop: "1px solid #222",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        SE7EN Home Services
      </Typography>

      <Typography sx={{ opacity: 0.8, mb: 3 }}>
        Reliable • Fast • Professional
      </Typography>

      {/* Navigation */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 3 }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/about" style={linkStyle}>About Us</Link>
        <Link to="/contact" style={linkStyle}>Contact Us</Link>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 3 }}>
        <FaInstagram size={26} style={{ cursor: "pointer" }} />
        <FaFacebook size={26} style={{ cursor: "pointer" }} />
        <FaTwitter size={26} style={{ cursor: "pointer" }} />
      </Box>

      <Typography sx={{ opacity: 0.7, fontSize: "14px" }}>
        © 2025 SE7EN Home Services. All rights reserved.
      </Typography>
    </Box>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};