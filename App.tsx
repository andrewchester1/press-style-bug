import { NavigationContainer } from "@react-navigation/native";
import ClientMasterStack from "./src/navigation/MasterStack";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import config from "./tamagu.config";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <ClientMasterStack />
      </NavigationContainer>
    </TamaguiProvider>
  );
}
