import React from 'react';
import { Button, Card, Popover } from 'antd';
import { EllipsisOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons';

const PostCard = () => (
  <>
    <div style={{ marginBottom: 20 }}>
      <Card
        actions={[
          <RetweetOutlined key="retweet" />,
          <MessageOutlined key="comment" />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                <Button>수정</Button>
                <Button type="danger">삭제</Button>
                <Button>신고</Button>
              </Button.Group>
              )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      />
    </div>
  </>
);

export default PostCard;
