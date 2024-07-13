import React, { useState, useEffect } from 'react';
import FeedItem from './FeedItem';
import UploadForm from './UploadForm';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  const handleAddPost = async (post) => {
    try {
      const response = await axios.post('http://localhost:5000/api/posts', post);
      setPosts([response.data, ...posts]);
    } catch (error) {
      console.error('Error adding post', error);
    }
  };

  return (
    <div className="feed">
      
      {posts.map((post) => (
        <FeedItem
          key={post.id}
          title={post.title}
          image={post.image_url}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default Feed;
