import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Work from './components/Work';
import { BackImage } from './App.styles'
import { BackImg, SpongeBob } from './images'

function App() {
  return (
    <Router>
      {/* <BackImage src={SpongeBob} /> */}
      <Header/>
      <Sidebar/>
      <Route path='/' exact component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/work' component={Work} />
      <Route path='/timeline' component={Timeline} />
      <Route path='/contact' component={Contact} />
    </Router>
  );
}

export default App;
