import { View, StyleSheet , Text, ImageBackground } from 'react-native';
import Home from './src/screen/Home';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './src/screen/Accueil';
import MovieVideo from './src/screen/MovieVideo';
import Login from './src/screen/Login';
import scren3d from './src/screen/scen3d';

const Stack = createNativeStackNavigator();


 function App( ) {
    return  (

      <NavigationContainer>
            <Stack.Navigator>
                     
                 <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Accueil" component={Accueil}/>
                 <Stack.Screen name="MovieVideo" component={MovieVideo}/>
                  <Stack.Screen name="Login" component={Login}/>
               </Stack.Navigator>

</NavigationContainer>
   
    
    );
     
    
}


export default App;