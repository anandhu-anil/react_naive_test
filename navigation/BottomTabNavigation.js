import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import TabBarIcon from '../components/BottomTabNavigator/TabBarIcon';
// import Colors from '../constants/Colors';

const stackNavigations = {
  header: null,
  headerTransparent: true,
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {...stackNavigations},
  },
);
HomeStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'home-variant'} />
  ),
};

const SearchStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {...stackNavigations},
  },
);

SearchStack.navigationOptions = {
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={'magnify'} />,
};
const AddStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {...stackNavigations},
  },
);
AddStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'plus-box-outline'} />
  ),
};
const LikeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {...stackNavigations},
  },
);
LikeStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'heart-outline'} />
  ),
};

const ProfileStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {...stackNavigations},
  },
);
ProfileStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'face-profile'} />
  ),
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    AddStack,
    LikeStack,
    ProfileStack,
  },
  {
    initialRouteName: 'HomeStack',
    tabBarOptions: {
      showLabel: false,
      style: {
        elevation: 24,
        // borderTopColor: Colors.boxShadowColor,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
      },
    },
  },
);

export default createAppContainer(BottomTabNavigator);
