const router = require('express').Router();
const apiRoutes = require('./api');
const { Project } = require('../models');

router.use('/api', apiRoutes);

router.use('/', async (req, res) => {
    const projects = await Project.findAll();
    res.json(projects);
})

module.exports = router;
