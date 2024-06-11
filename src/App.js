import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
// import { makeStyles } from '@mui/styles';
import List from "./list";
import Home from "./home";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     marginBottom: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

function App() {
  // const classes = useStyles();

  return (
    <Router>
      <AppBar position="static" sx={{ marginBottom: "10px" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexFlow: 1 }}>
            Welcome to Page
          </Typography>
          {/* <Button component={Link} to="/lists" color="inherit">
            Lists
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* Routes */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lists" element={<List />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
