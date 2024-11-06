import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeImage from "./assest/home-image.jpg";
import DarthVader from "./assest/darth-vader.jpeg";

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
        src={DarthVader}
        alt="Welcome"
        sx={{ width: "50%", height: "auto", borderRadius: 2, mb: 3 }}
      />
      <Typography variant="h4" gutterBottom color="primary">
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        Explore the different sections of our application below.
      </Typography>

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
              HTML List
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/javaScriptList"
              color="secondary"
              underline="hover"
            >
              JavaScript List
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/reactList"
              color="secondary"
              underline="hover"
            >
              React List
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/reduxList"
              color="secondary"
              underline="hover"
            >
              Redux List
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/pythonList"
              color="secondary"
              underline="hover"
            >
              Python List
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;

// import React from "react";
// import { Container, Typography, Box, Link } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";

// function Home() {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Welcome to the Home Page
//       </Typography>
//       <Typography variant="body1">
//         This is the home page of your app.
//       </Typography>
//       <Box sx={{ marginTop: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Navigate to:
//         </Typography>
//         <Box component="div">
//           <Typography variant="body1">
//             <Link component={RouterLink} to="/htmlList">
//               HTMLList
//             </Link>
//           </Typography>
//           <Typography variant="body1">
//             <Link component={RouterLink} to="/javaScriptList">
//               JavaScriptList
//             </Link>
//           </Typography>
//           <Typography variant="body1">
//             <Link component={RouterLink} to="/reactList">
//               ReactList
//             </Link>
//           </Typography>
//           <Typography variant="body1">
//             <Link component={RouterLink} to="/reduxList">
//               ReduxList
//             </Link>
//           </Typography>
//           <Typography variant="body1">
//             <Link component={RouterLink} to="/pythonList">
//               PythonList
//             </Link>
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Home;
