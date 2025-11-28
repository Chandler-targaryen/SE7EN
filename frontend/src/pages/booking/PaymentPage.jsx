import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

export const PaymentPage = () => {
  const navigate = useNavigate();

  const confirmPayment = () => {
    const booking = JSON.parse(localStorage.getItem("currentBooking"));
    const bookingId = "SE7EN-" + Math.floor(100000 + Math.random() * 900000);

    const finalBooking = {
      ...booking,
      bookingId,
      status: "Confirmed",
    };

    const history = JSON.parse(localStorage.getItem("pastBookings")) || [];
    history.push(finalBooking);
    localStorage.setItem("pastBookings", JSON.stringify(history));

    localStorage.setItem("lastBooking", JSON.stringify(finalBooking));
    localStorage.removeItem("currentBooking");

    navigate("/confirmation");
  };

  return (
    <AnimatedPage>
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Payment
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Total Amount: <strong>AUD $0.00</strong>
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          All services are free in demo mode.
        </Typography>

        <Button variant="contained" sx={{ mt: 3 }} onClick={confirmPayment}>
          Complete Payment
        </Button>
      </Box>
    </AnimatedPage>
  );
};