import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Error from '../pages/Error';


function App(){
    return <BrowserRouter>
        <Switch>      
               <Route exact path='/' component={Error} />
        </Switch>
        </BrowserRouter>
}
export default App;