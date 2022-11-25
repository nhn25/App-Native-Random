import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonG(){
    return(
        <TouchableOpacity     style={style.container} >
            <LinearGradient
            colors={['#1ec3ea', '#005bc5']}
            start={{x:1, y:0}}
            end={{x:0, y:1}}
            style={style.button}
            >
             <Text style={style.text}>Inciar Sesion</Text>   
            </LinearGradient>
            
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    container:{
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
})