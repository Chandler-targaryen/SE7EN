import { Box, Typography, Card, CardContent, Avatar, Grid } from "@mui/material";
import AnimatedPage from "../components/AnimatedPage";

// Import team images
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";

export const ContactPage = () => {
  const team = [
    { name: "Chandler", degree: "Master of Cybersecurity (UoA)", img: pic1 },
    { name: "Thidu", degree: "Master of Cybersecurity (UoA)", img: pic2 },
    { name: "AK", degree: "Master of Cybersecurity (UoA)", img: pic3 },
    { name: "NTR", degree: "Master of Cybersecurity (UoA)", img: pic4 },
    { name: "Subbu", degree: "Master of Cybersecurity (UoA)", img: pic5 },
  ];

  return (
    <AnimatedPage>
      <Box sx={{ p: 4, textAlign: "center", color: "white", mt: 5 }}>

        {/* CONTACT HEADER */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Contact Us
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}>
          📧 Email: <span style={{ color: "#cf69f7" }}>se7enservices@gmail.com</span>
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          📞 Phone: <span style={{ color: "#cf69f7" }}>+61 45X XXX 000</span>
        </Typography>

        {/* TEAM SECTION */}
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 700, mt: 6 }}
        >
          Our Team
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  background: "#111",
                  color: "white",
                  borderRadius: "14px",
                  border: "1px solid #333",
                  boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
                  p: 2,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{
                      width: 110,
                      height: 110,
                      margin: "0 auto",
                      mb: 2,
                      border: "2px solid #cf69f7",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {member.name}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", opacity: 0.8, mt: 1 }}>
                    {member.degree}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>
    </AnimatedPage>
  );
};