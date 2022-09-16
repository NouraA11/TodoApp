import { TodoContext } from '../Data/DB';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import {useContext} from 'react';

export default function ConfirmDeleteTask({taskId, index, goBack, visible, setVisible}) {
  const [Todos, setTodos] = useContext(TodoContext);

    const onDelete = () => {
        setVisible(false);
          fetch('https://jsonplaceholder.typicode.com/todos/'+taskId, {
          method: 'DELETE',
        }).then(()=> {
          var todosCopy = [...Todos];
          todosCopy.splice(index,1);
          setTodos(todosCopy)
        })
        goBack()
    }
    const hideDialog = () => setVisible(false);

    return (
        <Provider>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Delete task</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Are you sure you want to delete this task?</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button color="#126E82" onPress={hideDialog}>Cancel</Button>
                <Button color="#126E82" onPress={onDelete}>Delete</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
      </Provider>
    );
}
