import React from 'react'
import ReactDOM from 'react-dom/client'

import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { Provider } from 'react-redux'
import firebase from './firebase'
import store from './store/store'
import App from './App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SignUp from './component/SignUp'
import Login from './component/Login'



const rrfConfig = {
    userProfile: 'users'
}


const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
}

const Root = () => {
    return (
        <Router>
            <nav className='navbar'>
                <Link to='/'> App </Link>
                <Link to='/signup'> Sign Up </Link>
                <Link to='/login'> Login </Link>
            </nav>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    )
};




ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Root />
        </ReactReduxFirebaseProvider>
    </Provider>
)
