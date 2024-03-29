const mysql = require('mysql2')
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_trackerDB'
    },
    console.log('connected to employee_trackerDB')
);

const deptArrFill = () => {
    const deptArr = [];
    db.query('SELECT * FROM department', (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i <rows.length; i++) {
            deptArr.push({name:rows[i].name, value:rows[i].id});
        }
    });
    return deptArr;
};

const newDept = (obj) => {
    const sql = `INSERT INTO department (names) VALUES ('${obj.name}')`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        return;
    })
};

const getDept = () => {
    const departments = [];
    db.query(`SELECT * FROM department`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            departments.push(rows[i]);
        }
    });
    return departments;
};

const employeeArrFill = () => {
    const employeeArr = [];
    db.query(`SELECT * FROM employee ORDER BY last_name`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            employeeArr.push({name:rows[i].first_name + ' ' + rows[i].last_name, value:rows[i].id});
        }
    });
    return employeeArr;
};


const roleArrFill = () => {
    const roleArr = [];
    db.query(`SELECT * FROM roles`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            roleArr.push({name:rows[i].title, value:rows[i].id}) ;
        }
    });
    return roleArr;
};

const updateRole = (obj) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`
    const params = [obj.newRole, obj.employee]
    db.query(sql, params, (err, res) => {
        if (err) throw err;
        return;
    })
};

const getEmployees = () => {
    const employees = [];
    db.query(`SELECT e.id, e.first_name, e.last_name, roles.title AS job_title, roles.salary AS salary, department.names AS department, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN roles ON role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee m ON e.manager_id = m.id`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++) {
            employees.push(rows[i]);
        }
    });
    return employees;
};

module.exports = {getDept, newDept, deptArrFill, employeeArrFill, roleArrFill, updateRole, getEmployees}