import React, { Component } from 'react'
import CheckBoxes from '../Components/checkboxes';
import { 
    SafeAreaView, 
    ScrollView ,
    TouchableOpacity, 
    TextInput,
    Platform,
    View,
    Text,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { TagSelect } from 'react-native-tag-select';
export class Remdeselect extends React.Component{
    
    
    render(){

        const data = [
            { id: 1, label: 'Allopathy' },
            { id: 2, label: 'Homeopathy' },
            { id: 3, label: 'Ayurvedha' },
          ];

        return (
            <View style={styles.home}>
            <View style={styles.innerbox}>
            <View style={{marginTop:30,marginLeft:10}}>       
            <Icon.Button name="chevron-back-sharp" size={40} backgroundColor="#FFFFFF" color="#4446AD"></Icon.Button> 
            </View>
            <StatusBar backgroundColor='#4446AD' barStyle="light-content"/>
              
            <Text style={[styles.title]}>Select Any One?</Text>
            <TagSelect
          data={data}
          max={1}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        <View>
        {JSON.stringify(this.tag)=='Allopathy' && (
                            <View>
                            <Card style={styles.card}>
                                <Card.Content>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{width:120,height:100,marginRight:10}} source={require('../assets/allopathy.jpg')}/>
                                <Title style={[styles.title,{alignSelf:'center',marginLeft:22,}]}>Allopathy</Title>
                                </View>
                                <Divider style={{marginBottom:16}}/>
                                
                                <View style={{flex:1,flexDirection:'column'}}>
                                           
                                <View style={{flex:1,flexDirection:'column'}}>
                                <Paragraph style={{width:'100%',flex:1,flexWrap: 'wrap',color: '#34495e',fontSize:18}}>Antihistamines, Throat Lozenges and Menthol give instant relief in case of cold</Paragraph>
                                </View>
                               </View> 
                            </Card.Content>
                            </Card>
                            </View>
        )}
        {JSON.stringify(this.tag)=='Homeopathy' && (
                            <View>
                            <Card style={styles.card}>
                            <Card.Content>
                            <View style={{flexDirection:'row'}}>
                            <Image style={{width:120,height:100,marginRight:10}} source={require('../assets/homeopathy.jpg')}/>
                            <Title style={[styles.title,{alignSelf:'center',marginLeft:22,}]}>Homeopathy</Title>
                            </View>
                            <Divider style={{marginBottom:16}}/>
                            <View style={{flex:1,flexDirection:'column'}}>
                                        <View style={{flex:1}} key={i} key={i}>
                                        <Paragraph style={{flex:1,flexWrap: 'wrap',color: '#34495e',fontSize:18}}>Arsenicum Album and Natrum muriaticum are the best Homeopathic medicine for cold, sore throat and many other diseases</Paragraph>
                                        </View>
                            </View>
                            </Card.Content>
                            </Card>
                            </View>
        )}
        {JSON.stringify(this.tag)=='Ayurvedha' && (
                            <View>
                            <Card style={styles.card}>
                            <Card.Content>
                            <View style={{flexDirection:'row'}}>
                            <Image style={{width:120,height:100,marginRight:10}} source={require('../assets/ayurvedha.png')}/>
                            <Title style={[styles.title,{alignSelf:'center',marginLeft:22,}]}>Ayurvedha</Title>
                            </View>
                            <Divider style={{marginBottom:16}}/>
                            
                                <View style={{flex:1,flexDirection:'column'}}>
                                            <View style={{flex:1}}>
                                        <Paragraph style={{flex:1,flexWrap: 'wrap',color: '#34495e',fontSize:18}}>Crushed Garlic, Ginger in lemon tea and cinnamon are the widely used remedy for fever</Paragraph>
                                            </View>
                               
                            </View>
                            </Card.Content>
                            </Card>
                            </View>)}
        </View>
            </View>
            <Text>Progress Bar</Text>
            </View>
        )
    }
}

export default Remdeselect

const styles = StyleSheet.create({
     title: {    
      //color: '#05375a',
      color: '#4446AD',
      marginLeft:30,
      marginTop:20,
      fontSize: 25,
      fontWeight: 'bold'
  },
    cardbutton:{
      alignItems:'center',
      backgroundColor:'white',
      height:'50%',
      width:'35%',
      marginTop:'5%',
      margin:25,
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
      borderRadius:20,
      borderColor:'grey',
      elevation: 2,
    },
    buttontext:{
      color:'#008000',
      fontSize:18,
      marginTop:12,
      fontWeight: 'bold'
    },
    buttontext2:{
      color:'#dd3c3c',
      fontSize:18,
      marginTop:12,
      fontWeight: 'bold'
    },
    home:{
      width:"100%",
      height:"100%",
      backgroundColor:"#4446AD",
},
innerbox:{
      width:"96%",
      height:"70%",
      borderRadius:30,
      marginHorizontal:"2%",
      marginTop:"2%",
      backgroundColor:"white"
},   card: {
    alignContent:'center',
    margin: 16,
    marginTop:15,

borderRadius:12,
marginBottom:15,
width:'93%',
elevation: 6,
},
paragraph: {
margin: 2,
fontSize: 25,
fontWeight: 'bold',
textAlign: 'center',
// color: '#34495e',

},
cardText:{
fontSize:30,
padding:10
},
text_header: {
color: '#34495e',
fontWeight: 'bold',
fontSize: 20,
textAlign:'center'
},
title_nodata:{
fontWeight: 'bold',
textAlign:'center',
},
title:{
  fontSize:24,
}
  });
