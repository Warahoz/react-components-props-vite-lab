import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

/**
 * Home Component
 * Actively handles the primary landing structure of the blog platform.
 * * Key Logic:
 * 1. Imports the raw data object (`blogData`) directly from the data module.
 * 2. Unpacks and pipes root properties down into specialized presentation blocks using React props.
 * 3. Encapsulates layout blocks within a single parent semantic container to comply with JSX reconciliation rules.
 */
function Home() {
  return (
    <div className="home-container">
      {/* Passing the blog site name down into the header sub-component */}
      <Header name={blogData.name} />
      
      {/* Passing configuration metrics for the sidebar text and avatar asset */}
      <About image={blogData.image} about={blogData.about} />
      
      {/* Forwarding the complete data array for dynamic mapping operations */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default Home;