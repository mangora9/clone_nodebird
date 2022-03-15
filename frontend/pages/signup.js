import React from 'react';
import Head from 'next/head';
import { Button, Form, Input } from 'antd';
import AppLayout from '../components/layouts/AppLayout';
import useInput from '../hooks/useInput';

const Signup = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | NodeBird</title>
        </Head>
        <Form>
          <div>
            <label htmlFor="user-email">이메일</label>
            <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <Input name="user-nickname" type="nickname" value={nickname} onChange={onChangeNickname} required />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <Input name="user-password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} required />
          </div>
          <div>
            <Button type="primary">회원가입</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
