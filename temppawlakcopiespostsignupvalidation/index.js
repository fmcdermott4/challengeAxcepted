import React from "react";
import { useHistory } from "react-router";

const PostList = ({ posts }) => {
  let history = useHistory();
  // const loadUser = () => {
  //   history.push("/user/" + `${post.username}`);
  // };
  if (!posts.length) {
    return <h3>No Challenges Yet</h3>;
  } else {
    // let history = useHistory();
    const loadUser = (post) => {
      return "/user/" + `${post.username}`;
    };
    return (
      <div>
        <h3> Hello </h3>
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {post.title} <br />
                <span style={{ fontSize: "1rem" }}>{post.body} </span>
              </h4>
              <div className="card-body bg-light p-2">
                <p>{post.challenge}</p>
              </div>
              <div className="card-body bg-light p-2">
                <a href={loadUser(post)}>{post.username}</a>
              </div>
            </div>
          ))}
      </div>
    );
  }
};

// const Footer = () => {
//   return <h1>Footer Component</h1>;
// };

export default PostList;