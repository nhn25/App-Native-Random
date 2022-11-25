import React, {useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import { StyleSheet, Text, View, TextInput, Image,Button,ScrollView, TouchableWithoutFeedback } from 'react-native';
import MateriaNotas from './MateriaNotas';

const Inasistencias = () => {
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
                    item.inasistencia.length > 0 && item.inasistencia.map((faltas) =>{
                      let options = { year: 'numeric', month: 'long', day: 'numeric' }
                        const fecha = new Date(faltas?.dia);
                        const fechaConvertida = fecha.toLocaleDateString("es-ES", options);
                    return(
                      <View key={faltas?._id}>
                         {
                           faltas?.idUser === userInfo?.user?._id ?(
                            <>
                              <Text style={styles.cardTituloInasistencia}>Inasistencia Registrada el dia:</Text>
                              <Text></Text>
                              <Text style={styles.cardfecha}>{fechaConvertida}</Text>
                              <Text></Text>
                              <Text style={styles.rayita}>---------</Text>
                              <Text></Text>
                            </>
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
  cardTituloInasistencia:{
    position: 'absolute',
    left: 115,
    top: 0,
    fontSize: 15,
    color: '#76877d',
    
  },
  cardfecha:{
    position: 'absolute',
    left: 115,
    top: 20,
    fontSize: 15,
    color: '#76877d',
    
  },
  rayita:{
    position: 'absolute',
    left: 115,
    top: 40,
    fontSize: 15,
    color: '#76877d',
    
  },
});

export default Inasistencias