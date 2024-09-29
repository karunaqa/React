import React from 'react';
import { Link } from 'react-router-dom';
import { PostCardProps } from '../types/PostCardProps'; 

export const PostCard: React.FC<PostCardProps> = ({ _id, title, content, created_at }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-date">
          {new Date(created_at).toLocaleDateString()}
        </p>
        <p className="card-excerpt">{content.substring(0, 100)}...</p>
        <Link
          to={`/posts/${_id}`}
          className="card-link"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};