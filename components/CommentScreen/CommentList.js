import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native';
import ListComponent from './ListComponent';

const Container = styled.View`
  padding: 8px 0px;
`;
const Footer = styled.View`
  padding: 80px;
`;

const CommentList = ({...props}) => {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.comments}
        renderItem={({item, index}) => (
          <ListComponent data={item} navigation={props.navigation} />
        )}
        keyExtractor={(item, index) => 'key' + index}
        ListFooterComponent=<Footer />
      />
    </Container>
  );
};

export default CommentList;
