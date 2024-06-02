const express = require('express');
const router = express.Router();
const employeeControllers = require('../controllers/employeeControllers');

router.get('/', employeeControllers.employee_index);
router.get('/create', employeeControllers.render_create_employee);
router.post('/create', employeeControllers.create_employee);
router.get('/:id', employeeControllers.render_details_employee);
router.delete('/:id', employeeControllers.delete_employee);
router.get('/edit/:id', employeeControllers.render_edit_employee);
router.post('/edit/:id', employeeControllers.edit_employee);




module.exports = router;
