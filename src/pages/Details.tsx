import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostCardProps } from '../types/PostCardProps';
import { fetchPostDetails } from '../api/axios';
import styles from '../styles/Details.module.css';

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPostDetails = async () => {

      if (!id) {
        setError('Post ID is missing');
        setLoading(false);
        return;
      }
      try {
        const fetchedPost = await fetchPostDetails(id);
        setPost(fetchedPost);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch post details');
        setLoading(false);
      }
    };

    loadPostDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className={styles.container}>
    <h1 className={styles.cardTitle}>{post.title}</h1>
    <p className={styles.cardDate}>
      Created: {new Date(post.created_at).toLocaleDateString()}
      {post.updated_at !== post.created_at && ` (Updated: ${new Date(post.updated_at).toLocaleDateString()})`}
    </p>
    <div className={`${styles.prose} ${styles.cardContent}`}>{post.content}</div>
  </div>
);
};