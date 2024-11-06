import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add email sending functionality here
    console.log("Email data:", formData);
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px 50px 50px 20px !important",
        borderRadius: 2,
        boxShadow: 3,
        marginTop: 5,
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, mb: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom color="primary">
            Contact Us
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Have questions or feedback? Send us a message, and we'll get back to
            you soon!
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ backgroundColor: "#ffffff" }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            type="email"
            sx={{ backgroundColor: "#ffffff" }}
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ backgroundColor: "#ffffff" }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            required
            multiline
            rows={4}
            sx={{ backgroundColor: "#ffffff" }}
          />
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#FF6600",
                "&:hover": { backgroundColor: "#CC5200" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Container>
    </Container>
  );
}

export default ContactForm;
