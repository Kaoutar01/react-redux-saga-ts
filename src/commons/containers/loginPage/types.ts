// enum are better undestoood in ts 
export enum UserActionTypes {
    ADD_USER = "ADD_User",
    ADD_USER_SYNC = "ADD_USER_SYNC",
    GET_USERS= "GAT_ALL_USERS"
}


export default interface IUserInformation{
    name: String , 
    email : String , 
    password: String 
}