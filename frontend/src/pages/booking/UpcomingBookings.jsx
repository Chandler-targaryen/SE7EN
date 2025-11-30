import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

export const UpcomingBookings = () => {
  const today = new Date().toISOString().split("T")[0];

  let all = JSON.parse(localStorage.getItem("allBookings")) || [];
  let past = JSON.parse(localStorage.getItem("pastBookings")) || [];

  const upcoming = [];
  const newlyPast = [];

  all.forEach(b => {
    if (b.date >= today) upcoming.push(b);
    else newlyPast.push(b);
  });

  if (newlyPast.length > 0) {
    localStorage.setItem("pastBookings", JSON.stringify([...past, ...newlyPast]));
  }

  // Save back only upcoming
  localStorage.setItem("allBookings", JSON.stringify(upcoming));

  if (upcoming.length === 0) {
    return (
      <Box sx={{ p: 4, color: "white", textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          No Upcoming Bookings
        </Typography>
        <Button variant="contained" component={Link} to="/services">
          Book a Service
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, color: "white" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Upcoming Bookings
      </Typography>

      {upcoming.map((booking, index) => (
        <Card
          key={index}
          sx={{
            background: "#111",
            color: "white",
            borderRadius: "16px",
            mb: 3,
            border: "1px solid #333",
          }}
        >
          <CardContent>
            <Typography variant="h6">{booking.service}</Typography>

            <Typography>Date: {booking.date}</Typography>
            <Typography>Time: {booking.time}</Typography>
            <Typography>Address: {booking.address}</Typography>

            <Typography sx={{ mt: 1, fontWeight: 700, color: "#4caf50" }}>
              Booking ID: {booking.bookingId}
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 2 }}
              color="error"
              onClick={() => {
                const updated = upcoming.filter((_, i) => i !== index);
                localStorage.setItem("allBookings", JSON.stringify(updated));
                window.location.reload();
              }}
            >
              Cancel Booking
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};