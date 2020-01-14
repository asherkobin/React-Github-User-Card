import React from "react";
import Follower from "./Follower";
import Styled from "styled-components";

const Followers = ({followersInfo}) => {
  return (
    <FollowersContainer>
      { followersInfo.map(followerInfo => <Follower key={followerInfo.id} followerInfo={followerInfo} /> ) }
    </FollowersContainer>
  )
};

const FollowersContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Followers;