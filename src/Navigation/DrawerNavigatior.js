import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientTab from "./ClientTab";
import { Icon } from "react-native-elements";
import { Colors } from "../globle/Styles";

const Drawer = createDrawerNavigator();

function DrawerNavigatior() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ClientTab"
        component={ClientTab}
        options={{
          name: "Client",
          drawerIcon: ({ focussed, size }) => {
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "07cc" : Colors.grey4}
              size={size}
            />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export { DrawerNavigatior };
