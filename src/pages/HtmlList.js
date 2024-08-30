import { useState } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeSnippet from "../CodeSnippet";

const HtmlList = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  console.log("***************");

  return (
    <Container>
      <Accordion expanded={expanded} onChange={handleExpansion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            HTML stands for HyperText Markup Language. It is a standard text
            formatting language used for developing web pages released in 1993.
            HTML is a language that is interpreted by the browser and it tells
            the browser what to display and how to display.
            <br />
            HTML alone is not sufficient for a web developer because HTML only
            defines the structure of the data that will be rendered on the
            browser in a webpage, to make it visually appealing and to make it
            functional, we will need to use CSS and Javascript respectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>
            Can we display a web page inside a web page or Is nesting of
            webpages possible
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`Yes, we can display a web page inside another HTML web page. HTML provides a tag <iframe> using which we can achieve this functionality.`}
            <CodeSnippet
              language="javascript"
              code={`
                <iframe src=”url of the web page to embed” />
              `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Tags and Attributes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view.
            `}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Void elements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            HTML elements which do not have closing tags or do not need to be
            closed are Void elements. For Example <br />, <img />, <hr />, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default HtmlList;
