
import React, {useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import { StyleSheet, Text, View, TextInput, Image,Button,ScrollView,TouchableWithoutFeedback } from 'react-native';


const Anuncios = () => {
  const { isLoading, anuncios, anunciosInfo} = useContext(AuthContext);

  useEffect(()=>{
    anuncios()
  },[])


  
  return (
    <View style={styles.mainContainer}>
       
        <Spinner visible={isLoading} />
      <View style={styles.container}>
        {/* <View style={styles.containerTitulo}> 
          <Text style={styles.titulo}>PUBLICACIONES GENERALES</Text>
        </View> */}
      <ScrollView>
        {
          anunciosInfo?.length > 0 && anunciosInfo?.map((item)=>{
            let options = { year: 'numeric', month: 'long', day: 'numeric' }
            const fecha = new Date(item?.fecha);
            const fechaConvertida = fecha.toLocaleDateString("es-ES", options);
            return(
              <View key={item?._id}>
              
                <View style={styles.cardContainer}>
                  <View>
                  <Image source = {{uri:`${item?.autorNombre?.fotoURL}`}}
                      style={styles.cardLogo}
                      />
                  <Text style={styles.cardAutor}>{item?.autorNombre?.nombre} {item?.autorNombre?.apellido}</Text>
                  <Text style={styles.cardFecha}>{fechaConvertida}</Text>
                  </View>
                  <View>
                  <Text style={styles.cardContenido}>{item?.contenido}</Text>
                  </View>
                </View>
            
              </View>
            )
          })
        }
        </ScrollView>
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
    left: 70,
    top: 10,
    fontSize: 17
  },
  cardFecha:{
    position: 'absolute',
    left: 70,
    top: 30,
    fontSize: 15,
    color: '#76877d'
  },
  cardContenido:{
    fontSize: 20,
    fontWeight: 'bold',
    top: 20
  },
  cardLogo:{
    width: 60,
    height: 60,
    borderRadius: 40,
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


export default Anuncios