import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Header from '../../components/BookmarkedScreen/Header';
import HomeList from '../../components/BookmarkedScreen/HomeList';

const Container = styled.View``;

const BookmarkedScreenPresenter = ({...props}) => {
  return (
    <Container>
      <Header navigation={props.navigation} />
      <HomeList HomeData={props.bookmark} />
    </Container>
  );
};
const mapStateToProps = state => ({bookmark: state.reducer});
export default connect(mapStateToProps)(BookmarkedScreenPresenter);
