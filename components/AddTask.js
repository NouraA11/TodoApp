import {useState, useContext} from 'react';
import { Text, TextInput, View, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../assets/styles';
import { TodoContext } from '../Data/DB';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [Todos, setTodos] = useContext(TodoContext);

  function validateInput () {
    if (taskTitle.trim().length>1) {
      Keyboard.dismiss();
      addTask(1)
      setTaskTitle('') }
  }

  function addTask(userId) {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: 0,
        title: taskTitle,
        completed: false
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      var task = {...json, id:Math.floor(20+ Math.random() * 100) + 1}
      console.log(task)
      setTodos([task, ...Todos])
    });
  }
  

    return ( 
        <View style={styles.addTaskView}>
        <TextInput style={styles.addTaskInput} placeholder={'Write a new task'}
        value={taskTitle} onChangeText={text => setTaskTitle(text)}/>
        <TouchableOpacity style={styles.addTaskButton}
        disabled={taskTitle.trim().length<=1? true: false}
        onPress={validateInput}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>          
      </View>
     );
}
 
export default AddTask;