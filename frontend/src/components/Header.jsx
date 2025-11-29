import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Header() {
  const location = useLocation();

  // Helper to highlight the active page
  const isActive = (path) =>
    location.pathname === path ? "#cf69f7ff" : "inherit";

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#000", 
        borderBottom: "1px solid #222",
        px: 2
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* LOGO + TITLE */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "55px", marginRight: "12px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            SE7EN Home Services
          </Typography>
        </Box>

        {/* NAVIGATION */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ color: isActive("/") }}
          >
            Home
          </Button>

          <Button 
            color="inherit" 
            component={Link} 
            to="/services"
            sx={{ color: isActive("/services") }}
          >
            Services
          </Button>

          <Button 
            color="inherit" 
            component={Link} 
            to="/current-booking"
            sx={{ color: isActive("/current-booking") }}
          >
            Current Booking
          </Button>

          <Button 
            color="inherit" 
            component={Link} 
            to="/past-bookings"
            sx={{ color: isActive("/past-bookings") }}
          >
            Past Bookings
          </Button>

          {/* AUTH BUTTONS */}
          <SignedOut>
            <Button 
              variant="contained" 
              color="primary" 
              component={Link} 
              to="/login"
              sx={{ fontWeight: 600 }}
            >
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