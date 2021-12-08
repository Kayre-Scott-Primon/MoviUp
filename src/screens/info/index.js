import React, {useEffect, useState} from "react"
import styles from './style'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Icon } from "react-native-elements"

function Info({navigation}){

     useEffect(() => {})

     return(
          <View style={styles.container}>
               <View style={styles.headerContainer}>
                    <Text style={styles.textHeader}>Informações</Text>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                         <Icon name='film' type='feather' color='#fff' size={33} />
                    </TouchableOpacity>
               </View>
               <View style={styles.view}>
                    <Image 
                         source={require('../../assets/images/MovieUp.png')}
                         style={styles.logo} 
                    />
                    <View style={styles.containerText}>
                         <Text style={styles.text1}>Objetivo do App: </Text>
                         <Text style={styles.text2}>Apresentar os lançamentos de filmes</Text>
                    </View>
                    <View style={styles.containerText}>
                         <Text style={styles.text1}>Desenvolvido por: </Text>
                         <Text style={styles.text2}>Kayré Scott Primon</Text>
                    </View>
                    <View style={styles.containerText}>
                         <Text style={styles.text1}>Versão: </Text>
                         <Text style={styles.text2}>1.0</Text>
                    </View>
                    <View style={styles.containerText}>
                         <Text style={styles.text1}>API utilizada: </Text>
                         <Text style={styles.text2}>The movie database API 3</Text>
                    </View>
                    <View style={styles.containerText}>
                         <Text style={styles.text1}>Data da ultima atualização: </Text>
                         <Text style={styles.text2}>03/12/2021</Text>
                    </View>
               </View>
          </View>
     ) 
}

export default Info