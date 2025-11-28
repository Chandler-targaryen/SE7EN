import { motion } from "framer-motion";

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}     // fade in + slight slide
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}       // fade out + slide up
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
