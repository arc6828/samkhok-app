import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
// import About from "../screens/About";
// import Notification from "../screens/Notification";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "หน้าหลัก",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "แจ้งเตือน",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bug" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "เกี่ยวกับเรา",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bug" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
