import React, {useContext, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image,  TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import ButtonG from '../layout/ButtonG';
import {AuthContext} from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

export default function App({ navigation }) {
    const [dni, setDni] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const {isLoading, login} = useContext(AuthContext);

  return (
    <View style={styles.mainContainer}>
       <Spinner visible={isLoading} />

      <View style={styles.container}>
       <View style={styles.containerSVG}>
       <Image   
        source={require('../../assets/svg.jpg')}
      />
       </View>
       <View style={styles.containerLogo}>
       <Image   
       style={styles.logoIMG}
        source={require('../../assets/logo2.png')}
      />
       </View>
      <Text style={styles.titulo}></Text>
    
      <TextInput style={styles.inputLogin}
      placeholder='DNI'
      value={dni}
      onChangeText={text => setDni(text)}
      />
      <TextInput  style={styles.inputLogin}
      placeholder='Contraseña'
      secureTextEntry={true}
      value={contrasena}
      onChangeText={text => setContrasena(text)}
      />
      {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
      <ButtonG/>
      
      </TouchableWithoutFeedback> */}
      <TouchableOpacity     style={styles.containerButton} onPress={() => {
            login(dni, contrasena);
          }}>
            <LinearGradient
            colors={['#1ec3ea', '#005bc5']}
            start={{x:1, y:0}}
            end={{x:0, y:1}}
            style={styles.button}
            >
             <Text style={styles.text}>Inciar Sesion</Text>   
            </LinearGradient>
            
        </TouchableOpacity>
      
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
  containerLogo: {
    position: 'absolute',
    alignItems:'center',
  
  },
  logoIMG: {
    button: 150,
    width: 450,
    height: 450
  },
  titulo: {
    fontSize: 80,
    color: '#34433D',
    fontWeight: 'bold',

  },
  subtitulo: {
    fontSize: 20,
    color:'gray',
  },
  inputLogin: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',

  },
  containerButton:{
    flex: 1,
    alignItems: 'center',
    width: 200,
    
    
},
text:{
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
},
button:{
    width: '80%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
    
}
});
