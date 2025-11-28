import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import AnimatedPage from "../../components/AnimatedPage";

export const BookingForm = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const bookingData = {
      id: Date.now(),
      serviceId,
      ...form,
      status: "Pending Payment",
    };

    localStorage.setItem("currentBooking", JSON.stringify(bookingData));
    navigate("/payment");
  };

  return (
    <AnimatedPage>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Booking Details
        </Typography>

        <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Date"
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />

          <TextField
            label="Time"
            name="time"
            type="time"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />

          <TextField
            label="Address"
            name="address"
            placeholder="Street, suburb, postcode"
            onChange={handleChange}
          />

          <TextField
            label="Additional Notes"
            name="notes"
            multiline
            rows={3}
            onChange={handleChange}
          />

          <Button variant="contained" onClick={handleSubmit}>
            Proceed to Payment
          </Button>
        </Box>
      </Box>
    </AnimatedPage>
  );
};