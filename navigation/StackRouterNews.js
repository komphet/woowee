import React from 'react';
import { StackNavigator } from 'react-navigation';

import NewsScreen from '../screens/new-screen/NewsScreen';
import NewsViewScreen from '../screens/new-screen/NewsViewScreen';

export const StackRouteNews = StackNavigator({
  NewsScreen: {
    screen: NewsScreen,
  },
  NewsViewScreen: {
    screen: NewsViewScreen
  }
});


