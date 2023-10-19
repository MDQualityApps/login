import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import COLORS from '../constants/colors'
import { Image } from 'react-native'

const Welcome = () => {
 
    return (
      <LinearGradient
      style={{ flex:1 }}
      colors= {[COLORS.primary, COLORS.secondary]}>
         <View style={{ flex:1 }}>
          <View>
            <Image source={require("../assets/speaker.png")} 
            style={{ height: 100, width: 100, borderRadius: 10,
             position: 'absolute', top:30, transform:[
                { translateX:20 },
                { translateY:50 },
                { rotate: "-15deg" },
            ] }}
             
              />
              <Image source={require("../assets/speaker.png")} 
            style={{ height: 100, width: 100, borderRadius: 10,
             position: 'absolute', top: -30,left: 100, transform:[
                { translateX:50 },
                { translateY:50 },
                { rotate: "-15deg" },
            ] }}
             
              />
              <Image source={require("../assets/speaker.png")} 
            style={{ height: 100, width: 100, borderRadius: 10,
             position: 'absolute', top: 160,left: -35, transform:[
                { translateX:50 },
                { translateY:50 },
                { rotate: "15deg" },
            ] }}
             
              />
              <Image source={require("../assets/speaker.png")} 
            style={{ height: 200, width: 200, borderRadius: 10,
             position: 'absolute', top: 110,left: 100, transform:[
                { translateX:50 },
                { translateY:50 },
                { rotate: "-15deg" },
            ] }}
             
              />
          </View>
           <View style={{ paddingHorizontal: 22,
           position: "absolute",top:400,width:"100%"
           }}>
            <Text style={{ fontSize: 50, fontWeight: 800, color: COLORS.white }} >Let's Get</Text>
            <Text style={{ fontSize: 46, fontWeight: 800, color: COLORS.white }} >Started</Text>
           </View>
         </View>
      </LinearGradient>
    )
  
}

export default Welcome