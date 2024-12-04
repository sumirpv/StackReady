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
// import CodeSnippet from "../CodeSnippet";

const DataBaseList = () => {
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
        Redux Concepts Overview
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
          <Typography>DataBase</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Summary:</strong>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography>Normalization vs Denormalization</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Normalization and denormalization are two database design approaches
            with opposite goals, often used to balance performance and data
            integrity.
            <strong>Normalization</strong>
            <ul>
              <li>
                <strong>Goal:</strong> Minimize redundancy and ensure data
                integrity.
              </li>
              <li>
                <strong>Process:</strong> Splits data into multiple related
                tables and establishes relationships.
              </li>
              <li>
                <strong>Benefits:</strong>
                <ul>
                  <li>Reduces data duplication.</li>
                  <li>Makes updates and maintenance easier.</li>
                  <li>Ensures consistency.</li>
                </ul>
              </li>
              <li>
                <strong>Use Case:</strong> Suitable for transactional systems
                where data integrity is critical, like banking systems.
              </li>
            </ul>
            <strong>Denormalization</strong>
            <ul>
              <li>
                <strong>Goal:</strong> Optimize read performance by reducing the
                need for joins.
              </li>
              <li>
                <strong>Process:</strong> Combines related data into fewer
                tables, often with some duplication.
              </li>
              <li>
                <strong>Benefits:</strong>
                <ul>
                  <li>Improves query performance (fewer joins).</li>
                  <li>Simplifies complex queries.</li>
                </ul>
              </li>
              <li>
                <strong>Drawbacks:</strong>
                <ul>
                  <li>Increases data redundancy.</li>
                  <li>Harder to maintain consistency during updates.</li>
                </ul>
              </li>
              <li>
                <strong>Use Case:</strong> Ideal for read-heavy applications
                like data warehouses or reporting systems.
              </li>
            </ul>
            <strong> Example:</strong>
            <ul>
              <li>
                <strong>Normalized:</strong> Separate tables for customers and
                orders, linked by a customer ID.
                <strong>Denormalized:</strong> A single table with customer and
                order details together.
              </li>
            </ul>
            The choice depends on the system&apos;s requirements for performance,
            scalability, and data integrity.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default DataBaseList;
