import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from "./navigation/BottomTabNavigator";


import Start from './src/Start';
import SignIn from './src/SignIn';
import RegisterScreen from './src/RegisterScreen';
import Welcome from './src/Welcome';
import Account from './src/Account';
const Stack = createNativeStackNavigator();

function App() {
  return (


    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const App = () => {
//     return (
//       <NavigationContainer>
//         <BottomTabNavigator/>
//       </NavigationContainer>
//     );
//   }
export default App;




