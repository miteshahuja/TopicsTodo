import React, { useState } from 'react';
import Article from './Article';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const List = () => {
  const [state, setState] = useState({ articles: null, loading: true, selected: -1 });

  React.useEffect(() => {
    setTimeout(() => {
          // TODO: Use async/await.
          fetch(API_URL)
            .then(res => res.json())
            .then(articles => setState(state => ({ ...state, articles, loading: false })))
        }, 2000);
  }, [])

  const { articles, loading, selected } = state;

  if (loading === true) {
    return <p>Loading...</p>;
  } else if (articles === null) {
    return null;
  }
  // TODO: Add a case for handling an empty articles list.
  return (
    <main>
      <h1>Articles list:</h1>
      {/* TODO: Limit to the first 10 and order the articles alphabetically. */}
      {articles.map(article => (
        <Article
          key={article.id}
          {...article}
          isSelected={article.id === selected}
        />
      ))}
    </main>
  );
}

export default List;
