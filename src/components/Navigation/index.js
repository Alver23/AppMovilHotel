// Dependencies
import {StackNavigator} from 'react-navigation';

// Relative Path
import Logo from './Logo';
import Configuration from './Configuration';

const AppNavigation = StackNavigator(Configuration, {
  stateName: 'MainAppNav',
  // Default config for all screens
  initialRouteName: 'Home',
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'red',
    },
  }),
});

export default AppNavigation;
