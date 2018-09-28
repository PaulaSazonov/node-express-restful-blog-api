const express = require('express');
const logger = require('morgan');
const parser = require('body-parser');
const errorhandler = require('errorhandler');
const routes = require('./routes/index');
const store = require('./data/store');

const app = express();

//apply middleware
app.use(parser.json());
app.use(logger('dev'));
app.use(errorhandler());
//own middleware: decorate aka create a property to request object, to access the data store
app.use((req, res, next) => {
    req.store = store;
    next();
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('posts/:postId', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000);