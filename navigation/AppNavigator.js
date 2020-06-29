import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CommentScreen from '../screens/CommentScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import BottomTabNavigation from './BottomTabNavigation';

const ScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
    CommentScreen: {
      screen: CommentScreen,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
    BookmarkedScreen: {
      screen: BookmarkedScreen,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
    MainTab: {
      screen: BottomTabNavigation,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
  },
  {
    initialRouteName: 'MainTab',
    headerMode: 'screen',
  },
);
export default createAppContainer(ScreenStack);
