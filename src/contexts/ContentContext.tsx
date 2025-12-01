/* eslint-disable react-refresh/only-export-components */
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
  // Editing mode removed from UI — always false. Keeping in context for
  // components that check `isEditing`, but there is no way to toggle it.
  const [isEditing] = useState(false);

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
    
    // If content doesn't exist, schedule creation with default value asynchronously
    if (defaultValue) {
      // Schedule the state update to avoid setState during render of consuming components
      setTimeout(() => {
        setContent(prev => {
          // If another render already populated it, keep existing
          if (prev[id]) return prev;
          return {
            ...prev,
            [id]: {
              id,
              value: defaultValue,
              type: 'text',
              page,
              section,
              field
            }
          };
        });
      }, 0);
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
    // If content doesn't exist, schedule creation with default JSON value asynchronously
    if (defaultValue !== undefined) {
      setTimeout(() => {
        setContent(prev => {
          if (prev[id]) return prev;
          return {
            ...prev,
            [id]: {
              id,
              value: JSON.stringify(defaultValue),
              type: 'json',
              page,
              section,
              field
            }
          };
        });
      }, 0);
    }
    return defaultValue;
  };

  const addBlogPost = (newPost: { id: string; title: string; excerpt: string; image: string; category: string; date: string; author: string; }) => {
    const blogPosts = getJsonContent<Record<string, unknown>>('blog', 'posts', 'list', {} as Record<string, unknown>);
    const updated = { ...(blogPosts as Record<string, unknown>), [newPost.id]: newPost };
    updateContent('blog-posts-list', JSON.stringify(updated));
  };

  const deleteBlogPost = (id: string) => {
    const blogPosts = getJsonContent<Record<string, unknown>>('blog', 'posts', 'list', {} as Record<string, unknown>);
    const copy = { ...(blogPosts as Record<string, unknown>) };
    delete (copy as Record<string, unknown>)[id];
    updateContent('blog-posts-list', JSON.stringify(copy));
  };

  return (
    <ContentContext.Provider value={{
      content,
      isEditing,
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
