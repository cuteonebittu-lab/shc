import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Define the content structure
export interface ContentItem {
  id: string;
  value: string;
  type: 'text' | 'image' | 'number' | 'json';
  page: string;
  section: string;
  field: string;
}

interface ContentContextType {
  content: Record<string, ContentItem>;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  updateContent: (id: string, value: string) => void;
  getContent: (page: string, section: string, field: string, defaultValue: string) => string;
  getJsonContent: <T>(page: string, section: string, field: string, defaultValue: T) => T;
  addBlogPost: (newPost: { id: string; title: string; excerpt: string; image: string; category: string; date: string; author: string; }) => void;
  deleteBlogPost: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<Record<string, ContentItem>>({});
  const [isEditing, setIsEditing] = useState(false);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('website-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('website-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (id: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        id,
        value,
        type: prev[id]?.type || 'text',
        page: prev[id]?.page || '',
        section: prev[id]?.section || '',
        field: prev[id]?.field || ''
      }
    }));
  };

  const getContent = (page: string, section: string, field: string, defaultValue: string): string => {
    const id = `${page}-${section}-${field}`;
    if (content[id]) {
      return content[id].value;
    }
    
    // If content doesn't exist, create it with default value
    if (defaultValue) {
      setContent(prev => ({
        ...prev,
        [id]: {
          id,
          value: defaultValue,
          type: 'text',
          page,
          section,
          field
        }
      }));
    }
    
    return defaultValue;
  };

  const getJsonContent = <T,>(page: string, section: string, field: string, defaultValue: T): T => {
    const id = `${page}-${section}-${field}`;
    if (content[id] && content[id].type === 'json') {
      try {
        return JSON.parse(content[id].value) as T;
      } catch (e) {
        console.error(`Error parsing JSON content for ${id}:`, e);
        return defaultValue;
      }
    }

    // If content doesn't exist, create it with default value
    if (defaultValue !== undefined) {
      setContent(prev => ({
        ...prev,
        [id]: {
          id,
          value: JSON.stringify(defaultValue),
          type: 'json',
          page,
          section,
          field
        }
      }));
    }
    return defaultValue;
  };

  const addBlogPost = (newPost: { id: string; title: string; excerpt: string; image: string; category: string; date: string; author: string; }) => {
    const blogPosts = getJsonContent<{ [key: string]: any }>('blog', 'posts', 'list', {});
    blogPosts[newPost.id] = newPost;
    updateContent('blog-posts-list', JSON.stringify(blogPosts));
  };

  const deleteBlogPost = (id: string) => {
    const blogPosts = getJsonContent<{ [key: string]: any }>('blog', 'posts', 'list', {});
    delete blogPosts[id];
    updateContent('blog-posts-list', JSON.stringify(blogPosts));
  };

  return (
    <ContentContext.Provider value={{
      content,
      isEditing,
      setIsEditing,
      updateContent,
      getContent,
      getJsonContent,
      addBlogPost,
      deleteBlogPost
    }}>
      {children}
    </ContentContext.Provider>
  );
};
