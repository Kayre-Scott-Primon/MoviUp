import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
     container: {
          backgroundColor: 'rgba(21,177,131,0.5)',
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: 'row',
          height: 150,
          borderRadius: 5
     },
     containerText: {
          marginVertical: 10,
          justifyContent: 'space-between'
     },
     titulo: {
          fontSize: 20,
          fontWeight: '800',
          color: '#fff',
          width: windowWidth*0.6
     },
     sinopse: {
          fontSize: 14,
          fontWeight: '500',
          color: '#fff',
          width: windowWidth*0.6
     },
     data: {
          fontSize: 15,
          fontWeight: '500',
          color: '#fff'
     },
     capa: {
          width: '25%',
          height: '90%',
          margin: 10
     }
})