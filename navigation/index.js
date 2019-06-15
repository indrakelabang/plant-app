import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
// import Login from '../screens/Login';
// import Forgot from '../screens/Forgot';
// import Signup from '../screens/Signup';
// import Explore from '../screen/Explore';
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator({
	Welcome,
	// Login,
	// Signup,
	// Explore,
	// Forgot,
	// Browse,
	// Product,
	// Settings,
}, {
		defaultNavigationOptions: {
			headerStyle: {},
			headerBackImage: <Image />,
			headerBackTitle: null,
			headerLeftContainerStyle: {},
			headerRightContainerStyle: {},
		}
	});

export default createAppContainer(screens);