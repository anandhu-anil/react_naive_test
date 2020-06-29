import React from 'react';
import styled from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import LikeComponent from './LikeComponent';
import TitleComponent from './TitleComponent';
import ImageFeed from '../../assets/images/home/feedImage.jpg';

const Container = styled.View``;

const FeedImage = styled.Image`
  height: 450px;
  width: 500px;
`;
const Row2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;
const Division = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconDivision = styled.TouchableOpacity``;
const ListComponent = ({data, bookmarkedData, commentList, ...props}) => {
  return (
    <Container>
      <FeedImage source={ImageFeed} />
      <Row2>
        <Division>
          <IconDivision>
            <MaterialCommunityIcons
              name={'heart-outline'}
              size={28}
              color={'black'}
            />
          </IconDivision>
          <IconDivision>
            <Feather
              name={'message-circle'}
              size={28}
              color={'black'}
              style={{paddingLeft: 8}}
            />
          </IconDivision>
          <IconDivision>
            <MaterialCommunityIcons
              name={'telegram'}
              size={28}
              color={'black'}
              style={{paddingLeft: 8}}
            />
          </IconDivision>
        </Division>
      </Row2>
      <LikeComponent data={data} />
      <TitleComponent data={data} />
    </Container>
  );
};

export default ListComponent;
