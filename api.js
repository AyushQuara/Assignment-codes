const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ashu@2001',
    database: 'studentrecords' 
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to MySQL database');
});

app.post('/students', (req, res) => {
    const {name, age, gender} = req.body;

    const query = `INSERT INTO students (name, age, gender) VALUES (?,?,?)`;
    const values = [name, age, gender];

    connection.query(query, values, (error, result) => {
        if (error) throw error;
        console.log(`New student record added to database: ${name}, ${age}, ${gender}`);
        res.send('Student record added successfully.');
    });
});

app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const{ name, age, gender} = req.body;

    const query = `UPDATE students SET name = ?, age = ?, gender = ? WHERE name = ? OR id = ?`;
    const values = [name, age, gender, id, id];

    connection.query(query, values, (error, result) => {
        if (error) throw error;
        console.log(`Student record updated in databse: ${name}, ${age}, ${gender}`);
        res.send('Student record updated successfully');
    });
});

app.get('/students', (req, res) => {
    const query = `SELECT * FROM students`;

    connection.query(query, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;

    const query = `SELECT * FROM students WHERE name = ? OR id = ?`;
    const values = [id, id];

    connection.query(query, values, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.listen(8080, () => {
    console.log('Server started on port 8080.')
});

/*fetch('http://localhost:8080/students', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Ayush Sharma',
        age: 21,
        gender:'Male'
    })
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error))*/

/*fetch('http://localhost:8080/students/Ayush Sharma', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Gagan Sharma',
    age: 22,
    gender: 'Male'
  })
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error))*/

/*fetch('http://localhost:8080/students')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))*/

/*fetch('http://localhost:8080/students/Ayush Sharma')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))*/