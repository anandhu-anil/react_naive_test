import React from 'react';
import styled from 'styled-components';
import Header from '../../components/CommentScreen/Header';
import CommentList from '../../components/CommentScreen/CommentList';

const Container = styled.View``;

const CommentScreenPresenter = ({...props}) => {
  return (
    <Container>
      <Header navigation={props.navigation} />
      <CommentList comments={props.navigation.state.params.comments} />
    </Container>
  );
};

export default CommentScreenPresenter;
