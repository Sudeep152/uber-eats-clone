import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {

    const [active, setactive] = useState("Delivery")

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop:15 ,margin:8 }}>
            {/*  Delivery Header Button */}
            <HeaderButton Text='Delivery' bgColor='black' txtColor='white' activeTab={active} setactiveTab={setactive} />

            <HeaderButton Text='Pickup' bgColor='white' txtColor='black' activeTab={active} setactiveTab={setactive} />

        </View>
    )
}

const HeaderButton = (props) => (

    <TouchableOpacity
    onPress={()=>{
        props.setactiveTab(props.Text)
    }}
    style={{ backgroundColor: props.activeTab == props.Text ? 'black':'white', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 30 }}>
        <Text style={{ color:props.activeTab == props.Text ? 'white':'black', fontSize: 15, fontWeight: 'bold' }}>{props.Text}</Text>
    </TouchableOpacity>

)