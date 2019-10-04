
import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// hangling HOC 
// handling events 
// hangling State 
// HtmlsElement attributes
 
interface State{
    /// TODO : ? for the attributes is done to resolve setState problem need to know Why !!!
    login? : String , 
    password?: String ,
    shouldMessageErrorAppear?:{
        login : boolean , 
        password : boolean , 
    }   
}
interface Props {
    submitHandler: (login: String  , password : String) => void ,
    errorMessageHandler: Function,  
    onClickHandler: (name:String )=> void ,

}

class Login extends React.Component<Props, State> {
   
    state={
        login: '',
        password: '',
        shouldMessageErrorAppear:{
            login : false , 
            password : false , 
        }
    }
    //  classes = useStyles();

    onChange =( event: React.ChangeEvent<HTMLInputElement> )=>{

        this.setState({ [event.target.name] :event.target.value });
       
    }
    handleSubmit =(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const {login , password} = this.state;
        this.props.submitHandler(login , password)
    }
    handling=()=>
    {
        /// managing the state
    }
    ValidateField=(fieldType: String)=>{
        if(fieldType=="login")
        {
                this.setState({shouldMessageErrorAppear:{...this.state.shouldMessageErrorAppear, login : true}})
        }
        else 
        {
            this.setState({shouldMessageErrorAppear:{...this.state.shouldMessageErrorAppear, password : true}})

        }
    }

    render() {  
        return (
         <Container component="main" maxWidth="xs">
        <CssBaseline />
            <Typography component="h1" variant="h5">
                     Register
            </Typography>
            <form  noValidate onSubmit={this.handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                autoFocus
                name="login" 
                onChange= {this.onChange} 
                value ={ this.state.login}
                onBlur={()=>this.ValidateField('login')}
                error= {this.state.shouldMessageErrorAppear.login }
                />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                name="password" 
                onChange= {this.onChange} 
                value ={ this.state.password}
                onBlur={()=>this.ValidateField('password')}
                error= {this.state.shouldMessageErrorAppear.password }
                />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                name = "submit"
                
                >
                Register
            </Button>
            {this.state.shouldMessageErrorAppear.password &&
                                <span>error Password</span>
             }
            </form>
        </Container>
            
        );
    }
}


export default (Login);