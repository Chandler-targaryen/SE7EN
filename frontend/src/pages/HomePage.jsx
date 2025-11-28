import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
        textAlign: "center",
      }}
    >
      <motion.img
        src={logo}
        alt="SE7EN Logo"
        style={{ width: "180px", marginBottom: "20px" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: 700, letterSpacing: 1 }}
      >
        Welcome to SE7EN Home Services
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 3, maxWidth: "600px", lineHeight: 1.6 }}
      >
        A privacy-by-design home services platform with secure contactless
        booking, anonymous job tokens, and COVID-aware risk notifications.
      </Typography>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ px: 4, py: 1.5 }}
          href="/services"
        >
          Explore Services
        </Button>
      </motion.div>
    </Box>
  );
};