import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default function Product({navigation}){
  return (
    <ScrollView style={styles.container}>

    
  
      <View style={styles.main} >
        <View style={styles.infoContainer} >
          <Text style={styles.infoName}>Upcoming</Text>
          <Text style={styles.infoName}>Live</Text>
          <Text style={styles.infoName}>Ended</Text>
        </View>

        
        
         <View style={styles.proContainer} >
         <Image
            style={styles.product}
            source={require('../assets/l1.jpeg')}
          />
          </View>
        
       
        
        <View style={styles.details} >
        <Text style={styles.heading} onPress={()=>navigation.navigate('Auction')}>MIcrosoft Surface Pro</Text>
        <Text style={styles.price}>$899</Text>
        <Text style={styles.desc}>The Surface Pro is a first generation 2-in-1 detachable of the Microsoft Surface series, designed and manufactured by Microsoft.The device ran a 64-bit version of Windows 8 Pro operating system with a free upgrade possibility to Windows 8.1 Pro, and eventually also Windows 10</Text>
        </View>
      </View>
      <View style={styles.bottom} ></View>
      
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
 

 main:{
   backgroundColor:'white',
   height:'100%',
   borderTopRightRadius:30,
   borderTopLeftRadius:30,
   marginTop:100
   

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
infoName:{
  fontSize:16,
  fontWeight:'bold'
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
},
price:{
    color: 'purple',
    fontFamily: 'helvetica',
    fontSize: 16,
    marginTop:10,
    fontWeight:'bold'
},
desc:{
    color: 'gray',
    fontFamily: 'helvetica',
    fontSize: 14,
    marginTop:10,
    lineHeight:16
    
},
  bottom:{
    marginTop: 15
  }
});
