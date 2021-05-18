/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,  { useState,useEffect } from 'react';
 import type {Node} from 'react';
 import {
   Alert,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
  import day1 from '../Constant/day1';
  import day2 from '../Constant/day1';
 
 const Dashboard: () => Node = () => {
 
   const [daytitle, setdaytitle] = useState(false);
   const [title, settitle] = useState(false);
   const [subtitle, setsubtitle] = useState(false);
   const [content, setcontent] = useState(false);
 
   const isDarkMode = useColorScheme() === 'dark';
   
   
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
 
 
   useEffect(() => {
      
     var fileName = day1;
 
     setdaytitle(fileName.APP_VERSION)
     settitle('Physical Exercise')
     setsubtitle('What to do in my Day-1 Quarantine?')
     setcontent('What \n to do in my Day-1 Quarantine?')
 
   }, []);
 
  
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar  backgroundColor='#4446AD' />
       <View>
         <Text>{daytitle}</Text>
         <Text>{title}</Text>
         <Text>{subtitle}</Text>
         <Text>{content}
         </Text>
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Dashboard;
 