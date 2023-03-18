import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PostDetail from "../screens/PostDetail";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
