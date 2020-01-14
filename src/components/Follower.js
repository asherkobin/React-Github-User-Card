import React from "react";
import Styled from "styled-components";

const Follower = ({followerInfo}) => {
    return (
      <FollowerCard>
        <FollowerImage src={followerInfo.avatar_url} />
        <FollowerName><a href={followerInfo.html_url} target="_blank">{followerInfo.name}</a></FollowerName>
      </FollowerCard>
    );
};

const FollowerCard = Styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const FollowerImage = Styled.img`
  width: 200px;
  height: 200px;
`;

const FollowerName = Styled.div`
  text-align: center;
`;

export default Follower;