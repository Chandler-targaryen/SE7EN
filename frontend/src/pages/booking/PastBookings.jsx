import { Box, Typography } from "@mui/material";

export const PastBookings = () => {
  const past = JSON.parse(localStorage.getItem("pastBookings")) || [];

  if (past.length === 0) {
    return (
      <Box sx={{ p: 4, color: "white" }}>
        <Typography>No past bookings found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, color: "white" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Past Bookings
      </Typography>

      {past.map((b, i) => (
        <Box
          key={i}
          sx={{
            mb: 3,
            p: 2,
            border: "1px solid #444",
            borderRadius: "8px",
          }}
        >
          <Typography>Service: {b.service}</Typography>
          <Typography>Date: {b.date}</Typography>
          <Typography>Time: {b.time}</Typography>
          <Typography>Address: {b.address}</Typography>
          <Typography>Booking ID: {b.bookingId}</Typography>
        </Box>
      ))}
    </Box>
  );
};