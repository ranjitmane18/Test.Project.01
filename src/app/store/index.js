import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './Sagas.mock';
import * as mutations from './mutations';

export const store = createStore (
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch(action.type) {
                case mutations.CREATE_TASK:
                    //console.log(action);
                    console.log(tasks);
                    return [ ...tasks, {
                        id : action.taskId,
                        name : "New Task",
                        group : action.groupId,
                        owner : action.owner,
                        isComplete : false
                    }]

            }
            return tasks;
        },
        comments(comments = defaultState.comments) {
            return comments;
        },
        groups(groups = defaultState.groups) {
            return groups;
        },
        users(users = defaultState.users) {
            return users;
        }
    }),
    // function reducer (state = defaultState , action) {
    //     return state;
    // },
    applyMiddleware(createLogger(), sagaMiddleware)
)

for (let saga in sagas)
{
    console.log("Index.js => running all sagas in for loop",saga);
    sagaMiddleware.run(sagas[saga])
};