import React from "react";
import { SafeAreaView, Text } from "react-native";
import { getFontFamily } from "./assets/fonts/helper";

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{
        fontSize: 70,
        fontFamily: getFontFamily('Inter', '900')
      }}>
      Hello World! tnc desgraca do inferno
    </Text>
    </SafeAreaView >
  )
}

export default App;
