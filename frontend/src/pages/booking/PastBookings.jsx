import { Box, Typography, Card, CardContent } from "@mui/material";

export const PastBookings = () => {
  const past = JSON.parse(localStorage.getItem("pastBookings")) || [];

  if (past.length === 0) {
    return (
      <Box sx={{ p: 4, color: "white", textAlign: "center" }}>
        <Typography variant="h5">No Past Bookings</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, color: "white" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Past Bookings
      </Typography>

      {past.map((booking, index) => (
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
            <Typography variant="h6" sx={{ mb: 1 }}>
              {booking.service || "Unknown Service"}
            </Typography>

            <Typography>Date: {booking.date}</Typography>
            <Typography>Time: {booking.time}</Typography>
            <Typography>Address: {booking.address}</Typography>

            <Typography sx={{ fontWeight: 700, mt: 1 }}>
              Booking ID: {booking.bookingId}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
