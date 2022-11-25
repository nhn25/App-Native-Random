import React, {useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import { StyleSheet, Text, View, TextInput, Image,Button,ScrollView, TouchableWithoutFeedback } from 'react-native';
import MateriaNotas from './MateriaNotas';

const Notas = () => {
  const { isLoading, materias, materiasInfo, userInfo} = useContext(AuthContext);

  useEffect(()=>{
    materias()
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
          materiasInfo?.length > 0 && materiasInfo?.map((item)=>{
            /* let options = { year: 'numeric', month: 'long', day: 'numeric' }
            const fecha = new Date(item?.fecha);
            const fechaConvertida = fecha.toLocaleDateString("es-ES", options); */
            console.log(item?.notas?.Alumno?._id)
            return(
              <View key={item?._id}>
                
                <View style={styles.cardContainer}>
                  <View>
                  <Image source = {{uri:"https://static.vecteezy.com/system/resources/thumbnails/000/618/919/small_2x/1005-01.jpg"}}
                      style={styles.cardLogo}
                      />
                   <Text style={styles.cardAutor}>{item?.descripcionMateria}</Text>
                   {/* <Text style={styles.cardSubtitulo}>El Profesor Titular es {item?.profTitular?.nombre} {item?.profTitular?.apellido}.
                   Clases desde las {item?.horarioIncio} hasta las {item?.horarioFinal}
                   </Text> */}
                  {
                    item.notas.length > 0 && item.notas.map((nota) =>{
                      if(nota?.Alumno?._id === userInfo?.user._id){
                        console.log("Id User: " +userInfo?.user._id)
                        console.log("Id Materia: " + nota?.Alumno?._id)
                      }
                    return(
                      <View>
                         {
                           nota?.Alumno?._id === userInfo?.user?._id ?(
                            <View>
                              <Text style={styles.cardNotas1}>NOTA DEL PRIMER PARCIAL: {nota?.parcial1}</Text>
                              <Text style={styles.cardNotas2}>NOTA DEL SEGUNDO PARCIAL: {nota?.parcial2}</Text>
                              <Text style={styles.cardNotas3}>NOTA DEL TERCER PARCIAL: {nota?.parcial3}</Text>
                              <Text style={styles.cardNotasR}>NOTA DEL RECUPERATORIO: {nota?.recuperatorio}</Text>
                              <Text style={styles.cardNotasF}>NOTA DEL FINAL: {nota?.final}</Text>
                            </View>
                          ):
                          null
                            
                          
                        }
                      </View>
                    )
                    })
                  }
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
    backgroundColor:'#76877d',
    margin: 20,
    padding: 20,
    width: 450,
    minHeight: 250,
    borderRadius: 30,
  },
  cardAutor:{
    position: 'absolute',
    left: 115,
    top: 30,
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
    top: 50
  },
  containerTitulo:{
    backgroundColor: '#00cef5',
    width: '100%',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold'
  }, 
  cardNotas1:{
    position: 'absolute',
    left: 115,
    top: 0,
    fontSize: 15,
    color: '#76877d',
    
  },
  cardNotas2:{
    position: 'absolute',
    left: 115,
    top: 20,
    fontSize: 15,
    color: '#76877d',
    
  },
  cardNotas3:{
    position: 'absolute',
    left: 115,
    top: 40,
    fontSize: 15,
    color: '#76877d',
    
  },
  cardNotasR:{
    position: 'absolute',
    left: 115,
    top: 60,
    fontSize: 15,
    color: '#76877d',
    
  },
  cardNotasF:{
    position: 'absolute',
    left: 115,
    top: 80,
    fontSize: 15,
    color: '#76877d',
    
  },
});

export default Notas