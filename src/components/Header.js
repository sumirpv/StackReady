import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ marginBottom: "20px", backgroundColor: "#008080" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
