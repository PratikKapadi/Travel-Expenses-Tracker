const express = require('express');
const mysql = require('mysql2/promise');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'pratik',
    database: 'travel'
});
app.use(session({
    secret: '3c51b23811909e39a96f06d9f5d1cfb9e95ad9a04b63a6d83f72612eb001c81a7cca39e1a1068d6b189ce8e7ae6fcbdc778e2153eff1890bbfb01be6164619d2', // Use a secure random string here
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());

// Configure Express session
app.use(express.static(path.join(__dirname, 'public')));

// Add the express.urlencoded() middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/forgotpassword', (req, res) => {
    res.sendFile(__dirname + '/forgotpassword.html');
});
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});
app.get('/aboutus', (req, res) => {
    res.sendFile(__dirname + '/aboutus.html');
});
app.get('/traveltips', (req, res) => {
    res.sendFile(__dirname + '/traveltips.html');
});

app.get('/addtrip', (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + '/addtrip.html');
    } else {
        // Redirect to login if the user is not logged in
        res.redirect('/login');
    }
});
app.get('/addexpenses', (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + '/addexpenses.html');
    } else {
        // Redirect to login if the user is not logged in
        res.redirect('/login');
    }
});

// Handle login requests
app.post('/login', async (req, res) => {
    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Query the database for the user
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const results = await pool.query(query, [username, password]);

    // If the user exists, log them in and create a session
    if (results.length > 0) {
        req.session.user = username;
        res.redirect('/dashboard');
    } else {
        // If the user does not exist, show a prompt with an error message
        const errorMessage = 'Invalid username or password';
        res.send(`<script>alert('${errorMessage}'); window.location='/login';</script>`);
    }
});



// Handle forgot password requests
app.post('/forgotpassword', async (req, res) => {
    const { email, password } = req.body;
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();

        if (rows.length > 0) {
            const connection2 = await pool.getConnection();
            await connection2.query('UPDATE users SET password = ? WHERE email = ?', [password, email]);
            connection2.release();
            res.send('Password updated successfully');
        } else {
            res.send('Email does not exist in our database');
        }
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Serve the sign up page

// Handle sign up requests



























































































































































app.post('/signup', async (req, res) => {
    // Get the username, email, password, and mobile number from the request body
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile; // Get mobile number from the request body

    try {
        // Insert the new user into the database
        const query = 'INSERT INTO users (username, email, password, mobile) VALUES (?, ?, ?, ?)';
        await pool.query(query, [username, email, password, mobile]); // Include mobile number in the query

        // Create a session for the new user
        req.session.user = {
            username: username,
            email: email,
            mobile: mobile // Include mobile number in the session data
        };

        // Redirect the user to the dashboard page
        res.redirect('/login');
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            // Handle duplicate entry error (user already registered)
            return res.status(400).json({ error: 'User already registered' });
        }

        console.error('Error inserting user:', error);
        res.status(500).send('Internal Server Error');
    }
});





// Handle Add Trip requests
app.post('/addtrip', async (req, res) => {
    const { startdate, enddate, place, country, tripType } = req.body;
    const username = req.session.user;

    try {
        // Insert trip details into the database, including trip type
        const query = 'INSERT INTO trips (username, start_date, end_date, place, country, trip_type) VALUES (?, ?, ?, ?, ?, ?)';
        await pool.query(query, [username, startdate, enddate, place, country, tripType]);

        res.redirect('/addexpenses'); // Redirect to expenses form after adding trip
    } catch (error) {
        console.error('Error adding trip:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Add an expense to the database
app.post('/addexpenses', async (req, res) => {
    // Get the expense data from the request body
    const date = req.body.date;
    const category = req.body.category;
    const amount = req.body.amount;
    const description = req.body.description; // Added line to get description
    const tripName = req.body.tripName;
    const username = req.session.user;

    // Insert the expense into the database
    const query = 'INSERT INTO expenses (username, date, category, amount, description, tripname) VALUES (?, ?, ?, ?, ?, ?)';
    await pool.query(query, [username, date, category, amount, description, tripName]);

    // Redirect the user to the dashboard page
    res.redirect('/addexpenses');
});


function formatDate(dateString) {
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options).replace(/\//g, '-');
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Handle the form submission
app.get('/report', async (req, res) => {
    const tripName = req.query.tripName;
    const username = req.session.user;

    try {
        // Query the database for expenses based on the tripName
        const query = 'SELECT * FROM expenses WHERE tripName = ? AND username=?';
        const [expenses] = await pool.query(query, [tripName, username]);

        const query1 = 'SELECT * FROM trips WHERE place = ? AND username=?';
        const [trips] = await pool.query(query1, [tripName, username]);

        // Calculate total amount by parsing amount strings to float
        const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

        // Render the report page with the expenses data and total amount
        res.render('report', {
            expenses: expenses,
            trips: trips,
            formatDate: formatDate,
            totalAmount: totalAmount.toFixed(2) // Convert totalAmount to a string with 2 decimal places
        });
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).send('Internal Server Error');
    }
});





app.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const connection = await pool.getConnection();
        await connection.query('INSERT INTO complaint (name, email, subject, message) VALUES (?, ?, ?, ?)', [name, email, subject, message]);
        connection.release();

        res.send('Complaint registered successfully!');
    } catch (error) {
        console.error('Error registering complaint:', error);
        res.status(500).send('Internal Server Error');
    }
});



// Handle logout requests
app.get('/logout', (req, res) => {
    // Destroy the user's session to log them out
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Internal Server Error');
        } else {
            // Redirect the user to the login page after logging out
            res.redirect('/');
        }
    });
});

//admin secssion
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});
app.get('/index_admin', (req, res) => {
    res.sendFile(__dirname + '/index_admin.html');
});

app.get('/admin_login', (req, res) => {
    res.sendFile(__dirname + '/admin_login.html');
});
app.get('/reset-password', (req, res) => {
    res.sendFile(__dirname + '/reset-password.html');
});

app.post('/admin_login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const [rows] = await pool.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password]);

        if (rows.length === 1) {
            req.session.email = email;
            res.redirect('/admin');
        } else {
            res.send('<script>alert("Invalid username or password"); window.location="/index_admin";</script>');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/reset-password', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await pool.query('SELECT * FROM admin WHERE email = ?', [email]);

        if (rows.length > 0) {
            await pool.query('UPDATE admin SET password = ? WHERE email = ?', [password, email]);
            res.send('Password updated successfully');
        } else {
            res.status(404).send('Email does not exist in our database');
        }
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/admin', (req, res) => {
    if (req.session.email) {
        res.send(`<h1>Welcome, ${req.session.email}!</h1><a href="/admin_logout">Logout</a>`);
    } else {
        res.redirect('/admin');
    }
});

app.get('/generate-report', async (req, res) => {
    try {
        const month = req.query.month;
        const year = req.query.year;
        const [trips] = await pool.query('SELECT * FROM trips WHERE MONTH(start_date) = ? AND YEAR(start_date) = ?', [month, year]);
        res.render('areport', { trips: trips, formatDate: formatDate });
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/admin_logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect('/index_admin');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
