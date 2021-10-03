import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurantData =[
    {
        name:'Kisori Misthan Bhandar',
        image_url:
           "https://b.zmtcdn.com/data/pictures/9/18883909/602b3959058e78f32a2727227f282650.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        rating:'3.5',
        reviews:'423',
        price:'Rs',
        categories:["Sweets","Indian","Snacks"]

    },
    {
        name:'Kisori Misthan Bhandar',
        image_url:
          "https://b.zmtcdn.com/data/pictures/8/19797468/3b5aa802b41d2b0750984e0079c68e27.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ,
        rating:'3.5',
        reviews:'423',
        price:'Rs',
        categories:["Sweets","Indian","Snacks"]

    },
    {
        name:'Alpha Vibes',
        image_url:
        "https://b.zmtcdn.com/data/pictures/8/19797468/3b5aa802b41d2b0750984e0079c68e27.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          ,
        rating:'2.5',
        reviews:'823',
        price:'Rs',
        categories:["Sweets","Indian","Snacks"]

    },
    {
        name:'Love Passion Karma',
        image_url:
        "https://b.zmtcdn.com/data/pictures/8/19797468/3b5aa802b41d2b0750984e0079c68e27.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          ,
        rating:'4.5',
        reviews:'4233',
        price:'Rs',
        categories:["Sweets","Indian","Snacks"]

    },

]

export default function Restaurant(props) {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            {props.restaurantData.map((restaurant,index)=>(
                <View
                key={index} 
                style={{backgroundColor:"#eee" ,margin:10,borderRadius:15,padding:5}}>
                
                <RestaurantImg img={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name }rating={restaurant.rating} />
                
                
            </View>
            ))}
        
        </TouchableOpacity>
    )
}
const RestaurantImg =(props)=>(
    <>
   <Image source={{
       uri:props.img,
   }}
   style={{
     height:180,borderRadius:10 }}/>
     <TouchableOpacity style={{position:'absolute',right:12,top:15}}>
        <MaterialCommunityIcons name ="heart-outline" size={24} color="white"/>
     </TouchableOpacity>

   </>
);

const RestaurantInfo =(props)=>(
    <>
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',margin:5}}>
    <View >
    <Text style={{fontWeight:'bold',fontSize:17 }}>{props.name}</Text>
    <Text style={{color:'grey'}}>30-45 .min</Text>
    </View>
    <Text style ={{position:'absolute',right:1,backgroundColor:'#fff',borderRadius:90,padding:4,color:'grey'}}>{props.rating}</Text>
    </View>
   </>
);
