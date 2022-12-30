import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Home({navigation}){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.messaging} source={require('../assets/menu.png')}  />
      
      <Text style={styles.displayName} onPress={()=>navigation.navigate('Auction')}>Malaika</Text>
        
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.category}>
        <View style={styles.cate}>
          <Image
            style={styles.categoryIcon}
            source={require('../assets/shoes.png')}
          />
      </View>
          <Text style={styles.categoryText}>Shoes</Text>
        </View>

        <View style={styles.category}>
         <View style={styles.cate}>
          <Image
            style={styles.categoryIcon}
            source={require('../assets/shirts.png')}
          />
      </View>
          <Text style={styles.categoryText}>Clothes</Text>
        </View>

        <View style={styles.category}>
          <View style={styles.cate}>
          <Image
            style={styles.categoryIcon}
            source={require('../assets/electronics.png')}
          />
      </View>
          <Text style={styles.categoryText}>Electronic</Text>
        </View>

        <View style={styles.category}>
         <View style={styles.cate}>
          <Image
            style={styles.categoryIcon}
            source={require('../assets/diet.png')}
          />
      </View>
          <Text style={styles.categoryText}>Food</Text>
        </View>
        
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> Featured Products</Text>
        <Text style={styles.sectionButton}>View All</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.jobContainer}>
        <TouchableOpacity style={styles.jobCard} onPress={()=>navigation.navigate('Product')}>
          <View style={styles.jobHeading}>
          <Image
              style={styles.jobIcon}
              source={require('../assets/l1.jpeg')}
            />
            <Text style={styles.jobTitle}> Microsoft Surface</Text>
            <View style={styles.jobType}> $899</View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.jobCard} 
        onPress={()=>navigation.navigate('Product')}>
          <View style={styles.jobHeading}>
          <Image
              style={styles.jobIcon}
              source={require('../assets/l2.jpeg')}
            />
            <Text style={styles.jobTitle}> Macbook Pro</Text>
            <View style={styles.jobType}> $1100</View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.jobCard} 
        onPress={()=>navigation.navigate('Product')}>
          <View style={styles.jobHeading}>
          <Image
              style={styles.jobIcon}
              source={require('../assets/l3.jpeg')}
            />
            <Text style={styles.jobTitle}> HP Laptop</Text>
            <View style={styles.jobType}> $1100</View>
          </View>
        </TouchableOpacity>

        
      </ScrollView>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> Recent Jobs</Text>
        <Text style={styles.sectionButton}>View All</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.jobContainer}>
         <TouchableOpacity style={styles.jobCard} onPress={()=>navigation.navigate('Auction')}>
          <View style={styles.jobHeading}>
          <Image
              style={styles.jobIcon}
              source={require('../assets/s1.jpeg')}
            />
            <Text style={styles.jobTitle}>Nike Sneakers</Text>
            <View style={styles.jobType}> $45</View>
          </View>
        </TouchableOpacity>


        <View style={styles.jobCard}>
          <View style={styles.jobHeading}>
          <Image
              style={styles.jobIcon}
              source={require('../assets/s2.jpeg')}
            />
            <Text style={styles.jobTitle}> Adidas Sneaker</Text>
            <View style={styles.jobType}> $1100</View>
          </View>
        </View>

        <View style={styles.jobCard}>
          <View style={styles.jobHeading}>
          <Image
              style={styles.jobIcon}
              source={require('../assets/s3.jpeg')}
            />
            <Text style={styles.jobTitle}> Comfy Sneaker</Text>
            <View style={styles.jobType}> $11</View>
          </View>
        </View>

        
      </ScrollView>


      <View style={styles.bottom} ></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#E6DFF0',
    padding: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    marginTop:250
  },
  displayName: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#14213d'
  },
  messaging: {
    width: 30,
    height: 30,
    color: 'gray',
    marginRight: 10
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 5,
    
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:20,  


  },
  cate:{
    backgroundColor:'white',
    borderRadius:'50%',padding:10
  },
  categoryIcon: {
    width: 30,
    height: 30,
    

    
  },
  categoryText: {
    marginLeft: 3,
    fontFamily: 'helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginTop:5
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: 'helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#515151',
    marginLeft: 10,
  },
  sectionButton: {
    fontFamily: 'helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 2,
    marginRight: 10,
  },
  jobContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden'
    // justifyContent : 'space-evenly',
  },
  jobCard: {
    backgroundColor: '#AE95D0',
    width: 180,
    height: 200,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
  
  jobIcon: {
    width: '90%',
    height: '90%',
    marginTop:'45%',
    borderRadius:10,
    marginBottom:10

  },
  jobHeading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: 15,
    
  },
 
  jobTitle: {
    color: '#343839',
    fontFamily: 'helvetica',
    fontSize: 16,
    fontWeight: 'bold',
   

  },
  jobType: {
    color: 'white',
    fontFamily: 'helvetica',
    fontSize: 14,
    marginLeft: 10,
    marginTop:5,
  },
  
  bottom:{
    marginTop: 15
  }
});
