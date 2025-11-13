import React from 'react';
d  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  onDelete?: (id: string) => void; // Added onDelete prop
}

const BlogCard = ({ id, title, excerpt, image, category, date, author, onDelete }: BlogPostProps) => {
  const { isEditing } = useContent();

  return (
    <article className="blog-card bg-white rounded-2xl overflow-hidden shadow-lg relative">
      {isEditing && onDelete && (
        <button
          onClick={() => onDelete(id)}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 text-xs z-10"
          aria-label="Delete blog post"
        >
          ✕
        </button>
      )}
      <Link to={`/blog/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <EditableImage
            page="blog"
            section={id}
            field="image"
            defaultSrc={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <EditableText
              page="blog"
              section={id}
              field="category"
              defaultValue={category}
              tag="span"
              className="px-3 py-1 text-sm font-medium bg-emerald-500 text-white rounded-full"
            />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <EditableText
              page="blog"
              section={id}
              field="date"
              defaultValue={date}
              tag="span"
              className="inline"
            />
            <span className="mx-2">•</span>
            <EditableText
              page="blog"
              section={id}
              field="author"
              defaultValue={author}
              tag="span"
              className="inline"
            />
          </div>
          <EditableText
            page="blog"
            section={id}
            field="title"
            defaultValue={title}
            tag="h3"
            className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors"
          />
          <EditableText
            page="blog"
            section={id}
            field="excerpt"
            defaultValue={excerpt}
            tag="p"
            className="text-gray-600 mb-4 line-clamp-2"
            multiline={true}
          />
          <div className="flex items-center text-emerald-600 font-medium">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
