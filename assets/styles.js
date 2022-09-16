import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 20,
    },
    tasksView:{
        maxHeight: '85%'
    },
    taskCard: {
        shadowColor: 'grey', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 3, // Android
        padding: 20,
        width: '90%',
        marginBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    taskTitle: {
        width: '85%',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    //addTask
    addTaskView:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        position: 'absolute',
        bottom: 20,
        width: '100%'
      },
    addTaskInput: {
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 20,
        width: '80%',
        backgroundColor: '#fff',
    },
    addTaskButton:{
        backgroundColor: '#126E82',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: 'grey', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 3, // Android
    },
    buttonText:{
        fontSize: 30,
        color: '#fff'
    },
    //task details 
    detailsView:{
        shadowColor: 'grey', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 3, // Android
        backgroundColor: '#fff',
        padding: 20,
        width: '90%',
        minHeight: '40%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    taskActions:{
        backgroundColor: '#126E82',
        borderRadius: 30,
        width: 90,
        height: 90,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskActionsView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }
});

export default styles;