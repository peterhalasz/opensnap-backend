var router = require('express').Router();
var controller = require('./snippet-controller.js')

router.get('/snippets', controller.getSnippets);
router.get('/snippets/:id', controller.getSnippet);
router.post('/snippets', controller.createSnippet);

module.exports = router;
