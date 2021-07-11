import { take , put, select } from 'redux-saga/effects';

import * as mutations from './mutations';
import uuid from 'uuid';

export function* taskCreationSaga() {
 while (true) {
    console.log("taskCreationSaga is called");
    const {groupId} = yield take(mutations.REQUEST_TASK_CREATION);
    const ownderId = `U1`;
    const taskId = uuid();
    yield put(mutations.createTask(taskId, groupId, ownderId));    
    console.log("groupd id received in taskCreationSaga", groupId);
    }
}