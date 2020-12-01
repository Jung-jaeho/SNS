import { Avatar, Card, Button } from 'antd';
import React,{useCallback} from 'react';

const dummy = {
  nickname: 'Web',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">hello<br />{dummy.Posts.length}</div>,
        <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
        <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
      <Button>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
