import React from "react";
import Followers from "./Followers";
import Styled from "styled-components";

const User = ({userInfo, followersInfo}) => {
  return (
    <div>
      <UserInfoContainer>
        <UserImage src={userInfo.avatar_url} />
        <UserInfo>
          <UserName>{userInfo.name}</UserName>
          <UserProfile href={userInfo.html_url} target="_blank">{userInfo.html_url}</UserProfile>
        </UserInfo>
      </UserInfoContainer>
      <FollowersHeader>Followers</FollowersHeader>
      <Followers followersInfo={followersInfo} />
    </div>
  );
};

const UserInfoContainer = Styled.div`
  display: flex;
`;

const UserImage = Styled.img`
  width: 200px;
  height: 200px;
`;

const UserInfo = Styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
`;

const UserName = Styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const UserProfile = Styled.a`
  font-size: 30px;
`;

const FollowersHeader = Styled.div`
  text-align: center;
`;

export default User;