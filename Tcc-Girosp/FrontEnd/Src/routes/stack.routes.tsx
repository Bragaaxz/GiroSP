import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CriarEventoScreen from "../Telas/CriarEventoScreen";
const Stack = createNativeStackNavigator();
export default function StackRoutes() {
return
        <Stack. Navigator screenOptions={{ title: '' }}>
                <Stack.Screen
                name="home"
                component={CriarEventoScreen}
                />
        </Stack.Navigator>
    }