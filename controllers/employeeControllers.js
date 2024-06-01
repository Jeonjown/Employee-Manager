const Employee = require('../models/employeeModel');

const employee_index = (req, res) => {
    Employee.find()
        .then(result => {
            res.render("index", { employee: result });
            console.log(result);
        })
        .catch(err => console.log(err));
};

const render_create_employee = (req, res) => {
    res.render("./employees/add-employee");
};

const create_employee = (req, res) => {
    const employee = new Employee(req.body);
    employee.save()
        .then(() => {
            console.log(employee);
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('eror creating employee');
        });
};

module.exports = {
    employee_index, render_create_employee, create_employee
};