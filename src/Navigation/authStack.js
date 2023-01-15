import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInWelcomeScreen from "../screens/authScreen/SignInWelcomeScreen";
import { SignInScreen } from "../screens/authScreen/SignInScreen";
import ClientTab from "./ClientTab";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={SignInWelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="ClientTab" component={ClientTab} />
    </Stack.Navigator>
  );
}
export { Navigation };
