import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom';

import './Post.css';

function Post() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);

  const { postId } = useParams();

  useEffect(() => {
    fetch(window.location.origin + '/api/writing/' + postId)
      .then(res => res.json())
      .then(postData => {
        setPost(postData);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });
  }, []);

  function getPostComponent() {
    return (
      <article className="post">
        <h1>{post.title}</h1>
        <p className="date">Published {post.publishDate}{
          post.publishDate !== post.updateDate ?
            ", last updated " + post.updateDate :
            ""
        }</p>
        <div className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    )
  }

  return (
    <div className="post-wrapper">
      <div className="post-back">
        <Link to={"/writing/feed"}>Writing</Link>
      </div>
      {post && getPostComponent()}
      <div className="footer spacer" />
      <div className="footer" />
    </div>
  );
}

export default Post;
