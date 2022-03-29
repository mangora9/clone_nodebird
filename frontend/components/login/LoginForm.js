import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { loginAction } from '../../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('test@test.co.kr');
  const [password, onChangePassword] = useInput('1234!@#!@#!@#!@#');

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ email, password }));
  }, [email, password]);

  return (
    <>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit">로그인</Button>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
