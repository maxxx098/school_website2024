const express = require("express");
const app = express();

// Redirect route for WhatsApp
app.get("/start-chat", (req, res) => {
    const whatsappNumber = "+17785220966"; // WhatsApp-compatible format with country code
    const message = "Hello! I need assistance."; // Pre-filled message
    const redirectUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    console.log(`Redirecting to: ${redirectUrl}`); // Log the generated URL for debugging
    res.redirect(redirectUrl); // Redirects the user to the WhatsApp chat
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

