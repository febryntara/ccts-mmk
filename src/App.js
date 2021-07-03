import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact><Hero /></Route>
    </Switch>
    </Router>
    
  );
}

export default App;
