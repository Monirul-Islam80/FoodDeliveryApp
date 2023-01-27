import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import BasketScreen from './screen/BasketScreen';
import DeliveryScreen from './screen/DeliveryScreen';
import HomeScreen from './screen/HomeScreen';
import PreparingOrderScreen from './screen/PreparingOrderScreen';
import RestaurantScreen from './screen/RestaurantScreen';
import { store } from './store';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false, animation: 'slide_from_bottom', }}>

            <Stack.Screen name='Basket' component={BasketScreen} />

          </Stack.Group>
          <Stack.Screen name='PreparingOrderScreen' options={{
            presentation: 'fullScreenModal', headerShown: false, animation: "slide_from_right"
          }} component={PreparingOrderScreen} />
          <Stack.Screen name='Delivery' component={DeliveryScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Provider>

    </NavigationContainer>

  );
}


