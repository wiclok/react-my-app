import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './src/Views/LoginScreen';
import { InfoUserScreen } from './src/Views/InfoUserScreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={LoginScreen}/>
        <Stack.Screen name='InfoUser'component={InfoUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}

