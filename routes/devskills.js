var express = require('express');
var router = express.Router();
const devsklCtrl = require('../controllers/devskillsCtrl');

/* GET users listing. */


router.get('/', devsklCtrl.index);
router.get('/new', devsklCtrl.new);
router.get('/:id', devsklCtrl.show);
router.post('/', devsklCtrl.create);
router.delete('/:id', devsklCtrl.delete);

module.exports = router;
