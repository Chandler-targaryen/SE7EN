import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 2,
        opacity: 0.6,
        fontSize: "14px",
        mt: 4
      }}
    >
      <Typography variant="body2">
        © 2018 SE7EN Home Services • Privacy-By-Design
      </Typography>
    </Box>
  );
}