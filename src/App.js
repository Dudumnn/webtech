import './App.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Likes from './Likes';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Navbar />
        <AboutMe />
        <Likes />
      </div>
    </div>
  );
}

export default App;
