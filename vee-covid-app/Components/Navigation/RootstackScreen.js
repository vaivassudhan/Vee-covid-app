import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen/SplashScreen';
import Slide from '../Slide/Slide';
import firstQuepage from '../../Screens/firstQuepage';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Slide" component={Slide}/>
        <RootStack.Screen name="firstQuepage" component={firstQuepage}/>
    </RootStack.Navigator>
);

export default RootStackScreen;