import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';



export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/shop_1.png')}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Image
              style={styles.display}
              source={require('../assets/user.png')}
            />
            <TextInput
              style={styles.text}
              placeholder="Username"
            >
            </TextInput>
          </View>
          <View style={styles.input}>
            <Image
              style={styles.display}
              source={require('../assets/lock.png')}
            />
            <TextInput
              style={styles.text}
              placeholder="Password"
            >
            </TextInput>
          </View>
        </View>
        <View style={styles.btncontainer}>
          <Text style={styles.link}>Forgot Password?</Text>
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.btnlink}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialcontainer}>
         <Image
              style={styles.display}
              source={require('../assets/facebook.png')}
            />
             <Image
              style={styles.display}
              source={require('../assets/google-plus.png')}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#DFC9E7',
    padding: 8,
  },
  image:{
    width:120,
    height:120,
    marginTop:20
  },
loginContainer:{
  backgroundColor:'#F7F2F9',
  width:'100%',
  marginTop:'10%',
  height:'70%',
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  
},
heading:{
  fontSize:34,
  fontWeight:'bold',
  marginBottom:30
},
inputContainer:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  borderRadius:20,
  width:'80%',
  marginBottom:20
},
input:{
  display:'flex',
  flexDirection:'row',
  padding:10,
  
},
display:{
  width:40,
  height:40,
  marginRight:15
},
text:{
  color:'gray',
  fontSize:14
},
btncontainer:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginBottom:30
},
link:{
  color:'purple',
  fontSize:14,
  marginRight:30
},
btn:{
  width:100,
  height:30,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'black',
  borderRadius:20
},
btnlink:{
  color:'white',
  fontWeight:'bold'
},
socialcontainer:{
display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',

},
});
