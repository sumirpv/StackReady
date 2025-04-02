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
      <Typography
        sx={{ fontWeight: 500, margin: "0 auto 20px", width: "80%" }}
      ></Typography>

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
          <Typography>Convert a Number to a String!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            We need a function that can transform a number (integer) into a
            string.
            <br />
            <strong>Example:</strong>
            <br />
            {`123  --> "123"`}
            <br />
            {`999  --> "999"`}
            <CodeSnippet
              language="javascript"
              code={`
                int num = 42;
                String str = String.valueOf(num);
                System.out.println(str); // "42"
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
          <Typography>Even or Odd</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.`}
            <CodeSnippet
              language="javascript"
              code={`
                public class Main {

                  public static String evenOrOdd(int number) {
                    if(number % 2 == 0) {
                      return "Even";
                    }
                    return "Odd";
                    //or return (number % 2) != 0 ? "Odd" : "Even";
                  }

                  public static void main(String[] args) {
                    System.out.println(evenOrOdd(2));  //Even
                  }
                }
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
          <Typography>Counting sheep</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Consider an array/list of sheep where some sheep may be missing from
            their place. We need a function that counts the number of sheep
            present in the array (true means present). <br />
            <strong>Example: </strong>
            <br />
            [true, true, true, false,
            <br />
            true, true, true, true ,<br />
            true, false, true, false,
            <br />
            true, false, false, true ,<br />
            true, true, true, true ,<br />
            false, false, true, true]
            <br />
            The correct answer would be 17.
            <br />
            {`Hint: Don't forget to check for bad values like null/undefined`}
            <CodeSnippet
              language="javascript"
              code={`
                public class Counter {
                    public static int countSheeps(Boolean[] arrayOfSheeps) {
                      if(arrayOfSheeps == null || arrayOfSheeps.length == 0) {
                        return 0;
                      }
                      int count = 0;
                      for( int i = 0; i < arrayOfSheeps.length; i++){
                        if(arrayOfSheeps[i] != null && arrayOfSheeps[i] == true){
                          count += 1;
                        }
                      }
                      return count; //17
                    }
                }
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                public class Counter {
                  public int countSheeps(Boolean[] arrayOfSheeps) {
                    int counter = 0;
                    for (Boolean present : arrayOfSheeps) {
                      if (present != null && present) {
                        counter += 1;
                      }
                    }
                    return counter;
                  }
                }
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                import java.util.Arrays;
                import java.util.Collections;

                public class Main {

                  public static int countSheeps(Boolean[] arrayOfSheeps) {
                    return Collections.frequency(Arrays.asList(arrayOfSheeps) , true);
                  }

                  public static void main(String[] args) {
                    Boolean[] sheeps = { true, true, true, false};
                    System.out.println(countSheeps(sheeps)); // 3
                  }
                }
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
