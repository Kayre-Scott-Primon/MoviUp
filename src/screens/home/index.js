import React, {useEffect, useState} from "react"
import styles from './style'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    TextInput,
    Keyboard,
    Image
} from 'react-native'
import api from "../../services/api"
import { apiTOKEN } from "../../services/tokens"
import { Icon, CheckBox, Slider } from "react-native-elements"
import CardFilm from "../../components/cardFilm"
import Modal from 'react-native-modal' 
import NetInfo from "@react-native-community/netinfo"

function Home({navigation}){

    const [ page, setPage ] = useState(1)
    const [ list, setList ] = useState([])
    const [ online, setOnline ] = useState(true)
    const [ statusModal, setStatusModal ] = useState(false)
    const [ clickLinguagem, setClickLinguagem ] = useState(false)
    const [ clickYear, setClickYear ] = useState(false)
    const [ clickAdulto, setClickAdulto ] = useState(false)
    const [ linguagem, setLinguagem ] = useState('pt-BR')
    const [ clickPTBR, setClickPTBR ] = useState(true)
    const [ clickENUS, setClickENUS ] = useState(false)
    const [ statusAdult, setStatusAdult ] = useState(false)
    const [ query, setQuery ] = useState('')
    const [ year, setYear ] = useState(2021)
    const [ clickTitle, setClickTitle ] = useState(false)
    const [ isConnectionNetInfo, setIsConnectionNetInfo ] = useState(null)
    const [ isConnectionNetInfoType, setIsConnectionNetInfoType ] = useState(null)
    const textOffLine = 'Voce esta sem acesso a internet, por favor verifique sua conexão.'
  

    useEffect(() => {
        NetInfo.addEventListener(networkState => {
             console.log("Connection type - ", networkState.type);
             console.log("Is connected? - ", networkState.isConnected);
             setIsConnectionNetInfo(networkState.isConnected)
             setIsConnectionNetInfoType(networkState.type)
        });
    },[])

    useEffect(() => {
        if(isConnectionNetInfo == null){

        }
        else if(isConnectionNetInfo){
            readAPI()
        }else {
            console.log('SEM ACESSO', isConnectionNetInfo)
        }
    },[isConnectionNetInfo])



    useEffect(() => {
        if(clickLinguagem || clickAdulto || clickYear){
            setClickTitle(true)
        }
        if(!clickTitle) {
            readAPI()
            setQuery('')
        }
    },[clickLinguagem, clickAdulto, clickYear, clickTitle])

    function readAPI() {
        api
        .get(`movie/upcoming?api_key=${apiTOKEN}&page=1&language=pt-BR`)
        .then((response) => {
            setList(response.data.results)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    function loadMore() {
        api
        .get(`movie/upcoming?api_key=${apiTOKEN}&page=${page + 1}&language=pt-BR`)
        .then((response) => {
            var newList = list
            response.data.results.forEach((e) => {
                newList.push(e)
            })
            setList(newList)
            setPage(page + 1)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    function searchAPI() {
        Keyboard.dismiss()
        var url = ''
        if(clickYear){
            url = url + `&year=${year}`
        }
        if(clickAdulto){
            url = url + `&include_adult=${statusAdult}`
        }
        if(clickLinguagem){
            url = url + `&language=${linguagem}`
        }
        api
        .get(`/search/movie?api_key=${apiTOKEN}&page=1&query=${query}${url}`)
        .then((response) => {
            setList(response.data.results)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    function statusLanguage(type) {
        switch (type) {
            case 'pt-BR':
                setLinguagem('pt-BR')
                setClickPTBR(true)
                setClickENUS(false)
                break;
            case 'en-US':
                setLinguagem('en-US')
                setClickPTBR(false)
                setClickENUS(true)
                break;
            default:
                break;
        }
    }
    

    function searchTypeLanguage() {
        if(clickLinguagem){
            return(
                <View style={styles.viewLinguagem}>
                    <CheckBox
                        title='pt-BR'
                        checked={clickPTBR}
                        onPress={() => statusLanguage('pt-BR')}
                        textStyle={styles.textCheck}
                    />
                    <CheckBox
                        title='en-US'
                        checked={clickENUS}
                        onPress={() => statusLanguage('en-US')}
                        textStyle={styles.textCheck}
                    />
                </View>
            )
        }
    }

    function searchTypeAdult() {
        if(clickAdulto){
            return(
                <CheckBox
                    title='Conteudo adulto'
                    checked={statusAdult}
                    onPress={() => {
                        setStatusAdult(!statusAdult)
                    }}
                />
            )
        }
    }

    function searchTypeYear() {
        if(clickYear){
            return(
                <TextInput style={styles.inputSearch} placeholder={'Ano de lançamento'} onChangeText={setYear} value={year}/>
            )
        }
    }

    function searchTypeTitle() {
        if(clickTitle){
            return(
                <TextInput style={styles.inputSearch} placeholder={'Buscar filme por titulo'} onChangeText={setQuery} value={query}/>
            )
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#000'} />
            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Próximos lançamentos</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Info', {})}}>
                    <Icon name='alert-circle' type='feather' color='#fff' size={33} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <View style={clickTitle ? styles.viewSearch : styles.viewSearchOff}>
                    {searchTypeTitle()}
                    {searchTypeYear()}
                    {searchTypeAdult()}
                    {searchTypeLanguage()}
                </View>
                {clickTitle ?
                    <TouchableOpacity onPress={() => searchAPI()}>
                        <Icon name='search' type='feather' color='#fff' size={33} style={styles.iconSearch}/>
                    </TouchableOpacity>
                    : 
                    <TouchableOpacity onPress={() => setStatusModal(true)}>
                        <Text style={styles.textMenu}>Realizar uma busca </Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => {setStatusModal(!statusModal)}}>
                    <Icon name='menu' type='feather' color='#fff' size={33} style={styles.iconSearch}/>
                </TouchableOpacity>
            </View>
            <FlatList
                data={list}
                keyExtractor={data => String(data.id)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                onEndReached={() => online ? loadMore() : false}
                ListEmptyComponent={<Text style={styles.load}>{isConnectionNetInfo ? 'Carregando ...' : textOffLine}</Text>}
                renderItem={({item: data}) => (
                    <CardFilm  
                        data={data}
                    />
                )}
            />
            <Modal isVisible={statusModal}>
                <View style={styles.modal}>
                    <View style={styles.viewModalHeader}>
                        <Text style={styles.titleModal}>Ajustes da busca</Text>
                        <TouchableOpacity onPress={() => setStatusModal(false)}>
                            <Icon name='x' type='feather' color='#000' size={33} style={styles.iconX}/>
                        </TouchableOpacity>
                    </View>
                    <CheckBox
                        title='Titulo'
                        checked={clickTitle}
                        onPress={() => setClickTitle(!clickTitle)}
                    />
                    <CheckBox
                        title='Ano'
                        checked={clickYear}
                        onPress={() => setClickYear(!clickYear)}
                    />
                    <CheckBox
                        title='Conteudo adulto'
                        checked={clickAdulto}
                        onPress={() => setClickAdulto(!clickAdulto)}
                    />
                    <CheckBox
                        title='Linguagem'
                        checked={clickLinguagem}
                        onPress={() => setClickLinguagem(!clickLinguagem)}
                    />
                </View>
            </Modal>
        </View>
    ) 
}

export  default Home