import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Iconicons from 'react-native-vector-icons/Ionicons';
import AntDesgin from  'react-native-vector-icons/AntDesign';


export default function SearchBar() {
    return (
        <View style={{marginTop:15,flexDirection:'row',margin:10,justifyContent:'center'}}>
            <GooglePlacesAutocomplete placeholder='Search'
              renderLeftButton={()=>(
                <View style={{marginLeft:0,justifyContent:'center'}}>
                  <Iconicons name="location-sharp" size={25} />
                  </View>
              )}

            
           styles={{
          
            textInput: {
              height: 38,
              color:'black',
              backgroundColor:'#eee',
              fontSize: 16,
              borderRadius:20,
              fontWeight:'bold',
              
            }
           
          }}
          renderRightButton={()=>(
            
            <View  style={{ height:30,backgroundColor:'black',borderRadius:7, justifyContent:'center',padding:5,margin:5}}>
            
              <Text style={{color:'white',fontWeight:'bold'}}>Search</Text>
            </View>
          )}

        
            />
        </View>


    )
}
