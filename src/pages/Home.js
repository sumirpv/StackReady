import { Container, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InterviewPrep from "./assest/interview-prep.jpg";

function Home() {
  return (
    <Container
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        padding: 4,
        boxShadow: 3,
        marginTop: 5,
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={InterviewPrep}
        alt="Welcome"
        sx={{ width: "50%", height: "auto", borderRadius: 2, mb: 3 }}
      />
      <Typography variant="h4" gutterBottom color="primary">
        Welcome to StackReady!
      </Typography>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          color: "text.secondary",
          mb: 3,
        }}
      >
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Discover all you need to excel in full-stack interviews. Dive into
          each section below to explore targeted preparation resources and
          elevate your skills across key topics.
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#e3f2fd", padding: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="text.primary">
          Navigate to:
        </Typography>
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/htmlList"
              color="secondary"
              underline="hover"
            >
              HTML Fundamentals
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/javaScriptList"
              color="secondary"
              underline="hover"
            >
              JavaScript Essentials
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/reactList"
              color="secondary"
              underline="hover"
            >
              React Mastery
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/reduxList"
              color="secondary"
              underline="hover"
            >
              Redux in Action
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/pythonList"
              color="secondary"
              underline="hover"
            >
              Python for Developers
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/interviewQuestions"
              color="secondary"
              underline="hover"
            >
              Full Stack Developer interview questions
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/systemDesign"
              color="secondary"
              underline="hover"
            >
              System Design Cheat Sheet
            </Link>
          </Typography>
          <Typography>
          <Link
              component={RouterLink}
              to="/typeScript"
              color="secondary"
              underline="hover"
            >
              Supercharged version of JavaScript(TypeScript)
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
