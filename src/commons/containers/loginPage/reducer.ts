import { Action, IAddUserActionASYNC} from './action';
import IUserInformation, {UserActionTypes} from './types';

export interface State{

    user:IUserInformation
}
export const initialState : State={
    user:{ 
       name: '',
       email : '', 
       password:'',
    }
}
export  function UserReducer (state: State = initialState, action : IAddUserActionASYNC )
{    
    
    console.log("action ==>", action)

    const User  = action.payload ;
    switch(action.type){
    case UserActionTypes.ADD_USER_SYNC:
            console.log("reducer add user ")
            // redirect 
            return {
                     ...state,
                     user : User
                    }

        default  :
            return state;
    }
}