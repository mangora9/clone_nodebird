import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import FollowList from '../components/profile/FollowList';
import NicknameEditForm from '../components/profile/NicknameEditForm';

const Profile = () => {
  const followerList = [{ nickname: '사람' }, { nickname: '바보' }, { nickname: '외계인' }];
  const followingList = [{ nickname: '사람' }, { nickname: '바보' }, { nickname: '외계인' }];
  return (
    <>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};
export default Profile;
