import { TamaguiProvider, Text, Theme, View, YStack } from "tamagui";

import config from "./tamagui.config";
import Input from "./components/Input";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <YStack f={1} bg={"$accentBackground"}>
        <Text
          textAlign="center"
          col={"$black075"}
          fontSize={"$8"}
          bg={"$white075"}
          py={10}
          mx={100}
          my={20}
          br={"$5"}
        >
          To Do List
        </Text>
        <Input />
      </YStack>
    </TamaguiProvider>
  );
}
