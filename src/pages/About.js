import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function About() {
  return (
    <Container
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "70px 70px 50px 70px !important",
        borderRadius: 2,
        boxShadow: 3,
        marginTop: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" color="primary" gutterBottom>
        About Us
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.secondary", marginBottom: 4 }}
      >
        Welcome to our application! We are passionate about creating impactful
        software that drives success and empowers users. Learn more about our
        mission, values, and team below.
      </Typography>

      <Box sx={{ marginBottom: 5 }}>
        <Typography variant="h4" color="secondary" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Our mission is to provide high-quality solutions that enhance
          productivity and inspire creativity. We believe in using technology to
          solve real-world problems and are dedicated to continuous innovation
          and improvement.
          <b />
          <ul>
            <li>
              <strong>HTML List:</strong> This section covers essential HTML
              questions that focus on structure, semantics, and best practices
              for creating accessible, efficient web pages. Perfect for
              understanding the building blocks of any web application.
            </li>
            <li>
              <strong>JavaScript List:</strong> Dive into core JavaScript
              concepts with this list, including data structures, ES6+ features,
              and asynchronous programming. Ideal for mastering the language
              that drives interactivity on the web.
            </li>
            <li>
              <strong>React List:</strong> Explore key React topics such as
              hooks, component lifecycles, state management, and conditional
              rendering. This list is tailored to deepen your knowledge of the
              popular front-end library.
            </li>
            <li>
              <strong>Redux List:</strong> Gain insights into managing complex
              application states with Redux. From actions and reducers to
              middleware, this list covers Redux essentials to keep your data
              flow predictable and organized.
            </li>
            <li>
              <strong>Python List:</strong> For Python enthusiasts, this list
              offers questions on fundamental programming concepts, data
              manipulation, and popular libraries, making it a versatile tool
              for web and software development interviews.
            </li>
          </ul>
          These sections aim to provide a comprehensive overview of essential
          web development topics, enhancing your interview preparation across
          various domains.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 5 }}>
        <Typography variant="h4" color="secondary" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Commitment:</strong> We are dedicated to delivering
          exceptional results for our clients.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Innovation:</strong> We embrace creativity and continuously
          seek new ways to improve.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Integrity:</strong> Transparency, honesty, and accountability
          are core to our approach.
        </Typography>
      </Box>

      {/* <Box>
        <Typography variant="h4" color="secondary" gutterBottom>
          Meet the Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ maxWidth: 200, margin: "auto" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar sx={{ bgcolor: "primary.main", width: 80, height: 80, margin: "auto" }}>
                    <PersonIcon sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
                    Team Member {i}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Role or short description of the team member's expertise.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Container>
  );
}

export default About;
