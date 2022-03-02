import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Feed.css';

function Feed() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(window.location.origin + '/api/writing/feed')
      .then(res => res.json())
      .then(feedData => {
        setArticles(feedData.posts);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });
  }, [])

  return (
    <div className="feed-wrapper">
      <h1 className="feed-title">Writing</h1>
      <p className="feed-preamble">
        I write words, which you can find here. I also write <Link to={"/music/musicals"}>musicals</Link> and <Link to={"music/records/sketching-the-sky"}>jazz</Link>.        
      </p>
      {articles && articles.map(post => {
        return(
          <div className="post-preview">
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
