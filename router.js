import React from 'react';
import { TabNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';

import Chart from './Chart';
import Chart1 from './Chart1';
import Chart2 from './Chart2';

import Chart3 from './Chart3';
import Chart4 from './Chart4';


export const Tabs = TabNavigator({
  Chart: {
    screen: Chart,
  },
  Chart1: {
    screen: Chart1,
  },Chart2:{screen:Chart2}
,Chart3:{screen:Chart3}
,Chart4:{screen:Chart4}
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ffffff',
  },
});

