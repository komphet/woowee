import React from 'react';
import { StackNavigator } from 'react-navigation';

import NewsScreen from '../screens/NewsScreen';

export const StackRouteNews = StackNavigator({
  NewsScreen: {
    screen: NewsScreen,
  },
});


