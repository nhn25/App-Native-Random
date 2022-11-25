import React, {useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image,Button } from 'react-native';
/* import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg" */
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';


export default function Home() {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  //console.log(isLoading)
  return (
    <View style={styles.mainContainer}>
        <Spinner visible={isLoading} />
      <View style={styles.container}>
       <Text style={styles.titulo}>HOLA</Text>
       <Text style={styles.subtitulo}>Como estas {userInfo.user.nombre}</Text>
       <Button
        title="Cerrar Session"
        onPress={() => logout()}
      />
      <StatusBar style="auto" />
    </View>
    
    </View>
  );
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
  containerSVG: {
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34433D',
    fontWeight: 'bold',

  },
  subtitulo: {
    fontSize: 20,
    color:'gray',
  }
});
