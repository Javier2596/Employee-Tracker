const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Maeve_Benjen25',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What would you like to do?',
      name: 'options',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Quit']
    },
  ]);

// a query database for displaying in command-line
db.query('SELECT * FROM company_db', function (err, results){
    console.log(results);
});


// default response
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port`)
});
