import React from "react";
import { View, Text, StatusBar,StyleSheet, TouchableOpacity, FlatList, Dimensions, ImageBackground, Image } from "react-native";

const HomeQ = ({ navigation }) => {


    const Day = [
        { id: "1", title: "Day 1", diplyaText :" 1" },
        { id: "2", title: "Day 2", diplyaText :" 2"},
        { id: "3", title: "Day 3", diplyaText :" 3"},
        { id: "4", title: "Day 4", diplyaText :" 4"},
        { id: "5", title: "Day 5", diplyaText :" 5"},
        { id: "6", title: "Day 6", diplyaText :" 6"},
        { id: "7", title: "Day 7", diplyaText :" 7"},
        { id: "8", title: "Day 8", diplyaText :" 8"},
        { id: "9", title: "Day 9", diplyaText :" 9"},
        { id: "10", title: "Day 10", diplyaText :"10"},
        { id: "11", title: "Day 11", diplyaText :"11"},
        { id: "12", title: "Day 12",diplyaText :"12" },
        { id: "13", title: "Day 13", diplyaText :"13"},
        { id: "14", title: "Day 14",diplyaText :"14" }, 
        { id: "15", title: "", }, 
        // { id: "16", title: "", },
    ]

    return (
      
<View style={styles.home}>
<StatusBar backgroundColor='#4446AD' />

<Text style={[styles.title]}>Self Quarantine 14 days  {'\n'}Activities</Text>
   
 
 {/* <View style={{height:55, borderRadius:0,alignContent:'center',
  backgroundColor:'#052747', margin:0, alignItems:"center", justifyContent:'center'}}>

<TouchableOpacity  style={{ position:'absolute', left:0}} onPress={() => { navigation.goBack() }}>
              <Image source={require("../Images/backarrow.png")}
               style={{ marginLeft: 22, width: 18, height: 18,

               }} resizeMode='contain' />
            </TouchableOpacity>
 
 <Text style={{alignSelf:'center',color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Home Quarantine</Text>
 </View> */}

 <View style={styles.innerbox}>  

 
                  
             <FlatList
            
                data={Day}
                horizontal={false}
                numColumns={3}
                
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {

                    if (item.title != "") {
                        return (<View style={{flex:1}}>

                            <TouchableOpacity  
                                activeOpacity={0.5}

                                onPress={() => navigation.navigate('DynamicConente', { key: item.id })}>
                               
                               <View style={{ marginTop:30,justifyContent:'center',
                                alignContent:'center', alignItems:'center'}}>
                                <Image source={require("../Images/homegray.png")}
                                    style={{height:80, width:70,}} resizeMode='contain' >
                                </Image>

                                <Text textBreakStrategy='simple' 
                                
                                style={{ position:'absolute', marginTop:25,
                                justifyContent:'center',
                                 justifyContent:'center', alignSelf:"center",
                                 color:'#000', width:38, paddingLeft:5,
                                 fontSize:26, fontWeight:'bold'}}>{item.diplyaText}</Text>
                                </View>
                            </TouchableOpacity>

                          

                        </View>
                        )
                    } else {
                        return (
                        
                            <View style={{flex:1}}>

                            {/* <TouchableOpacity  
                                activeOpacity={0.5}

                                onPress={() => navigation.navigate('DynamicConente', { key: item.id })}>
                               
                               <View style={{ marginTop:30,
                                alignContent:'center', alignItems:'center'}}>
                                <Image source={require("../Images/home.png")}
                                    style={{height:80, width:80,}} resizeMode='contain' >

                                 
                                </Image>



                                <Text style={{ position:'absolute', marginTop:25,
                                 justifyContent:'center', alignSelf:"center",
                                 color:'#fff', fontSize:28, fontWeight:'bold'}}>{item.id}</Text>
                                </View>
                            </TouchableOpacity> */}

                          

                        </View>
                             
                             
                             )
                    }
                }
                }
            />  

</View>
            </View>
     
    );
}

const styles = StyleSheet.create({
    title: {    
        color: '#fff', 
       marginLeft:30,
       marginTop:20,
       marginBottom:5,
       fontSize: 30,
       fontWeight: 'bold'
       
   },
    home:{
        width:"100%",
        height:"100%",
        backgroundColor:'#4446AD',
   },
    innerbox:{
        width:"96%",
        flex:1,
        margin:10,
        borderRadius:30,
        marginHorizontal:"2%",
        marginTop:"2%",
        backgroundColor:"white"
   },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        flex: 0.3,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width / 5,
        height: Dimensions.get("window").height / 11,
        elevation: 8,
        margin: 8,

    },
    lightText: {
        flex: 1,
        color: "snow",
        fontSize: 18,
        backgroundColor: "#00000060",
        alignSelf: "center",
        width: Dimensions.get("window").width / 5,
        height: Dimensions.get("window").height / 11,
        justifyContent:'center'
    },
    image: {
        alignContent:'center',
        width: Dimensions.get("window").width / 5,
        height: Dimensions.get("window").height / 11,
        color: "white",
    },
    listView: {
        borderRadius: 10
    }
})
export default HomeQ;