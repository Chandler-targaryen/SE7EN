import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const services = [
  // NORMAL SERVICES
  {
    id: "cleaning",
    name: "Home Cleaning",
    description: "Deep cleaning, dusting, and full home sanitization.",
    category: "Home Service",
  },
  {
    id: "electrical",
    name: "Electrical Repairs",
    description: "Wiring fixes, fan installations, switchboard repair.",
    category: "Home Service",
  },
  {
    id: "plumbing",
    name: "Plumbing Services",
    description: "Leak repairs, pipe fixes, tap replacement.",
    category: "Home Service",
  },
  {
    id: "moving",
    name: "Furniture Assembly",
    description: "Assembly of IKEA and other furniture sets.",
    category: "Home Service",
  },

  // COVID RELATED SERVICES
  {
    id: "grocery_drop",
    name: "Contactless Grocery Drop-off",
    description: "Zero-contact groceries for isolation or safety needs.",
    category: "COVID Assistance",
  },
  {
    id: "vax_help",
    name: "Medicine Delivery Assistance",
    description: "Pickup & delivery of medicines from pharmacy.",
    category: "COVID Assistance",
  },
  {
    id: "covid_test",
    name: "COVID Sanitization Service",
    description: "Hospital-grade disinfectant fogging & sterilization.",
    category: "COVID Assistance",
  },
];


export const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 700, textAlign: "center", color: "white"  }}
      >
        Our Services
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {services.map((s) => (
          <motion.div
            key={s.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card sx={{ borderRadius: "14px", background: "#111", color: "white" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {s.name}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                  {s.description}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mt: 1,
                    color: s.category === "COVID Assistance" ? "#ff5252" : "#4caf50",
                    fontWeight: 700,
                  }}
                >
                  {s.category}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => navigate(`/book/${s.id}`)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};