import { useState } from "react";
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
            {`HTML elements which do not have closing tags or do not need to be
            closed are Void elements. For Example <br />, <img />, <hr />, etc.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Nesting webpages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`we can display a web page inside another HTML web page. HTML provides a tag <iframe> using which we can achieve this functionality.`}
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
          <Typography>HTML Entities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`In HTML some characters are reserved like ‘<’, ‘>’, ‘/’, etc. To use these characters in our webpage we need to use the character entities called HTML Entities. Below are a few mapping between the reserved character and its respective entity character to be used.`}
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Character</TableCell>
                  <TableCell>Entity Name</TableCell>
                  <TableCell>Entity Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{`<`}</TableCell>
                  <TableCell>{`&lt;`}</TableCell>
                  <TableCell>{`&#60;`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{`>`}</TableCell>
                  <TableCell>{`&gt;`}</TableCell>
                  <TableCell>{`&#62;`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{`&`}</TableCell>
                  <TableCell>{`&amp;`}</TableCell>
                  <TableCell>{`&#38;`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{`(non-breaking space) Eg. 10  PM`}</TableCell>
                  <TableCell>{`&nbsp; Eg. <p>10&nbsp&nbspPM</p>`}</TableCell>
                  <TableCell>{`&#160;`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Lists in HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`HTML provides several types of lists to organize content, primarily unordered lists (<ul>), ordered lists (<ol>), and definition lists (<dl>)`}
            <ul>
              <li>
                <strong> {`Unordered List (<ul>)`}:</strong>
                <br />
                An unordered list is used to group a set of items in no
                particular order. Items in an unordered list are typically
                displayed with bullet points.
                <CodeSnippet
                  language="javascript"
                  code={`
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                 `}
                />
              </li>
              <li>
                <strong>{`Ordered List (<ol>):`}</strong> <br />
                An ordered list is used to group a set of items in a specific
                order. The items in the list are numbered by default.
                <CodeSnippet
                  language="javascript"
                  code={`
                    <ol>
                      <li>First Item</li>
                      <li>Second Item</li>
                      <li>Third Item</li>
                    </ol>
                 `}
                />
              </li>
              <li>
                <strong>{`Definition List (<dl>):`}</strong> <br />
                {`A definition list is used for terms and their corresponding definitions. It consists of <dt> (definition term) and <dd> (definition description).`}
                <CodeSnippet
                  language="javascript"
                  code={`
                    <dl>
                      <dt>HTML</dt>
                      <dd>A markup language for creating web pages.</dd>

                      <dt>CSS</dt>
                      <dd>A style sheet language for designing web pages.</dd>
                    </dl>
                 `}
                />
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>‘class’ attribute</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The class attribute is used to specify the class name for an HTML
            element. Multiple elements in HTML can have the same class value.
            Also, it is mainly used to associate the styles written in the
            stylesheet with the HTML elements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>‘id’ attribute vs ‘class’ attribute</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Multiple elements in HTML can have the same class value, whereas a
            value of id attribute of one element cannot be associated with
            another HTML element.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>multipart/form-data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            multipart/form-data is a type of encoding used when submitting forms
            that include files (or binary data) via HTTP. It allows for sending
            multiple pieces of data, like text inputs, files, or other binary
            data, in a single HTTP request.
            <br />
            <strong>When to Use</strong> <br />
            When a form contains file uploads (e.g., images, PDFs).When you need
            to send large binary data in combination with textual data.
            <br />
            <strong>Example</strong>
            <br />
            When submitting a form that includes a file, you need to set the
            enctype attribute of the form to "multipart/form-data".
            <CodeSnippet
              language="javascript"
              code={`
                <form action="/upload" method="POST" enctype="multipart/form-data">
                  <label for="username">Username:</label>
                  <input type="text" name="username" id="username" />

                  <label for="file">Upload File:</label>
                  <input type="file" name="file" id="file" />

                  <button type="submit">Submit</button>
                </form>
                 `}
            />
            enctype="multipart/form-data": This tells the browser to encode the
            form data as multipart/form-data, which is required for file
            uploads. The form contains a text input (username) and a file input
            (file).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>HTML layout structure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>{`<!DOCTYPE html>: Declares the document type and version of HTML.`}</li>
              <li>{`<html>: Root element of the HTML document.`}</li>
              <li>{`<head>: Contains metadata and links to external resources.`}</li>
              <li>{`<body>: Contains the content of the document.`}</li>
            </ul>
          </Typography>
          <CodeSnippet
            language="javascript"
            code={`
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document Title</title>
                <link rel="stylesheet" href="styles.css">
                <script src="script.js" defer></script>
              </head>
              <body>
                <!-- Content goes here -->
              </body>
              </html>
                 `}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Optimize website assets loading</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Optimizing website assets loading is crucial for improving page
            performance, reducing load times, and enhancing the overall user
            experience. Here are some effective strategies for optimizing asset
            loading:
            <ul>
              <li>
                <strong>CDN(Content Delivery Network) hosting :</strong>{" "}
                Distribute your static assets (images, CSS, JavaScript) across
                multiple servers located around the world to reduce latency and
                load times.
              </li>
              <li>
                <strong>File compression:</strong>
                This is a method that helps to reduce the size of an asset to
                reduce the data transfer
                <br />
                <strong>GZIP Compression - </strong>
                Compresses text files (HTML, CSS, JavaScript) on the server side
                before sending them to the client.
                <br />
                <strong>Brotli Compression - </strong>A newer compression
                algorithm that often achieves better compression rates than
                GZIP.
              </li>
              <li>
                <strong>File concatenation:</strong>Concatenating CSS and
                JavaScript files reduces the number of HTTP requests by
                combining multiple files into one. This can improve page load
                times.
                <br />
                <ul>
                  <strong>Tools</strong>
                  <li>
                    <strong>Webpack:</strong> A popular module bundler for
                    JavaScript applications. It can concatenate files and also
                    handle various other optimizations.
                  </li>
                  <li>
                    <strong>Gulp:</strong> A task runner that can concatenate
                    files as part of a build process.
                  </li>
                  <li>
                    <strong>Parcel:</strong> A zero-configuration web
                    application bundler.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Minify scripts:</strong> This reduces the overall file
                size of js and CSS files
              </li>
              <li>
                <strong>Parallel downloads:</strong> Hosting assets in multiple
                subdomains can help to bypass the download limit of 6 assets per
                domain of all modern browsers. This can be configured but most
                general users never modify these settings.
              </li>
              <li>
                <strong>Lazy Loading:</strong>Instead of loading all the assets
                at once, the non-critical assets can be loaded on a need basis.
                <ul>
                  <li>
                    <strong>Images:</strong>
                    {`Use the loading="lazy" attribute for <img> elements to defer loading images until they are in the viewport.`}
                  </li>
                  <CodeSnippet
                    language="javascript"
                    code={`
                      <img src="image.jpg" alt="Description" loading="lazy">
                 `}
                  />
                  <li>
                    <strong>JavaScript:</strong>Dynamically load JavaScript
                    files when needed using import() or libraries like
                    RequireJS.
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Formatting tags</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                <strong>{`<b>`}</strong> - makes text bold
              </li>
              <li>
                <strong>{`<i> `}</strong>- makes text italic
              </li>
              <li>
                <strong>{`<em>`}</strong> - makes text italic but with added
                semantics importance
              </li>
              <li>
                <strong>{`<big>`}</strong> - increases the font size of the text
                by one unit
              </li>
              <li>
                <strong>{`<small>`}</strong> - decreases the font size of the
                text by one unit
              </li>
              <li>
                <strong>{`<sub>`}</strong> - makes the text a subscript
              </li>
              <li>
                <strong>{`<sup> `}</strong>- makes the text a superscript
              </li>
              <li>
                <strong>{`<del>`}</strong> - displays as strike out text
              </li>
              <li>
                <strong>{`<strong>`}</strong> - marks the text as important
              </li>
              <li>
                <strong>{`<mark>`}</strong> - highlights the text
              </li>
              <li>
                <strong>{`<ins>`}</strong> - displays as added text
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Different kinds of Doctypes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The three kinds of Doctypes which are available:
            <ol>
              <li>Strict Doctype</li>
              <li>Transitional Doctype</li>
              <li>Frameset Doctype</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>HTML tags and elements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. HTML elements are defined by a starting tag, may contain some
            content and a closing tag.For example, <h1>Heading 1</h1> is a HTML
            element but just <h1> is a starting tag and </h1> is a closing tag.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Style sheet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A style sheet is used to build a consistent, transportable, and
            well-designed style template. You can add these templates on several
            different web pages. It describes the look and formatting of a
            document written in markup language.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Multi-colored text on a web page</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`To create a multicolor text on a web page you can use
            <font color="color"> </font> for the specific texts you want to
            color.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Change the color of the bullet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The color of the bullet is always the color of the first text of the
            list. So, if you want to change the color of the bullet, you must
            change the color of the text.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Separate a section of texts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Three tags are used to separate the texts.
            <ul>
              <li>{`<br> tag - Usually <br> tag is used to separate the line of text. It breaks the current line and conveys the flow to the next line`}</li>
              <li>{`<p> tag - The <p> tag contains the text in the form of a new paragraph.`}</li>
              <li>{`<blockquote> tag - It is used to define a large quoted section. If you have a large quotation, then put the entire text within <blockquote>.............</blockquote> tag.`}</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Empty elements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`HTML elements with no content are called empty elements. For example: <br>, <hr> etc.`}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Span tag</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The span tag is used for following things:
            <ul>
              <li>For adding color on text</li>
              <li>For adding background on text</li>
              <li>Highlight any color text</li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
          <p>
            <span style="color:#ffffff;">
              In this page we use span.
            </span>
          </p>
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
          <Typography>Iframe tag</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An iframe is used to display a web page within a web page.
            <CodeSnippet
              language="javascript"
              code={`
          <iframe src="URL"></iframe>
         `}
            />
            <CodeSnippet
              language="javascript"
              code={`
          <iframe src="demo_iframe.html" width="200px" height="200px"></iframe>
         `}
            />
            <CodeSnippet
              language="javascript"
              code={`
          <iframe src="http://www.javatpoint.com" name="iframe_a"></iframe>
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
          <Typography>URL encoded in HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`An URL is encoded to convert non-ASCII characters into a format that can be used over the Internet because a URL is sent over the Internet by using the ASCII character-set only. If a URL contains characters outside the ASCII set, the URL has to be converted. The non-ASCII characters are replaced with a "%" followed by hexadecimal digits.`}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Canvas element</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`The <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript. It allows for dynamic and scriptable rendering of 2D shapes and bitmap images. There are several methods in canvas to draw paths, boxes, circles, text and add images.`}
            <CodeSnippet
              language="javascript"
              code={`
                <canvas id="myCanvas1" width="300" height="100" style="border:2px solid;">
                  Your browser does not support the HTML5 canvas tag.
                </canvas>
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
          <Typography>SVG</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SVG stands for Scalable Vector Graphics, an XML-based format for
            creating two-dimensional vector images. SVGs are popular because
            they are resolution-independent, meaning they look sharp at any size
            without losing quality. They are widely used in web development for
            icons, logos, illustrations, and other graphics.
            <ul>
              <li>
                <strong>Scalability:</strong> SVG images can be scaled to any
                size without losing quality, unlike raster images (e.g., JPEG,
                PNG).
              </li>
              <li>
                <strong>Interactivity:</strong> SVGs support CSS and JavaScript,
                allowing animations, hover effects, and interactive elements.
              </li>
              <li>
                <strong>Accessibility:</strong> Text within SVG files can be
                indexed by search engines and read by screen readers, improving
                accessibility.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                //Inline SVG:
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                </svg>

                //External SVG File:
                <img src="image.svg" alt="My SVG">
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
          <Typography>Form element</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            list of 10 frequently used new elements
            <ul>
              <li>Color</li>
              <li>Date</li>
              <li>Datetime-local</li>
              <li>Email</li>
              <li>Time</li>
              <li>Url</li>
              <li>Range</li>
              <li>Telephone</li>
              <li>Number</li>
              <li>Search</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Type of video formats are supported by HTML5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>mp4</li>
              <li>WebM</li>
              <li>Ogg</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Audio tag supported in HTML 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>mp3</li>
              <li>WAV</li>
              <li>Ogg</li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                <audio controls>
                  <source src="koyal.mp3" type="audio/mpeg">
                  Your browser does not support the html audio tag.
                </audio>
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
          <Typography>Progress vs Meter tag</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Progress Tag:</strong>
            <ul>
              <li>
                Used to show the progress of a task (e.g., a file download or an
                upload process).
              </li>
              <li>It indicates a completion percentage of a task.</li>
              <li>
                You can set its current value and maximum value, and the browser
                will display a bar to represent the progress.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                <progress value="40" max="100"></progress>
              `}
            />
            <strong>Meter tag</strong>
            <ul>
              <li>
                Used to represent a scalar measurement within a known range
                (e.g., a temperature, a speedometer, or a battery level).
              </li>
              <li>{`Unlike <progress>, which shows how much of a task is done, <meter> is for representing a value that could fluctuate within a range.`}</li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                <meter value="0.7" min="0" max="1" low="0.25" high="0.75" optimum="0.5"></meter>
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
          <Typography>Figure tag</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`The <figure> tag is used to group media content, like images, charts, or code snippets, with a caption or explanation. It's a semantic element that helps improve the structure of your webpage, making it clear that the content within the <figure> element is a single unit, often with a related <figcaption>`}
            <CodeSnippet
              language="javascript"
              code={`
                <figure>
                  <img src="example.jpg" alt="A beautiful landscape">
                  <figcaption>A beautiful landscape during sunset.</figcaption>
                </figure>

                //with code
                <figure>
                  <pre><code>console.log("Hello, World!");</code></pre>
                  <figcaption>A simple JavaScript code snippet.</figcaption>
                </figure>
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
          <Typography>Button tag</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is used to create clickable buttons that can trigger actions when
            interacted with by the user. It's a versatile element commonly used
            in forms, user interfaces, and applications.
            <br />
            Types of button
            <ul>
              <li>
                <strong>Submit Button:</strong> If the button is used in a form,
                its default type is "submit", which submits the form data when
                clicked.
              </li>
              <li>
                <strong>Reset Button:</strong> You can set the type to "reset"
                to clear the form inputs.
              </li>
              <li>
                <strong>Button:</strong> The default type is "button", which
                does not submit the form and is typically used for custom
                JavaScript actions.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
                <button type="button" onclick="alert('Hello!')">Click Me</button>
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
          <Typography>Details and Summary tag</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Details</strong>
            <ul>
              <li>{`The <details> element creates a disclosure widget from which the user can obtain additional information or controls.`}</li>
              <li>
                It can contain any HTML content, including text, images, and
                other elements.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                <details>
                  <summary>What is HTML?</summary>
                  <p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p>
                </details>

                <details>
                  <summary>What is CSS?</summary>
                  <p>CSS stands for Cascading Style Sheets. It is used to style and layout web pages.</p>
                </details>
              `}
            />
            <strong>Summary tag</strong>
            <ul>
              <li>{`The <summary> element provides a summary or heading for the <details> content. It is always visible, and clicking on it toggles the visibility of the <details> content.`}</li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                <details open>
                  <summary>What is HTML?</summary>
                  <p>HTML stands for HyperText Markup Language...</p>
                </details>
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
          <Typography>Tags from HTML4 to HTML5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>HTML4</TableCell>
                    <TableCell>HTML5</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{`<div id="header">`}</TableCell>
                    <TableCell>{`<header>`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{`<div id="menu">`}</TableCell>
                    <TableCell>{`<nav>`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{`<div id="content">`}</TableCell>
                    <TableCell>{`<section>`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{`<div id="post">`}</TableCell>
                    <TableCell>{`<article>`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{`<div id="footer">`}</TableCell>
                    <TableCell>{`<footer>`}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>{`<!DOCTYPE html>`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`I do not put <!DOCTYPE html> the browser will not be able to identify that it is an HTML document and HTML 5 tags do not function properly.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Required attribute</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`The required attribute in HTML is a boolean attribute that can be applied to form elements (such as <input>, <select>, and <textarea>) to indicate that the user must fill out the field before submitting the form. If a required field is left empty when the form is submitted, the browser will prevent the form from being submitted and typically display an error message.`}
            <CodeSnippet
              language="javascript"
              code={`
                <form>
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>

                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>

                  <button type="submit">Submit</button>
                </form>
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
          <Typography>Different formats in which colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The color of an element can be defined in the following ways:
            <ul>
              <li>Built-In Color</li>
              <li>RGB Format</li>
              <li>RGBA Format</li>
              <li>Hexadecimal Notation</li>
              <li>HSL</li>
              <li>HSLA</li>
              <li>
                Hue: Hue is the degree of the color wheel. Its value lies
                between 0 to 360 where 0 represents red, 120 represents green
                and 240 represents blue color.
              </li>
              <li>
                Saturation: It takes a percentage value, where 100% represents
                completely saturated, while 0% represents completely unsaturated
                (gray).
              </li>
              <li>
                Lightness: It takes a percentage value, where 100% represents
                white, while 0% represents black.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Block vs Inline elements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Every element in HTML has a default display value which depends upon
            the element type. Block or inline is the default display value for
            most of the elements.
            <br />
            <strong>Block-Level Elements:</strong>A block-level element always
            starts on a new line and stretches out to the left and right as far
            as it can.
            <ul>
              <li>
                div element: The div element is used as a container for other
                HTML elements. It has no required attributes. Style, class, and
                id are the commonly used attributes.
              </li>
            </ul>
            <strong>Inline Elements:</strong> An inline element does not start
            on a new line and only takes up as much width as necessary.
            <ul>
              <li>
                span element: The span element is used as a container for text.
                It has no required attributes. Style, class, and id are the
                commonly used attributes. It is typically used to apply styles
                or scripts to a small portion of text within a larger block of
                content.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Insert a comment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`We can insert a comment in HTML by beginning with a lesser than sign and ending with a greater than sign. For example, “<!-“ and “->.”`}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Copyright symbol</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`To insert a copyright symbol in HTML, you can use the HTML entity &copy or the numeric code &#169;`}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>White space</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An empty sequence of space characters is called white space in HTML.
            It is considered a single-space character.
            <br />
            White space helps the browser merge multiple spaces into one space,
            making indentation easier. It also helps better organize the content
            and tags, making them readable and easily understood.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Add JavaScript to an HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            JavaScript is used to make HTML web pages more interactive and
            user-friendly. It is a scripting language that allows you to
            interact with some aspects of the page based on user input. As with
            CSS, there are three significant ways of including JavaScript:
            <br />
            <strong>Inline:</strong>
            <br />
            You can add JavaScript to your HTML elements directly whenever a
            certain event occurs. We can add the JavaScript code using
            attributes of the HTML tags that support it. Here is an example that
            shows an alert with a message when the user clicks on it:
            <CodeSnippet
              language="javascript"
              code={`
                <button onclick="alert('Click the Button!');">
                  Click!
                </button>
              `}
            />
            <strong>Script block:</strong>
            <br />
            You can define a script block anywhere on the HTML code, which will
            get executed as soon as the browser reaches that part of the
            document. This is why script blocks are usually added at the bottom
            of HTML documents.
            <CodeSnippet
              language="javascript"
              code={`
                <html>
                  <script>
                    var x = 1;
                    var y = 2;
                    var result = x + y;
                    alert("X + Y is equal to " + result);
                  </script>
                </html>
              `}
            />
            <strong>External JavaScript file:</strong>
            <br />
            You can also import the JavaScript code from a separate file and
            keep your HTML code clutter-free. This is especially useful if a
            large amount of scripting is added to an HTML webpage.
            <CodeSnippet
              language="javascript"
              code={`
                <html>
                  <script src="my-script.js"></script>
                </html>
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
          <Typography>“display: none” vs “visibility: hidden” </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>display: none</strong>
            <ul>
              <li>
                Effect: The element is completely removed from the document
                flow, as if it doesn’t exist. It doesn’t occupy any space on the
                page.
              </li>
              <li>
                Interactivity: The element is not interactive; users can’t
                interact with it, and it won’t be accessible to screen readers.
              </li>
              <li>
                Layout: Other elements will act as though the hidden element
                isn’t there, meaning they will take up the space that would have
                been occupied by the hidden element.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                .hidden {
                  display: none;
                }

                //html
                <p>This paragraph is visible.</p>
                <p class="hidden">This paragraph will not be visible or occupy any space.</p>
                <p>This paragraph will move up to take the hidden paragraph's place.</p>
              `}
            />
            <strong>visibility: hidden</strong>
            <ul>
              <li>
                Effect: The element is still present in the document and
                occupies its space, but it’s not visible to the user.
              </li>
              <li>
                Interactivity: The element is not interactive, but it still
                occupies space in the layout. It’s still in the DOM, so screen
                readers may still be able to access it.
              </li>
              <li>
                Layout: The hidden element still takes up space on the page, but
                it is invisible.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                //css
                .invisible {
                  visibility: hidden;
                }


                //html
                <p>This paragraph is visible.</p>
                <p class="invisible">This paragraph will not be visible but still occupies space.</p>
                <p>This paragraph will not move up; it stays below the hidden one.</p>
              `}
            />
            <strong>When to Use:</strong>
            <ul>
              <li>
                Use display: none when you want to completely remove the element
                from the layout and flow of the document.
              </li>
              <li>
                Use visibility: hidden when you want to hide the element but
                keep its space reserved in the layout.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>{`<link> vs  <a> tag`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>{`<link> Tag`}</strong>
            <ul>
              <li>
                {`Purpose: The <link> tag is used to define relationships between the current document and external resources, most commonly for linking to stylesheets or other external files.`}
              </li>
              <li>
                Functionality: It doesn’t create clickable links for users.
                Instead, it’s used for linking resources like CSS, icons, or
                prefetching resources.
              </li>
              <li>{`Placement: It is usually placed within the <head> of the HTML document.`}</li>
            </ul>
            Common Use Case: Linking a stylesheet
            <CodeSnippet
              language="javascript"
              code={`
                  <head>
                    <link rel="stylesheet" href="styles.css">
                  </head>

                  <link rel="icon" href="favicon.ico">
                  <link rel="preload" href="image.jpg">
                `}
            />
            <strong>{`<a> Tag (Anchor Tag)`}</strong>
            <ul>
              <li>
                {`Purpose: The <a> tag (anchor tag) is used to create clickable hyperlinks that navigate users to another page, section of the same page, or resource. It's designed for user interaction.`}
              </li>
              <li>
                Functionality: When clicked, it can direct users to another
                webpage, file, or section within the same document (via anchor
                links).
              </li>
              <li>
                Placement: It is placed within the body of the HTML document.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                  <a href="https://www.example.com">Visit Example</a>
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
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default HtmlList;
