import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View ,Button , ActivityIndicator} from 'react-native';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { 
    Provider as PaperProvider, 
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme 
  } from 'react-native-paper';
import RootStackScreen from './Components/Navigation/RootstackScreen';

import { enableScreens } from 'react-native-screens';

const App = () => {
  enableScreens();


  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#efefef',
      text: '#000000',
      text_secondary:'#F4BC1C',
      accent1:'#4446AD',
      accent2:'#F4BC1C',
      accent3:'#f6a499',
      backcard:'#ffffff'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#1B0536',
      text: '#ecc1f4',
      text_secondary:'#fe167c',
      accent1:'#3D225D',
      accent2:'#260f41',
      accent3:'#3ccbf4',
      backcard:'#3D225D'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };



  return (
    <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
           <RootStackScreen/>

    </NavigationContainer>
    </PaperProvider>
  
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
