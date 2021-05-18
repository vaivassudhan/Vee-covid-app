import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert,
    View, Text, FlatList, ScrollView,SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import API_Base from '../Constant/API_Base';
import { callGetMethod } from '../Helpers/Utility';
import {AuthService} from '../../Src/services';
import { users } from '../config';

const Description = (props, { navigation },) => {



    var pageName = props.route.params.CategoryID;
    var CategoryID  = pageName.id;
    var SelectedName = pageName.label;
    var symptoms_id = props.route.params.symptomsid;
  

    // var pageName = {id: 3, label: 'Ayurveda'};;
    // var CategoryID  = pageName.id;
    // var SelectedName = pageName.label;
    // var symptoms_id =8;



   // alert(JSON.stringify(pageName));
    //const [selectedRemedyType, setselectedRemedyType] = useState(navigation.state.params.RemedyType);
    // const [selected, setselected] = useState(navigation.state.params.selected);

    const [isLoading, setisLoading] = useState(false);
    const [IsNoRecord, setIsNoRecord] = useState(false);
    // const [Precasion, setIsPrecasion] = useState([{
    //     id: "1",
    //     category_name: "Allopathy",
    //     category_id: "1",
    //     symptoms_name: "Fevesdar",
    //     symptoms_id: "1",
    //     prescription_details: "paracetamol 500mg Paracetamol paracetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol paracetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolracetamolparacetamol 500mg Paracetamol500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamolparacetamol 500mg Paracetamol",
    //     file: "Paracetamol <br>The name of your medicine is Paracetamol 500mg Tablets (called paracetamol throughout this leaflet).<br> This medicine contains paracetamol. <br>It belongs to a group of medicines called analgesics (painkillers) and is used to treat pain (including headache, toothache, back and period pain) <br>and cold or flu symptoms"
    // },
    // {
    //     id: "2",
    //     category_name: "Allopathy",
    //     category_id: "1",
    //     symptoms_name: "Cold",
    //     symptoms_id: "2",
    //     prescription_details: "Crocin Cold 100mg",
    //     file: "Crocin Cold <br>Crocin Cold 100mg"
    // },
    // {
    //     id: "3",
    //     category_name: "Allopathy",
    //     category_id: "1",
    //     symptoms_name: "Loss of smell",
    //     symptoms_id: "3",
    //     prescription_details: "aspirin",
    //     file: "aspirin<br>aspirin"
    // }]);
    const [Precasion, setIsPrecasion] = useState([]);
    
    useEffect(() => {
        AuthService.init();

       GetCategoryApi();
    }, []);




  const  login = currentUser => {

    try
    {
        const _onSuccessLogin = () => {
            //  const {navigation} = this.props;
             const opponentsIds = [users[1].id,users[4].id,users[2].id];
             //   .filter(opponent => opponent.id !== currentUser.id)
             //   .map(opponent => opponent.id);
        
             //   props.navigation.navigate("DoctorList")
    //alert("succees");
    
               props.navigation.push('VideoScreen', {opponentsIds : opponentsIds});
            };
    
    
        
            const _onFailLogin = (error = {}) => {
              alert(`Error.\n\n${JSON.stringify(error)}`);
            };
    
        
          
        
            AuthService.login(currentUser)
              .then(_onSuccessLogin)
              .catch(_onFailLogin)
              .then(() => {});

    }catch(error)
    {
        Alert.alert(JSON.stringify(error));
    }

      
      };




   const MakeCall=async()=>
   {
try{

    Alert.alert(
        "Video Call",
        "Are you sure want to make call?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () =>
          
          {console.log("OK Pressed")
        
        alert("Make a call");
        }
        }
        ]
      );

}catch(err)
{
    alert(""+JSON.stringify(err));

}

    
  

    };


    GetCategoryApi = async () => {
        try {
            setisLoading(true);
            var url = API_Base.GETPRESCRIPTIONLIST + "category_id=" + CategoryID + "&symptoms_id=" + symptoms_id;

         //   var url = API_Base.GETPRESCRIPTIONLIST + "category_id=1&symptoms_id=1,2,3";
            //console.log("Response------" + url);
            let responseJson = await callGetMethod(url);

            //console.log("Response------" + url + "=====" + JSON.stringify(responseJson));
            setisLoading(false);
            if (responseJson != null && responseJson != '') {
                if (responseJson.code == 200) {
                    if (responseJson.responseText.length > 0) {
                        setIsNoRecord(false)
                        setIsPrecasion(responseJson.responseText);

                    } else {
                        setIsNoRecord(true);

                    }
                } else {
                    setIsNoRecord(true);
                    alert(responseJson.message);
                }
            } else {
                setIsNoRecord(true);
                alert(responseJson.message);
            }
        } catch (Exception) {
            console.log(Exception);
            setIsNoRecord(true);
        }
    };

    const renderItem = (item, index) => {
        return (
 
            <View style={{ flex: 1,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,  
                elevation: 5,  
             backgroundColor: "white", 
             borderRadius: 5, margin: 5, 
          padding:10
           
            }}>
                
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ fontSize: 14, fontWeight: "normal", color: "gray", justifyContent: "center" }}>
                    Symptoms :
                </Text>

                    <Text style={{ alignItems: "flex-start", 
                    fontWeight:'bold',
                    fontSize: 15, color: "#4446AD", marginLeft: 4, justifyContent: "center" }}>
                        {item.symptoms_name}
                    </Text>

                </View>
                <View style={{ flexDirection: "column", }}>
                    <Text style={{ fontSize: 14, fontWeight: "normal", color: "gray", justifyContent: "center" }}>
                        Prescription details :
                </Text>

                    <Text style={{ fontSize: 15, color: "#4446AD",  justifyContent: "center" }}>
                        {item.prescription_details}
                    </Text>

                </View>
            </View>


        )
    }



    return (
        <View style={localstyles.container}>
               <Text style={localstyles.title}>Prescription</Text>

            
<View style={{ flex: 1, backgroundColor: "#ededed", borderRadius: 10, margin: 10 }}>
                 
               
                     
                        <View style={{ flexDirection: "row",  alignItems:'center', 
                        alignContent:'center', alignSelf:'center' }}>
                                     
                                        <Text style={{ alignItems: "flex-start", 
                                        fontSize: 20, fontWeight: "bold",
                                         color: "#4446AD", 
                                         alignSelf:'center',
                                         alignContent:'center',
                                         justifyContent: "center",
                                          margin:20, }}>
                                          {SelectedName}
                                        </Text>  
                   
                                   
                    
                                   </View>  
                     
                
                {
                    !IsNoRecord ?

<View style={{flex:1, marginBottom:60,}}>
 
   

                  <FlatList
                            data={Precasion}
                            style={{ margin: 10 }}
                            renderItem={({ item, index }) => renderItem(item, index)}
                            keyExtractor={(item, index) => item.id}
                        />
                      
</View>



                      
                        :
                        <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
                            <Text style={{ fontSize: 20, color: "gray", fontWeight: "bold" }}>
                                No Records
                              </Text>
                        </View>
                }
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: "flex-start", alignSelf: "center", alignContent: "center", alignContent: "center" }}>
                            <ActivityIndicator color="#4446AD" size="large" />
                        </View>
                        : null
                }
            </View>



 
            <TouchableOpacity style={[localstyles.btnHomeQuarantine,{margin:10,
 justifyContent:'center', position:'absolute', bottom:10, alignSelf:'center'}]} 
    onPress={() =>  {login(users[5])}}>
          <Text style={localstyles.buttontext}>Consult with Doctor</Text>
        </TouchableOpacity>  



 {/* <View 
 
 style={localstyles.innerbox}>
<ScrollView horizontal={true}>
  <View style={{ height: 60, flexDirection: 'row', flex: 1, alignItems:'center' ,margin:1 }}>
   
  <TouchableOpacity onPress={()=>  MakeCall()}>
   <View style={{ height: 70,padding:5,
     flexDirection: 'row', flex: 1, alignItems:'center',margin:2,backgroundColor: 'gray' , borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 50, width: 50, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column'}}>
   <Text style={{color:'#fff', fontWeight:'bold',fontSize:14}}> Vijaykumar S</Text>
    <Text style={{color:'#fff', fontWeight:'normal',fontSize:12}}>General Surgeon</Text>
   </View>
   </View>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=>  MakeCall()}>
   <View style={{ height: 70,padding:5 ,flexDirection: 'row', flex: 1, alignItems:'center', margin:2 ,backgroundColor: 'gray' , borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 50, width: 50, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column'}}>
   <Text style={{color:'#fff', fontWeight:'bold',fontSize:14}}> Sudhagar N</Text>
    <Text style={{color:'#fff', fontWeight:'normal',fontSize:12}}>Gynecologist</Text>
   </View>
   </View>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=>  MakeCall()}> 
   <View style={{ height: 70,padding:5 ,flexDirection: 'row', flex: 1, alignItems:'center', margin:2 ,backgroundColor: 'gray' , borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 50, width: 50, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column'}}>
   <Text style={{color:'#fff', fontWeight:'bold',fontSize:14}}> Praveen Kumar</Text>
    <Text style={{color:'#fff', fontWeight:'normal',fontSize:12}}>Cardiologist</Text>
   </View>
   </View>
   </TouchableOpacity>


   <TouchableOpacity onPress={()=>  MakeCall()}>
   <View style={{ height: 70,padding:5 ,flexDirection: 'row', flex: 1, alignItems:'center', margin:2 ,backgroundColor: 'gray' , borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 50, width: 50, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column'}}>
   <Text style={{color:'#fff', fontWeight:'bold',fontSize:14}}> Gayathri</Text>
    <Text style={{color:'#fff', fontWeight:'normal',fontSize:12}}>Gynecologist</Text>
   </View>

   </View>
   </TouchableOpacity>


     </View>
</ScrollView>
</View> */}

 </View>

    );
};



const localstyles = StyleSheet.create({
    btnHomeQuarantine:{
        backgroundColor:"#F4BC1C",
        borderRadius:30,
         width:250,
         height:40,
        padding:5,
        
        alignItems:"center",
        fontSize: 18,
      },
      buttontext:{
        color:"#292929",
        fontWeight:'bold',
        fontSize:17,
        fontFamily:"Montserrat-BoldItalic",
      },
   
      home: {
        width: "100%",
        height: "100%",
        backgroundColor: '#4446AD',
      },
      innerbox: {
        flex: 1,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "white"
      },
    
    container: {
        flex: 1,
        backgroundColor: "#4446AD",
    },
    heading: {
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 25,
        fontFamily: "Montserrat-BoldItalic",
        color: "#1A1A1A",
        textAlign: "center",
    },
    symptom: {
        marginTop: 20,
        textDecorationLine: "underline",
        marginHorizontal: 20,
        fontSize: 20,
        fontFamily: "Montserrat-Regular",
        color: "#DF5E08",
        textAlign: "left",
    },
    symptomdetails: {
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 17,
        fontFamily: "Montserrat-Regular",
        color: "#1A1A1A",
        textAlign: "left",
    },
    title: {
        //color: '#05375a',
        color: '#fff', 
        marginLeft: 10,
        marginTop: 30,
        marginBottom:10,
        fontSize: 25,
        fontWeight: 'bold'
    },
});

export default Description;