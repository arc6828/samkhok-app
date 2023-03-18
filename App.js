import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import BottomTab from "./navigations/BottomTab";
import { Provider as PaperProvider } from "react-native-paper";
import RootStack from "./navigations/RootStack";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
