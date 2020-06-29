import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  padding: 5px 10px;
`;
const Label = styled.Text`
  font-size: 18px;
`;

const ListComponent = props => {
  return (
    <Container>
      <Label>{props.data.username}</Label>
      <Label style={{paddingLeft: 5}}>:</Label>
      <Label style={{paddingLeft: 5}}>{props.data.comments}</Label>
    </Container>
  );
};

export default ListComponent;
