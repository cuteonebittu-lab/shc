import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../contexts/ContentContext';

interface EditableTextProps {
  page: string;
  section: string;
  field: string;
  defaultValue: string;
  className?: string;
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  multiline?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({
  page,
  section,
  field,
  defaultValue,
  className = '',
  tag = 'span',
  multiline = false
}) => {
  const { isEditing, getContent, updateContent } = useContent();
  const [isEditingLocal, setIsEditingLocal] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const id = `${page}-${section}-${field}`;
  const content = getContent(page, section, field, defaultValue);

  useEffect(() => {
    setValue(content);
  }, [content]);

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isEditing) {
      setIsEditingLocal(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, 0);
        }
  };

  const handleBlur = () => {
    setIsEditingLocal(false);
    if (value !== content) {
      updateContent(id, value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !multiline) {
      e.preventDefault();
      handleBlur();
    } else if (e.key === 'Escape') {
      setValue(content);
      setIsEditingLocal(false);
    }
  };

  const Tag = tag as keyof JSX.IntrinsicElements;

  if (isEditing && isEditingLocal) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`${className} border-2 border-blue-500 rounded p-1 w-full min-h-[100px]`}
          rows={4}
        />
      );
    } else {
      return (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`${className} border-2 border-blue-500 rounded p-1 w-full`}
        />
      );
    }
  }

  return (
    <Tag
      className={`${className} ${isEditing ? 'border border-dashed border-gray-300 hover:border-blue-500 cursor-text' : ''}`}
      onDoubleClick={handleDoubleClick}
      title={isEditing ? 'Double-click to edit' : ''}
    >
      {content}
    </Tag>
  );
};

export default React.memo(EditableText);
