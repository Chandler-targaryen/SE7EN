import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#000",          // Force pure black background
        overflowX: "hidden",
      }}
    >
      <Header />

      <motion.div
        style={{ width: "100%", margin: 0, padding: 0 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>

      <Footer />
    </Box>
  );
}