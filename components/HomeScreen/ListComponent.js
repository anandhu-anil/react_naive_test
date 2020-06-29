import React from 'react';
import styled from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LikeComponent from './LikeComponent';
import TitleComponent from './TitleComponent';
import ImageFeed from '../../assets/images/home/feedImage.jpg';

const Container = styled.View``;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ProfileLabel = styled.Text`
  font-size: 17px;
`;
const ProfileImage = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 17.4px;
`;
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
const ViewComments = styled.TouchableOpacity`
  padding: 3px 8px;
`;
const ViewCommentsLabel = styled.Text`
  color: grey;
  padding: 0px 5px;
  font-size: 15px;
  letter-spacing: 0.5px;
`;
const IconDivision = styled.TouchableOpacity``;
const BoomarkDivision = styled.TouchableOpacity``;

const ListComponent = ({data, bookmarkedData, commentList, ...props}) => {
  const clickHandler = comments => {
    props.navigation.navigate('CommentScreen', {
      comments,
    });
  };
  const click = () => {
    props.navigation.navigate('BookmarkedScreen');
  };
  return (
    <Container>
      <Header>
        <Row>
          <ProfileImage source={{uri: data['high thumbnail']}} />
          <ProfileLabel style={{paddingLeft: 8}}>varun.aditya</ProfileLabel>
        </Row>
        <EntypoIcon name={'dots-three-vertical'} size={28} color={'black'} />
      </Header>
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
        <BoomarkDivision
          onPress={() => {
            bookmarkedData(data), click();
          }}>
          <FontAwesome
            name={'bookmark-o'}
            size={28}
            color={'black'}
            style={{paddingLeft: 8}}
          />
        </BoomarkDivision>
      </Row2>
      <LikeComponent data={data} />
      <TitleComponent data={data} />
      <ViewComments onPress={() => clickHandler(commentList)}>
        <ViewCommentsLabel>View all Comments</ViewCommentsLabel>
      </ViewComments>
    </Container>
  );
};

export default ListComponent;
