import React from 'react'
import { ListGroup, Alert } from 'reactstrap';
import TaskItem from './TaskItem/TaskItem';
import { connect } from 'react-redux';

const TaskList=props=>{
    const {tasks}=props;
    if(tasks.length===0){
        return <Alert>No tasks to show.</Alert>
    }
    return(
        <ListGroup>
           {tasks.map((task)=><TaskItem key={task.id} task={task}/>)}
        </ListGroup>
    )
}
const mapStateToProps=(state)=>{//store.getState
    return {
        tasks:state.tasks
    }
}
export default connect(mapStateToProps,null)(TaskList);