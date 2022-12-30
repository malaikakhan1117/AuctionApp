import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Auction(){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main} >
        <View style={styles.infoContainer} >
          <Text style={styles.displayName}>You Got it!</Text>
        </View>
        <View style={styles.proContainer} >
        <Image
            style={styles.product}
            source={require('../assets/l1.jpeg')}
          />
          </View>
        
        <View style={styles.details} >
        <Text style={styles.desc}>You have won The Surface Pro that is the first generation 2-in-1 detachable of the Microsoft Surface series.</Text>
        <Text style={styles.heading}>Winning Price: $210</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnContainer} >
       <Text style={styles.btn}>Check it out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#86CCF8',
    padding: 8,
  },
 
  displayName: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#14213d'
  },

 main:{
   backgroundColor:'white',
   height:'80%',
   borderRadius:20,
   marginTop:50
   

 },
 proContainer:{
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
 },
infoContainer:{
  backgroundColor:'#86CCF8',
  margin:10,
  borderRadius:20,
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center',
  height:50
},

details:{
  display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft:20,
    marginRight:20
},
heading:{
  color: '#343839',
    fontFamily: 'helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:5
},

desc:{
    color: 'gray',
    fontFamily: 'helvetica',
    fontSize: 14,
    
},
  btnContainer:{
    backgroundColor:'blue',
    height:40,
    width:'80%',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
btn:{
  color:'white',
  fontSize:18,
  fontWeight:'bold'
},
});
