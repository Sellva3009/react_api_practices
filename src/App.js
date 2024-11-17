import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import GithubRepo from './GithubRepo';
// import Posts from './Posts';
// import UserList from './UserList';
// import Weather from './Weather';
// import RandomJokes from "./RandomJokes";
import Home from './Home';

import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React API Practice</h1>

        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/random-jokes">Random Jokes</Link>
              </li>
              <li>
                <Link to="/github-repo">Github Repo</Link>
              </li>
              <li>
                <Link to="weather">Weather</Link>
              </li>
              <li>
                <Link to="posts">Posts</Link>
              </li>
              <li>
                <Link to="userlist">User List</Link>
              </li>
            </ul>
          </nav>
        </div> */}
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="about" element={<About />} />
                </li>
                <li>
                  <Link to="contact" element={<Contact />} />
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

        {/* <Routes>
          <Route path="/" element={Home} />
          <Route path="/random-jokes" element={RandomJokes} />
          <Route path="/github-repo" element={GithubRepo} />
          <Route path="/weather" element={Weather} />
          <Route path="/posts" element={Posts} />
          <Route path="/userlist" element={UserList} />
        </Routes> */}
        {/* <nav>
          <ul >
            <li>
              <a href="/posts"><Posts /></a>
            </li>
          </ul>
        </nav> */}
      </header>
    </div>
  );
}

export default App;
