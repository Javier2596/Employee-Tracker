const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
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
        return addDepartment();
      } else if(response.options === 'add a role') {
        return addRole();
      } else if(response.options === "add an employee") {
        return addEmployee();
      }
      
    })};
    
    function next() {
      return inquirer.prompt(tracker[1]).then((response) => {
        if(response.options === 'go back') {
          return results();
        } else {quit()};
      });
    }

    function addDepartment (body) {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'department',
            message: 'Enter a new department name '
          }
        ])
        .then(val => {
          if(val.department) {
            const sql = `INSERT INTO department(name) VALUES ${val.department}`;
            db.query(sql, (err, result) => {
              if (err) {
                console.log(err)
              }
              console.table(result);
            });
          } return results();
        });
    }
    
    function addRole () {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'role',
            message: 'Enter a new role name'
          }
        ])
        .then(val => {
          if(val.role) {
            db.query('INSERT INTO role' + val.role);
          } return results();
        });
    }

    function addEmployee () {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'employee',
            message: 'Enter a new employee'
          }
        ])
        .then(val => {
          if(val.employee) {
            db.query('INSERT INTO employee' + val.employee);
          } return results();
        });
    }

    function quit() {
      console.log('Goodbye');
      process.exit(0);
    }


    results();
  