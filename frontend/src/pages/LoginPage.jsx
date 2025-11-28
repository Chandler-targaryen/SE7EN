import { SignIn } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export const LoginPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <SignIn routing="path" path="/login" signUpUrl="/signup" />
    </Box>
  );
};