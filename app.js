const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample data of available electives
const electives = [
    { id: 1, name: 'Art History' },
    { id: 2, name: 'Computer Science' },
    { id: 3, name: 'Psychology' },
    // Add more electives as needed
];

// Route to get all electives
app.get('/electives', (req, res) => {
    res.json(electives);
});

// Route to select electives
app.post('/select', (req, res) => {
    const selectedElectives = req.body.selectedElectives;
    // Handle selected electives here (e.g., save to database)
    console.log(selectedElectives);
    res.send('Electives selected successfully!');
});

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'elective_selection.html'));
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
