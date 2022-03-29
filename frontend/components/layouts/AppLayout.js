import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import LoginForm from '../login/LoginForm';
import UserProfile from '../profile/UserProfile';

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        {isLoggedIn
          ? (
            <Menu.Item key="profile">
              <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
          )
          : (
            <Menu.Item key="signup">
              <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
          )}
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn
            ? <UserProfile />
            : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://mangora9.github.io/im2in9" target="_blank" rel="noreferrer noopener">Made by 2In9</a>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
