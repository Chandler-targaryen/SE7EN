import { SignUp } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export const SignupPage = () => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        mt: 5 
      }}
    >
      <SignUp 
        routing="path"
        path="/signup"
        signInUrl="/login"
      />
    </Box>
  );
};