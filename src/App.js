import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login';
import {Home} from './components/Home';
import {Projects} from './components/Projects';
import {Create} from './components/Create';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
  
    <main>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/projects" component={Projects} />
                <Route path="/home" component={Home} />
                <Route path="/create" component={Create} />


                <div className="App">
			      <Login />
			    </div>
            </Switch>
        </main>

  );
}

export default App;
