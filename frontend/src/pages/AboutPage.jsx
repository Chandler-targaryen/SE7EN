// src/pages/AboutPage.jsx

import { Box, Typography, Card, CardContent } from "@mui/material";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

export const AboutPage = () => {
  return (
    <AnimatedPage>
      <Box
        sx={{
          p: 4,
          color: "white",
          maxWidth: "900px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 3, color: "#E032F0" }}
        >
          About SE7EN Home Services
        </Typography>

        {/* INTRO */}
        <Typography sx={{ opacity: 0.9, mb: 4, fontSize: "18px" }}>
          SE7EN Home Services is your trusted digital companion for booking  
          reliable, safe, and contactless home assistance, especially  
          designed for modern living and COVID-safe interactions.
        </Typography>

        {/* INFORMATION CARDS */}
        <Box sx={{ display: "grid", gap: 3 }}>
          {/* WHO WE ARE */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card
              sx={{
                background: "#111",
                borderRadius: "14px",
                border: "1px solid #333",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2, color: "#E032F0" }}>
                  Who We Are
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  We are a digital platform offering 7 essential services,
                  including cleaning, repairs, delivery assistance, and  
                  specialized COVID-related support such as contactless  
                  grocery drop-off and sanitization.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* OUR MISSION */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card
              sx={{
                background: "#111",
                borderRadius: "14px",
                border: "1px solid #333",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2, color: "#E032F0" }}>
                  Our Mission
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  Our goal is to make home services accessible, fast,  
                  safe, and privacy-respecting, using secure authentication,  
                  anonymous booking tokens, and local-only data storage.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* WHY CHOOSE US */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card
              sx={{
                background: "#111",
                borderRadius: "14px",
                border: "1px solid #333",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2, color: "#E032F0" }}>
                  Why Choose SE7EN
                </Typography>

                <Typography sx={{ opacity: 0.8, mb: 1 }}>
                  • 100% contactless-safe options  
                </Typography>

                <Typography sx={{ opacity: 0.8, mb: 1 }}>
                  • Easy booking flow with modern UI  
                </Typography>

                <Typography sx={{ opacity: 0.8, mb: 1 }}>
                  • Verified service providers with badges  
                </Typography>

                <Typography sx={{ opacity: 0.8, mb: 1 }}>
                  • Transparent history & upcoming bookings  
                </Typography>

                <Typography sx={{ opacity: 0.8 }}>
                  • Built with secure and privacy-first design principles  
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>
    </AnimatedPage>
  );
};
