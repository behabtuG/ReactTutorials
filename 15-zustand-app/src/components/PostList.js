import React from "react";
import usePostStore from "../stores/postStore";

function PostList() {
  const { posts, fetchPosts } = usePostStore();

  return (
    <div>
      <button onClick={fetchPosts}>Load Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
