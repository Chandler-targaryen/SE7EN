import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

export const BookingConfirmation = () => {
  const navigate = useNavigate();
  const booking = JSON.parse(localStorage.getItem("lastBooking"));

  return (
    <AnimatedPage>
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Booking Confirmed 🎉
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Booking ID: <strong>{booking.bookingId}</strong>
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Your service has been successfully booked.
        </Typography>

        <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Box>
    </AnimatedPage>
  );
};