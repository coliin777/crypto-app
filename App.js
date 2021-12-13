import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import Exchanges from './components/Exchanges';
import LoginScreen from './components/LoginScreen';



function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Exchanges />
      {/* <Button title="Volver" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (

    <Tab.Navigator style={styles.container}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          switch (route.name) {
            case 'Cryptos': return <Ionicons name="star" size={size} color={color} />
           case 'Exchanges': return <Ionicons name="search" size={size} color={color} />
          }
        }
      })}
      tabBarOptions={{
        inactiveTintColor: 'lightgray',
        activeTintColor: 'purple'
      }}>
      <Tab.Screen name="Cryptos" component={HomeScreen} />
      <Tab.Screen name="Exchanges" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer
      style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    // borderWidth: 0,
    // borderRadius: 1,
    //  borderColor: "#CCC",
    // flexWrap: "nowrap",
    // backgroundColor: "darkslateblue",
    //flex: 1,
  },
});

export default App;