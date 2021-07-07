import {Switch, Route} from 'react-router-dom'
import MyProvider from './context/MyProvider';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <MyProvider>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />} />
        <Route path='/register' render={props => <Register {...props} />} />
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/profile' render={props => <Profile {...props} />} />
      </Switch>
    </MyProvider>
  );
}

export default App;
