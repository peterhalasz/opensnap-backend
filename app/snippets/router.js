var router = require('express').Router();
var controller = require('./snippet-controller.js')

router.get('/', controller.getSnippets);
router.get('/:id', controller.getSnippet);
router.post('/', controller.createSnippet);
router.put('/:id', controller.updateSnippet);

module.exports = router;
