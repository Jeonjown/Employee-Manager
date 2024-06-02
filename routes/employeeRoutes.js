const express = require('express');
const router = express.Router();
const employeeControllers = require('../controllers/employeeControllers');

router.get('/', employeeControllers.employee_index);
router.get('/create', employeeControllers.render_create_employee);
router.post('/create', employeeControllers.create_employee);
// edit
// delete 

module.exports = router;
