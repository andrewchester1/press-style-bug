import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const MasterStack = createStackNavigator();

const ClientMasterStack = () => {
  return (
    <MasterStack.Navigator initialRouteName="Home">
      <MasterStack.Screen name="Home" component={Home} />
    </MasterStack.Navigator>
  );
};

export default ClientMasterStack;
