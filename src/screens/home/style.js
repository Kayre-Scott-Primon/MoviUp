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
    searchContainer: {
        backgroundColor: 'rgba(21,177,131,0.70)',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputSearch: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        margin: 8,
        borderRadius: 8,
        height: 50,
    },
    iconSearch: {
        margin: 10,
    },
    modal: {
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 7,
        padding: 8,
    },
    viewModalHeader: {
        flexDirection: 'row'
    },
    titleModal: {
        flex: 2,
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 10
    },
    iconX: {
        margin: 5
    },
    viewLinguagem: {
        flexDirection: 'row',
    },
    viewSearch: {
        flex: 1
    },
    viewSearchOff: {

    },
    textCheck: {
        paddingHorizontal: 10
    },
    textMenu: { 
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 10,
        justifyContent: 'flex-start'
    },
    load: {
        alignSelf: 'center',
        margin: 20,
        fontSize: 30,
        color: '#fff',
        textAlign: 'center'
    }
})