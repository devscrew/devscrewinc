import { Link } from 'react-router-dom';
import './Blog.scss';

// Simple markdown parser for blog content
const parseMarkdown = (content) => {
  // Split into paragraphs and process headers
  const paragraphs = content.split('\n\n');
  return paragraphs.map((paragraph, index) => {
    if (paragraph.startsWith('# ')) {
      return <h1 key={index} className="blog-post-title">{paragraph.substring(2)}</h1>;
    } else if (paragraph.startsWith('## ')) {
      return <h2 key={index} className="blog-post-heading">{paragraph.substring(3)}</h2>;
    } else if (paragraph.startsWith('### ')) {
      return <h3 key={index} className="blog-post-subheading">{paragraph.substring(4)}</h3>;
    } else if (paragraph.startsWith('- ')) {
      return <li key={index} className="blog-list-item">{paragraph.substring(2)}</li>;
    } else if (paragraph.trim() === '') {
      return null;
    } else {
      return <p key={index} className="blog-paragraph">{paragraph}</p>;
    }
  }).filter(Boolean);
};

const Blog = () => {
  // Sample blog posts data (in a real implementation, this would come from markdown files)
  const blogPosts = [
    {
      id: 'first-blog-post',
      title: 'Getting Started with NetSuite Implementation: A Complete Guide',
      date: '2024-01-15',
      author: 'DevsCrew Team',
      tags: ['netsuite', 'implementation', 'erp'],
      description: 'Learn the essential steps and best practices for implementing NetSuite ERP successfully in your organization.',
      excerpt: 'Implementing NetSuite ERP can be a transformative journey for your business, but it requires careful planning and execution. In this comprehensive guide, we\'ll walk you through the essential steps to ensure a successful implementation.'
    },
    {
      id: 'second-blog-post',
      title: 'SuiteCommerce Customization: Creating Unique Shopping Experiences',
      date: '2024-02-01',
      author: 'DevsCrew Team',
      tags: ['suitecommerce', 'ecommerce', 'customization'],
      description: 'Discover how SuiteCommerce customization can help you create unique, engaging shopping experiences that drive conversions.',
      excerpt: 'In today\'s competitive e-commerce landscape, having a unique and engaging online store is crucial for driving customer engagement and increasing conversions. SuiteCommerce customization allows businesses to create distinctive shopping experiences that set them apart from competitors.'
    }
  ];

  return (
    <div className="container blog-container">
      <section className="blog-header">
        <h1 className="blog-title">DevsCrew Blog</h1>
        <p className="blog-description">Insights, tips, and resources for NetSuite and SuiteCommerce implementation</p>
      </section>

      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post-card">
            <div className="blog-post-meta">
              <time dateTime={post.date} className="blog-post-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <div className="blog-post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>

            <h2 className="blog-post-heading">
              <Link to={`/blog/${post.id}`} className="blog-post-link">
                {post.title}
              </Link>
            </h2>

            <p className="blog-post-excerpt">{post.excerpt}</p>

            <div className="blog-post-footer">
              <Link to={`/blog/${post.id}`} className="read-more-link">
                Read Full Article
              </Link>
              <div className="social-share">
                <span className="share-text">Share:</span>
                <a href="#" className="share-link" aria-label="Share on Twitter">
                  <span className="share-icon">🐦</span>
                </a>
                <a href="#" className="share-link" aria-label="Share on LinkedIn">
                  <span className="share-icon">in</span>
                </a>
                <a href="#" className="share-link" aria-label="Share on Facebook">
                  <span className="share-icon">📘</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="blog-pagination">
        <nav aria-label="Blog pagination">
          <ul className="pagination-list">
            <li className="pagination-item active">
              <span>1</span>
            </li>
            <li className="pagination-item">
              <Link to="/blog/page/2">2</Link>
            </li>
            <li className="pagination-item">
              <Link to="/blog/page/3">3</Link>
            </li>
            <li className="pagination-item">
              <Link to="/blog/page/2" aria-label="Next page">
                Next →
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Blog;