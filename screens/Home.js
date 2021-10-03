import React, { useState } from 'react'
import { View, Text, SafeAreaView ,StyleSheet,ScrollView} from 'react-native'
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs'
import Restaurant, { localRestaurantData } from '../components/Restaurant';
import SearchBar from '../components/SearchBar';



export default function Home() {
    const [restaurantData,setrestaurantData] = useState(localRestaurantData)
    return (
        <SafeAreaView style={styles.SafeArea}>
             <View>
            <HeaderTabs/>
            <SearchBar/>
           
            </View>
           
    
                <ScrollView showsVerticalScrollIndicator={false} >
                <Categories/>
                 <Restaurant restaurantData= {restaurantData}/>
                

                </ScrollView>

            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 
 SafeArea:{
     paddingTop:40,
     backgroundColor:'#fff',
     flex:1
   
 },
    
});


