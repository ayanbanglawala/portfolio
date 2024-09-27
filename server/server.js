const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./db/dbConnect");
const Message = require("./db/message");  // Import the correct model name

connectDB();
app.use(express.json());

app.post("/message", async (req, res) => {
    try {
        // Use `message` instead of `msg`
        const { name, email, message } = req.body;  
        console.log(req.body);  // This should now show the correct field names

        // Create a new document using the corrected field names
        const messg = new Message({ name, email, message });  
        await messg.save();

        res.status(201).json({ message: "Successfully submitted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error Occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
