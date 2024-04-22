import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Teste from "../screens/Test";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Teste" component={Teste} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
