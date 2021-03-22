const devskl = require('../models/devskillModel');



module.exports = {
    index, show,
    new: newDevSkill,
    create,
    delete: deleteDevSkill
  };
  
  function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
     devskl.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/devskills');
  }

  function deleteDevSkill(req, res) {
    devskl.deleteOne(req.params.id);
    res.redirect('/devskills');
  }

  function index(req, res) {
    res.render('devskills/index', {
      devskills: devskl.getAll(),
      time: req.time 
    });
  }

  function show(req, res) {
    res.render('devskills/show', {
      devskills: devskl.getOne(req.params.id)
    });
  }

  function newDevSkill(req, res) {
    res.render('devskills/new');
  }