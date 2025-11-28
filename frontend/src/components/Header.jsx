import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Header() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "#000000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* LOGO + TITLE */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img 
            src={logo} 
            alt="logo" 
            style={{ width: "60px", marginRight: "10px" }} 
          />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            SE7EN Home Services
          </Typography>
        </Box>

        {/* NAVIGATION */}
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/current-booking">
            Current Booking
          </Button>

          <SignedOut>
            <Button color="primary" variant="contained" component={Link} to="/login">
              Login
            </Button>
          </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </Box>

      </Toolbar>
    </AppBar>
  );
}