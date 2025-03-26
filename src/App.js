// import logo from './logo.svg';
import './styles/App.css'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PerformanceCalendar from './pages/PerformanceCalendar';
import Photos from './pages/Photos';
import Programming from './pages/Programming';
import Videos from './pages/Videos';
// import SheetMusic from './pages/SheetMusic';
import Discography from './pages/Discog';
import LogoDropdown from './components/LogoDropdown';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bio" component={Bio} />
            <Route path="/contact" component={Contact} />
            <Route path="/performance-calendar" component={PerformanceCalendar} />
            <Route path="/photos" component={Photos} />
            <Route path="/discography" component={Discography} />
            <Route path="/programming" component={Programming} />
            {/* <Route path="/sheet-music" component={SheetMusic} /> */}
            <Route path="/videos" component={Videos} />
          </Switch>
          <Footer />
        </div>

      </Router>
    </>
  );
}

export default App;
