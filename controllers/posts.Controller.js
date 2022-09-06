const getPosts = (req, res) => {
    res.status(200).send(`Get All Posts filtered by "${req.query.title}"`);
};

const getPost = (req, res) => {
    res.status(200)
    .send(`Post with ID ${req.params.postId} has been received successfully`);
};

const createPost = (req, res) => {
    res.status(200).send("Create Post");
};

const updatePost = (req, res) => {
    res.status(201)
    .send(`Post with ID ${req.params.postId} has been updated`)
};

const deletePost = (req, res) => {
    res.status(200)
    .send(`Post with Id ${req.params.postId} has been deleted`);
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};