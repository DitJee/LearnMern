import React from "react";

import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state: any) => state.posts);

  const classes = useStyles();

  console.log("🚀 ~ file: Posts.tsx ~ line 12 ~ posts ~ posts", posts);

  return (
    <>
      <h1> Posts </h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
