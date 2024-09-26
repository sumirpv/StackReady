import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        // position: 'sticky',
        // bottom: 0,
        // left: 0,
        marginTop: "20px",
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <Typography variant="body1">
        © 2024 My App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
