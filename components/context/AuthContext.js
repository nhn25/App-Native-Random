import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from './configURL';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [anunciosInfo, setAnunciosInfo] = useState({});
  const [materiasInfo, setMateriasInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);


  
  const login = (dni, contrasena) => {
    setIsLoading(true);
   

    const body = JSON.stringify({dni, contrasena})

    console.info('body=>',body)

    const config = {
      headers: {
          'Content-Type':'application/json'
      }
  }
    axios.post(`${BASE_URL}/login-native`, body, config)
      .then(res => {
        console.log(res)
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    try {
      //console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
    } catch (error) {
      console.log(`logout error ${error}`);
        setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  const anuncios = ()=>{
    setIsLoading(true);

    axios.get(`${BASE_URL}/ver-publicaciones-globales`)
    .then(res => {
      let anunciosInfo = res.data.reverse();
      setAnunciosInfo(anunciosInfo);
      setIsLoading(false);
    })
    .catch(e => {
      console.log(`login error ${e}`);
      setIsLoading(false);
    });
  }

  const materias = ()=>{
    setIsLoading(true);

    axios.get(`${BASE_URL}/ver-materias`)
    .then(res => {
      let materiasInfo = res.data;
      setMateriasInfo(materiasInfo);
      setIsLoading(false);
    })
    .catch(e => {
      console.log(`login error ${e}`);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        login,
        logout,
        anuncios,
        anunciosInfo,
        materias,
        materiasInfo
      }}>
      {children}
    </AuthContext.Provider>
  );
};
