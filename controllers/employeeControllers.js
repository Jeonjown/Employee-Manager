
const employee_index = (req, res) => {
    res.render("index");
};

const create_employee = (req, res) => {
    res.render("./employees/add-employee");
};

module.exports = {
    employee_index, create_employee
};