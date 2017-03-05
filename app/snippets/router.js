var router = require('express').Router();

function getSnippets(req, res) {
    res.end('Snippets');
}

function getSnippet(req, res) {
    res.end('Snippet id: ' + req.params.id);
}

function createSnippet(req, res) {
    res.end('Snippet created');
}

function error(req, res) {
    res.end('Bad request');
}

router.get('/snippets', getSnippets);
router.get('/snippets/:id', getSnippet);
router.post('/snippets', createSnippet);
router.all('/snippets/*', error);

module.exports = router;
