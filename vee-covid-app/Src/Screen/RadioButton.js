import React  from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({options,onSelect,selectedOption}) =>{
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      {options.map((item) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
           
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                onSelect(item);
              }}
              >
              {selectedOption && selectedOption.key === item.key && (
                <View style={styles.checkedCircle} />
              )} 
            </TouchableOpacity>
            <Text style={styles.itemstyle}>{item.text}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  
    margin:10
  },
  itemstyle:{
    fontSize:12,
    color:"#000",
    marginLeft:5
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#000',
  },
});
export default RadioButton;