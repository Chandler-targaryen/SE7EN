import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

export const BookingConfirmation = () => {
  const booking = JSON.parse(localStorage.getItem("currentBooking"));

  return (
    <AnimatedPage>
      <Box sx={{ p: 4, textAlign: "center", color: "white", mt: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          🎉 Booking Confirmed!
        </Typography>

        <Typography variant="h5" sx={{ opacity: 0.9, mb: 3 }}>
          Thank you for booking with SE7EN Home Services.
        </Typography>

        <Box
          sx={{
            background: "#111",
            p: 3,
            borderRadius: "16px",
            maxWidth: "500px",
            mx: "auto",
            border: "1px solid #333",
            boxShadow: "0 0 25px rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Booking Details:
          </Typography>

          <Typography>Service: {booking?.serviceId}</Typography>
          <Typography>Date: {booking?.date}</Typography>
          <Typography>Time: {booking?.time}</Typography>
          <Typography>Address: {booking?.address}</Typography>

          <Typography
            sx={{
              mt: 2,
              fontWeight: 700,
              fontSize: "20px",
              color: "#4caf50",
            }}
          >
            Booking ID: {booking?.bookingId}
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{ mt: 4, mr: 2 }}
          component={Link}
          to="/services"
        >
          Book Another Service
        </Button>

        <Button variant="outlined" sx={{ mt: 4 }} component={Link} to="/">
          Go Home
        </Button>
      </Box>
    </AnimatedPage>
  );
};