import { Ionicons } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { TodoContext } from '../Data/DB';

const Checkbox = ({isCompleted, taskId, color, size}) => {
    const [checked, setChecked] = useState(isCompleted);
    const [Todos, setTodos] = useContext(TodoContext);

      function EditCompleted() {
        setChecked(!checked);
        fetch('https://jsonplaceholder.typicode.com/todos/'+taskId, {
            method: 'PATCH',
            body: JSON.stringify({
              completed: !isCompleted,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                setTodos(current =>
                    current.map(task => {
                        if (task.id === taskId){
                            return {...task, completed: !isCompleted}; 
                        }
                        return task;})
                );});
      }

    return ( 
        <Pressable
            onPress={EditCompleted}>
            <Ionicons name={checked==true? 'checkbox':'square-outline'} color={color? color:'#51C4D3'} 
            size={size? size: 24}  />
            
        </Pressable>
     );
}
 
export default Checkbox;
