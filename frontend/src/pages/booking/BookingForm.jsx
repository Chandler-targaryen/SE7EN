import { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import AnimatedPage from "../../components/AnimatedPage";

export const BookingForm = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const { isSignedIn } = useUser();

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    date: "",
    hour: "",
    minute: "",
    ampm: "",
    address: "",
    notes: "",
  });

  const [dateError, setDateError] = useState("");

  const validateDate = (dateValue) => {
    if (!dateValue) return;

    if (dateValue < today) {
      setDateError("❌ Selected date is in the past. Please choose today or a future date.");
    } else {
      setDateError("");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "date") {
      validateDate(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (!isSignedIn) {
      navigate("/login", {
        state: { message: "Login required for booking a service" },
      });
      return;
    }

    if (dateError) {
      alert("Please choose a valid future date.");
      return;
    }

    if (!form.date || !form.hour || !form.minute || !form.ampm || !form.address) {
      alert("Please fill all required fields.");
      return;
    }

    const timeString = `${form.hour}:${form.minute} ${form.ampm}`;

    const bookingDraft = {
      serviceId,
      date: form.date,
      time: timeString,
      address: form.address,
      notes: form.notes,
    };

    localStorage.setItem("bookingDraft", JSON.stringify(bookingDraft));
    navigate("/payment");
  };

  return (
    <AnimatedPage>
      <Box sx={{ p: 4, color: "white" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Book: {serviceId.replace("_", " ").toUpperCase()}
        </Typography>

        {/* DATE */}
        <Typography sx={{ fontSize: "14px", mb: 1 }}>Preferred Date *</Typography>
        <TextField
          type="date"
          fullWidth
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          inputProps={{ min: today }}
          sx={{ mb: 1 }}
        />

        {dateError && (
          <Typography sx={{ color: "red", fontSize: "14px", mb: 2 }}>
            {dateError}
          </Typography>
        )}

        {/* TIME */}
        <Typography sx={{ fontSize: "14px", mb: 1 }}>Preferred Time *</Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            select
            fullWidth
            name="hour"
            value={form.hour}
            onChange={handleChange}
            required
          >
            {[...Array(12)].map((_, i) => (
              <MenuItem key={i} value={String(i + 1).padStart(2, "0")}>
                {String(i + 1).padStart(2, "0")}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            name="minute"
            value={form.minute}
            onChange={handleChange}
            required
          >
            {["00", "15", "30", "45"].map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            name="ampm"
            value={form.ampm}
            onChange={handleChange}
            required
          >
            <MenuItem value="AM">AM</MenuItem>
            <MenuItem value="PM">PM</MenuItem>
          </TextField>
        </Box>

        {/* ADDRESS */}
        <Typography sx={{ fontSize: "14px", mb: 1 }}>Address *</Typography>
        <TextField
          fullWidth
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          sx={{ mb: 3 }}
        />

        {/* NOTES */}
        <Typography sx={{ fontSize: "14px", mb: 1 }}>Additional Notes</Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          name="notes"
          value={form.notes}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        {/* SUBMIT */}
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Proceed to Payment
        </Button>
      </Box>
    </AnimatedPage>
  );
};