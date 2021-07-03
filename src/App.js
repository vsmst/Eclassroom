import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/index';
import SubjectsPage from './pages/subjects/index';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="flex">
        <Route path="/" component={Main} />
        <Route path="/subjects" component={SubjectsPage} />
      </div>
    </Router>
  );
}

export default App;
