import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <>
      <Form onFinish={onSubmitComment}>
        <Input.TextArea value={commentText} style={{ marginBottom: '10px' }} onChange={onChangeCommentText} />
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">삐약</Button>
      </Form>

    </>
  );
};

CommentForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.array,
    Comments: PropTypes.array,
    imagePaths: PropTypes.array,
    postAdded: PropTypes.bool,
  }).isRequired,
};
export default CommentForm;
