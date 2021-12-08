import React, { useEffect } from "react";
import styles from './style'
import {
    View,
    Animated,
    StatusBar
} from 'react-native'

function Splash({navigation}){

     const opacity = new Animated.Value(0)

     useEffect(() => {
          setTimeout(() => {
               navigation.navigate('Home')
          },2000)
     },[])

     function fadeIn(){
          Animated.timing(opacity, {
               toValue: 1,
               duration: 2000,
               useNativeDriver: true
          }).start()
     }
  
     return(
          <View style={styles.container}>
               <StatusBar barStyle='light-content' backgroundColor={'#000'} />
               <Animated.Image 
                    source={require('../../assets/images/MovieUp.png')} 
                    style={[styles.logo, {
                         opacity: opacity,
                         transform: [
                              {
                              scale: opacity.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [0 , 1.25],
                              })
                              },
                         ],
                    }]} 
                    onLoad={() => fadeIn()}
               />
          </View>
     ) 
}

export default Splash