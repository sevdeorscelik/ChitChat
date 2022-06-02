import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { Provider } from 'react-redux'
import firebase from './firebase'
import store from './store/store'
import App from './App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import SignUp from './component/auth/SignUp'
import Login from './component/auth/Login'
import PrivateRoute from './component/auth/PrivateRoute'




const rrfConfig = {
    userProfile: 'users'
}


const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
}



const Root = () => {

    const history = useHistory();

    //firebase'in bir yöntemidir. Kullanicinin login olup olmadigina dair
    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                //es ist login

                history.push('/');
                // homa sayfasina yönlendirir
            } else {
                //nicht login oder logout
                history.push('/login');
                //login sayfasina gönderir
            }
        })

    }, [])


    return (

        <Switch>
            <PrivateRoute exact path="/">
                <App />
            </PrivateRoute>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
        </Switch>

    )
};


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Router>
                <Root />
            </Router>
        </ReactReduxFirebaseProvider>
    </Provider>,

);


/*
            <nav className='navbar'>
                <Link to='/'> App </Link>
                <Link to='/signup'> Sign Up </Link>
                <Link to='/login'> Login </Link>
            </nav>
            */