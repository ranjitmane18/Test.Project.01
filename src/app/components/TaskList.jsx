import React from 'react';  
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';  

export const TaskList = ({tasks, name , id , createNewTask}) => (
    <div>
        <div>
         <h3>{name}</h3>   
        </div>
        <div>
            {tasks.map(task => (<div key={task.id}> {task.id} {task.name}</div> ))}
        </div>

        <button onClick={()=>{ createNewTask(id)}}>Add new task</button>
    </div>
)

const mapStateToProps = (state, ownProps) => {
   let groupId = ownProps.id;
   return { 
        name : ownProps.name,
        id : groupId,
        tasks : state.tasks.filter(task => task.group == groupId)
   }
}

const matchDispathToProps = (dispatch, props) => {
    return {
        createNewTask(id) {
            console.log("creating new task...", id);
            console.log("task name", props.name);
            dispatch(requestTaskCreation(id)); // call requestTaskCreation mutation using dispatch
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps, matchDispathToProps)(TaskList);