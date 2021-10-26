import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
        <Sidebar/>
        <Switch>
          <Route to="/" component={Home}></Route>
        </Switch>
    </Router>
  );
}

export default App;
