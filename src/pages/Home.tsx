import React, { useState, useEffect } from 'react';
import { PostCard } from '../components/PostCard';
import { PostCardProps } from '../types/PostCardProps';
import { fetchPosts } from '../api/axios';

export const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        console.log('Fetched posts:', fetchedPosts);
        setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="card-grid">
          {posts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};