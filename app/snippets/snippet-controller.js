var Snippet = require('./snippet-model.js');

module.exports = {
    getSnippets: function (req, res) {
        Snippet
            .find()
            .select('_id name description')
            .exec(function(err, snippets) {
                if (err) {
                    console.log('Error while getting snippets');
                    res.status(500);
                    res.end('Error while getting snippets');
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200);
                    res.end(JSON.stringify(snippets));
                }
            });
    },

    getSnippet: function (req, res) {
        Snippet
            .findById(req.params.id)
            .select('name description code')
            .exec(function(err, snippet) {
                if (err) {
                    console.log('Error while getting snippet id: ' + req.params.id);
                    res.status(500);
                    res.end('Error while getting snippet id: ' + req.params.id);
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200);
                    res.end(JSON.stringify(snippet));
                }
            });
    },

    createSnippet: function (req, res) {
        var newSnippet = new Snippet(req.body);

        newSnippet.save(function(err, snippet) {
            if (err) {
                console.log("Error while saving new snippet");
                res.status(500);
                res.end('Error while creating snippet');
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.status(201);
                res.end(JSON.stringify(snippet));
            }
        });
    }
}
