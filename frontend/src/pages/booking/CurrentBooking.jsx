import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage";

export const CurrentBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("currentBooking");
    setBooking(saved ? JSON.parse(saved) : null);
  }, []);

  return (
    <AnimatedPage>
      <Box sx={{ p: 4 }}>
        {!booking ? (
          <>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              No Current Bookings
            </Typography>

            <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/services")}>
              Book a Service
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Current Booking
            </Typography>

            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6">Service: {booking.serviceId}</Typography>
                <Typography>Date: {booking.date}</Typography>
                <Typography>Time: {booking.time}</Typography>
                <Typography>Address: {booking.address}</Typography>
                <Typography>Status: {booking.status}</Typography>

                {booking.status === "Pending Payment" && (
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/payment")}
                  >
                    Continue Payment
                  </Button>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </Box>
    </AnimatedPage>
  );
};