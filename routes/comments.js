const store = require('../data/store');

module.exports = {
    getComments(req, res) {
        res.status(200).send(store.posts[req.params.postId].comments)
    }, 
    addComment(req, res) {
        let newComment = req.body
        let comments = store.posts[req.params.postId].comments
        let commentId = comments.length
        comments.push(newcomment)
        res.status(201).send({commentId: commentId})
    },
    updateComment(req, res) {
        req.store.posts[req.params.postId].comments[req.params.commentId] =
        Object.assign(req.store.posts[req.params.postId].comments[req.params.commentId], req.body)
        re.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
        req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }  
  }