import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import PropTypes from 'prop-types';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
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
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;
