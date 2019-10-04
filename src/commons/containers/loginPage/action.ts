import IUserInformation, {UserActionTypes} from './types';


/* Action creators interfaces */
// return type of the   action 
export interface IAddUserAction {type : UserActionTypes.ADD_USER, payload:IUserInformation  }
export interface IAddUserActionASYNC {type : UserActionTypes.ADD_USER_SYNC, payload:IUserInformation  }




/*Action Creators  */
export function addUserAction(user:IUserInformation): IAddUserAction {
    console.log("Action")
    return (
        {
            type:UserActionTypes.ADD_USER,
            payload:  user
            
        }
    )

}



export type Action = IAddUserAction;