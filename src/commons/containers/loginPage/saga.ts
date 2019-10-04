import {all, fork, takeLatest}  from 'redux-saga/effects';
import {UserActionTypes} from './types';
import Axios from 'axios';
import {IAddUserAction} from './action';


function* addUserSaga( ){
    yield takeLatest(UserActionTypes.ADD_USER, addUser )
}

function* addUser(actinn : IAddUserAction){
    console.log("Add userSaga ", actinn)
    Axios.post('https://jsonplaceholder.typicode.com/users',actinn.payload )
    .then(function (response) {
        // handle success
        console.log("rojoo3" , response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        //Display a message for a user 
        // return failed adding the user action
    })
    .finally(function () {
        // always executed
        return  UserActionTypes.ADD_USER_SYNC;
    });
    
}



// root saga for user 
function* UserSaga() {
    yield all([fork(addUserSaga)])
  }
  
  export default UserSaga;