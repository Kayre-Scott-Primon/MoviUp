import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
     container: {
          backgroundColor: 'rgba(000,000,000,1)',
          height: '100%'
     },
     headerContainer: {
          backgroundColor: 'rgba(21,177,131,1)',
          height: 60,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: 20
     },
     textHeader: {
          fontSize: 25,
          color: 'white',
          fontWeight: 'bold',
          marginLeft: 20
     },
     view: {
          backgroundColor: 'rgba(21,177,131,0.50)',
          margin: 10,
          borderRadius: 5,
          padding: 20,
          flex: 1
     },
     viewList: {
          marginBottom: 50
     },
     containerText: {
          justifyContent: 'space-between'
     },
     titulo: {
          fontSize: 20,
          fontWeight: '800',
          color: '#fff'
     },
     sinopse: {
          marginVertical: 10,
          fontSize: 17,
          fontWeight: '500',
          color: '#fff'
     },
     data: {
          marginVertical: 10,
          fontSize: 20,
          fontWeight: '500',
          color: '#fff'
     },
     capa: {
          width: '100%',
          height: 250,
          alignSelf: 'center',
          marginBottom: 25
     },
     lista: {
          marginLeft: 25,
          fontSize: 18,
          fontWeight: '500',
          color: '#fff'
     }
})