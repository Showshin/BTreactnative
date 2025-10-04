import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home'
import Shopping from './screen/Shopping'
import Details from './screen/Details'
const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Shopping'>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Shopping" component={Shopping}/>
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
