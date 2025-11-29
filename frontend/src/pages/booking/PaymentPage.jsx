import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state?.booking;

  const handlePayment = () => {
    if (!booking) return;

    // Save as current booking
    localStorage.setItem("currentBooking", JSON.stringify(booking));

    // Save into past bookings list
    const past = JSON.parse(localStorage.getItem("pastBookings")) || [];
    past.push(booking);
    localStorage.setItem("pastBookings", JSON.stringify(past));

    navigate("/confirmation", {
      state: { booking },
    });
  };

  if (!booking) {
    return (
      <Box sx={{ p: 4,margin: "auto" }}>
        <Typography>No booking found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 , color: "white", margin: "auto", textAlign: "center"   }}>
      <Typography variant="h4" sx={{ mb: 3 }} >
        Payment
      </Typography>

      <Typography>Service: {booking.service}</Typography>
      <Typography>Date: {booking.date}</Typography>
      <Typography>Address: {booking.address}</Typography>
      <Typography sx={{ mb: 2 }}>Price: $0.00 AUD</Typography>

      <Button variant="contained" color="primary" onClick={handlePayment}>
        Pay Now (Free)
      </Button>
    </Box>
  );
};