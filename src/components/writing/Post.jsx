import fm from 'front-matter';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom';

import './Post.css';
import { docs } from './Feed';

// Import images
const postImages = import.meta.glob('./../../assets/images/posts/*');
async function resolveImages() {
  for (const image in postImages) {
    if (typeof postImages[image] === 'function') {
      const imageObj = await postImages[image]();
      postImages[image] = imageObj.default;
    }
  }
};

function Post() {
  const [post, setPost] = useState({});

  const { postId } = useParams();

  useEffect(async () => {
    // Resolve image promises
    await resolveImages();

    let doc = docs[`./../../assets/posts/${postId}.md`];

    // Replace image urls
    doc = doc.replace(/!\[[^\]]*\]\((.*\/+(.*))\)/g, (match, url, assetName) => {
      const imgUrl = postImages['./../../assets/images/posts/' + assetName];
      return match.replace(url, window.location.origin + imgUrl);
    });

    // Parse front matter
    const parsedDoc = fm(doc);

    setPost({
      content: parsedDoc.body,
      id: doc,
      publishDate: parsedDoc.attributes["publish_date"],
      title: parsedDoc.attributes["title"],
      updateDate: parsedDoc.attributes["update_date"],
    });
  }, []);

  return (
    <div className="post-wrapper">
      <div className="header">
        <Link className="post-back" to={"/writing/feed"}>All Posts</Link>
      </div>
      <div className="header spacer" />
      {post.content && <article className="post">
        <h1>{post.title}</h1>
        <p className="date">Published {post.publishDate}{
          post.publishDate !== post.updateDate ?
            ", last updated " + post.updateDate :
            ""
        }</p>
        <div className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>}
    </div>
  );
}

export default Post;
