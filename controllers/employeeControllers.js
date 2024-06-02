const Employee = require('../models/employeeModel');

const employee_index = (req, res) => {
    Employee.find()
        .then(result => {
            res.render("index", { employees: result });
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
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('error creating employee');
        });
};

const render_details_employee = (req, res) => {
    const id = req.params.id;
    Employee.findById(id)
        .then(result => { res.render('./employees/employee-details', { employee: result }); })
        .catch(err => clg(err));
};

const delete_employee = (req, res) => {
    const id = req.params.id;
    Employee.findByIdAndDelete(id)
        .then((result) => {
            if (result) {
                // If the document is found and deleted
                console.log(result);
                res.json({ redirect: '/' });
            } else {
                // If no document is found with the given ID
                res.status(404).json({ error: 'Employee not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        });
};

module.exports = {
    employee_index, render_create_employee, create_employee, render_details_employee, delete_employee
};