import postMessage from "../models/postMessage.js";

const Posts = () => {};

Posts.getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

Posts.createPost = async (req, res) => {
  const post = req.body;

  const newPost = new postMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export default Posts;
