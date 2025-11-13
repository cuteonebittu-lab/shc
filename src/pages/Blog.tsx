import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useContent } from '../contexts/ContentContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';
import BlogCard from '../components/BlogCard'; // Assuming BlogCard will be used for rendering

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

const defaultBlogPosts: { [key: string]: BlogPost } = {
  'blog-1': {
    id: 'blog-1',
    title: 'Boost Your Immunity the Ayurvedic Way',
    excerpt: 'Discover simple Ayurvedic herbs and daily habits that can help you strengthen your immunity naturally and maintain vitality.',
    image: '/assets/images/blog/blog1.jpg',
    category: 'Ayurveda',
    date: 'Oct 26, 2023',
    author: 'Dr. Sunitha Yadav'
  },
  'blog-2': {
    id: 'blog-2',
    title: 'Managing Diabetes Holistically',
    excerpt: 'Understand how integrating modern medicine with Ayurvedic diet principles can help manage diabetes more effectively.',
    image: '/assets/images/blog/blog2.jpg',
    category: 'Modern Medicine',
    date: 'Oct 20, 2023',
    author: 'Dr. Dhirendra Yadav'
  },
  'blog-3': {
    id: 'blog-3',
    title: 'Stress Relief Through Ayurveda',
    excerpt: 'Learn how herbal therapies, breathing techniques, and lifestyle changes from Ayurveda can balance your mind and emotions.',
    image: '/images/blog/stress.jpg',
    category: 'Ayurveda',
    date: 'Oct 15, 2023',
    author: 'Dr. Sunitha Yadav'
  },
  'blog-4': {
    id: 'blog-4',
    title: 'Monsoon Health Tips',
    excerpt: "Stay safe this monsoon with expert preventive measures from both modern medicine and Ayurveda's seasonal regimen (Ritu Charya).",
    image: '/images/blog/remedies.jpg',
    category: 'Seasonal Health',
    date: 'Oct 10, 2023',
    author: 'Dr. Dhirendra Yadav'
  },
  'blog-5': {
    id: 'blog-5',
    title: 'Daily Diet According to Ayurveda',
    excerpt: 'Balance your Doshas through mindful eating — discover how meal timing and food combinations affect overall health.',
    image: '/images/blog/diet.jpg',
    category: 'Nutrition',
    date: 'Oct 05, 2023',
    author: 'Dr. Sunitha Yadav'
  }
};

const Blog = () => {
  const { isEditing, getJsonContent, updateContent, addBlogPost, deleteBlogPost } = useContent();
  const [searchTerm, setSearchTerm] = useState('');

  const blogPostsData = getJsonContent<{ [key: string]: BlogPost }>('blog', 'posts', 'list', defaultBlogPosts);

  useEffect(() => {
    // Initialize default blog posts if not already in context
    if (Object.keys(blogPostsData).length === 0) {
      updateContent('blog-posts-list', JSON.stringify(defaultBlogPosts));
    }
  }, [blogPostsData, updateContent]);

  const filteredPosts = Object.values(blogPostsData).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBlogPost = () => {
    const newId = `blog-${Date.now()}`;
    const newPost: BlogPost = {
      id: newId,
      title: 'New Blog Post Title',
      excerpt: 'This is a short excerpt for the new blog post.',
      image: '/images/placeholder.jpg', // Default placeholder image
      category: 'General',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      author: 'Admin'
    };
    addBlogPost(newPost);
  };

  const handleDeleteBlogPost = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      deleteBlogPost(id);
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Health Blog | Saanvi Healthcare Centre</title>
        <meta
          name="description"
          content="Read expert blogs and health tips from Saanvi Healthcare Centre — combining modern medicine and Ayurveda for holistic wellbeing."
        />
        <meta
          name="keywords"
          content="Ayurveda Blog, Health Tips, Holistic Care, General Medicine Articles, Saanvi Healthcare Centre"
        />
      </Helmet>

      <section className="pt-24 pb-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <EditableText
            page="blog"
            section="hero"
            field="title"
            defaultValue="Health & Wellness Blog"
            tag="h2"
            className="text-4xl font-bold text-green-800 mb-8"
          />
          <EditableText
            page="blog"
            section="hero"
            field="description"
            defaultValue="Stay informed with the latest health insights, Ayurveda lifestyle tips, and medical advice curated by our doctors."
            tag="p"
            className="text-gray-700 mb-10 max-w-2xl mx-auto"
          />

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {isEditing && (
            <button
              onClick={handleAddBlogPost}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 mb-8"
            >
              Add New Blog Post
            </button>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                category={post.category}
                date={post.date}
                author={post.author}
                onDelete={isEditing ? handleDeleteBlogPost : undefined}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-gray-600 mt-8">No articles found matching your search.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
