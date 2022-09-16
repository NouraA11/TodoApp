import { Ionicons } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../assets/styles';
import { TodoContext } from '../Data/DB';
import Checkbox from './Checkbox';
import ConfirmDeleteTask from './ConfirmDeleteTask';


const TaskDetails = ({route, navigation}) => {
    const [title , setTitle] = useState(route.params.title);
    const [visible, setVisible] = useState(false);
    const [Todos, setTodos] = useContext(TodoContext);

    const showDialog = () => setVisible(true);

    const goBack = () => navigation.goBack();
    
    function EditTaskTitle(value){
        setTitle(value)
          fetch('https://jsonplaceholder.typicode.com/todos/'+route.params.id, {
            method: 'PATCH',
            body: JSON.stringify({
              title: title,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                setTodos(current =>
                    current.map(task => {
                        if (task.id === route.params.id){
                            return {...task, title: title}; 
                        }
                        return task;
                    }));
            });
        }

    return ( 
        <View style={styles.mainContainer}>
        <View style={styles.detailsView}>
            <TextInput multiline={true} value={title} onChangeText={(value) => EditTaskTitle(value)}></TextInput>
         </View>
        <View style={styles.taskActionsView}>
            <View style={styles.taskActions}>
                <Checkbox isCompleted={route.params.isCompleted} taskId={route.params.id} size={30} color={'white'}/>
            </View>
            <View style={styles.taskActions}>
                <Ionicons name='trash-outline' color='white' size={30} onPress={ showDialog}/>
            </View>
        </View>
        {visible? <ConfirmDeleteTask taskId={route.params.id} index={route.params.index} goBack={() => goBack()}
            visible setVisible={() => setVisible()}/>:null}
        </View>
     );
}
 
export default TaskDetails;