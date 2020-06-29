import React from 'react';
import styled from 'styled-components';
const Container = styled.View`
  flex-direction: row;
  padding: 5px 8px;
`;
const LikeLabel = styled.Text`
  font-size: 15px;
`;
const Image = styled.Image`
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

const LikeComponent = props => {
  return (
    <Container>
      <Image source={{uri: props.data['high thumbnail']}} />
      <Image source={{uri: props.data['low thumbnail']}} />
      <Image source={{uri: props.data['medium thumbnail']}} />
      <LikeLabel style={{paddingLeft: 10}}>
        Liked by neeharika_boda and 62 others
      </LikeLabel>
    </Container>
  );
};

export default LikeComponent;
