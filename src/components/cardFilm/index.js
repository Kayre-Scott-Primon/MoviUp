import React, {useEffect} from "react"
import styles from './style'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

function CardFilm(props){

     const navigation = useNavigation();

     useEffect(() => {})

     return(
          <TouchableOpacity onPress={() => {navigation.navigate('Details', props.data)}} style={styles.container}>
               <Image style={styles.capa} source={{uri: 'https://image.tmdb.org/t/p/w500' + props.data.poster_path}}/>
               <View style={styles.containerText}>
                    <Text numberOfLines={1} style={styles.titulo}>{props.data.title}</Text>
                    <Text numberOfLines={4} style={styles.sinopse}>{props.data.overview}</Text>
                    <Text numberOfLines={1} style={styles.data}>{props.data.release_date}</Text>
               </View>
          </TouchableOpacity>
     ) 
}

export default CardFilm