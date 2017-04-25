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
        if (req.body._id) {
            Snippet.findById(newSnippet._id, function(err, snippet) {
                if (err) {
                    console.log('Error while finding snippet: ' + err);
                    res.status(500);
                    res.end('Error while finding snippet');
                } else {
                    snippet.code = req.body.code;
                    snippet.name = req.body.name;
                    snippet.description = req.body.description;
                    snippet.save(function(err) {

                        if (err) {
                            console.log('Error while updating snippet: ' + err);
                            res.status(500);
                            res.end('Error while updating snippet');
                        }

                        res.setHeader('Content-Type', 'application/json');
                        res.status(200);
                        res.end(JSON.stringify(snippet));
                    });
                }
            });
        } else {
            newSnippet.save(function(err, snippet) {
                if (err) {
                    console.log('Error while saving new snippet: ' + err);
                    res.status(500);
                    res.end('Error while creating snippet');
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(201);
                    res.end(JSON.stringify(snippet));
                }
            });
        }
    },

    updateSnippet: function (req, res) {
        Snippet.findById(req.params.id, function(err, snippet) {
            if (err) {
                console.log('Error while finding snippet: ' + err);
                res.status(500);
                res.end('Error while finding snippet');
            } else {
                snippet.code = req.body.code;
                snippet.name = req.body.code.name;
                snippet.description = req.body.code.description;
                snippet.save(function(err) {
                    if (err) {
                        console.log('Error while updating snippet: ' + err);
                        res.status(500);
                        res.end('Error while updating snippet');
                    }

                    res.setHeader('Content-Type', 'application/json');
                    res.status(200);
                    res.end(JSON.stringify(snippet));
                });
            }
         });
    }
}
