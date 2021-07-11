import React from 'react';  
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

export const Dashboard = ({groups}) => (
    <div>
        <h2> Dashboard </h2>  
        {
                groups.map( group => 
                ( 
                    <div>Group Id : {group.id}</div>,
                    <div>Group Name : {group.name}</div>,
                    <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
                ))
        } 

        {
                groups.map( group => 
                ( 
                    <div key={group.id}>Group Id : {group.id}</div>
                ))
        } 
        
            
    </div>
)

function mapStateToProps(state) {
    return  {
        groups : state.groups   //groups is prop       
    }
}

export const ConnectedDashboard = connect(mapStateToProps)( Dashboard );

//connnectedDashboard calls connect method from react-redux
//round brackets indicates that it returns object
   