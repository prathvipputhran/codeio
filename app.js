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

// Route to serve the HTML file for student login
app.get('/student-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'student_login.html'));
});

// Route to handle student login
app.post('/student-login', (req, res) => {
    const { username, password } = req.body;
    // Validate username and password, then redirect to appropriate page
    // Example:
    // if (validStudent(username, password)) {
    //     res.redirect('/student-dashboard');
    // } else {
    //     res.status(401).send('Invalid credentials');
    // }
});

// Route to serve the HTML file for department login
app.get('/department-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'department_login.html'));
});

// Route to handle department login
app.post('/department-login', (req, res) => {
    const { username, password } = req.body;
    // Validate username and password, then redirect to appropriate page
    // Example:
    // if (validDepartment(username, password)) {
    //     res.redirect('/department-dashboard');
    // } else {
    //     res.status(401).send('Invalid credentials');
    // }
});

// Route to serve the HTML file for dean login
app.get('/dean-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dean_login.html'));
});

// Route to handle dean login
app.post('/dean-login', (req, res) => {
    const { username, password } = req.body;
    // Validate username and password, then redirect to appropriate page
    // Example:
    // if (validDean(username, password)) {
    //     res.redirect('/dean-dashboard');
    // } else {
    //     res.status(401).send('Invalid credentials');
    // }
});

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
