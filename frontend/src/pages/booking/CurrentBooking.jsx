import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CurrentBooking = () => {
  const booking = JSON.parse(localStorage.getItem("currentBooking"));

  if (!booking) {
    return (
      <Box sx={{ p: 4, color: "white" }}>
        <Typography variant="h5" sx={{ mb: 2, color: "white" }}>
          No Current Bookings
        </Typography>

        <Button variant="contained" component={Link} to="/services">
          Book a Service
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, color: "white" }}>
      <Typography variant="h4" sx={{ mb: 3, color: "white" }}>
        Current Booking
      </Typography>

      <Typography sx={{ color: "white" }}>Service: {booking.service}</Typography>
      <Typography sx={{ color: "white" }}>Date: {booking.date}</Typography>
      <Typography sx={{ color: "white" }}>Time: {booking.time}</Typography>
      <Typography sx={{ color: "white" }}>Address: {booking.address}</Typography>
      <Typography sx={{ color: "white" }}>Booking ID: {booking.bookingId}</Typography>

      {/* BUTTON ROW */}
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        
        {/* CANCEL BUTTON */}
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            localStorage.removeItem("currentBooking");
            window.location.reload();
          }}
        >
          Cancel Booking
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/past-bookings"
        >
          View Past Bookings
        </Button>


        {/* BOOK ANOTHER SERVICE BUTTON */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/services"
        >
          Book Another Service
        </Button>

      </Box>
    </Box>
  );
};