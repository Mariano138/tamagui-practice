import { FlatList } from "react-native";
import React from "react";
import Task from "./Task";
type TaskMap = {
  name: string;
  id: number;
  completed: boolean;
};

type Props = {
  taskArray: TaskMap[];
  handleCompletedTask: (id: number) => void;
};

const TaskList = ({ taskArray, handleCompletedTask }: Props) => {
  const renderTask = ({ item }: { item: TaskMap }) => {
    return <Task item={item} handleCompletedTask={handleCompletedTask} />;
  };

  return (
    <FlatList
      data={taskArray}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;
