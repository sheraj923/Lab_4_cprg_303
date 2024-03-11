import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  const [tasks, setTasks] = useState(["Add a task"]);

  const addTask = (taskText) => {
    if (taskText.trim().length === 0) {
      return;
    }

    const existingTask = tasks.find((task) => task.toLowerCase() === taskText.toLowerCase());

    if (existingTask) {
      alert('Task already exists');
      return;
    }

    setTasks([...tasks, taskText]);
  };

  const removeTask = (taskText) => {
    setTasks(tasks.filter((task) => task !== taskText));
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} removeTask={removeTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
});

export default App;