var router = require('express').Router();
var Snippet = require('./snippet-model.js');

function getSnippets(req, res) {
    Snippet
        .find()
        .select('_id name description')
        .exec(function(err, snippets) {
            if (err) {
                console.log('Error while getting snippets');
                res.end('Error while getting snippets');
            } else {
                res.end(JSON.stringify(snippets));
            }
        });
}

function getSnippet(req, res) {
    Snippet
        .findById(req.params.id)
        .select('name description code')
        .exec(function(err, snippet) {
            if (err) {
                console.log('Error while getting snippet id: ' + req.params.id);
                res.end('Error while getting snippet id: ' + req.params.id);
            } else {
                res.end(JSON.stringify(snippet));
            }
        });
}

function createSnippet(req, res) {
    var newSnippet = new Snippet(req.body);

    newSnippet.save(function(err, snippet) {
        if (err) {
            console.log("Error while saving new snippet");
            res.end('Error while creating snippet');
        } else {
            res.end('Snippet: ' + snippet.name + " created");
        }
    });
}

router.get('/snippets', getSnippets);
router.get('/snippets/:id', getSnippet);
router.post('/snippets', createSnippet);

module.exports = router;
