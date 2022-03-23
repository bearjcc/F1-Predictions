// import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
// import { useReducer } from "react";

// type State = {
//     username: string
//     password:  string
//     isButtonDisabled: boolean
//     helperText: string
//     isError: boolean
//   };

//   const initialState:State = {
//     username: '',
//     password: '',
//     isButtonDisabled: true,
//     helperText: '',
//     isError: false
//   };

//   type Action = { type: 'setUsername', payload: string }
//     | { type: 'setPassword', payload: string }
//     | { type: 'setIsButtonDisabled', payload: boolean }
//     | { type: 'loginSuccess', payload: string }
//     | { type: 'loginFailed', payload: string }
//     | { type: 'setIsError', payload: boolean };

//   const reducer = (state: State, action: Action): State => {
//     switch (action.type) {
//       case 'setUsername':
//         return {
//           ...state,
//           username: action.payload
//         };
//       case 'setPassword':
//         return {
//           ...state,
//           password: action.payload
//         };
//       case 'setIsButtonDisabled':
//         return {
//           ...state,
//           isButtonDisabled: action.payload
//         };
//       case 'loginSuccess':
//         return {
//           ...state,
//           helperText: action.payload,
//           isError: false
//         };
//       case 'loginFailed':
//         return {
//           ...state,
//           helperText: action.payload,
//           isError: true
//         };
//       case 'setIsError':
//         return {
//           ...state,
//           isError: action.payload
//         };
//     }
//   }

//   const Login = () => {
//     const classes = useStyles();
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//       <form className={classes.container} noValidate autoComplete="off">
//         <Card className={classes.card}>
//           <CardHeader className={classes.header} title="Login App" />
//           <CardContent>
//             <div>
//               <TextField
//                 error={state.isError}
//                 fullWidth
//                 id="username"
//                 type="email"
//                 label="Username"
//                 placeholder="Username"
//                 margin="normal"
//                 onChange={handleUsernameChange}
//                 onKeyPress={handleKeyPress}
//               />
//               <TextField
//                 error={state.isError}
//                 fullWidth
//                 id="password"
//                 type="password"
//                 label="Password"
//                 placeholder="Password"
//                 margin="normal"
//                 helperText={state.helperText}
//                 onChange={handlePasswordChange}
//                 onKeyPress={handleKeyPress}
//               />
//             </div>
//           </CardContent>
//           <CardActions>
//             <Button
//               variant="contained"
//               size="large"
//               color="secondary"
//               className={classes.loginBtn}
//               onClick={handleLogin}
//               disabled={state.isButtonDisabled}>
//               Login
//             </Button>
//           </CardActions>
//         </Card>
//       </form>
//     );
//   }

//   export default Login;