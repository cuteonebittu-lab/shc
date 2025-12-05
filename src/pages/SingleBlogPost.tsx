import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContent } from '../contexts/ContentContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  fullContent?: string; // Added for full blog post content
}

// Re-defining default blog posts here for standalone component (consider centralizing later if needed)
const defaultBlogPosts: { [key: string]: BlogPost } = {
  'blog-1': {
    id: 'blog-1',
    title: 'Boost Your Immunity the Ayurvedic Way',
    excerpt: 'Discover simple Ayurvedic herbs and daily habits that can help you strengthen your immunity naturally and maintain vitality.',
    image: '/images/blog/herbs.jpg',
    category: 'Ayurveda',
    date: 'Oct 26, 2023',
    author: 'Dr. Sunitha Yadav',
    fullContent: 'Ayurveda, the ancient Indian system of medicine, offers a holistic approach to boosting immunity. Incorporating certain herbs like Ashwagandha, Tulsi, and Amla into your daily routine can significantly enhance your body\'s defense mechanisms. Additionally, practicing daily habits such as oil pulling, tongue scraping, and regular yoga can cleanse and strengthen your system, promoting overall vitality and resilience against illnesses.'
  },
  'blog-2': {
    id: 'blog-2',
    title: 'Managing Diabetes Holistically',
    excerpt: 'Understand how integrating modern medicine with Ayurvedic diet principles can help manage diabetes more effectively.',
    image: '/images/blog/diet.jpg',
    category: 'Modern Medicine',
    date: 'Oct 20, 2023',
    author: 'Dr. Dhirendra Yadav',
    fullContent: 'Managing diabetes effectively often requires a multi-faceted approach. Integrating modern medicine with Ayurvedic dietary principles can lead to better blood sugar control and overall well-being. Ayurvedic recommendations focus on personalized diet plans that consider individual doshas, emphasizing whole foods, specific herbs like bitter gourd and fenugreek, and mindful eating practices. This integrated approach helps in reducing medication dependency and improving quality of life for diabetic patients.'
  },
  'blog-3': {
    id: 'blog-3',
    title: 'Stress Relief Through Ayurveda',
    excerpt: 'Learn how herbal therapies, breathing techniques, and lifestyle changes from Ayurveda can balance your mind and emotions.',
    image: '/images/blog/stress.jpg',
    category: 'Ayurveda',
    date: 'Oct 15, 2023',
    author: 'Dr. Sunitha Yadav',
    fullContent: 'Stress is a pervasive issue in modern life, and Ayurveda offers profound wisdom for managing it effectively. Herbal therapies such as Brahmi and Jatamansi are known for their adaptogenic properties, helping the body cope with stress. Breathing techniques (pranayama) like Anulom Vilom and Bhramari calm the nervous system. Adopting a balanced lifestyle with regular meditation, adequate sleep, and a nurturing diet can bring about significant emotional and mental equilibrium.'
  },
  'blog-4': {
    id: 'blog-4',
    title: 'Monsoon Health Tips',
    excerpt: "Stay safe this monsoon with expert preventive measures from both modern medicine and Ayurveda's seasonal regimen (Ritu Charya).",
    image: '/images/blog/chronic-conditions.jpg',
    category: 'Seasonal Health',
    date: 'Oct 10, 2023',
    author: 'Dr. Dhirendra Yadav',
    fullContent: 'The monsoon season brings with it unique health challenges. To stay safe, a combination of modern preventive measures and Ayurvedic seasonal regimen (Ritu Charya) is highly effective. Modern advice includes maintaining hygiene, consuming boiled water, and avoiding street food. Ayurveda recommends a diet that balances Vata and Pitta doshas, using light, warm, and easily digestible foods, along with specific herbs to enhance digestion and immunity during this damp season.'
  },
  'blog-5': {
    id: 'blog-5',
    title: 'Daily Diet According to Ayurveda',
    excerpt: 'Balance your Doshas through mindful eating — discover how meal timing and food combinations affect overall health.',
    image: '/images/blog/remedies.jpg',
    category: 'Nutrition',
    date: 'Oct 05, 2023',
    author: 'Dr. Sunitha Yadav',
    fullContent: 'Ayurveda emphasizes the profound connection between diet and overall health. Eating according to your dominant Dosha (Vata, Pitta, or Kapha) and practicing mindful eating can significantly improve digestion, metabolism, and prevent disease. Key principles include consuming freshly prepared meals, eating at regular intervals, avoiding incompatible food combinations, and tuning into your body\'s hunger signals. This personalized approach ensures optimal nutrient absorption and maintains bodily balance.'
  }
};


const SingleBlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getContent, getJsonContent } = useContent();
  const [blogPost, setBlogPost] = useState<BlogPost | undefined>(undefined);

  // Fetch blog posts from context, fallback to default if not available
  const blogPostsData = getJsonContent<{ [key: string]: BlogPost }>('blog', 'posts', 'list', defaultBlogPosts);

  useEffect(() => {
    if (id && blogPostsData[id]) {
      setBlogPost(blogPostsData[id]);
    } else {
      // Handle case where blog post is not found, maybe redirect to error page or blog list
      // For now, setting a placeholder or undefined
      setBlogPost(undefined); 
    }
  }, [id, blogPostsData]);

  if (!blogPost) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-700">The blog post you are looking for does not exist or has been removed.</p>
        <Link to="/blog" className="btn mt-6 inline-block">Back to Blog</Link>
      </div>
    );
  }

  // Define default values for editable fields
  const defaultTitle = blogPost.title;
  const defaultImage = blogPost.image;
  const defaultCategory = blogPost.category;
  const defaultDate = blogPost.date;
  const defaultAuthor = blogPost.author;
  const defaultFullContent = blogPost.fullContent || blogPost.excerpt; // Use fullContent if available, else excerpt

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{getContent(`blog-post-${id}`, 'title', 'value', defaultTitle)} | Saanvi Healthcare Centre</title>
        <meta
          name="description"
          content={getContent(`blog-post-${id}`, 'excerpt', 'value', blogPost.excerpt)}
        />
      </Helmet>

      <section className="pt-24 pb-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-6">
          <EditableText
            page={`blog-post-${id}`}
            section="main"
            field="title"
            defaultValue={defaultTitle}
            tag="h1"
            className="text-4xl font-bold text-green-800 mb-6 text-center"
          />
          <div className="flex justify-center mb-8">
            <EditableImage
              page={`blog-post-${id}`}
              section="main"
              field="image"
              defaultSrc={defaultImage}
              alt={defaultTitle}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-sm text-gray-500 mb-6 text-center">
            <EditableText
              page={`blog-post-${id}`}
              section="main"
              field="category"
              defaultValue={defaultCategory}
              tag="span"
              className="px-3 py-1 text-sm font-medium bg-emerald-500 text-white rounded-full mr-2"
            />
            <EditableText
              page={`blog-post-${id}`}
              section="main"
              field="date"
              defaultValue={defaultDate}
              tag="span"
              className="inline"
            />
            <span className="mx-2">•</span>
            <EditableText
              page={`blog-post-${id}`}
              section="main"
              field="author"
              defaultValue={defaultAuthor}
              tag="span"
              className="inline"
            />
          </div>
          <EditableText
            page={`blog-post-${id}`}
            section="main"
            field="fullContent"
            defaultValue={defaultFullContent}
            tag="div"
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            multiline={true}
          />
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPost;
