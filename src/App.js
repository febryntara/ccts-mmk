import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Ektp from './pages/Ektp/Ektp';
import Galery from './pages/Galery/Galery';
import MainPage from './pages/MainPage/MainPage';
import Perijinan from './pages/Perijinan/Perijinan';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact><MainPage /></Route>
      <Route path="/e-ktp"><Ektp /></Route>
      <Route path="/galery"><Galery /></Route>
      <Route path="/perizinan"><Perijinan /></Route>
    </Switch>
    <Footer />
    </Router>
    
  );
}

export default App;
