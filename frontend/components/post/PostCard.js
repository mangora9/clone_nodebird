import React, { useCallback, useState } from 'react';
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import Link from 'next/link';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import Comments from './Comments';
import PostImages from './PostImages';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user?.id);
  const [liked, setLiked] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened(((prevState) => !prevState));
  }, []);

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Card
          cover={post.Images[0] && <PostImages images={post.Images} />}
          actions={[
            <RetweetOutlined key="retweet" />,
            liked
              ? <HeartOutlined key="heart" onClick={onToggleLike} />
              : <HeartTwoTone key="heartTwoTone" twoToneColor="#eb2f96" onClick={onToggleLike} />,
            <MessageOutlined key="comment" onClick={onToggleComment} />,
            <Popover
              key="ellipsis"
              content={(
                <Button.Group>
                  {id && post.User.id === id
                    ? (
                      <>
                        <Button>수정</Button>
                        <Button type="danger">삭제</Button>
                      </>
                    ) : <Button>신고</Button>}
                </Button.Group>
              )}
            >
              <EllipsisOutlined />
            </Popover>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={<PostCardContent postData={post.content} />}
          />
        </Card>
        {commentFormOpened && (
          <>
            <CommentForm post={post} />
            <List
              header={`${post.Comments.length}의 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comments}
              renderItem={(item) => (
                <li>
                  <Comment
                    author={item.User.nickname}
                    avatar={(
                      <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                        <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                      </Link>
                    )}
                    content={item.content}
                  />
                </li>
              )}
            />
          </>
        )}
      </div>
    </>
  );
};

PostCard.propTypes = {
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
export default PostCard;
