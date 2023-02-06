const inquirer = require('inquirer');
//const fs = require('fs');
//const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

//const PORT = process.env.PORT || 3001;
//const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


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
      type: 'list',
      message: 'What would you like to do?',
      name: 'options',
      choices: [ 
          'view all departments',
          'view all roles',
          'view all employees',
          'add a department', 
          'add a role',
          'add an employee',
          'update an employee role',
          'Quit'
      ]
    }
  ])
   .then((response) => {
    console.log(response)
  });


  db.query('SELECT * FROM department', function (err, results)
   { console.table (results) });

  // if(response.options === 'view all departments') {
  //   db.query('SELECT * FROM department', function (err, results)
  //   {  console.table (results)
  //  });
  // } else if(response.options === 'view all roles') {
  //  db.query('SELECT * FROM role', function (err, results)
  //   {console.table (results)});
  // } else if(response.options === 'view all employees') {
  //  db.query('SELECT * FROM employee', function (err, results)
  //   {console.table (results)});
  // }

// a query database for displaying in command-line
// db.query('SELECT * FROM department', function (err, results) {
//     console.log(results);
//   });

