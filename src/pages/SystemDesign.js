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
import CodeSnippet from "../CodeSnippet";

const HtmlList = () => {
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
        System Design Overview
      </Typography>
      <Typography sx={{ fontWeight: 500, margin: "0 auto 20px", width: "80%" }}>
        System Design is the process of designing the architecture, components,
        and interfaces for a system so that it meets the end-user requirements.
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
          <Typography>OOP Concepts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                <strong>Class:</strong>A blue print for creating objects,
                encapsulating data and methods that operate on that data.
              </li>
              <li>
                <strong>Object:</strong>Object is an instance of class. It
                represents a real-world entity with attributes (properties) and
                behavior (methods). its a collection of related data
              </li>
              <li>
                <strong>Encapsulation:</strong>Bundling data and methods
                operating on that data within a single unit,called a class.Hides
                internal details of an object and exposes only necessary parts.
              </li>
              <li>
                <strong>Inheritance:</strong>Allows a class to inherit
                properties and methods from another class. Promotes code
                reusablity.
              </li>
              <li>
                <strong>Polymorphism:</strong>Allows methods to have different
                behaviors in different classes. Achieved using method
                overriding.
              </li>
              <li>
                <strong>Association:</strong>Association in OOP represents a
                relationship between two classes without ownership. One class
                can use another class&apos;s functionality without being its
                owner.
              </li>
              <li>
                <strong>Aggregation:</strong>
                {`Aggregation is a "HAS-A" relationship where one class contains another class, but both can exist independently. If the main object is deleted, the associated object can still exist`}
              </li>
              <li>
                <strong>Composition:</strong> where one class contains another
                class, and the contained object cannot exist without the
                container class.
              </li>
            </ul>
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
          <Typography>
            Differences Between Aggregation and Composition
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {/* <CodeSnippet
            language="javascript"
            code={`
            `}
          /> */}
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Feature</TableCell>
                    <TableCell>Aggregation</TableCell>
                    <TableCell>Composition</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Relationship</TableCell>
                    <TableCell>Type Has-A (Weak)</TableCell>
                    <TableCell>Has-A (Strong)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Object Dependency</TableCell>
                    <TableCell>
                      Contained object can exist independently
                    </TableCell>
                    <TableCell>
                      Contained object cannot exist independently
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Example</TableCell>
                    <TableCell>A Student has an Address</TableCell>
                    <TableCell>A Car has an Engine</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
          <Typography>9 HTTP Request Methods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            HTTP methods are used to define the type of action to be performed
            on a resource in a web application.
            <ul>
              <li>
                <strong>GET:</strong> Retrieve data from the server. GET /users
              </li>
              <li>
                <strong>POST: </strong>Submit data to the server to create or
                update a resource. POST /users
              </li>
              <li>
                <strong>PUT: </strong>
                {`Update an existing resource or create a new one if it doesn't exist. update an entire resource with the data provided.
              PUT /users/1`}
              </li>
              <li>
                <strong>PATCH: </strong>Partially update an existing resource.
                PATCH /users/1
              </li>
              <li>
                <strong>DELETE: </strong>Remove a resource from the server.
                DELETE /users/1
              </li>
              <li>
                <strong>HEAD: </strong>Retrieve the headers of a resource
                without the body. HEAD /users
              </li>
              <li>
                <strong>OPTIONS: </strong>Retrieve the communication options for
                the target resource. OPTIONS /users
              </li>
              <li>
                <strong>CONNECT: </strong>Establish a tunnel to the server
                identified by the target resource. CONNECT /users
              </li>
              <li>
                <strong>TRACE: </strong>Perform a message loop-back test along
                the path to the target resource. TRACE /users
              </li>
            </ul>
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
          <Typography>Improve API Performance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Improving API performance is essential for ensuring fast response
            times, scalability, and a smooth user experience.
            <ul>
              <li>
                <strong>Limit Response Size:</strong>Only return the data that’s
                necessary by using techniques like pagination or field selection
                (e.g., GraphQL). This reduces the payload and improves response
                times.
              </li>
              <li>
                <strong>Use Caching: </strong>Implement caching mechanisms to
                reduce repeated database queries and improve response times for
                frequently requested data. Cache at various levels (e.g., HTTP
                caching, database query results).
              </li>
              <li>
                <strong>Payload Compression: </strong> Compressing the payload
                to reduce the data size to speed up the download and upload. Use
                gzip or brotli compression.
              </li>
              <li>
                <strong>Optimize Authentication: </strong>Use JWT (JSON Web
                Tokens) or OAuth to minimize authentication overhead by avoiding
                frequent database calls for validating user credentials.
              </li>
            </ul>
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
          <Typography>API Testing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                <strong>Smoke Testing: </strong>
                Simply validate if the API&apos;s are working
              </li>
              <li>
                <strong>Functional Testing: </strong>
                Validate the functionality of the API. Check if the API returns
                correct responses for valid requests.
              </li>
              <li>
                <strong>Integration Testing:</strong> Test serveral API calls.
                Focuses on verifying the interaction between different parts of
                the system (such as different API endpoints, services, and
                databases).
              </li>
              <li>
                <strong>Regression Testing: </strong>The process of validating
                that the APIs in a system continue to function correctly after
                changes, such as bug fixes, feature additions, or other code
                modifications.
              </li>
              <li>
                <strong>Load Testing: </strong>Type of performance testing where
                you simulate multiple requests to an API to check how well it
                performs under heavy traffic or load. The main goal is to ensure
                that the API can handle a large number of users or requests
                without crashing or slowing down.
              </li>
              <li>
                <strong>Stress Testing: </strong>Type of performance testing
                where you deliberately push an API beyond its limits to see how
                it behaves under extreme conditions. The goal is to identify the
                breaking point—the maximum capacity the API can handle before
                failing.
              </li>
              <li>
                <strong>Security Testing: </strong>It ensures that an API is
                protected against vulnerabilities, unauthorized access, and data
                breaches.
              </li>
              <li>
                <strong>UI Testing: </strong> Test interactions between the UI
                and the API. It checks elements like buttons, forms, navigation,
                and layout for correctness, usability, and responsiveness.
              </li>
              <li>
                <strong>Fuzz Testing: </strong>It involves sending random or
                unexpected data inputs to an API to uncover vulnerabilities,
                crashes, or unexpected behavior. It helps identify security
                flaws and bugs that may not be evident with normal inputs.
              </li>
            </ul>
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
          <Typography>Scaling a huge SQL database</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            There are two primary approaches: Vertical Scaling (Scaling Up) and
            Horizontal Scaling (Scaling Out).
            <ul>
              <li>
                <strong>Vertical Scaling (Scaling Up): </strong>
                Increase hardware resources (CPU, RAM, SSD) of a single database
                server.
                <ul>
                  <li>
                    Pros: Simple to implement, no changes to the application
                    code. Can be cost effective and simple to work with
                  </li>
                  <li>
                    Cons: Limited by the hardware capabilities of a single
                    server, can lead to a single point of failure.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Horizontal Scaling (Scaling Out): </strong>
                Distributes data across multiple servers to handle higher loads.
                <ul>
                  <li>
                    Pros: More flexible and scalable, can handle larger datasets
                    and higher traffic. No single point of failure. Easier to
                    add more servers as needed.
                  </li>
                  <li>
                    Cons: More complex to implement, requires changes to the
                    application code to handle data distribution and
                    synchronization. Can have higher start-up costs
                  </li>
                </ul>
              </li>
            </ul>
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
          <Typography>CI/CD Automated Deployment </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Uses Continuous Integration & Continuous Deployment (CI/CD) tools
            like GitHub Actions, Jenkins, GitLab CI/CD. <br />
            Pros: Fast, reliable, minimizes human errors.
            <br />
            Cons: Requires initial setup and maintenance.
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
          <Typography>Deployment of an Application</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                <strong>Deployment Strategies:</strong>
                <ul>
                  <li>
                    <strong>Manual Deployment: </strong>
                    Manually copying files and configuring the server. Pros:
                    Simple for small projects. Cons: Error-prone, not scalable.
                  </li>
                  <li>
                    <strong> Automated Deployment (CI/CD): </strong>
                    Uses Continuous Integration & Continuous Deployment (CI/CD)
                    tools like GitHub Actions, Jenkins, GitLab CI/CD. Pros:
                    Fast, reliable, minimizes human errors.
                  </li>
                  <li>
                    <strong>Blue-green deployment: </strong>
                    Run two versions of the application simultaneously, with
                    only one live at a time.Use Case: Zero downtime,
                    rollback-friendly.
                  </li>
                  <li>
                    <strong>Rolling deployment: </strong>
                    Gradually replace the old version of an application with the
                    new version, one server at a time{" "}
                  </li>
                  <li>
                    <strong>Canary Deployment: </strong>Gradually roll out an
                    update to users based on feedback and performance.Use Case:
                    A/B testing, monitoring new changes.
                  </li>
                  <li>
                    <strong>Feature flags: </strong>Turn specific
                    functionalities on or off without redeploying the entire
                    application
                  </li>
                </ul>
              </li>
              <li>
                <strong>Deployment Methods: </strong>
                <ul>
                  <li>
                    <strong>Server-Based Deployment:</strong>
                    Deploy to a traditional web server (Apache, Nginx, IIS).
                    Example: Deploying a Node.js app to an Ubuntu server.
                  </li>
                  <li>
                    <strong>Cloud Deployment: </strong>
                    AWS, Azure, GCP for scalable cloud hosting.
                  </li>
                  <li>
                    <strong>Containerized Deployment: </strong>
                    Uses Docker & Kubernetes for portable, scalable apps.
                    Example: Deploying a React frontend + Node.js backend inside
                    Docker containers.
                  </li>
                  <li>
                    <strong>Serverless Deployment: </strong>Uses
                    Functions-as-a-Service (FaaS) like AWS Lambda, Firebase
                    Functions. Use Case: Event-driven applications, cost
                    efficiency.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Deployment Steps:</strong>
                <ul>
                  <li>
                    <strong>Build & Package: </strong>
                    For JavaScript Apps: npm run build For Docker: docker build
                    -t myapp .
                  </li>
                  <li>
                    <strong>Setup Environment Variables: </strong>
                    Store secrets like database credentials in .env or cloud
                    services.
                  </li>
                  <li>
                    <strong>Database Migration: </strong>Run database migrations
                    using tools like Flyway, Prisma, Liquibase.
                  </li>
                  <li>
                    <strong>Deploy to Hosting: </strong>
                    Push to GitHub, AWS, Netlify, Vercel, Firebase,
                    DigitalOcean.
                  </li>
                  <li>
                    <strong>Configure Load Balancing: </strong>
                    Configuring load balancing involves setting up a load
                    balancer, creating target groups, and defining backend
                    servers. Load balancing distributes workloads and improves
                    performance by routing requests to multiple servers.
                  </li>
                  <li>
                    <strong>Monitoring & Logging: </strong>
                    Set up monitoring and logging using tools like Prometheus,
                    Grafana, ELK Stack, Datadog, New Relic.{" "}
                  </li>
                </ul>
              </li>
            </ul>
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
          <Typography>Content Negotiation in APIs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Content negotiation is the process where a client and server
            determine the best format for data exchange in an API
            request/response. It allows APIs to support multiple formats like
            JSON, XML, or even plain text, ensuring compatibility with different
            clients.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
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
          <Typography sx={{ fontWeight: 300 }}></Typography>
        </AccordionDetails>
      </Accordion> */}
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
          <Typography>API Gateways</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            An API Gateway is like a smart traffic controller that manages
            requests between clients (users, apps) and backend services. It acts
            as a single entry point for all API calls, handling security, load
            balancing, and routing. <br />
            An API Gateway is “middleware” that makes available backend services
            to mobile, web and other external clients via a set of protocols and
            commonly through a set of RESTful application programming interfaces
            (APIs). An API Gateway makes it much simpler to develop, secure,
            manage, and scale endpoints by moving most of the required logic
            from the client, into the gateway.
            <br />
            {`API Gateways are -> Express Gateway, NGINX API Gateway, AWS API Gateway`}
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
          <Typography>Express.js vs API Gateways (Express Gateway)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Both Express.js and Express Gateway are used for handling HTTP
            requests, but they serve different purposes.
            <br />
            <strong>Express.js:</strong>
            Express.js is a lightweight web framework for Node.js that
            simplifies backend development by providing:
            <ul>
              <li>Middleware support</li>
              <li>Routing mechanism</li>
              <li>HTTP request handling</li>
              <li>Integration with databases and APIs</li>
            </ul>
            <strong>Use Case:</strong> Building web applications, REST APIs, and
            simple microservices. You can use GraphQL with Express.js by
            integrating it with the express-graphql or Apollo Server Express
            package.
            <br />
            <strong>Express Gateway:</strong>
            Express Gateway is an API Gateway built on top of Express.js that
            provides additional features for managing and securing APIs:
            <ul>
              <li>API routing and proxying</li>
              <li>Authentication and authorization</li>
              <li>Rate limiting and throttling</li>
              <li>Caching and load balancing</li>
            </ul>
            <strong>Use Case:</strong> Managing multiple microservices and APIs
            in a centralized gateway. used when Multiple Services with API
            Management
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
          <Typography>Microservices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            It is an architectural style where an application is built as a
            collection of small, independent services that communicate over a
            network. Each service focuses on a specific business capability and
            can be developed, deployed, and scaled independently.
            <br />
            <strong>Key points:</strong>
            <ul>
              <li>
                <strong>Independence –</strong> Each microservice operates as an
                independent process.
              </li>
              <li>
                <strong>Single Responsibility –</strong> Each service handles a
                specific function (e.g., authentication, payments,
                notifications).
              </li>
              <li>
                <strong>Decentralized Data Management – </strong>Each service
                manages its own database, avoiding a single point of failure.
              </li>
              <li>
                <strong>API Communication –</strong> Services communicate via
                APIs, usually using REST, GraphQL, or gRPC.
              </li>
              <li>
                <strong>Scalability –</strong> Individual services can be scaled
                based on demand.
              </li>
              <li>
                <strong>Technology Agnostic –</strong> Different services can be
                built using different programming languages or frameworks.
              </li>
              <li>
                <strong>Automated Deployment – </strong>Continuous
                Integration/Continuous Deployment (CI/CD) is commonly used for
                frequent releases.
              </li>
            </ul>
            <stron>Common Technologies</stron>
            <ul>
              <li>
                <strong>Backend Frameworks: </strong>Node.js, Express.js, Spring
                Boot, Django, FastAPI, .NET Core
              </li>
              <li>
                <strong>API Communication: </strong>REST, GraphQL, gRPC,
                WebSockets
              </li>
              <li>
                <strong>Message Brokers: </strong>RabbitMQ, Kafka, AWS SQS,
                Azure Service Bus
              </li>
              <li>
                <strong>Databases: </strong>PostgreSQL, MongoDB, Redis, DynamoDB
              </li>
              <li>
                <strong>Containerization & Orchestration: </strong>Docker,
                Kubernetes
              </li>
              <li>
                <strong>Service Discovery: </strong>Consul, Eureka
              </li>
              <li>
                <strong>API Gateway: </strong>Nginx, Kong, AWS API Gateway
              </li>
            </ul>
            <strong>Challenges</strong>
            <ul>
              <li>Increased Complexity</li>
              <li>
                Inter-Service Communication: Handling failures, retries, and
                consistency is more complex.
              </li>
              <li>
                Data Consistency – Distributed data storage makes transactions
                more difficult.
              </li>
              <li>
                Security Concerns – API security, authentication, and
                authorization must be carefully managed.
              </li>
            </ul>
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
          <Typography>Message Brokers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Message brokers are used to decouple services and enable
            asynchronous. we don&apos;t directly assign the task to the worker;
            instead, we place a message broker in between. <br />
            This message broker acts like a queue in between. The server puts
            the task as a message in the queue, and the worker pulls it from the
            queue and processes it. After processing is completed, the worker
            can delete the task message from the queue.
            <br />
            The server which puts the message into the message queue is called
            the producer, and the server that pulls and processes the message is
            called the consumer (or worker). <br />
            <strong>Why did we put a message broker in between?</strong>
            <ul>
              <li>
                It gives reliability. Suppose the producer goes down. Still,
                workers can function without any problems.
              </li>
              <li>
                It also gives the retry feature. Suppose the worker fails to
                process in between, then it can retry after some time because
                the message is still present in the message broker.
              </li>
              <li>
                It makes the system decoupled. Producers and consumers can both
                do the task at their own pace, and they are not dependent on
                each other.
              </li>
            </ul>
            <strong>Two types:</strong>
            <ul>
              <li>
                <strong>Message Queues (Example: RabbitMQ, AWS SQS): </strong>{" "}
                As the name suggests, it is a kind of queue where the producer
                puts the message from one side, and the consumer pulls out the
                message to process from the other side. The only thing different
                between a message queue and a message stream is that a message
                queue can only have one kind of consumer for one type of
                message.
              </li>
              <li>
                <strong>
                  Message Streams (Example: Apache Kafka, AWS Kinesis):
                </strong>{" "}
                In this, for one message we can have more than one type of
                consumer. When you want: “Write to one and read by many”.
              </li>
            </ul>
            <strong>We use message brokers when:</strong>
            <ul>
              <li>
                The task is non-critical. This means we can afford to send them
                with some delay.
                <br />
                Ex: Sending email{" "}
              </li>

              <li>
                The task takes a long time to compute. .<br />
                Ex: Video Transcoding, Generating PDF etc
              </li>
            </ul>
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
          <Typography>
            Containerization & Orchestration: Docker & Kubernetes{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Containerization is a way to package applications and their
            dependencies into lightweight, portable containers that run
            consistently across different environments.
            <br />
            <strong>Why</strong>
            <ul>
              <li>
                Works Everywhere → Runs the same on any OS (Linux, Windows,
                macOS).
              </li>
              <li>
                Lightweight → Uses less memory than virtual machines (VMs).
              </li>
              <li>
                Fast Deployment → No need to manually install dependencies.
              </li>
            </ul>
            <strong>How works</strong>
            <ul>
              <li>Write a Dockerfile → Defines the app’s environment.</li>
              <li>
                Build an Image → A snapshot of your app with everything it
                needs.
              </li>
              <li>
                Run a Container → A lightweight, isolated environment that runs
                your app.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
              # Use Node.js as the base image
                FROM node:18-alpine

                # Set the working directory
                WORKDIR /app

                # Copy package.json and install dependencies
                COPY package.json .
                RUN npm install

                # Copy all files and start the app
                COPY . .
                CMD ["node", "index.js"]
              //Command to build and run
                docker build -t my-app .
                docker run -p 3000:3000 my-app
            `}
            />
            <strong>What is Orchestration? (Kubernetes)</strong>
            <ul>
              <li>
                Scaling → Automatically increases/decreases the number of
                containers.
              </li>
              <li>
                Load Balancing → Distributes traffic to healthy containers.
              </li>
              <li>Self-Healing → Restarts failed containers automatically.</li>
            </ul>
            <strong>How Works</strong>
            <ul>
              <li>Pods → Smallest unit in K8s, runs one or more containers.</li>
              <li>Deployments → Manages multiple pods & updates them.</li>
              <li>
                Services → Exposes pods to the internet or other services.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                  //For Node.js app
                  apiVersion: apps/v1
                    kind: Deployment
                    metadata:
                      name: my-app
                    spec:
                      replicas: 3  # Runs 3 copies of the app
                      selector:
                        matchLabels:
                          app: my-app
                      template:
                        metadata:
                          labels:
                            app: my-app
                        spec:
                          containers:
                          - name: my-app
                            image: my-app:latest
                            ports:
                            - containerPort: 3000
                //To deploy
                kubectl apply -f deployment.yaml  # Deploys the app
                kubectl get pods                 # Check running containers


                `}
            />
            <strong>Docker vs. Kubernetes</strong>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Feature</TableCell>
                    <TableCell>Docker</TableCell>
                    <TableCell>Kubernetes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Purpose</TableCell>
                    <TableCell>Packages & runs apps in containers</TableCell>
                    <TableCell>
                      Manages multiple containers across servers
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Scaling</TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>Automatic</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Load Balancing</TableCell>
                    <TableCell>Requires additional setup</TableCell>
                    <TableCell>Built-in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Self-Healing</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <ul>
              <li>Use Docker to package & run your app.</li>
              <li>
                Use Kubernetes when you need to scale & manage multiple
                containers.
              </li>
            </ul>
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
          <Typography>Distributed System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A distributed system is a system that consists of multiple
            independent components or nodes that communicate and collaborate to
            achieve a common goal. These components could be physical machines
            or virtual instances spread across different locations, and they
            often work together to handle large-scale tasks, provide fault
            tolerance, and ensure scalability.
            <br />
            <strong>Example: </strong>
            <br />
            Sharding is also an example of a distributed system where the data
            of a table cannot fit in a single machine, so we cut that table and
            put those pieces into multiple machines.
            <br />
            Horizontal scaling is also an example of a distributed system
            because multiple servers handle requests.
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
          <Typography>Data Redundancy and Data Recovery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Data Redundancy and Data Recovery are essential concepts in building
            reliable, fault-tolerant systems, particularly in distributed
            systems and databases. These two practices ensure that data remains
            accessible, consistent, and protected, even in the event of hardware
            failures or disasters.
            <br />
            <strong>Data Redundancy</strong> involves duplicating data across
            multiple locations or systems to prevent data loss. This can be
            achieved through various techniques such as:{" "}
            <strong>Replication</strong>, <strong>Backup</strong>, and{" "}
            <strong>Erasure Coding</strong>.<br />
            <strong>Data Recovery</strong> is the process of restoring data to
            its original state after a failure or disaster. This can be done
            through: <strong>Point-in-Time Recovery</strong>,{" "}
            <strong>Snapshot Recovery</strong>, and{" "}
            <strong>Log-Based Recovery</strong>.
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
          <Typography>Proxy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A proxy is an intermediary server that sits between a client and
            another server.
            <br />
            <strong>There are two kinds of proxy:</strong>
            <ul>
              <li>
                <strong>1. Forward Proxy:</strong> A forward proxy acts on
                behalf of the client. When a client makes a request, this
                request goes through a forward proxy. The server doesn’t know
                about the client&apos;s identity (IP). The server will only know
                the forward proxy IP.
              </li>
              <li>
                <strong>2. Reverse Proxy :</strong>A reverse proxy acts on
                behalf of a server. Clients send requests to the reverse proxy,
                which forwards them to the appropriate server in the backend.
                The response goes back through the reverse proxy to the client.
                <br />
                An example of a reverse proxy could be a load balancer.
                <br />
                In forward proxy, servers don’t know the client’s identity, but
                in reverse proxy, the client doesn’t know about the server. They
                send the request to reverse proxy. It is the job of the reverse
                proxy to route this request to the appropriate server.
              </li>
            </ul>
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
          <Typography>Decoupling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Decoupling means reducing dependencies between different parts of a
            system so that they can work independently. This makes code more
            maintainable, scalable, and flexible.
            <br />
            <strong>Why</strong>
            <ul>
              <li>
                Easier Maintenance → Changing one part doesn’t break another.
              </li>
              <li>
                Better Scalability → Components can be updated or scaled
                separately.
              </li>
              <li>
                More Flexibility → Allows swapping components without major
                changes.
              </li>
            </ul>
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
          <Typography>BLOB</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
          <Typography>Redis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
        </AccordionDetails>
      </Accordion>
      {/*  <Accordion
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
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
          <Typography sx={{ fontWeight: 300 }}></Typography>
        </AccordionDetails>
      </Accordion> */}
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
          <Typography>Sentry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Sentry is an open-source application monitoring platform that helps
            developers track and fix bugs in real time. It’s widely used for
            error tracking and performance monitoring, making it easier to
            identify and resolve issues quickly.
            <br />
            Sentry captures errors and exceptions in real time, providing
            detailed reports with stack traces, request data, and environment
            details to help developers debug issues faster.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default HtmlList;
