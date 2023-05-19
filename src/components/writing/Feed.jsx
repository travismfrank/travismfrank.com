import fm from 'front-matter';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Feed.css';

export const docs = import.meta.glob('../../assets/posts/*.md', {
  as: 'raw',
});

function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleAccumulator = [];

    for (const doc in docs) {
      // Parse front matter
      const parsedDoc = fm(docs[doc]);

      articleAccumulator.push({
        content: parsedDoc.body,
        id: doc.split('/')[5].slice(0, -3),
        publishDate: parsedDoc.attributes["publish_date"],
        title: parsedDoc.attributes["title"],
        updateDate: parsedDoc.attributes["update_date"],
      });
    }

    // Sort posts in backwards-chronological order
    articleAccumulator.sort((firstEl, secondEl) => {
      const firstDate = Date.parse(firstEl.publishDate);
      const secondDate = Date.parse(secondEl.publishDate);

      if (firstDate > secondDate) {
        return -1;
      } else if (firstDate < secondDate) {
        return 1;
      }
      return 0;
    });

    setArticles(articleAccumulator);
  }, []);

  return (
    <div className="feed-wrapper">
      <div className="header">
        <h1 className="feed-title">Writing</h1>
      </div>
      <div className="header spacer" />
      <div className="feed-content-flex">
        <div className="feed-content-wrapper">
          <p className="feed-preamble">
            I write words, which you can find here. I also write <Link to={"/music/musicals"}>musicals</Link> and <Link to={"/music/records/sketching-the-sky"}>jazz</Link>.
          </p>
          {articles && articles.map(post => {
            return(
              <div className="post-preview" key={post.id}>
                <Link to={"/writing/" + post.id}><h3>{post.title}</h3></Link>
                <p>{post.publishDate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
