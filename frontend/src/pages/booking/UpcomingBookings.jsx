import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

export const UpcomingBookings = () => {
  const { user } = useUser();
  const today = new Date().toISOString().split("T")[0];

  // Load all bookings once when component renders
  let all = JSON.parse(localStorage.getItem("allBookings")) || [];
  let past = JSON.parse(localStorage.getItem("pastBookings")) || [];

  // -----------------------------
  // SAVE LAST BOOKING TO BACKEND
  // -----------------------------
  useEffect(() => {
    if (!user) return;

    const saveBookingToBackend = async () => {
      // Load fresh data inside the effect (fixes ESLint warning)
      const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];
      const booking = allBookings.length > 0 ? allBookings[allBookings.length - 1] : null;

      if (!booking) return;

      try {
        await fetch(`http://localhost:8000/booking/create?user_id=${user.id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_name: booking.serviceId,
            date: booking.date,
            time: booking.time,
          }),
        });
      } catch (err) {
        console.error("Failed to store booking in database:", err);
      }
    };

    saveBookingToBackend();
  }, [user]);

  // -----------------------------
  // SEPARATE UPCOMING VS PAST
  // -----------------------------
  const upcoming = [];
  const newlyPast = [];

  all.forEach((b) => {
    if (b.date >= today) upcoming.push(b);
    else newlyPast.push(b);
  });

  if (newlyPast.length > 0) {
    localStorage.setItem("pastBookings", JSON.stringify([...past, ...newlyPast]));
  }

  localStorage.setItem("allBookings", JSON.stringify(upcoming));

  // -----------------------------
  // UI
  // -----------------------------
  if (upcoming.length === 0) {
    return (
      <Box sx={{ p: 4, color: "white", textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>No Upcoming Bookings</Typography>
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
            <Typography variant="h6">{booking.serviceId}</Typography>
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
