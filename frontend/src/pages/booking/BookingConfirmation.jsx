import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

export const BookingConfirmation = () => {
  const booking = JSON.parse(localStorage.getItem("currentBooking"));

  return (
    <AnimatedPage>
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          color: "white",
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TITLE */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          🎉 Booking Confirmed!
        </Typography>

        <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
          Thank you for booking with SE7EN Home Services.
        </Typography>

        {/* BOOKING CARD */}
        <Box
          sx={{
            background: "#111",
            p: 4,
            borderRadius: "16px",
            width: "100%",
            maxWidth: "520px",
            mx: "auto",
            border: "1px solid #333",
            boxShadow: "0px 0px 25px rgba(255,255,255,0.08)",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, textAlign: "center", fontWeight: 700 }}
          >
            Booking Details:
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Service:</strong> {booking?.service}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Date:</strong> {booking?.date}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Time:</strong> {booking?.time}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Address:</strong> {booking?.address}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontWeight: 700,
              fontSize: "20px",
              color: "#4caf50",
              textAlign: "center",
            }}
          >
            Booking ID: {booking?.bookingId}
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            component={Link}
            to="/services"
          >
            Book Another Service
          </Button>

          <Button variant="outlined" component={Link} to="/">
            Go Home
          </Button>
        </Box>
      </Box>
    </AnimatedPage>
  );
};