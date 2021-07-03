import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/index';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
