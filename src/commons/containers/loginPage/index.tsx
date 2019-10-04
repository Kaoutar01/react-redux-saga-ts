import * as React from 'react';
import Login from "../../component/login/index";
import {State as reduxUserState} from './reducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addUserAction, Action} from './action';
import IUserInformation from './types';

interface Props {
    user : IUserInformation ;
    addUserAction: (user:IUserInformation )=> Object;
}


class LoginPage extends React.Component<Props> {
       

        onSubmit=(login : String  , password: String )=>{
            // call for an action to check login infos and ( display mssg erro || redirect to home)
            const user ={
                name:login , 
                email : password , 
                password: "k,pks" 
            } 
               this.props.addUserAction(user );

                console.log("OnShubmit parent ", this.props.user.email   );

        }
        onError =()=>{
            console.log("onError");
        }
        onClick=(event : String)=>{
            //event.preventDefault();
            console.log("onClick", event)
        }

    render() {
        return (
            <Login
                submitHandler = {this.onSubmit}
                errorMessageHandler = { this.onError}
                onClickHandler={this.onClick}
            />
        )
    }
}
export function mapStateToProps (state:reduxUserState){
    return  {user: state.user}
        

    
}
export const mapDispatchToProps= (dispatch: Dispatch<Action>)=>{
    return {addUserAction :  (User:IUserInformation ) => dispatch(addUserAction(User))}
}

export default connect(mapStateToProps , mapDispatchToProps)(LoginPage)
