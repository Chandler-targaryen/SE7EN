import { Box, Typography, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage";

export const PastBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("pastBookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <AnimatedPage>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Past Bookings
        </Typography>

        {bookings.length === 0 ? (
          <Typography sx={{ mt: 2 }}>No past bookings yet.</Typography>
        ) : (
          bookings.map((b) => (
            <Card key={b.bookingId} sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6">Booking ID: {b.bookingId}</Typography>
                <Typography>Service: {b.serviceId}</Typography>
                <Typography>Date: {b.date}</Typography>
                <Typography>Time: {b.time}</Typography>
                <Typography>Status: {b.status}</Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
    </AnimatedPage>
  );
};