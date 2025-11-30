import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

export const PaymentPage = () => {
  const navigate = useNavigate();
  const bookingDraft = JSON.parse(localStorage.getItem("bookingDraft"));

  const handlePayment = () => {
    if (!bookingDraft) return;

    const today = new Date().toISOString().split("T")[0];

    // Proper booking structure
    const finalBooking = {
      service: bookingDraft.service,       // REQUIRED
      serviceId: bookingDraft.serviceId,   // keep if needed
      date: bookingDraft.date,
      time: bookingDraft.time,
      address: bookingDraft.address,
      notes: bookingDraft.notes || "",
      bookingId: "SE7EN-" + Math.floor(100000 + Math.random() * 900000),
    };

    const all = JSON.parse(localStorage.getItem("allBookings")) || [];
    const past = JSON.parse(localStorage.getItem("pastBookings")) || [];

    if (finalBooking.date < today) {
      past.push(finalBooking);
      localStorage.setItem("pastBookings", JSON.stringify(past));
    } else {
      all.push(finalBooking);
      localStorage.setItem("allBookings", JSON.stringify(all));
    }

    localStorage.removeItem("bookingDraft");

    navigate("/confirmation");
  };

  return (
    <AnimatedPage>
      <Box sx={{ p: 4, color: "white" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Payment
        </Typography>

        <Typography sx={{ mb: 3 }}>
          This service costs <strong>AUD $0</strong>.
          Click below to confirm your booking.
        </Typography>

        <Button variant="contained" fullWidth onClick={handlePayment}>
          Confirm Booking
        </Button>
      </Box>
    </AnimatedPage>
  );
};