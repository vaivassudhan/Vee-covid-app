import React from 'react';
import {View, Image,Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {CallService} from '../../services';

export default ({
  isActiveSelect,
  opponentsIds,
  selectedUsersIds,
  selectUser,
  unselectUser,
}) => {
  if (!isActiveSelect) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Doctor's</Text>

      <View style={styles.innerbox}>

      {opponentsIds.map(id => {
        const user = CallService.getUserById(id);
        const selected = selectedUsersIds.some(userId => id === userId);
        const type = selected
          ? 'radio-button-checked'
          : 'radio-button-unchecked';
        const onPress = selected ? unselectUser : selectUser;

        return (
          <TouchableOpacity
            key={id}
            style={styles.userLabel(user.color)}
            onPress={() => onPress(id)}>
   


   <View style={{ flex: 1,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,  
                elevation: 5,  
             backgroundColor: "white", 
             borderRadius: 5, marginTop: 15, 
            
           
            }}>
                   
   <View style={{ height: 100,padding:5,
     flexDirection: 'row', flex: 1, alignItems:'center',margin:2, 
     borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 60, width: 60, margin: 2 }} source={require('../../Images/doctor.png')} />
   <View style={{ flexDirection:'column', marginLeft:5}}>
    <Text style={{color:'#000', fontWeight:'bold',fontSize:16}}>  {user.name}</Text>
    <Text style={{color:'#000', fontWeight:'normal',fontSize:14, marginLeft:5}}>{user.phone}</Text>
    <Text style={{color:'#000', fontWeight:'normal',fontSize:12}}>  {user.email}</Text>
    <Text style={{color:'#000', fontWeight:'normal',fontSize:11, marginLeft:5}}>{user.id}</Text>
  
    </View>
   
    <MaterialIcon  style={{position:'absolute', right:10}} name={type} size={20} color="#000" />   
   </View>


   </View>
  

          
          </TouchableOpacity>
        );
      })}


</View>


    </View>
  );
};

const styles = StyleSheet.create({
  innerbox:{
    
    flex:1,
    margin:10,
    borderRadius:10,
    
    backgroundColor:"white"
},
  container: {
  
    backgroundColor:'#4446AD',
    flex: 1,
 
  
    ...StyleSheet.absoluteFill,
    
    
  },
  title: {
    fontSize: 20,
    color: '#1198d4',
    padding: 20,
    color: '#fff', 
   
    fontSize: 30,
    fontWeight: 'bold'
  },
  userLabel: backgroundColor => ({
  
    height: 100,
    margin:10,
    borderRadius: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  }),
  userName: {color: 'white', fontSize: 20},
});
