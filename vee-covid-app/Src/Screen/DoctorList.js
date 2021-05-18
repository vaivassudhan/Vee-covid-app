import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert,
    View, Text, FlatList, ScrollView,SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import API_Base from '../Constant/API_Base';
import { callGetMethod } from '../Helpers/Utility';
import AwesomeAlert from 'react-native-awesome-alerts';
import {CallService} from '../../Src/services';
import { users } from '../config';

import ConnectyCube from 'react-native-connectycube';
import RTCViewGrid from '../components/VideoScreen/RTCViewGrid';

const DoctorList = (props, { navigation },) => {



   // var pageName = props.route.params.CategoryID;

  //  var SelectedID  = pageName.id;
  //  var SelectedName = pageName.label;
   // alert(JSON.stringify(pageName));
    //const [selectedRemedyType, setselectedRemedyType] = useState(navigation.state.params.RemedyType);
    // const [selected, setselected] = useState(navigation.state.params.selected);


    const [localStream, setlocalStream] = useState(null);
    const [remoteStreams, setremoteStreams] = useState([]);
    const [isActiveSelect, setisActiveSelect] = useState(true);
    const [isActiveCall, setisActiveCall] = useState(false);
    const [isIncomingCall, setisIncomingCall] = useState(false)

    const [isLoading, setisLoading] = useState(false);
    const [IsNoRecord, setIsNoRecord] = useState(false);
    const [Precasion, setIsPrecasion] = useState([{
        id: "1",
        symptoms_name: "Sudhagar",
        prescription_details: "ID124545",
        experience : '3 years experience',
        consultdone : '2014 consult done',

    },
    {
        id: "2",
        symptoms_name: "Praveen kumar",
        prescription_details: "ID124546",
        experience : '8 years experience',
        consultdone : '50445 consult done',
    },
    {
        id: "3",
        symptoms_name: "Navee Kumar",
        prescription_details: "ID128548",
        experience : '3 years experience',
        consultdone : '25145 consult done',
    },
    {
        id: "3",
        symptoms_name: "Gowtham ",
        prescription_details: "ID128548",
        experience : '8 years experience',
        consultdone : '2045 consult done',
    },
    {
        id: "3",
        symptoms_name: "Gayathri Kumar",
        prescription_details: "ID124568",
        experience : '7 years experience',
        consultdone : '20445 consult done',
    },
    

]);


    //const [Precasion, setIsPrecasion] = useState([]);


    useEffect(() => {
       
        _setUpListeners();
    }, []);


   const MakeCall=async(item)=>
   {
try{

    Alert.alert(
        "Make a call",
        "Are you sure want to make call "+item.symptoms_name,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () =>
          
          {console.log("OK Pressed")
        
          //   alert("Make a call");
           
try
{

    let temp = [users[4].id];
    CallService.startCall(temp).then((localStream)=>{
        console.log("Local Stream"+JSON.stringify(localStream));

       
  
        setLocalStream(localStream);

     //props.navigation.navigate('RTCViewGrid',{streams:streams});
      
    });
}catch(error)
{
    alert(JSON.stringify(error))
}

        }
        }
        ]
      );

}catch(err)
{
    alert(""+JSON.stringify(err));

}

    
  

    };



    const showInomingCallModal = session => {
        _session = session;
        setisIncomingCall(true);
      };
    
      const hideInomingCallModal = () => {
        _session = null;
        setisIncomingCall(false);
      };
    
      const closeSelect = () => {
        setisActiveSelect(false);
      };
    
      const setOnCall = () => {
        setisActiveCall(true);
      };
    
      const initRemoteStreams = opponentsIds => {
        const emptyStreams = opponentsIds.map(userId => ({
          userId,
          stream: null,
        }));
    
        setremoteStreams(emptyStreams);
      };
    
      const updateRemoteStream = (userId, stream) => {
        setremoteStreams(({remoteStreams}) => {
          const updatedRemoteStreams = remoteStreams.map(item => {
            if (item.userId === userId) {
              return {userId, stream};
            }
    
            return {userId: item.userId, stream: item.stream};
          });
    
          return {remoteStreams: updatedRemoteStreams};
        });
      };
    
      const removeRemoteStream = userId => {
        setremoteStreams(remoteStreams.filter(item => item.userId !== userId));
      };
    
      const setLocalStream = stream => {
        setlocalStream(stream);
      };
    
      const resetState = () => {
        setlocalStream(null);
        setremoteStreams([]);
        setisActiveSelect(true);
        setisActiveCall(false);
      };
    
      const _setUpListeners = () => {
        ConnectyCube.videochat.onCallListener = _onCallListener;
        ConnectyCube.videochat.onAcceptCallListener = _onAcceptCallListener;
        ConnectyCube.videochat.onRejectCallListener = _onRejectCallListener;
        ConnectyCube.videochat.onStopCallListener = _onStopCallListener;
        ConnectyCube.videochat.onUserNotAnswerListener = _onUserNotAnswerListener;
        ConnectyCube.videochat.onRemoteStreamListener = _onRemoteStreamListener;
      };
    
      const _onPressAccept = () => {
        CallService.acceptCall(_session).then(stream => {
          const {opponentsIDs, initiatorID, currentUserID} = _session;
          const opponentsIds = [initiatorID, ...opponentsIDs].filter(
            userId => currentUserID !== userId,
          );
    
          initRemoteStreams(opponentsIds);
          setLocalStream(stream);
          closeSelect();
          hideInomingCallModal();
        });
      };
    
      const _onPressReject = () => {
        CallService.rejectCall(_session);
        hideInomingCallModal();
      };
    
      const _onCallListener = (session, extension) => {
        CallService.processOnCallListener(session)
          .then(() => showInomingCallModal(session))
          .catch(hideInomingCallModal);
      };
    
      const _onAcceptCallListener = (session, userId, extension) => {
        CallService.processOnAcceptCallListener(session, userId, extension)
          .then(setOnCall)
          .catch(hideInomingCallModal);
      };
    
      const _onRejectCallListener = (session, userId, extension) => {
        CallService.processOnRejectCallListener(session, userId, extension)
          .then(() => removeRemoteStream(userId))
          .catch(hideInomingCallModal);
      };
    
      const _onStopCallListener = (session, userId, extension) => {
        const isStoppedByInitiator = session.initiatorID === userId;
    
        CallService.processOnStopCallListener(userId, isStoppedByInitiator)
          .then(() => {
            if (isStoppedByInitiator) {
              resetState();
            } else {
              removeRemoteStream(userId);
            }
          })
          .catch(hideInomingCallModal);
      };
    
      const _onUserNotAnswerListener = (session, userId) => {
        CallService.processOnUserNotAnswerListener(userId)
          .then(() => removeRemoteStream(userId))
          .catch(hideInomingCallModal);
      };
    
      const _onRemoteStreamListener = (session, userId, stream) => {
        CallService.processOnRemoteStreamListener(userId)
          .then(() => {
            updateRemoteStream(userId, stream);
            setOnCall();
          })
          .catch(hideInomingCallModal);
      };







    // GetCategoryApi = async () => {
    //     try {
    //         setisLoading(true);
    //         var url = API_Base.GETPRESCRIPTIONLIST + "category_id=1&symptoms_id=1,2,3";
    //         //console.log("Response------" + url);
    //         let responseJson = await callGetMethod(url);
    //         //console.log("Response------" + url + "=====" + JSON.stringify(responseJson));
    //         setisLoading(false);
    //         if (responseJson != null && responseJson != '') {
    //             if (responseJson.code == 200) {
    //                 if (responseJson.responseText.length > 0) {
    //                     setIsNoRecord(false)
    //                     setIsPrecasion(responseJson.responseText);

    //                 } else {
    //                     setIsNoRecord(true);

    //                 }
    //             } else {
    //                 setIsNoRecord(true);
    //                 alert(responseJson.message);
    //             }
    //         } else {
    //             setIsNoRecord(true);
    //             alert(responseJson.message);
    //         }
    //     } catch (Exception) {
    //         console.log(Exception);
    //         setIsNoRecord(true);
    //     }
    // };

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
            
           
            }}>


                   
  <TouchableOpacity onPress={()=>  MakeCall(item)}>
   <View style={{ height: 100,padding:5,
     flexDirection: 'row', flex: 1, alignItems:'center',margin:2, 
     borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 60, width: 60, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column', marginLeft:5}}>
    <Text style={{color:'#000', fontWeight:'bold',fontSize:16}}>  {item.symptoms_name}</Text>
    <Text style={{color:'#000', fontWeight:'normal',fontSize:14, marginLeft:5}}>{item.prescription_details}</Text>
    <Text style={{color:'#000', fontWeight:'normal',fontSize:12}}>  {item.experience}</Text>
    <Text style={{color:'#000', fontWeight:'normal',fontSize:11, marginLeft:5}}>{item.consultdone}</Text>
  
   
   
   </View>
   </View>
   </TouchableOpacity>
                
                {/* <View style={{ flexDirection: "row", }}>
                    <Text style={{ fontSize: 14, fontWeight: "normal", color: "gray", justifyContent: "center" }}>
                    Patient Name :
                </Text>

                    <Text style={{ alignItems: "flex-start", 
                    fontWeight:'bold',
                    fontSize: 15, color: "#4446AD", marginLeft: 4, justifyContent: "center" }}>
                        {item.symptoms_name}
                    </Text>

                </View>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ fontSize: 14, fontWeight: "normal", color: "gray", justifyContent: "center" }}>
                       Patient ID :
                </Text>

                    <Text style={{ fontSize: 15, color: "#4446AD", marginLeft: 4, justifyContent: "center" }}>
                        {item.prescription_details}
                    </Text>

                </View> */}
            </View>


        )
    }


    const localStreamItem = localStream
    ? [{userId: 'localStream', stream: localStream}]
    : [];
  const streams = [...remoteStreams, ...localStreamItem];

    return ( 

        <View style={localstyles.container}>


         <RTCViewGrid streams={streams} />


            <Text style={localstyles.title}>Available Doctor's</Text>    
<View style={ localstyles.innerbox }>
                 
               
                
  
         {
             !IsNoRecord ?

<View style={{flex:1, marginBottom:60}}>



           <FlatList
                     data={Precasion}
                     style={{ paddingLeft: 5, paddingRight: 5, marginTop: 10 }}
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

     <AwesomeAlert
          show={isIncomingCall}
          showProgress={false}
          title={`Incoming call from doctor`}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={true}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Reject"
          confirmText="Accept"
          cancelButtonColor="red"
          confirmButtonColor="green"
          onCancelPressed={_onPressReject}
          onConfirmPressed={_onPressAccept}
          onDismiss={hideInomingCallModal}
          alertContainerStyle={{zIndex: 1}}
          titleStyle={{fontSize: 21}}
          cancelButtonTextStyle={{fontSize: 18}}
          confirmButtonTextStyle={{fontSize: 18}}
        />
 
 </View>

    );
}; 
const localstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4446AD",
    },

    innerbox: {
       margin:10,
        flex:1,
        borderRadius: 10,
        marginHorizontal: "2%",
        marginTop: "2%",
        backgroundColor: "#ededed"
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
        margin: 10,
        marginTop: 30,
        fontSize: 25,
        fontWeight: 'bold'
    },
});

export default DoctorList;









{/* 
 <View style={{ padding: 10, margin: 5, borderRadius: 10,   position:'absolute', bottom:10 ,alignSelf:'center'}}>
<ScrollView horizontal={true}>
  <View style={{ height: 60, flexDirection: 'row', flex: 1, alignItems:'center' ,margin:1 }}>
   
  <TouchableOpacity onPress={()=>  MakeCall()}>
   <View style={{ height: 70,padding:5, flexDirection: 'row', flex: 1, alignItems:'center',margin:2,backgroundColor: '#4446AD' , borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 50, width: 50, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column'}}>
   <Text style={{color:'#fff', fontWeight:'bold',fontSize:14}}> Vijaykumar S</Text>
    <Text style={{color:'#fff', fontWeight:'normal',fontSize:12}}>General Surgeon</Text>
   </View>
   </View>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=>  MakeCall()}>
   <View style={{ height: 70,padding:5 ,flexDirection: 'row', flex: 1, alignItems:'center', margin:2 ,backgroundColor: '#4446AD' , borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 50, width: 50, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column'}}>
   <Text style={{color:'#fff', fontWeight:'bold',fontSize:14}}> Sudhagar N</Text>
    <Text style={{color:'#fff', fontWeight:'normal',fontSize:12}}>Gynecologist</Text>
   </View>
   </View>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=>  MakeCall()}> 
   <View style={{ height: 70,padding:5 ,flexDirection: 'row', flex: 1, alignItems:'center', margin:2 ,backgroundColor: '#4446AD' , borderRadius:5}}>
   <Image style={{ resizeMode: 'contain', height: 50, width: 50, margin: 2 }} source={require('../Images/doctor.png')} />
   <View style={{ flexDirection:'column'}}>
   <Text style={{color:'#fff', fontWeight:'bold',fontSize:14}}> Praveen Kumar</Text>
    <Text style={{color:'#fff', fontWeight:'normal',fontSize:12}}>Cardiologist</Text>
   </View>
   </View>
   </TouchableOpacity>


   <TouchableOpacity onPress={()=>  MakeCall()}>
   <View style={{ height: 70,padding:5 ,flexDirection: 'row', flex: 1, alignItems:'center', margin:2 ,backgroundColor: '#4446AD' , borderRadius:5}}>
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