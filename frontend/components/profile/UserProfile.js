import React from 'react';
import { Avatar, Button, Card } from 'antd';

const UserProfile = () => (
  <>
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          1
        </div>,
        <div key="followings">
          팔로잉
          <br />2

        </div>,
        <div key="followings">
          팔로워
          <br />
          3
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>M</Avatar>}
        title="mango"
      />
      <Button>로그아웃</Button>
    </Card>
  </>
);

export default UserProfile;
