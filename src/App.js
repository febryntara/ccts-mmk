import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact><MainPage /></Route>
    </Switch>
    </Router>
    
  );
}

export default App;
