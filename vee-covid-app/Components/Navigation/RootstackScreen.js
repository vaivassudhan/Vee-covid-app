import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen/SplashScreen';
import Slide from '../Slide/Slide';

import firstQuepage from '../../Screens/firstQuepage';
import Symptoms from '../../Screens/Symptoms';
import Remedeselect from '../../Screens/RemedyType';
import Remedy from '../../Screens/Remedy';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Slide" component={Slide}/>
        <RootStack.Screen name="firstQuepage" component={firstQuepage}/>
        <RootStack.Screen name="Symptoms" component={Symptoms}/>
        <RootStack.Screen name="Remedeselect" component={Remedeselect}/>
        <RootStack.Screen name="Remedy" component={Remedy}/>
    </RootStack.Navigator>
);

export default RootStackScreen;