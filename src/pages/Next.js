import { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import CodeSnippet from "../CodeSnippet";

const TypeScript = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography
        variant="h5"
        align="center"
        color="primary"
        sx={{ marginBottom: 3 }}
      >
        Next.js web developement framework
      </Typography>
      <Typography sx={{ fontWeight: 500, margin: "0 auto 20px", width: "80%" }}>
        Next.js is an open-source web development framework created by the
        private company Vercel providing React-based web applications with
        server-side rendering and static rendering.
        <br />
        It builds on React 19 and brings more to the table:
        <br />
        <ul>
          <li>
            <strong>File-based Routing —</strong> No need to manually define
            routes.
          </li>
          <li>
            <strong>Hybrid Rendering (SSR, SSG, ISR) —</strong> Pick your
            rendering strategy per page.
          </li>
          <li>
            <strong>API Routes —</strong> Backend-like API support in the same
            project.
          </li>
          <li>
            <strong>Edge and Serverless Support —</strong> Deploy to the edge
            effortlessly.
          </li>
          <li>
            <strong>Automatic Image & Script Optimization —</strong> Faster
            loads, better SEO.
          </li>
        </ul>
      </Typography>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        sx={{
          marginBottom: 2,
          borderRadius: 2,
          boxShadow: 3,
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Raw React vs Next.js</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Feature</TableCell>
                    <TableCell>React 19</TableCell>
                    <TableCell>Next.js 15</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Routing</TableCell>
                    <TableCell>Manual setup</TableCell>
                    <TableCell>Buit-in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SSR/SSG/ISR</TableCell>
                    <TableCell>Partial (RSC)</TableCell>
                    <TableCell>Fully supported</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SEO (meta tags)</TableCell>
                    <TableCell>Needs a libraries</TableCell>
                    <TableCell>Built-in metatdata support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Image Optimization</TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>Automatic</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>API Routes</TableCell>
                    <TableCell>Backend needed</TableCell>
                    <TableCell>Built-in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Edge functions</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Streaming</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default TypeScript;
