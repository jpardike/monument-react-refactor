import { useEffect } from "react";
import './blog.css';

import BlogHeader from '../../components/BlogHeader';
import BlogArticle from '../../components/BlogArticle';
import Sidebar from '../../components/Sidebar';
import Comment from '../../components/Comment';

function Blog() {
  return (
    <div>
      <ScrollToTopOnMount />
      <BlogHeader />
      <div class="wrap grid-wrapper">
        <BlogArticle />
        <Sidebar />
      </div>
      <Comment />
    </div>
  );
}



function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default Blog;