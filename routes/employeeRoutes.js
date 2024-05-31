const express = require('express');
const router = express.Router();
const employeeControllers = require('../controllers/employeeControllers');

router.get('/', employeeControllers.employee_index);
router.get('/create', employeeControllers.create_employee);
router.put('/employees/:id/edit');
router.delete('/employees');

module.exports = router;