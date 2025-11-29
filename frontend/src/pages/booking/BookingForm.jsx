import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

// 7 services
const SERVICES = {
  covid_test: "COVID-19 Sanitization Service",
  vax_help: "Vaccination Assistance",
  grocery_drop: "Contactless Grocery Drop-off",
  cleaning: "Home Cleaning",
  plumbing: "Plumbing Service",
  electrical: "Electrical Repairs",
  moving: "Furniture Assembly",
};

export const BookingForm = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const { isSignedIn } = useUser();

  const serviceName = SERVICES[serviceId];

  const [form, setForm] = useState({
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  // 🔵 LOGIN CHECK — redirect if not logged in
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login", {
        state: { message: "Login Required for booking a service" },
      });
    }
  }, [isSignedIn, navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.date || !form.hour || !form.minute || !form.ampm || !form.address) {
      alert("Please fill all required fields (Date, Time, Address).");
      return;
    }

    const booking = {
      bookingId: "BK-" + Math.floor(Math.random() * 900000 + 100000),
      service: serviceName,
      serviceId: serviceId,
      date: form.date,
      time: `${form.hour}:${form.minute} ${form.ampm}`,
      address: form.address,
      notes: form.notes,
    };

    navigate("/payment", { state: { booking } });
  };

  if (!serviceName) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">Invalid Service</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "white" }}>
        Book: {serviceName}
      </Typography>

      {/* DATE */}
      <Typography sx={{ fontSize: "14px", mb: 1, color: "white"  }}>Preferred Date *</Typography>
      <TextField
        fullWidth
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      {/* TIME */}
      <Typography sx={{ fontSize: "14px", mb: 1, color: "white" }}>
        Preferred Time *
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>

        {/* HOUR SELECT */}
        <TextField
          select
          fullWidth
          label="Hour"
          name="hour"
          value={form.hour || ""}
          onChange={handleChange}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          sx={{
            "& select": { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "grey" },
              "&:hover fieldset": { borderColor: "white" },
            },
          }}
        >
          <option value="" disabled>Select</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </TextField>

        {/* MINUTE SELECT */}
        <TextField
          select
          fullWidth
          label="Minute"
          name="minute"
          value={form.minute || ""}
          onChange={handleChange}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          sx={{
            "& select": { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "grey" },
              "&:hover fieldset": { borderColor: "white" },
            },
          }}
        >
          <option value="" disabled>Select</option>
          {["00", "15", "30", "45"].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </TextField>

        {/* AM/PM SELECT */}
        <TextField
          select
          fullWidth
          label="AM/PM"
          name="ampm"
          value={form.ampm || ""}
          onChange={handleChange}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          sx={{
            "& select": { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "grey" },
              "&:hover fieldset": { borderColor: "white" },
            },
          }}
        >
          <option value="" disabled>Select</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </TextField>

      </Box>

      {/* ADDRESS */}
      <Typography sx={{ fontSize: "14px", mb: 1, color: "white"  }}>Address *</Typography>
      <TextField
        fullWidth
        name="address"
        value={form.address}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
        placeholder="Enter your address"
      />

      {/* OPTIONAL NOTES */}
      <Typography sx={{ fontSize: "14px", mb: 1, color: "white"  }}>Additional Notes</Typography>
      <TextField
        fullWidth
        multiline
        rows={3}
        name="notes"
        value={form.notes}
        onChange={handleChange}
        sx={{ mb: 3 }}
        placeholder="Optional"
      />

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Proceed to Payment
      </Button>
    </Box>
  );
};