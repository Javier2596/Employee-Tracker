const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What would you like to do?',
      name: 'options',
      choices: ['View All Employees', 'Add Employee', 'Update Empoyee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    },
    
  ]);