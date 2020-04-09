import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth2115Navigator from '../features/EmailAuth2115/navigator';
import EmailAuth2114Navigator from '../features/EmailAuth2114/navigator';
import EmailAuth2113Navigator from '../features/EmailAuth2113/navigator';
import EmailAuth2112Navigator from '../features/EmailAuth2112/navigator';
import EmailAuth2111Navigator from '../features/EmailAuth2111/navigator';
import EmailAuth2105Navigator from '../features/EmailAuth2105/navigator';
import EmailAuth2104Navigator from '../features/EmailAuth2104/navigator';
import EmailAuth2103Navigator from '../features/EmailAuth2103/navigator';
import EmailAuth2102Navigator from '../features/EmailAuth2102/navigator';
import EmailAuth2101Navigator from '../features/EmailAuth2101/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth2115: { screen: EmailAuth2115Navigator },
EmailAuth2114: { screen: EmailAuth2114Navigator },
EmailAuth2113: { screen: EmailAuth2113Navigator },
EmailAuth2112: { screen: EmailAuth2112Navigator },
EmailAuth2111: { screen: EmailAuth2111Navigator },
EmailAuth2105: { screen: EmailAuth2105Navigator },
EmailAuth2104: { screen: EmailAuth2104Navigator },
EmailAuth2103: { screen: EmailAuth2103Navigator },
EmailAuth2102: { screen: EmailAuth2102Navigator },
EmailAuth2101: { screen: EmailAuth2101Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
