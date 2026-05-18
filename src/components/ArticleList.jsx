import React from "react";
import Article from "./Article";

/**
 * ArticleList Component
 * Iterates over the blog posts array and passes data down to Article components.
 * Connected to: App (Parent), Article (Child)
 */
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;