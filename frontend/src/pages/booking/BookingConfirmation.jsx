import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

export const BookingConfirmation = () => {
  // Get the latest booking from allBookings
  const all = JSON.parse(localStorage.getItem("allBookings")) || [];
  const booking = all.length > 0 ? all[all.length - 1] : null;

  // If nothing exists (direct access)
  if (!booking) {
    return (
      <AnimatedPage>
        <Box sx={{ p: 4, textAlign: "center", color: "white", mt: 5 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            No Booking Found
          </Typography>

          <Button variant="contained" component={Link} to="/services">
            Book a Service
          </Button>
        </Box>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <Box sx={{ p: 4, textAlign: "center", color: "white", mt: 5 }}>
        {/* TITLE */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          🎉 Booking Confirmed!
        </Typography>

        <Typography variant="h5" sx={{ opacity: 0.9, mb: 3 }}>
          Thank you for booking with SE7EN Home Services.
        </Typography>

        {/* DETAILS CARD */}
        <Box
          sx={{
            background: "#111",
            p: 3,
            borderRadius: "16px",
            maxWidth: "550px",
            mx: "auto",
            border: "1px solid #333",
            boxShadow: "0 0 25px rgba(255,255,255,0.15)",
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            Booking Details:
          </Typography>

          <Box sx={{ textAlign: "left", maxWidth: "350px", mx: "auto", colour: "white" }}>
            <Typography sx={{ mb: 1 }}>
              <strong>Service:</strong> {booking.service || booking.serviceId}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Date:</strong> {booking.date}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Time:</strong> {booking.time}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <strong>Address:</strong> {booking.address}
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 3,
              fontWeight: 700,
              fontSize: "22px",
              color: "#4caf50",
            }}
          >
            Booking ID: {booking.bookingId}
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            sx={{ mr: 2, px: 3 }}
            component={Link}
            to="/services"
          >
            Book Another Service
          </Button>

          <Button variant="outlined" sx={{ px: 3 }} component={Link} to="/">
            Go Home
          </Button>
        </Box>
      </Box>
    </AnimatedPage>
  );
};