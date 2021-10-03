import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const items =[
  {
      image:require('../assets/images/shopping-bag.png'),
      name :'Pick-up'
  },
  {
    image:require('../assets/images/soft-drink.png'),
    name :'Soft Drink'
},
{
    image:require('../assets/images/bread.png'),
    name :'Bakery Items'
},
{
    image:require('../assets/images/fast-food.png'),
    name :'Fast Foods'
},
{
    image:require('../assets/images/deals.png'),
    name :'Deals'
},
{
    image:require('../assets/images/coffee.png'),
    name :'Coffee'
},
{
    image:require('../assets/images/desserts.png'),
    name :'Dessert'
},
]
export default function Categories() {

 


    return (
        <ScrollView horizontal style={{}}>
        <View style={{margin:5,padding:5 ,alignItems:'center'}}>
            <Image source={items[0].image} style={{
               
                width:50,height:50,resizeMode:'contain'
            }} />
            <Text style={{fontWeight:'bold'}}>{items[0].name}</Text>
        </View>

        <View style={{margin:5,padding:5 ,alignItems:'center'}}>
            <Image source={items[1].image} style={{
               
                width:50,height:50,resizeMode:'contain'
            }} />
            <Text style={{fontWeight:'bold'}}>{items[1].name}</Text>
        </View>
        
        <View style={{margin:5,padding:5 ,alignItems:'center'}}>
            <Image source={items[2].image} style={{
               
                width:50,height:50,resizeMode:'contain'
            }} />
            <Text style={{fontWeight:'bold'}}>{items[2].name}</Text>
        </View>
        
        <View style={{margin:5,padding:5 ,alignItems:'center'}}>
            <Image source={items[3].image} style={{
               
                width:50,height:50,resizeMode:'contain'
            }} />
            <Text style={{fontWeight:'bold'}}>{items[3].name}</Text>
        </View>



        <View style={{margin:5,padding:5 ,alignItems:'center'}}>
            <Image source={items[4].image} style={{
               
                width:50,height:50,resizeMode:'contain'
            }} />
            <Text style={{fontWeight:'bold'}}>{items[4].name}</Text>
        </View>


        <View style={{margin:5,padding:5 ,alignItems:'center'}}>
            <Image source={items[5].image} style={{
               
                width:50,height:50,resizeMode:'contain'
            }} />
            <Text style={{fontWeight:'bold'}}>{items[5].name}</Text>
        </View>
        
       
        
        
        
        </ScrollView>
    )
}
