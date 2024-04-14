import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {createDrawerNavigator} from "@react-navigation/drawer";
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";


const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator()

function App(){
  return(

    <NavigationContainer>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Products" component={Products}/>
        <Drawer.Screen name="FovaritesTab" component={Favorites}/>
      </Drawer.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="ProductsTab" component={Products}/>
        <Tab.Screen name="FovaritesTab" component={Favorites}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}




export default App