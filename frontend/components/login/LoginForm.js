import React from 'react';

import { Button, Form, Input } from 'antd';
import useInput from '../../hooks/useInput';

const LoginForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  return (
    <>
      <Form>
        <div>
          <label htmlFor="user-email">이메일</label>
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
        <div>
          <Button type="primary">로그인</Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
