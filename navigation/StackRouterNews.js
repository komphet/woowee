import React from 'react';
import { StackNavigator } from 'react-navigation';

import NewsScreen from '../screens/new-screen/NewsScreen';

export const StackRouteNews = StackNavigator({
  NewsScreen: {
    screen: NewsScreen,
  },
});


