import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card } from "@mui/material";

// ICON IMPORTS
import homeCleaningIcon from "../assets/home-cleaning.jpg";
import electricalIcon from "../assets/electrical.jpg";
import plumbingIcon from "../assets/plumbing.jpeg";
import furnitureIcon from "../assets/furniture.webp";
import groceryIcon from "../assets/grocery.jpg";
import medicineIcon from "../assets/medicine.jpg";
import sanitizationIcon from "../assets/sanitization.jpg";

const services = [
  {
    id: 1,
    name: "Home Cleaning",
    price: 0,
    description: "Full deep cleaning service for your home.",
    icon: homeCleaningIcon,
  },
  {
    id: 2,
    name: "Electrical Repairs",
    price: 0,
    description: "Fix wiring, switches, fans & electrical issues.",
    icon: electricalIcon,
  },
  {
    id: 3,
    name: "Plumbing Services",
    price: 0,
    description: "Fix leaks, taps, pipes, drainage issues.",
    icon: plumbingIcon,
  },
  {
    id: 4,
    name: "Furniture Assembly",
    price: 0,
    description: "IKEA / custom furniture assembly service.",
    icon: furnitureIcon,
  },
  {
    id: 5,
    name: "Grocery Drop-off",
    price: 0,
    description: "Contactless grocery delivery for COVID support.",
    icon: groceryIcon,
  },
  {
    id: 6,
    name: "Medicine Delivery",
    price: 0,
    description: "Pickup and home delivery of pharmacy medicines.",
    icon: medicineIcon,
  },
  {
    id: 7,
    name: "COVID Sanitization",
    price: 0,
    description: "Hospital-grade sanitization for homes/offices.",
    icon: sanitizationIcon,
  },
];

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === Number(id));

  if (!service) return <Typography>Service not found</Typography>;

  return (
    <Box
      sx={{
        p: 4,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          p: 4,
          background: "#111",
          color: "white",
          width: "500px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
        }}
      >
        {/* ICON */}
        <img
          src={service.icon}
          alt={service.name}
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "15px",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
          }}
        />

        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {service.name}
        </Typography>

        <Typography sx={{ mt: 2, opacity: 0.9, fontSize: "16px" }}>
          {service.description}
        </Typography>

        <Typography sx={{ mt: 3, fontSize: "22px", fontWeight: 700 }}>
          Price: ${service.price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 4,
            backgroundColor: "#3b82f6",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#2563eb" },
          }}
          onClick={() => navigate(`/book/${service.id}`)}
        >
          Continue to Booking
        </Button>
      </Card>
    </Box>
  );
}
