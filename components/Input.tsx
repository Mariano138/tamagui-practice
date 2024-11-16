import { useState } from "react";
import { Button, YStack, InputFrame, XStack, View } from "tamagui";
import TaskList from "./TaskList";
import { Plus } from "@tamagui/lucide-icons";

interface TaskMap {
  name: string;
  id: number;
  completed: boolean;
}

export default function Input() {
  const [newTask, setNewTask] = useState<string>("");
  const [taskArray, setTaskArray] = useState<TaskMap[]>([]);

  const handleAddTask = () => {
    if (newTask == "") return;
    const taskMap: TaskMap = {
      name: newTask,
      id: newTask.length,
      completed: false,
    };
    setTaskArray((tasks) => [...tasks, taskMap]);
    setNewTask("");
    console.log(taskArray);
  };

  const handleCompletedTask = (taskId: number) => {
    setTaskArray((prevTask) =>
      prevTask.map((task) =>
        task.id == taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <YStack jc={"center"} ai={"center"} gap={"$2"}>
      <XStack ai={"center"} gap={"$2"}>
        <InputFrame
          placeholder="Add a task.."
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          w={"$20"}
        />
        <Button icon={Plus} onPress={handleAddTask}></Button>
      </XStack>
      <TaskList
        taskArray={taskArray}
        handleCompletedTask={handleCompletedTask}
      />
    </YStack>
  );
}
