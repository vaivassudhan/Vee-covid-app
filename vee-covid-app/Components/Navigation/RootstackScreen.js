import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen/SplashScreen';
import Slide from '../Slide/Slide';

import firstQuepage from '../../Screens/firstQuepage';
import Symptoms from '../../Screens/Symptoms';
import Remedeselect from '../../Screens/RemedyType';
import Remedy from '../../Screens/Remedy';
import DetailedPage from '../../Screens/DetailedPage';
import HospitalList from '../../Screens/HospitalList';
import SearchPage from '../../Screens/SearchPage';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Slide" component={Slide}/>
        <RootStack.Screen name="firstQuepage" component={firstQuepage}/>
        <RootStack.Screen name="Symptoms" component={Symptoms}/>
        <RootStack.Screen name="Remedeselect" component={Remedeselect}/>
        <RootStack.Screen name="Remedy" component={Remedy}/>
        <RootStack.Screen name="DetailedPage" component={DetailedPage}/>
        <RootStack.Screen name="HospitalList" component={HospitalList}/>
        <RootStack.Screen name="SearchPage" component={SearchPage}/>
    </RootStack.Navigator>
);

export default RootStackScreen;