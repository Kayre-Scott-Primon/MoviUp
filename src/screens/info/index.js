import React, {useEffect, useState} from "react"
import styles from './style'
import {
    View,
    Text,
    Image,
    Linking,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { Icon } from "react-native-elements"

function Info({navigation}){

     useEffect(() => {})

     return(
          <ScrollView style={styles.container}>
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
                         <Text  ellipsizeMode='tail' numberOfLines={2} style={styles.text2}>Apresentar os lançamentos de filmes</Text>
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
                         <Text style={styles.text2}>08/12/2021</Text>
                    </View>
                    <View style={[styles.containerText, {flexDirection: 'column'}]}>
                         <Text style={styles.text1}>Codigo do app presente no GitHub: </Text>
                         <TouchableOpacity onPress={async() => await Linking.openURL('https://github.com/Kayre-Scott-Primon/MoviUp/tree/master')}>
                              <Text style={[styles.text2, {color: '#17f'}]}>https://github.com/Kayre-Scott-Primon/MoviUp/tree/master</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </ScrollView>
     ) 
}

export default Info