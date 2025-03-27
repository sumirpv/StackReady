import { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  // TableContainer,
  // Table,
  // TableHead,
  // TableRow,
  // TableCell,
  // TableBody,
  // Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeSnippet from "../CodeSnippet";

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
        Java for fun
      </Typography>
      <Typography sx={{ fontWeight: 500, margin: "0 auto 20px", width: "80%" }}>
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default TypeScript;
