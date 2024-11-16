import { Text, Button, XStack, YStack } from "tamagui";
import React from "react";

type TaskMap = {
  name: string;
  id: number;
  completed: boolean;
};

type Props = {
  item: TaskMap;
  handleCompletedTask: (id: number) => void;
};

const Task = ({ item, handleCompletedTask }: Props) => {
  const handleCompleted = () => {
    handleCompletedTask(item.id);
  };
  return (
    <YStack mt={5}>
      <XStack
        bg={"$white075"}
        br={10}
        ai={"center"}
        jc={"space-between"}
        w={"95%"}
      >
        <Text ml="$3">{item.name}</Text>
        <Button onPress={handleCompleted}>
          <Text>{item.completed ? "✔" : "❌"}</Text>
        </Button>
      </XStack>
    </YStack>
  );
};

export default Task;
