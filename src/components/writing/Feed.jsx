import fm from 'front-matter';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Feed.css';
// import { postKeys } from '../../assets/posts/post_keys.json';

function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const docs = import.meta.glob('./../../assets/posts/*.md', {
      assert: {
        type: 'raw'
      }
    });
    const articleAccumulator = [];

    for (const doc in docs) {
      // Parse front matter
      const parsedDoc = fm(docs[doc]);

      articleAccumulator.push({
        content: parsedDoc.body,
        id: doc,
        publishDate: parsedDoc.attributes["publish_date"],
        title: parsedDoc.attributes["title"],
        updateDate: parsedDoc.attributes["update_date"],
      });
    }

    setArticles(articleAccumulator);
  }, []);
  
  return (
    <div className="feed-wrapper">
      <h1 className="feed-title">Writing</h1>
      <p className="feed-preamble">
        I write words, which you can find here. I also write <Link to={"/music/musicals"}>musicals</Link> and <Link to={"music/records/sketching-the-sky"}>jazz</Link>.        
      </p>
      {articles && articles.map(post => {
        return(
          <div className="post-preview" key={post.id}>
            <Link to={"/writing/" + post.id}><h3>{post.title}</h3></Link>
            <p>{post.publishDate}</p>
          </div>
        );
      })}
      <div className="footer spacer" />
      <div className="footer" />
    </div>
  );
}

export default Feed;
