import React, {useEffect, useState} from "react"
import styles from './style'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Linking
} from 'react-native'
import api from "../../services/api"
import { Icon } from "react-native-elements"
import { apiTOKEN } from "../../services/tokens"
import { useRoute } from '@react-navigation/native';

function Details({navigation}){

     const route = useRoute()
     const [ data, setData ] = useState(route.params)
     const [ details, setDetails ] = useState({})

     useEffect(() => {
          readAPIDetails()
     },[data])

     function readAPIDetails() {
          api
          .get(`movie/${data.id}?api_key=${apiTOKEN}&language=pt-BR`)
          .then((response) => {
              setDetails(response.data)
              console.log(response.data)
          })
          .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
          });
     }

     async function linkHomePage() {
          await Linking.openURL(details.homepage);
     }

     return(
          <View style={styles.container}>
               <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                         <Icon name='corner-up-left' type='feather' color='#fff' size={33} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader} numberOfLines={1}>{data.title}</Text>
               </View>
               <ScrollView style={styles.view}>
                    <Image style={styles.capa} source={{uri: 'https://image.tmdb.org/t/p/w500' + data.backdrop_path}}/>
                    {details != undefined ?
                         <View style={styles.containerText}>
                              <Text style={styles.titulo}>{data.title}</Text>
                              <Text style={styles.sinopse}>Sinopse: {data.overview}</Text>
                              <Text style={styles.data}>Lançamento: {data.release_date}</Text>
                              <View style={[styles.data, {flexDirection: 'row'}]}>
                                   <Text style={styles.data}>Homepage: </Text>
                                   <TouchableOpacity onPress={linkHomePage}>
                                        <Text style={[styles.data, {color: '#17f'}]}>{details.homepage}</Text>
                                   </TouchableOpacity>
                              </View>
                              <Text style={styles.data}>Votação: {details.vote_average}</Text>
                              <Text style={styles.data}>Generos:</Text>
                              <FlatList
                                   data={details.genres}
                                   style={styles.viewList}
                                   scrollEnabled={false}
                                   renderItem={({item: e, index: i}) => (
                                        <Text key={i} style={styles.lista}> - {e.name}</Text>
                                   )}
                              />
                         </View>
                    : <View/>
                    }
               </ScrollView>
          </View>
     ) 
}

export default Details