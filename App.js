import TaskList from './components/TaskList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskDetails from './components/TaskDetails';
import { TodoContext } from './Data/DB';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';


export default function App() {
  const [Todos, setTodos] = useState([]);

  const Stack = createStackNavigator();
  return (
    <TodoContext.Provider value={[Todos, setTodos]}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios'? 'padding' : 'height'}
      style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="My tasks" component={TaskList}/>
          <Stack.Screen name="Task details" component={TaskDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
      </KeyboardAvoidingView>
    </TodoContext.Provider>
  );
}

