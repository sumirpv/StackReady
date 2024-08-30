import { Container, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        This is the home page of your app.
      </Typography>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6" gutterBottom>
          Navigate to:
        </Typography>
        <Box component="div">
          <Typography variant="body1">
            <Link component={RouterLink} to="/htmlList">
              HTMLList
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link component={RouterLink} to="/javaScriptList">
              JavaScriptList
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link component={RouterLink} to="/reactList">
              ReactList
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
