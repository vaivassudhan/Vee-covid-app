import MessageStringConstants from "../Constant/MessageStringConstants";
import NetInfo from "@react-native-community/netinfo";
import API_Base from '../Constant/API_Base';


export const callPostMethod = async (apiMethod, strJSONBody) => {
  try {
    let _isNetworkAvailable = false;
    let _isHostReachable = false;
    _isNetworkAvailable = await isNetworkAvailable();
    _isHostReachable = await isHostReachable();

    if (!_isNetworkAvailable) {
      var obj = { status: 400, message: MessageStringConstants.NO_INTERNET, }
      return obj;
    } else if (!_isHostReachable) {
      var obj = { status: 400, message: MessageStringConstants.SERVER_NOT_REACHABLE, }
      return obj;
    } else {
      var accessToken = "";
      //var accessToken = await AsyncStorage.getItem("token");
      return fetch(API_Base.API_Base_URL + apiMethod, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: "Bearer " + accessToken },
        body: strJSONBody
      }).then(response => {
        if (response != null) {
          var status = JSON.stringify(response.code)

          if (status == 500) {
            //console.log("Actual Response : " + JSON.stringify(response.json()));
            var obj = { status: 500, message: MessageStringConstants.SERVER_BUSY, }
            return obj;
          } else if (status == 401) {
            var obj = { status: 401, message: MessageStringConstants.SESSION_EXPIRED_MESSAGE, }
            return obj;
          }
          else if (status == 402) {
            var obj = { status: 402, message: MessageStringConstants.NEWUSERLOGINED, }
            return obj;
          } else if (status == 200) {
            return response.json()
          } else if (status == 400) {
            return response.json()
          } else {
            return response.json()
          }
        } else {
          return null;
        }
      }).then(responseJson => {
        if (responseJson != null) {

          if (responseJson.status == 401) {
            var obj = { status: 401, message: MessageStringConstants.SESSION_EXPIRED_MESSAGE, }
            return obj;
          }
          else if (responseJson.status == 402) {
            var obj = { status: 402, message: MessageStringConstants.NEWUSERLOGINED, }
            return obj;
          } else {
            return responseJson;
          }
        } else {
          return null;
        }
      });
    }
  }
  catch (Exception) {
    //alert(Exception.message)
  }
}

export const callGetMethod = async (apiMethod) => {

  let _isNetworkAvailable = false;
  let _isHostReachable = false;
  _isNetworkAvailable = await isNetworkAvailable();
  _isHostReachable = await isHostReachable();

  if (!_isNetworkAvailable) {
    var obj = { status: 400, message: MessageStringConstants.NO_INTERNET, }
    return obj;
  } else if (!_isHostReachable) {
    var obj = { status: 400, message: MessageStringConstants.SERVER_NOT_REACHABLE, }
    return obj;
  } else {
    var accessToken = "";
    //var accessToken = await AsyncStorage.getItem('token');

    return fetch(API_Base.API_Base_URL + apiMethod, {
      method: "GET",
      headers: { Accept: "application/json", "Content-Type": "application/json" }
      // headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: "Bearer " + accessToken },

    }).then(response => {
      if (response != null) {


        var status = JSON.stringify(response.code)
        if (status == 500) {

          var obj = {
            status: 500,
            message: MessageStringConstants.SERVER_BUSY,
          }
          return obj;
        } else if (status == 401) {
          var obj = {
            status: 401,
            message: MessageStringConstants.SESSION_EXPIRED_MESSAGE,
          }
          return obj;
        }
        else if (status == 402) {
          var obj = {
            status: 402,
            message: MessageStringConstants.NEWUSERLOGINED,
          }
          return obj;
        } else if (status == 200) {
          return response.json()
        }
        else if (status == 400) {
          return response.json()
        }
        else {
          return response.json()
        }
      } else {
        return null;
      }
    }).then(responseJson => {
      if (responseJson != null) {

        if (responseJson.status == 401) {
          var obj = { status: 401, message: MessageStringConstants.SESSION_EXPIRED_MESSAGE, }
          return obj;
        }
        else if (responseJson.status == 402) {
          var obj = {
            status: 402,
            message: MessageStringConstants.NEWUSERLOGINED,
          }
          return obj;
        } else {
          return responseJson;
        }
      } else {
        return null;
      }
    });
  }
}

export const isHostReachable = async () => {
  return true;
}

export const isNetworkAvailable = async () => {
  try {
    return NetInfo.fetch().then(NetworkState => {
      if (NetworkState.isConnected) {
        return true;
      } else {
        return false;
      }
    });
  }
  catch (Exception) {
    //alert(Exception.message)
  }

}