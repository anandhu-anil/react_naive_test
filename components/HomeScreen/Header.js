import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {height} from '../../constants/Layout';
// import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const Container = styled.View`
  height: ${height * 0.08}px;
  background-color: white;
  elevation: 10;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-color: #000;
  shadow-offset: 5px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
`;
const Division = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 30px;
  font-family: ${Fonts.instaFont};
`;

const Header = props => {
  return (
    <Container>
      <Division>
        <Icon name={'instagram'} size={35} color={'black'} />
        <Label style={{paddingLeft: 5}}>Instagram</Label>
      </Division>
      <Icon name={'telegram'} size={28} color={'black'} />
    </Container>
  );
};

export default Header;
