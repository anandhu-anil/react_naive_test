import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';
import Header from '../../components/HomeScreen/Header';
import HomeList from '../../components/HomeScreen/HomeList';
import {bookmarked} from '../../redux/Action';
import {getFeedList, getCommentList} from '../../middileware/Api';
const Container = styled.View`
  background-color: white;
`;

const HomeScreenPresenter = ({...props}) => {
  const [feed, updateFeed] = React.useState(null);
  const [commentList, updateCommentList] = React.useState(null);
  React.useEffect(() => {
    //when the store is set to onine or offline..storeavailablity also need to update
    let mounted = true;
    if (mounted) {
      NewsFeed();
    }
    return () => (mounted = false);
  }, []);

  const NewsFeed = () => {
    getFeedList()
      .then(result => {
        updateFeed(result);
      })
      .catch(error => {});
    comment();
  };
  const comment = () => {
    getCommentList()
      .then(result => {
        updateCommentList(result);
      })
      .catch(error => {});
  };

  const bookmarkedData = data => {
    props.bookmark(data);
  };

  return (
    <Container>
      <Header />
      {feed !== null ? (
        <HomeList
          navigation={props.navigation}
          HomeData={feed}
          commentList={commentList}
          bookmarkedData={bookmarkedData}
        />
      ) : null}
    </Container>
  );
};
const mapStateToProps = state => ({state1: state.reducer});
const mapDispatchToProps = dispatch => ({
  bookmark: data => dispatch(bookmarked(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenPresenter);
