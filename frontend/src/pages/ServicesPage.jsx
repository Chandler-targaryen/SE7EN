import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Import icons/images
import homeCleaningImg from "../assets/home-cleaning.jpg";
import electricalImg from "../assets/electrical.jpg";
import plumbingImg from "../assets/plumbing.jpeg";
import furnitureImg from "../assets/furniture.webp";
import groceryImg from "../assets/grocery.jpg";
import medicineImg from "../assets/medicine.jpg";
import sanitizationImg from "../assets/sanitization.jpg";

import covidIcon from "../assets/covidIcon.jpg";
import homeIcon from "../assets/logo.png";

// 🔵 Mapping numeric IDs → BookingForm service keys
const SERVICE_MAP = {
  1: "Cleaning",
  2: "Electrical",
  3: "Plumbing",
  4: "Moving",
  5: "Grocery Delivery",
  6: "Vaccine Help",      // closest match to medicine delivery
  7: "Covid Test",
};

const services = [
  { id: 1, name: "Home Cleaning", img: homeCleaningImg, category: "Home Service" },
  { id: 2, name: "Electrical Repairs", img: electricalImg, category: "Home Service" },
  { id: 3, name: "Plumbing Services", img: plumbingImg, category: "Home Service" },
  { id: 4, name: "Furniture Assembly", img: furnitureImg, category: "Home Service" },

  { id: 5, name: "Contactless Grocery Drop-off", img: groceryImg, category: "COVID Assistance" },
  { id: 6, name: "Medicine Delivery Assistance", img: medicineImg, category: "COVID Assistance" },
  { id: 7, name: "COVID Sanitization Service", img: sanitizationImg, category: "COVID Assistance" },
];

export const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, color: "white" }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}
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
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card
              sx={{
                borderRadius: "14px",
                background: "#111",
                color: "white",
                border: "1px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#d91bebff",
                  boxShadow: "0 0 20px rgba(174, 95, 223, 0.5)",
                },
              }}
            >
              <img
                src={s.img}
                alt={s.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "14px",
                  borderTopRightRadius: "14px",
                }}
              />

              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {s.name}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <img
                    src={s.category === "COVID Assistance" ? covidIcon : homeIcon}
                    alt="category icon"
                    style={{ width: 22, height: 22, marginRight: 8 }}
                  />

                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        s.category === "COVID Assistance"
                          ? "#ff5252"
                          : "#55ff8c",
                      fontWeight: 700,
                    }}
                  >
                    {s.category}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#3b82f6",
                    color: "white",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#2563eb",
                      transform: "scale(1.03)",
                    },
                  }}
                  onClick={() => navigate(`/book/${SERVICE_MAP[s.id]}`)}
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