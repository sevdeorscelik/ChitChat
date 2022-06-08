import React from "react"
import { Route } from 'react-router-dom'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector } from "react-redux"; //redux stateden bilgi almaya yarar
import Fallback from '../Fallback'



const PrivateRoute = ({ children, ...rest }) => { 

  const auth = useSelector(state => state.firebase.auth)

  //authentication bilgisi yüklenmiyorsa sayfayi render bile etmeyecek
  //Wenn die authentication nicht geladen werden, die Seite nicht render.
  //children=app comp

  return (
    <Route {...rest}
      render={() => isLoaded(auth) && !isEmpty(auth) ? children : <Fallback />}
    />
  )
};

export default PrivateRoute;
