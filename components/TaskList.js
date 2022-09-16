import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState, useContext } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import styles from '../assets/styles';
import {TodoContext } from '../Data/DB';
import AddTask from './AddTask';
import ConfirmDeleteTask from './ConfirmDeleteTask';
import Checkbox from './Checkbox';

const TaskList = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [taskId, setTaskId] = useState();
  const [taskIndex, setTaskIndex] = useState();
  const [Todos, setTodos] = useContext(TodoContext);

    const showDialog = (index) => {
      setTaskIndex(index)
      setVisible(true);}

    const goBack = () => console.log('deleted'+taskIndex);

  async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response) => response.json())
      .then(json => {
        var file = json.sort((x, y)=> (x.completed === y.completed)? 0 : x.completed? 1 : -1)
        setTodos(file.map((task, index) =>{
          return {...task, index}
        }));
       }
      ).catch((error) => console.log(error))
    setLoading(false);
}
  
  useEffect(() => {
    fetchData()
    }, []);

  return ( 
    <View style={styles.mainContainer}>
      {loading? <Text>lodaing</Text>:
        <FlatList
        style={styles.tasksView}
        data={Todos}
        renderItem={ ({item, index}) => 
        <View style={styles.taskCard} >
          <Checkbox isCompleted={item.completed} taskId={item.id} title= {item.title}/>
          <TouchableOpacity style={styles.taskTitle}
          onPress={()=> navigation.navigate('Task details', {isCompleted:item.completed, taskId:item.id, index, title:item.title})}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
            <Ionicons name='trash-outline' color='grey' size={24} onPress={() => showDialog(index)}/>
        </View>}
        keyExtractor={item => item.id}
      />}
    <AddTask />
    {visible? <ConfirmDeleteTask taskId={taskId} index={taskIndex} goBack={() => goBack()}
            visible setVisible={() => setVisible()}/>:null}
    </View>
    );
}
 
export default TaskList;