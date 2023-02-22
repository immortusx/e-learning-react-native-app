
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import About from './src/screens/About';
import Course from './src/screens/Course';
import CourseDetails from './src/screens/CourseDetails';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} 
        //options={{ headerShown: false,}}
         />
        <Stack.Screen name='About' component={About} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        }}/>
        <Stack.Screen name='Contact' component={Contact} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        }}/>
        <Stack.Screen name='Course' component={Course} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        }}/>
        <Stack.Screen name='Student' component={UserData} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        }}/>
        <Stack.Screen name='Course Details' component={CourseDetails} 
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

