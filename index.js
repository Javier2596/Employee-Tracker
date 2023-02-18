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


  const tracker = [
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
      },
      {
        type: 'list',
        message: 'What would you like to do now?',
        name: 'options',
        choices: [
          'go back',
          'end'
        ]
      },
    ];

    function results() {
     return inquirer.prompt(tracker).then((response) => {
      if(response.options === 'view all departments') {
        db.query('SELECT * FROM department', function (err, results)
        {console.table (results), next()});
      } else if(response.options === 'view all roles') {
      db.query('SELECT * FROM role', function (err, results)
        {console.table (results), next()});
      } else if(response.options === 'view all employees') {
      db.query('SELECT * FROM employee', function (err, results)
        {console.table (results), next()});
      } else if(response.options === 'add a department') {
        return addSomething();
      } else if(response.options === 'add a role') {
        return addSomething();
      }
      
    })};
    
    function next() {
      return inquirer.prompt(tracker[1]).then((response) => {
        if(response.options === 'go back') {
          return results();
        } else {quit()};
      });
    }

    function addSomething () {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'department',
            message: 'Enter a new department name'
          }
        ])
        .then(val => {
          if(val.department) {
            db.query('INSERT INTO department' + val.department), console.log('added department')
          }
        });
    }
  

    function quit() {
      console.log('Goodbye');
      process.exit(0);
    }


    results();
  