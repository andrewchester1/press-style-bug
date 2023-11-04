import React from "react";
import { Paragraph, YStack } from "tamagui";

export default function Home() {
  return (
    <YStack f={1}>
      <YStack
        m={10}
        backgroundColor={"green"}
        pressStyle={{ backgroundColor: "red" }}
        onPress={() => console.log("pressed")}
      >
        <Paragraph color={"#000"}>Press me</Paragraph>
      </YStack>
    </YStack>
  );
}
