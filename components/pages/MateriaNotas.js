import React, {useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import { StyleSheet, Text, View, TextInput, Image,Button,ScrollView, TouchableWithoutFeedback } from 'react-native';

const MateriaNotas = (idMateria) => {
  const { isLoading} = useContext(AuthContext);

  useEffect(()=>{
   
  },[])


  return (
    <View style={styles.mainContainer}>
       
        <Spinner visible={isLoading} />
      <View style={styles.container}>
        <Text>Hola</Text>
      <StatusBar style="auto" />
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    color:'#121310',
    backgroundColor:'#fff',
    margin: 20,
    padding: 20,
    width: 450,
    minHeight: 200,
    borderRadius: 30,
  },
  cardAutor:{
    position: 'absolute',
    left: 115,
    top: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardSubtitulo:{
    position: 'absolute',
    left: 115,
    top: 65,
    fontSize: 15,
    color: '#76877d',
    width: 290
  },
  cardLogo:{
    width: 100,
    height: 100,
    borderRadius: 10,
    top: 20
  },
  containerTitulo:{
    backgroundColor: '#00cef5',
    width: '100%',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default MateriaNotas