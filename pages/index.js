import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'web',
    },
    content: '첫 번째 게시글',
    Images: [{
      src: '',
    }, {
      src: '',
    }, {
      src: '',
    }]
  }],
};

const Home = () => {
  return (
    <AppLayout>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return (
          <PostCard key={c.id} post={c} />
        );
      })}
    </AppLayout>
  );
};

export default Home;
