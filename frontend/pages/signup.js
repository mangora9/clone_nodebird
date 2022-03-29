import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';
import Router from 'next/router';
import AppLayout from '../components/layouts/AppLayout';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  // 비밀번호 체크
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password, passwordCheck]);
  // 약관동의
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, [term]);

  const onSubmit = useCallback(() => {
    console.log('aa');
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
    console.log(`${email}, ${password}, ${nickname}`);
    Router.push('/');
  }, [password, passwordCheck, term]);
  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
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
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
            {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">회원가입</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
