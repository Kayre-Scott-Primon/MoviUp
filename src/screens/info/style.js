import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#000'
     },
     headerContainer: {
          backgroundColor: 'rgba(21,177,131,1)',
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
     },
     textHeader: {
          fontSize: 25,
          color: 'white',
          fontWeight: 'bold',
     },
     view: {
          backgroundColor: 'rgba(21,177,131,0.5)',
          margin: 10,
          padding: 10,
          borderRadius: 5
     },
     logo: {
          width: 280,
          height: 400,
          alignSelf: 'center',
          margin: 25
     },
     containerText: {
          flexDirection: 'row',
          maxWidth: windowWidth*0.6,
          marginVertical: 8
     },
     text1: {
          color: '#fff',
          fontSize: 18,
          fontWeight: '800'
     },
     text2: {
          color: '#fff',
          fontSize: 18,
          fontWeight: '600'
     }
})