import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const index = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={25} color={tintColor} />
        )
      }
    },
    ComingSoon: {
      screen: ComingSoonScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-clock" size={25} color={tintColor} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={25} color={tintColor} />
        )
      }
    },
    Downloads: {
      screen: DownloadsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cloud-download" size={25} color={tintColor} />
        )
      }
    }
  }, 
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#aaa'
    }

  });
  export default index;