const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express ();

console.log(`
    ╔═════════════════════════════════════════════════════╗
    ║                                                     ║
    ║     _____                 _                         ║
    ║    | ____|_ __ ___  _ __ | | ___  _   _  ___  ___   ║
    ║    |  _| | '_ \` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\  ║
    ║    | |___| | | | | | |_) | | (_) | |_| |  __/  __/  ║
    ║    |_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|  ║
    ║                    |_|            |___/             ║
    ║                                                     ║
    ║     __  __                                          ║
    ║    |  \\/  | __ _ _ __   __ _  __ _  ___ _ __        ║
    ║    | |\\/| |/ _\` | '_ \\ / _\` |/ _\` |\/ _ \\ '__|       ║
    ║    | |  | | (_| | | | | (_| | (_| |  __/ |          ║
    ║    |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|          ║
    ║                              |___/                  ║
    ║                                                     ║
    ╚═════════════════════════════════════════════════════╝
    `);

firstPrompt();
    function firstPrompt() {
        inquirer.prompt(prompt.firstPrompt).then(function ({ task }) {
            switch (task) {
                case "View Employees":
                    viewEmployee();
                    break;
                case "View Employees by Manager":
                    viewEmployeeByManager();
                    break;
                case "View Employees by Department":
                    viewEmployeeByDepartment();
                    break;
                case "View Departments":
                    viewDepartments();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "View Department Budget":
                    viewDepartmentBudget();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;
                case "Remove Employee":
                    deleteEmployee();
                    break;
                case "Remove Department":
                    deleteDepartment();
                    break;
                case "Remove Role":
                    deleteRole();
                    break;
                case "Exit":
                    console.log(
                        `\n Thank you for logging your information.`,
                    );
                    connection.end();
                    break;
            }
        });
    }