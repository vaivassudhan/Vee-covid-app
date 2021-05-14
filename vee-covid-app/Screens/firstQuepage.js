import React, { Component } from 'react'
import { 
    SafeAreaView,
    View, 
    ScrollView ,
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
export function firstQuepage({navigation}){
        return (
            <View style={styles.centeredView}>
            <Card style={styles.card_rej}>
               <Card.Content>
                   <Text style={[styles.text_footer]}>Are You Feeling Good ?</Text>
               </Card.Content>
               <Divider/>
                   <Card.Actions >
                     <Button color={'rgb(54,118,203)'} onPress={()=>{alert("Please Wear Mask!!!")}}>Yes</Button>
                     <Button color={'red'} onPress={()=>{navigation.navigate('Symptoms')}}>No</Button>
                   </Card.Actions>
                 </Card>
            </View>
        )
    }

export default firstQuepage

const styles = StyleSheet.create({
  card: {
      marginLeft:12,
          marginRight:12,
          width: '93%',
          marginTop:40,
          marginBottom:2,
          flexDirection:'row',
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 11.95,
          borderRadius:20,
  
          elevation: 8,
    },
  
    footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
    card_rej: {
      alignContent:'center',
      margin: 16,
      marginTop:15,
      backgroundColor:'#fff',
      borderRadius:12,
      marginBottom:15,
      width:'93%',
      elevation: 6,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
