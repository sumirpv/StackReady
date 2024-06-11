// src/Home.js
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Button component={Link} to="/lists" color="inherit">
        Lists{" "}
      </Button>
      <p>Click on the Lists link above to see the Questions lists page.</p>
    </div>
  );
};

export default Home;
