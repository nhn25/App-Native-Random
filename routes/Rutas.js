
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import SplashScreen from '../components/pages/SplashScreen';
import {AuthContext} from '../components/context/AuthContext';
import { Tabs } from './Tabs';


function Rutas() {
  const Stack = createNativeStackNavigator();
const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      
        {splashLoading ? (
          <Stack.Navigator>
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          </Stack.Navigator>
        ) : userInfo.token ? (
            
              <Tabs/>
        ) : (
          <>
          <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Login}options={{
          headerShown: false,
             }}/>
             </Stack.Navigator>
          </>
        )}
      
    </NavigationContainer>
  );
}

export default Rutas;