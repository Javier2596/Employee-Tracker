INSERT INTO department(id, name)
VALUES (1, 'HR'),
       (2, 'sales'),
       (3, 'Finance'),
       (4, 'legal'),
       (5, 'Engineering')

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'HR Representative', 90000, 1),
       (2, 'HR Team Lead', 110000, 1), 
       (3, 'Sales Representative', 60000, 2),
       (4, 'Sales Team Lead', 75000, 2),
       (5, 'Accountant', 125000, 3),
       (6, 'Account Manager', 160000, 3),
       (7, 'Lawyer', 160000, 4),
       (8, 'Legal Team Lead', 250000, 4)
       (9, 'Software Engineer', 120000, 5),
       (10, 'Lead Engineer', 160000, 5); 

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (1, 'David', 'Vasquez', 'HR Representative', 'null'),
       (2, 'Sam', 'Smith', 'HR Team Lead', ) 