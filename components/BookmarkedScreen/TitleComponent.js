import React from 'react';
import styled from 'styled-components';
const Container = styled.View`
  padding: 5px 10px;
`;
const TitleLabel = styled.Text``;

const TitleComponent = props => {
  return (
    <Container>
      <TitleLabel>{props.data.title}</TitleLabel>
    </Container>
  );
};

export default TitleComponent;
