import fm from 'front-matter';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom';

import './Post.css';
import { docs } from './Feed';

function Post() {
  const [post, setPost] = useState({});

  const { postId } = useParams();

  useEffect(async () => {
    const doc = docs[`./../../assets/posts/${postId}.md`];
    const parsedDoc = fm(doc);

    setPost({
      content: parsedDoc.body,
      id: doc,
      publishDate: parsedDoc.attributes["publish_date"],
      title: parsedDoc.attributes["title"],
      updateDate: parsedDoc.attributes["update_date"],
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
        <Link to={"/writing/feed"}>All Posts</Link>
      </div>
      {post && getPostComponent()}
      <div className="footer spacer" />
      <div className="footer" />
    </div>
  );
}

export default Post;
